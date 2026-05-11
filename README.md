# LifeInsuranceAgents.com

A Zillow-style marketplace for life insurance — search agents by ZIP, compare quotes, read reviews, and learn the basics.

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data**: In-memory mock data (`src/lib/data.ts`) — swap for a real DB later

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Homepage (hero + search + featured + learn)
│   ├── agents/
│   │   ├── page.tsx          # Directory with filters
│   │   └── [slug]/page.tsx   # Agent profile + reviews
│   ├── quote/
│   │   ├── page.tsx          # Multi-step quote request flow
│   │   └── QuoteForm.tsx     # Client component
│   ├── learn/
│   │   ├── page.tsx          # Article index
│   │   └── [slug]/page.tsx   # Article detail
│   ├── how-it-works/         # Process + FAQ
│   ├── for-agents/           # Agent acquisition page
│   ├── about/ contact/ privacy/ terms/
│   └── layout.tsx globals.css
├── components/               # Shared UI (Header, Footer, SearchBar, AgentCard, etc.)
└── lib/
    ├── types.ts
    └── data.ts               # Mock agents, reviews, articles
```

## What to build next

- Real database for agents, reviews, leads (Postgres + Prisma)
- Auth for agents (NextAuth or Clerk)
- Lead routing / email notifications (Resend or Postmark)
- Map view on the directory (Mapbox or Leaflet)
- Real quote engine (carrier APIs or rate cards)
- Admin dashboard for verifying agents
- SEO landing pages for "Life insurance agents in {city}, {state}"
