import { Link } from "react-router-dom";
import { EcoChatLogo } from "./EcoChatLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-950/8 bg-ink-950 px-5 py-10 text-sand-50 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <EcoChatLogo markSize={28} />
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-sand-50/50">
            An AI assistant for understanding climate, sustainability, and the
            natural world.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex items-center gap-6 text-sm text-sand-50/70">
          <Link to="/" className="transition hover:text-sand-50">
            Home
          </Link>
          <Link to="/chat" className="transition hover:text-sand-50">
            Chat
          </Link>
          <a
            href="#how-it-works"
            className="transition hover:text-sand-50"
          >
            How it works
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-sand-50/10 pt-6 text-xs text-sand-50/40">
        <p>
          EcoChat is an AI assistant and may occasionally be inaccurate.
          Verify important environmental facts with primary or official
          sources.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} EcoChat. Built as a final year project.</p>
      </div>
    </footer>
  );
}
