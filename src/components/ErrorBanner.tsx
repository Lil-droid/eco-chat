import { AlertTriangle, X } from "lucide-react";

interface ErrorBannerProps {
  message: string;
  onDismiss: () => void;
}

export function ErrorBanner({ message, onDismiss }: ErrorBannerProps) {
  return (
    <div
      role="alert"
      className="mx-auto flex w-full max-w-3xl items-start gap-2.5 rounded-xl border border-clay-500/30 bg-clay-500/10 px-4 py-3 text-sm text-ink-900"
    >
      <AlertTriangle size={16} className="mt-0.5 flex-shrink-0 text-clay-500" strokeWidth={2} />
      <p className="flex-1 leading-snug">{message}</p>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss error"
        className="flex-shrink-0 rounded-md p-0.5 text-ink-900/50 transition hover:text-ink-900"
      >
        <X size={16} strokeWidth={2} />
      </button>
    </div>
  );
}
