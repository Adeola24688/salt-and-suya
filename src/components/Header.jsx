import { useState } from "react";

const LINKS = [
  { href: "#work", label: "Selected work" },
  { href: "#studio", label: "The studio" },
  { href: "#approach", label: "Approach" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="masthead">
      <div className="masthead-inner shell">
        <a href="#top" className="brand" aria-label="Fieldwork Studio home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span className="brand-name">Fieldwork <span>Architecture + place</span></span>
        </a>
        <nav id="main-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#index" className="nav-index" onClick={() => setOpen(false)}>
            Studio index <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
