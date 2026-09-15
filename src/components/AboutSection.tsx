export function AboutSection() {
  return (
    <section className="border-b border-ink-950/8 bg-sand-50 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
            What EcoChat is
          </h2>
        </div>
        <div className="space-y-5 text-[17px] leading-relaxed text-ink-900/75">
          <p>
            EcoChat is a chat-based assistant built to make environmental
            knowledge easier to reach. Instead of digging through dense
            reports or scattered articles, you can just ask — and get a clear,
            grounded answer in seconds.
          </p>
          <p>
            It's designed for anyone curious about the world around them:
            students researching a topic, people trying to live more
            sustainably, or someone who just wants a straight answer about
            what "carbon neutral" actually means. There's no sign-up and
            nothing to install — you open the chat and start talking.
          </p>
        </div>
      </div>
    </section>
  );
}
