export default function Visit() {
  return (
    <section className="visit-section" id="visit">
      <div className="visit-grid">
        <div>
          <h2>Find us</h2>
          <p className="visit-address">
            14 Ahmadu Bello Way
            <br />
            Victoria Island, Lagos
          </p>
          <p className="visit-hours">
            Tuesday – Sunday, 12:00 – 23:00
            <br />
            Closed Mondays
          </p>
        </div>
        <div id="book" className="visit-book">
          <h2>Book a table</h2>
          <p>
            We hold tables by WhatsApp — tell us the day, the time, and how
            many are eating.
          </p>
          <a
            className="btn btn-primary"
            href="https://wa.me/2348123456789?text=Hi%2C%20I%27d%20like%20to%20book%20a%20table%20at%20Salt%20%26%20Suya"
            target="_blank"
            rel="noreferrer"
          >
            Message us on WhatsApp
          </a>
          <a className="visit-phone" href="tel:+2348123456789">
            or call +234 812 345 6789
          </a>
        </div>
      </div>
    </section>
  );
}
