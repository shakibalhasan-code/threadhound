# Threadhound landing site

Marketing and policy site for Threadhound, a product by VensoftAI. Static Next.js (App Router) + TypeScript + Tailwind CSS. No backend, no auth, no database, no analytics.

The build brief, including the exact page copy, is in [web.md](web.md).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build
npm run lint
```

## Pages

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx` |
| `/reddit-data` | `src/app/reddit-data/page.tsx` |
| `/privacy` | `src/app/privacy/page.tsx` |
| `/terms` | `src/app/terms/page.tsx` |

`robots.txt`, `sitemap.xml` and the favicon are generated from `src/app/robots.ts`, `src/app/sitemap.ts` and `src/app/icon.svg`.

## Before deploy

Check the `TODO` values in `src/config/site.ts`:

- [ ] `url`: currently `https://threadhound.vercel.app`. Replace with the final URL (used for canonical links, Open Graph tags, `robots.txt` and `sitemap.xml`).
- [x] `contactEmail`: set to `work.shakib.ah@gmail.com` (used in the "Contact us" button, the footer and all three policy pages).

Also:

- [ ] The privacy policy and terms are drafts. Have them reviewed before public launch.
- [ ] Update `lastUpdated` in `src/config/site.ts` whenever the policies change.

## Deploy

Import the repository into Vercel. No configuration or environment variables are needed.
