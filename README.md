# Kaplan & William Law Firm

A premium, modern law firm website built with TanStack Start, React, Tailwind CSS, and Framer Motion.

## Features

- **Server-Side Rendering (SSR)** with TanStack Start
- **File-based routing** via TanStack Router
- **Premium design** with navy/gold color scheme
- **Animations** powered by Framer Motion
- **Responsive** mobile-first design
- **SEO-optimized** with meta tags for legal keywords

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start v1 |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Router | TanStack Router |
| Query | TanStack Query |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Server | Cloudflare Workers (default) |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)
- A Supabase project (for backend features)

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
VITE_SUPABASE_PROJECT_ID=your-project-id
```

## Installation

```bash
# Using bun (recommended for this project)
bun install

# Using npm
npm install
```

## Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
bun run build
```

This produces:
- `dist/client/` — static client assets
- `dist/server/` — SSR server bundle

## Deployment

### Option 1: Cloudflare Workers (Recommended)

This project is pre-configured for Cloudflare Workers via Wrangler.

```bash
# Install Wrangler if you haven't already
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login

# Deploy
wrangler deploy
```

> The `wrangler.jsonc` file in the project root already contains the required configuration.

### Option 2: Vercel

For Vercel deployment, a `vercel.json` is included to handle route rewrites and prevent 404 errors on page refresh.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

> The included `vercel.json` ensures all routes fallback to the SSR handler, eliminating SPA-style 404 errors on refresh.

### Option 3: Netlify

For Netlify, create a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist/client"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 4: Static Hosting (SPA Fallback)

If you need to deploy the client bundle as a static site, the `vercel.json` in this project includes proper SPA rewrite rules so that direct navigation to routes like `/about` or `/contact` works correctly.

## Project Structure

```
src/
  components/       # Reusable UI components
  routes/           # Page routes (TanStack file-based routing)
  styles.css        # Global styles + Tailwind theme
  router.tsx        # Router configuration
  server.ts         # Server entry point
```

## Troubleshooting

### 404 on page refresh / deep links

This is usually a deployment platform configuration issue. Ensure your platform is configured to handle SSR routes or fall back to `index.html` for unmatched paths. The included `vercel.json` solves this for Vercel deployments.

### Build fails with module resolution errors

Ensure you're using the correct package manager. This project uses `bun.lock` — use `bun install` rather than `npm install` to avoid lockfile conflicts.

## License

Private — Kaplan & William Law Firm
