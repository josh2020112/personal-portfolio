export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 sm:px-12 lg:px-24 py-20"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background-alt text-sm">
            ●
          </span>
          <span className="text-foreground-muted text-sm tracking-wide">
            Hello, I&apos;m
          </span>
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-medium leading-none mb-2 text-foreground">
          Joshua
        </h1>
        <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-medium leading-none mb-8 text-accent">
          Abraham
        </h1>

        <p className="text-lg sm:text-xl text-foreground-muted italic mb-8 max-w-2xl leading-relaxed">
          AI &amp; Cloud Engineer building scalable, intelligent systems — and leading teams to ship them.
        </p>

        <p className="text-sm text-foreground-muted mb-2">
          Currently building GCP cloud infrastructure at
        </p>
        <p className="text-base font-semibold text-foreground mb-10">
          ▸ KPMG
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-accent text-background-alt font-medium hover:bg-accent-hover transition-colors"
          >
            View my work
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent-soft transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}