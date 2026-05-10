"use client";

export default function Navbar() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="sticky top-0 z-50 bg-background-alt border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="font-serif text-xl text-foreground hover:text-accent transition-colors cursor-pointer"
        >
          joshua.
        </button>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className="text-sm text-foreground-muted hover:text-accent transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.open("/resume.pdf", "_blank", "noopener,noreferrer")}
            className="px-4 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accent-soft transition-colors cursor-pointer"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}