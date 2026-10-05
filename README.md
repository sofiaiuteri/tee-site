# The Experience Exchange — website

Rebuilt from the original Lovable site as a Next.js project, hosted on Vercel. Same pages, text, images and styling.

## Run locally

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm install
npm run dev        # http://localhost:3000
```

## Where things live

| What | Where |
| --- | --- |
| Pages (text and images) | `app/<page>/page.tsx` (home is `app/page.tsx`) |
| Header / menu | `components/Header.tsx` |
| Footer | `components/Footer.tsx` |
| Shop, Venmo, Issuu, email links | `lib/links.ts` |
| Images | `public/images/` |
| Styles (original Lovable stylesheet) | `app/lovable.css` |

## Deploy

```bash
npx vercel deploy --prod
```
