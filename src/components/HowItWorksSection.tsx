const STEPS = [
  {
    number: "01",
    title: "Ask a question",
    description: "Type anything environment-related — big picture or very specific.",
  },
  {
    number: "02",
    title: "EcoChat thinks it through",
    description: "Your question is sent securely to Google's Gemini AI, guided by instructions tuned for accurate, responsible environmental answers.",
  },
  {
    number: "03",
    title: "Get a clear answer",
    description: "A plain-language response appears in seconds, ready for a follow-up question.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-b border-ink-950/8 bg-sand-50 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
          How it works
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="font-display text-4xl font-semibold text-lichen-300">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-900/65">
                {step.description}
              </p>
              {i < STEPS.length - 1 && (
                <div className="mt-6 hidden h-px bg-gradient-to-r from-ink-950/10 to-transparent sm:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
