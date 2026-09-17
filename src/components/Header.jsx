import { useState } from "react";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="wordmark">
          Salt & Suya
        </a>
        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#book" className="nav-cta" onClick={() => setOpen(false)}>
            Book a table
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
