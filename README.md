# The Experience Exchange

Website for The Experience Exchange (TEE), a student-run outdoor adventure magazine I founded at Washington and Lee.

Live at [theexperienceexchange.vercel.app](https://theexperienceexchange.vercel.app)

TEE has a team of 40+ contributors, and our first issue brought in $5,000 in ad revenue. The site is where readers find the magazine, advertisers learn about sponsoring, and new writers, designers, and campus correspondents apply to join.

## What's here

- Magazine and feature pages
- Advertiser and sponsorship pages
- Contributor recruiting and applications (`/join`, `/contribute`, `/correspondents`)
- Team page with contributor bios
- A page for [SponsorFlow](https://sponsorflowhq.com), the sponsor research tool I built out of TEE's ad sales process

I rebuilt the site from a no-code (Lovable) version into a Next.js project so I could own the code, add pages faster, and host it on Vercel.

## Built with

Next.js, React, TypeScript, Vercel

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Pages live in `app/<page>/page.tsx`, shared links in `lib/links.ts`, and images in `public/images/`.
