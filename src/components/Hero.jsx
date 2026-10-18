export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-topline">
        <span>Architecture practice concept</span>
        <span>Lagos, Nigeria · 06°27' N 03°24' E</span>
      </div>
      <div className="hero-title-wrap">
        <h1>
          Space to live<br /><em>otherwise.</em>
        </h1>
        <p className="hero-intro">
          We make thoughtful places for the way people really live, gather,
          and grow. Rooted in West Africa. Open to the world.
        </p>
      </div>
      <div className="hero-image-wrap">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88" alt="Sculptural contemporary home opening onto a lush garden" fetchPriority="high" />
        <span className="image-caption">A house that breathes / Lekki, 2025</span>
      </div>
      <div className="hero-bottomline">
        <span>Architecture · Interiors · Research</span>
        <span>Scroll to explore <span aria-hidden="true">↓</span></span>
      </div>
    </section>
  );
}
