export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="ember-field" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`ember ember-${i}`} />
        ))}
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Victoria Island, Lagos</p>
        <h1>
          Charcoal, spice, and a table for everyone.
        </h1>
        <p className="hero-sub">
          Open-fire cooking rooted in Lagos street food, plated for a long
          evening with friends. Suya spice, market vegetables, and a wine
          list built to handle heat.
        </p>
        <div className="hero-actions">
          <a href="#book" className="btn btn-primary">
            Book a table
          </a>
          <a href="#menu" className="btn btn-ghost">
            See the menu
          </a>
        </div>
      </div>
      <p className="hero-hours">Tue–Sun, 12:00–23:00 · Closed Mondays</p>
    </section>
  );
}
