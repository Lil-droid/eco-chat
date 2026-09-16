import { useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { ChatHeader } from "../components/ChatHeader";
import { WelcomeScreen } from "../components/WelcomeScreen";
import { MessageBubble } from "../components/MessageBubble";
import { TypingIndicator } from "../components/TypingIndicator";
import { ChatInput } from "../components/ChatInput";
import { ErrorBanner } from "../components/ErrorBanner";

export function ChatPage() {
  const { messages, isLoading, error, sendMessage, resetConversation } = useChat();
  console.log(messages)
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const [dismissedError, setDismissedError] = useState<string | null>(null);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  const showError = error && error !== dismissedError;

  return (
    <div className="flex h-dvh flex-col bg-sand-50">
      <ChatHeader onNewConversation={resetConversation} hasMessages={messages.length > 0} />

      <main className="relative flex-1 overflow-y-auto scroll-thin" aria-live="polite">
        {messages.length === 0 ? (
          <WelcomeScreen onSelectPrompt={sendMessage} />
        ) : (
          <div className="mx-auto flex max-w-3xl flex-col gap-5 px-3 py-5 sm:px-6" role="list">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={scrollAnchorRef} />
          </div>
        )}
      </main>

      {showError && (
        <div className="px-3 pb-3 sm:px-6">
          <ErrorBanner message={error} onDismiss={() => setDismissedError(error)} />
        </div>
      )}

      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}
