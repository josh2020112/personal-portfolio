"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojrpdry", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
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

  function ContactIcon({ type }: { type: "email" | "linkedin" | "github" }) {
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
          className="w-4 h-4"
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
          className="w-4 h-4"
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
        className="w-4 h-4"
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
    <section
      id="contact"
      className="px-6 sm:px-8 lg:px-12 py-20 max-w-[1400px] mx-auto"
    >
      <p className="text-xs tracking-widest text-accent font-medium mb-4 text-center">
        GET IN TOUCH
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-center">
        Let&apos;s Connect
      </h2>
      <p className="text-foreground-muted mb-12 text-center max-w-2xl mx-auto leading-relaxed">
        I&apos;m always excited to connect and explore new opportunities.
        Whether you have a project in mind or just want to say hello, I&apos;d
        love to hear from you.
      </p>

      <div className="max-w-2xl mx-auto bg-background-alt border border-border rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or just say hi..."
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-accent text-background-alt font-medium hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <span aria-hidden="true">→</span>
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
              Thanks! Your message was sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              Something went wrong. Please try again, or reach out directly via
              email below.
            </p>
          )}
        </form>
      </div>

      <p className="text-center text-sm text-foreground-muted mt-12 mb-4">
        Prefer to reach out directly?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {contactLinks.map((link) => (
          <button
            key={link.label}
            type="button"
            onClick={() => openLink(link.href, link.external)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background-alt border border-border text-sm text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            <ContactIcon type={link.iconType} />
            {link.label}
          </button>
        ))}
      </div>
    </section>
  );
}