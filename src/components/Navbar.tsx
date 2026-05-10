export default function Navbar() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-xl text-foreground hover:text-accent transition-colors"
        >
          joshua.
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
             <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
            <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accent-soft transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}