# Data Harvest Labs

Website for [Data Harvest Labs](https://dataharvestlabs.com) — a genomic data analysis and statistical consulting company founded in Srinagar, Kashmir.

We built this from scratch to reflect the kind of work we do: precise, clean, and deliberately crafted. The site handles everything from first impressions to quote requests, and is designed to work well on any device.

---

## What's on the site

- **Home** — animated hero banner with falling chinar leaves, key stats, services overview, why us, applications, and training section
- **About** — the team and the story behind the lab
- **Services** — SNP data analysis, GWAS, PCA & clustering, heritability estimation, ANOVA, report writing, data visualisation
- **Testimonials** — client reviews with a drag carousel, built to pull from Google Reviews automatically
- **Contact** — direct contact form (Formspree)
- **Get a Quote** — multi-step quote request form with service selection, project details, and location
- **404** — custom not-found page

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 10 (pages router) |
| UI | React 17 + styled-components 5 |
| Animations | Framer Motion 2 |
| Forms | Formspree |
| Reviews | Google Places API (ISR, revalidates daily) |
| Linting | ESLint + Prettier + lint-staged + Husky |

---

## Running locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The dev server runs at `http://localhost:3000`.

> Node 16+ required. The dev script uses `--openssl-legacy-provider` for Next.js 10 compatibility with newer Node versions.

---

## Environment variables

Create a `.env.local` file in the root if you want Google Reviews to pull in automatically on the testimonials page:

```
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

Both are optional — if not set, the page falls back to the local reviews in `data/testimonials.js`.

---

## Project structure

```
pages/          # Next.js routes
components/     # All React components
  Home/         # Homepage sections (Banner, Footer, etc.)
  Menu/         # Full-screen navigation overlay
  AppBar/       # Top navigation bar
  Cursor/       # Custom cursor
styles/         # Global styles, themes (dark/light), shared utilities
hooks/          # Custom React hooks
context/        # Theme, cursor, and menu context providers
data/           # Local testimonial data
lib/            # Google Reviews fetcher
public/         # Static assets (fonts, images, SVGs)
```

---

## Deployment

```bash
npm run build
npm start
```

The site is statically optimised where possible. The testimonials page uses ISR (`revalidate: 86400`) so Google Reviews refresh once a day without a redeploy.

---

## The team

Built and maintained by the founders of Data Harvest Labs:

- [Faraz Ahmad Naik](https://www.linkedin.com/in/faraznaik/)
- [Dr. Zafir Ahmad Naik](https://in.linkedin.com/in/zafir-naik)
- [Dr. Yasir Mushtaq Wani](https://www.linkedin.com/in/dr-yasir-mushtaq-wani-1864831b9/)

[Data Harvest Labs on LinkedIn](https://in.linkedin.com/company/data-harvest-labs)

---

Made with care in Srinagar, Kashmir.
