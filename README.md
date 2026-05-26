# Muslim Weddings Mexico

Marketing site for **Muslim Weddings Mexico** — luxury Islamic Nikah weddings in
Cancun, Playa del Carmen and Tulum.

Production: <https://muslimweddingsmexico.com>

## Stack

- React 19 + Vite 8
- Tailwind CSS 4
- React Router 7
- Framer Motion
- Lucide icons

## Languages

English is the primary language. Spanish is supported as a secondary locale via
an in-app language switcher. Selection is persisted in `localStorage`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`.

## Deploy

The repo is configured for **Vercel** via `vercel.json` (SPA rewrites,
long-lived asset caching, security headers). Pushing to `main` triggers a
production deploy when the project is linked.

## SEO

- Canonical + `hreflang` (en, es, x-default) in `index.html`
- LocalBusiness + WebSite JSON-LD with geo data for Quintana Roo
- `robots.txt` allows mainstream + generative-AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot-Extended, etc.) for GEO discoverability
- `sitemap.xml` lists all routes with `hreflang` alternates
