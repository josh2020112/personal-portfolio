"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Email",
      href: "mailto:joshabraham391@gmail.com",
      external: false,
      iconType: "email" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshbraham",
      external: true,
      iconType: "linkedin" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/josh2020112",
      external: true,
      iconType: "github" as const,
    },
  ];

  function SocialIcon({ type }: { type: "email" | "linkedin" | "github" }) {
    if (type === "email") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 5L2 7" />
        </svg>
      );
    }
    if (type === "linkedin") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      );
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
      </svg>
    );
  }

  function openLink(href: string, external: boolean) {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  }

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-10 text-center">
        <p className="font-serif text-xl text-foreground mb-2">joshua.</p>
        <p className="text-sm text-foreground-muted mb-4">
          Crafting digital experiences with{" "}
          <span className="text-accent">♥</span> and{" "}
          <span className="text-accent">⚡</span>
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => openLink(link.href, link.external)}
              aria-label={link.label}
              className="text-foreground-muted hover:text-accent transition-colors cursor-pointer"
            >
              <SocialIcon type={link.iconType} />
            </button>
          ))}
        </div>
        <p className="text-xs text-foreground-muted">
          © {year} Joshua Abraham. Built with Next.js &amp; lots of ☕
        </p>
      </div>
    </footer>
  );
}