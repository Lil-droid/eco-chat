import { Link } from "react-router-dom";
import { EcoChatLogo } from "../components/EcoChatLogo";

export function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-sand-50 px-5 text-center">
      <EcoChatLogo />
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink-950">Page not found</h1>
        <p className="mt-2 text-ink-900/60">The page you're looking for doesn't exist.</p>
      </div>
      <Link
        to="/"
        className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-medium text-sand-50 transition hover:bg-moss-600"
      >
        Back to home
      </Link>
    </div>
  );
}
