import type { ChatMessage, ChatRequestBody, ChatErrorBody, ChatResponseBody } from "../types/chat";

/** Friendly error surfaced to the UI layer. */
export class ChatServiceError extends Error {}

/**
 * Sends the conversation so far to the EcoChat server endpoint and returns the assistant's reply.
 * Throws ChatServiceError with a user-friendly message on any failure.
 */
export async function sendChatMessage(history: ChatMessage[]): Promise<string> {
  const payload: ChatRequestBody = {
    messages: history.map(({ role, content }) => ({ role, content })),
  };

  let response: Response;
  try {
    response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ChatServiceError(
      "Can't reach EcoChat right now. Check your internet connection and try again."
    );
  }

  let data: ChatResponseBody | ChatErrorBody | null = null;
  try {
    data = await response.json();
  } catch {
    // Fall through to generic error below.
  }

  if (!response.ok) {
    const message = data && "error" in data ? data.error : undefined;
    throw new ChatServiceError(message || "EcoChat ran into a problem. Please try again.");
  }

  if (!data || !("reply" in data) || !data.reply) {
    throw new ChatServiceError("EcoChat didn't return a response. Please try again.");
  }

  return data.reply;
}
