# Russin Homes Production Next.js Build

Run the site locally:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Architecture

This repository is a Next.js, TypeScript, App Router implementation of the approved Russin Homes first draft.

- `data/site.ts`: typed business details, projects, confirmation flags, locations, routes, and centralized asset map.
- `components/`: reusable Header, Footer, ProjectCard, PageHero, FinalCTA, StructuredData, Breadcrumb, and interactive components.
- `app/globals.css`: responsive visual system.
- `public/images/russin-homes`: downloaded client-owned image assets. No remote Wix assets are used at runtime.

## Production blockers and confirmations

The inquiry form intentionally validates and demonstrates loading, error, and review-ready states without claiming delivery. Connect an approved production form destination before launch.

Confirm with Jeremy before publication:

- Current status and availability of all three priority properties.
- Prices, specifications, feature lists, completion timing, Parade entry numbers, and image assignments.
- Whether the existing YouTube walkthrough for 205 Red Cardinal Court is current and approved.
- The client-reported production counts: 25 built, 22 sold/closed, three recently reported opportunities, and four additional lots.
- Which images belong to each project and whether all website images remain approved for reuse.
- Preferred inquiry form destination and production form service.

No site has been published or deployed.

## Verification note

Run `npm test` for browser QA at 375px, 768px, and 1440px. Screenshot output is written to `screenshots/`.
