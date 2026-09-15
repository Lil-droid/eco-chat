import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-sand-50">
      {/* Ambient background glow */}
      <div
        className="animate-drift pointer-events-none absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #a8e06c 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-52 -left-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #4f8064 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand-50/15 bg-sand-50/5 px-3.5 py-1.5 text-xs font-medium text-lichen-300">
            <Leaf size={13} strokeWidth={2} />
            An AI assistant for the planet
          </div>

          <h1 className="font-display max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Understand the planet, one conversation at a time.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-sand-50/70">
            EcoChat is a conversational assistant that explains climate change,
            sustainability, and the environment in plain language — so you can
            learn quickly and act with confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/chat"
              className="group inline-flex items-center gap-2 rounded-full bg-glow-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-glow-300"
            >
              Start chatting with EcoChat
              <ArrowRight size={16} strokeWidth={2.5} className="transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-sand-50/70 underline decoration-sand-50/30 underline-offset-4 transition hover:text-sand-50"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Live-feeling chat preview */}
        <div
          className="relative rounded-2xl border border-sand-50/10 bg-ink-900/80 p-2 shadow-2xl shadow-ink-950/40 backdrop-blur"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1.5 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sand-50/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-sand-50/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-sand-50/15" />
          </div>
          <div className="space-y-3 rounded-xl bg-ink-950/60 p-4">
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-moss-600 px-4 py-2.5 text-sm text-sand-50">
              What's the real difference between weather and climate?
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-sand-50/10 bg-sand-50/[0.04] px-4 py-2.5 text-sm leading-relaxed text-sand-50/85">
              Weather is what's happening outside <em>right now</em> — rain, sun,
              wind. Climate is the long-term pattern, averaged over decades. One
              cold week doesn't disprove a warming climate, just like one hot day
              doesn't prove it.
            </div>
            <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-sm border border-sand-50/10 bg-sand-50/[0.04] px-4 py-3">
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-fern-400" style={{ animationDelay: "0ms" }} />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-fern-400" style={{ animationDelay: "150ms" }} />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-fern-400" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
