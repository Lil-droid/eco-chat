import { useCallback, useRef, useState } from "react";
import type { ChatMessage } from "../types/chat";
import { sendChatMessage, ChatServiceError } from "../services/chatService";
import { generateId } from "../lib/utils";

const MAX_INPUT_LENGTH = 2000;

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestInFlight = useRef(false);

  const sendMessage = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();

      // Guard against empty submissions and duplicate in-flight requests.
      if (!text || requestInFlight.current) return;

      if (text.length > MAX_INPUT_LENGTH) {
        setError(`Your message is too long. Please keep it under ${MAX_INPUT_LENGTH} characters.`);
        return;
      }

      const userMessage: ChatMessage = {
        id: generateId(),
        role: "user",
        content: text,
        createdAt: Date.now(),
      };

      setError(null);
      requestInFlight.current = true;
      setIsLoading(true);

      // Compute the outgoing history directly from current state. We avoid
      // relying on a setState updater's side effect here, since React does
      // not guarantee that updater callback runs synchronously before the
      // next line executes - that previously caused outgoingHistory to be
      // read while still empty, sending `{ messages: [] }` to the server.
      const outgoingHistory = [...messages, userMessage];
      setMessages(outgoingHistory);

      try {
        const reply = await sendChatMessage(outgoingHistory);
        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: "assistant",
          content: reply,
          createdAt: Date.now(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        const message =
          err instanceof ChatServiceError
            ? err.message
            : "Something unexpected happened. Please try again.";
        setError(message);
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "assistant",
            content: message,
            createdAt: Date.now(),
            error: true,
          },
        ]);
      } finally {
        setIsLoading(false);
        requestInFlight.current = false;
      }
    },
    [messages]
  );

  const resetConversation = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return { messages, isLoading, error, sendMessage, resetConversation };
}