import { Leaf, Recycle, Sun, Droplets, Sprout } from "lucide-react";
import React from "react";

interface SuggestedPrompt {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
}

const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  { label: "What are the major causes of climate change?", icon: Sun },
  { label: "How can I reduce plastic waste at home?", icon: Recycle },
  { label: "What is renewable energy, in simple terms?", icon: Sprout },
  { label: "How does recycling actually help the environment?", icon: Droplets },
];

interface WelcomeScreenProps {
  onSelectPrompt: (prompt: string) => void;
}

export function WelcomeScreen({ onSelectPrompt }: WelcomeScreenProps) {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-4 py-10 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-moss-600 shadow-lg shadow-moss-600/20">
        <Leaf size={26} className="text-sand-50" strokeWidth={2} />
      </div>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
        Hello, I'm EcoChat
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-900/70">
        Ask me anything about climate, sustainability, or the natural world — from
        quick facts to practical steps you can take today.
      </p>

      <div className="mt-8 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
        {SUGGESTED_PROMPTS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => onSelectPrompt(label)}
            className="group flex items-start gap-3 rounded-xl border border-ink-950/8 bg-white p-3.5 text-left text-sm text-ink-900 shadow-sm shadow-ink-950/5 transition hover:border-moss-500/40 hover:bg-lichen-300/15 focus-visible:border-moss-500/40"
          >
            <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-lichen-300/40 text-moss-600 transition group-hover:bg-moss-600 group-hover:text-sand-50">
              <Icon size={15} strokeWidth={2} />
            </span>
            <span className="leading-snug">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
