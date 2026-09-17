const MENU = [
  {
    category: "From the grill",
    items: [
      { name: "Suya-spiced ribeye, charred onion", price: "12,500" },
      { name: "Grilled tiger prawns, lime & chili oil", price: "9,000" },
      { name: "Peppered snail skewers", price: "7,500" },
      { name: "Whole grilled croaker, ata dindin", price: "10,000" },
    ],
  },
  {
    category: "Small plates",
    items: [
      { name: "Charred corn, ata rodo butter", price: "3,000" },
      { name: "Jollof risotto, smoked paprika", price: "6,500" },
      { name: "Plantain, suya spice, crushed groundnut", price: "3,500" },
      { name: "Grilled halloumi, pepper jam", price: "5,000" },
    ],
  },
  {
    category: "To drink",
    items: [
      { name: "Palm wine spritz", price: "4,000" },
      { name: "Zobo sorbet float", price: "2,500" },
      { name: "Chapman, smoked bitters", price: "4,500" },
      { name: "House natural wine, glass", price: "6,000" },
    ],
  },
];

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="section-heading">
        <h2>Tonight's fire</h2>
        <p>A short menu, changed with what the market gives us that week.</p>
      </div>
      <div className="menu-grid">
        {MENU.map((group) => (
          <div className="menu-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-leader" aria-hidden="true" />
                  <span className="menu-item-price">₦{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="menu-note">
        Full menu, including sides and dessert, available on request — ask
        your server about tonight's specials.
      </p>
    </section>
  );
}
