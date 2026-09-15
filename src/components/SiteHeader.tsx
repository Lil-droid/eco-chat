import { Link } from "react-router-dom";
import { EcoChatLogo } from "./EcoChatLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-950/8 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <EcoChatLogo markSize={32} />
        <Link
          to="/chat"
          className="rounded-full bg-ink-950 px-4 py-2 text-sm font-medium text-sand-50 transition hover:bg-moss-600"
        >
          Start chatting
        </Link>
      </div>
    </header>
  );
}
