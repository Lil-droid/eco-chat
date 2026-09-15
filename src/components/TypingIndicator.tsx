import { Leaf } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="animate-message-in flex w-full items-center gap-3" role="status" aria-label="EcoChat is typing">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-moss-600" aria-hidden="true">
        <Leaf size={16} className="text-sand-50" strokeWidth={2} />
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-ink-950/5 bg-white px-4 py-3.5 shadow-sm shadow-ink-950/5">
        <span className="typing-dot h-2 w-2 rounded-full bg-fern-400" style={{ animationDelay: "0ms" }} />
        <span className="typing-dot h-2 w-2 rounded-full bg-fern-400" style={{ animationDelay: "150ms" }} />
        <span className="typing-dot h-2 w-2 rounded-full bg-fern-400" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
