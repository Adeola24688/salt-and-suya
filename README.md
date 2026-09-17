# Salt & Suya

A one-page landing site for a fictional Lagos grill restaurant, built for a
portfolio. Sections: hero, menu (chalkboard-style, priced in ₦), story,
location/hours, and a "book a table" WhatsApp link.

## Run it locally

```bash
pnpm install
pnpm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for deployment

```bash
pnpm run build
```

Static output lands in `dist/` — upload that folder anywhere that serves
static files.

## Putting it on your portfolio

- **Separate Vercel project:** push this folder to its own GitHub repo,
  import it into Vercel, and link to it from a "Projects" card on
  developedbyadeola.vercel.app.
- **Subpath of your existing site:** `pnpm run build`, then copy `dist/`'s
  contents into a folder like `salt-and-suya/` inside your portfolio's
  static/public directory.

## Making it yours

Everything specific to the restaurant lives in
`src/components/Hero.jsx`, `Menu.jsx`, `Story.jsx`, and `Visit.jsx` —
swap the name, copy, menu items, address, and WhatsApp number
(`Visit.jsx`, the `wa.me/...` link) for a real place if you ever want to.
Colors and fonts are defined once at the top of `src/App.css`.
