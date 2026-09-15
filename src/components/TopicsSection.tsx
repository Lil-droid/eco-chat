import { Flame, Recycle, TreePine, Sun, Droplets, Trash2 } from "lucide-react";

const TOPICS = [
  {
    icon: Flame,
    title: "Climate change",
    description: "Causes, evidence, and what a warming planet means in practice.",
  },
  {
    icon: Trash2,
    title: "Pollution",
    description: "Air, water, soil, and plastic pollution — sources and solutions.",
  },
  {
    icon: Recycle,
    title: "Recycling & waste",
    description: "What's actually recyclable, and how waste systems work.",
  },
  {
    icon: TreePine,
    title: "Conservation",
    description: "Protecting ecosystems, forests, and biodiversity.",
  },
  {
    icon: Sun,
    title: "Renewable energy",
    description: "Solar, wind, hydro — how clean energy actually works.",
  },
  {
    icon: Droplets,
    title: "Sustainability",
    description: "Everyday choices and systems that reduce long-term impact.",
  },
];

export function TopicsSection() {
  return (
    <section className="border-b border-ink-950/8 bg-ink-950 px-5 py-16 text-sand-50 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Topics you can explore
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-sand-50/60">
            EcoChat covers the breadth of environmental science and everyday
            sustainability — ask broadly or dig into specifics.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-sand-50/10 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-ink-950 p-6 transition hover:bg-ink-900">
              <Icon size={20} strokeWidth={1.75} className="text-glow-400" />
              <h3 className="mt-4 font-display text-lg font-medium">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-sand-50/55">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
