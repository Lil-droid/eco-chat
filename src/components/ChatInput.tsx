import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";

const MAX_LENGTH = 2000;

interface ChatInputProps {
  onSend: (text: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSend = value.trim().length > 0 && !isLoading;

  const handleSend = () => {
    if (!canSend) return;
    console.log(value)
    onSend(value);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  return (
    <div className="border-t border-ink-950/8 bg-sand-50/95 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur sm:px-4">
      <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border border-ink-950/10 bg-white p-2 shadow-sm shadow-ink-950/5 focus-within:border-moss-500/50">
        <label htmlFor="chat-input" className="sr-only">
          Message EcoChat
        </label>
        <textarea
          ref={textareaRef}
          id="chat-input"
          rows={1}
          value={value}
          maxLength={MAX_LENGTH}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask EcoChat about climate, recycling, energy…"
          className="max-h-40 flex-1 resize-none bg-transparent px-2 py-2 text-[15px] text-ink-950 placeholder:text-ink-900/40 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!canSend}
          aria-label="Send message"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-moss-600 text-sand-50 transition enabled:hover:bg-ink-900 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </div>
      <p className="mx-auto mt-2 max-w-3xl px-1 text-center text-xs text-ink-900/40">
        EcoChat can make mistakes. Verify important environmental facts with a trusted source.
      </p>
    </div>
  );
}
