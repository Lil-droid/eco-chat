import { GraduationCap } from "lucide-react";

export function ProjectSection() {
  return (
    <section className="bg-sand-50 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl rounded-2xl border border-ink-950/8 bg-white p-8 shadow-sm shadow-ink-950/5 sm:p-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lichen-300/40 text-moss-600">
          <GraduationCap size={20} strokeWidth={1.75} />
        </div>

        <h2 className="font-display mt-5 text-xl font-semibold tracking-tight text-ink-950">
          About this project
        </h2>

        <blockquote className="mt-4 border-l-2 border-moss-500/40 pl-4 text-[15px] italic leading-relaxed text-ink-900/75">
          "This Environmental Awareness Chatbot was developed by Asogba Francis
          Matthew (Matric Number: 2460113276) as a final year project submitted
          in partial fulfillment of the requirements for the award of National
          Diploma (ND) in Computer Science, Federal Polytechnic Ilaro."
        </blockquote>

        <p className="mt-5 text-sm leading-relaxed text-ink-900/55">
          EcoChat was built to explore how conversational AI can make
          environmental education more accessible, combining a modern web
          stack with a purpose-built assistant focused on accuracy and
          sustainability awareness.
        </p>
      </div>
    </section>
  );
}
