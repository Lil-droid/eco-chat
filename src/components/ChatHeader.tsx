import { Link } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import { EcoChatLogo } from "./EcoChatLogo";

interface ChatHeaderProps {
  onNewConversation: () => void;
  hasMessages: boolean;
}

export function ChatHeader({ onNewConversation, hasMessages }: ChatHeaderProps) {
  return (
    <header className="flex flex-shrink-0 items-center justify-between border-b border-ink-950/8 bg-sand-50/90 px-4 py-3 backdrop-blur sm:px-6">
      <Link to="/" aria-label="Go to EcoChat homepage">
        <EcoChatLogo markSize={30} />
      </Link>
      <button
        type="button"
        onClick={onNewConversation}
        disabled={!hasMessages}
        className="flex items-center gap-1.5 rounded-full border border-ink-950/10 bg-white px-3 py-1.5 text-sm font-medium text-ink-900 transition enabled:hover:border-moss-500/40 enabled:hover:text-moss-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <RotateCcw size={14} strokeWidth={2} />
        <span className="hidden sm:inline">New chat</span>
      </button>
    </header>
  );
}
