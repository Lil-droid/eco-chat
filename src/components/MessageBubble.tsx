import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Leaf, AlertTriangle, User } from "lucide-react";
import type { ChatMessage } from "../types/chat";

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const isError = Boolean(message.error);

  return (
    <div
      className={`animate-message-in flex w-full gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
      role="listitem"
    >
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
          isUser ? "bg-ink-900" : isError ? "bg-clay-500/15" : "bg-moss-600"
        }`}
        aria-hidden="true"
      >
        {isUser ? (
          <User size={16} className="text-sand-50" strokeWidth={2} />
        ) : isError ? (
          <AlertTriangle size={16} className="text-clay-500" strokeWidth={2} />
        ) : (
          <Leaf size={16} className="text-sand-50" strokeWidth={2} />
        )}
      </div>

      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed sm:max-w-[75%] ${
          isUser
            ? "rounded-tr-sm bg-ink-900 text-sand-50"
            : isError
            ? "rounded-tl-sm border border-clay-500/30 bg-clay-500/10 text-ink-900"
            : "rounded-tl-sm border border-ink-950/5 bg-white text-ink-950 shadow-sm shadow-ink-950/5"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        ) : (
          <div className="msg-content break-words">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
