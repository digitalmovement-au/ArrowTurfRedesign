# Arrow Turf — website redesign

The redesigned [arrowturf.com.au](https://www.arrowturf.com.au), rebuilt from WordPress (SiteOrigin + WPBakery) as a fast static site in **Astro + Tailwind**, with a motion layer built around one idea: **the living lawn**.

## What's inside

**Every page and URL from the live site, with all its copy.** That includes all 17 pages, every FAQ (124 across the site), the spec sheets, the service areas, and the titles and meta descriptions. URLs are unchanged, so rankings carry over.

| Live URL | Template |
|---|---|
| `/` | `src/pages/index.astro` |
| `/contact/` | `src/pages/contact.astro` |
| Everything else | `src/pages/[...slug].astro` driven by `src/data/pages/*.ts` |

### The wow layer (`src/scripts/`)

- **Living-lawn hero** (`grass.ts`): about 2,000 canvas blades. They grow in from left to right on load, sway in a breeze, part around the visitor's cursor, and lean with scroll speed. The canvas pauses when off-screen.
- **Turf-roll reveals**: images unroll into place with a rolled-turf cylinder riding the edge.
- **Growing grass edges**: blades sprout out of section tops as you scroll to them.
- **Farm-to-lawn journey**: a pinned, horizontally scrolling story (paddock → cut → truck → lawn) with a truck driving along the road.
- **Variety explorer**: tall panels; the hovered one opens like a roll being pulled out.
- **Variety matcher** (`/our-turf-varieties`): tick what matters (shade, wear, softness…) and the best fit rises to the top. It's based on each variety's spec sheet.
- **Lawn calculator**: add rectangles, get m² (+5% trim allowance) and the approximate weight. "Add to my quote" pre-fills the quote form.
- **Suburb checker**, Google reviews marquee, project lightbox, magnetic buttons, sticky mobile call/quote bar, and Lenis smooth scrolling.
- **`prefers-reduced-motion`** gets a calm, fully static version. All content stays in the HTML for SEO.

### SEO

- Per-page title, description, canonical and Open Graph tags.
- JSON-LD: `LocalBusiness` with address and geo, `WebSite`, `WebPage`, `BreadcrumbList` and `FAQPage`.
- Auto sitemap and `robots.txt`.
- 301s for old WordPress slugs, in `netlify.toml`.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Preview on GitHub Pages

Every push to `main` builds a review copy via `.github/workflows/pages.yml`. It's served at `https://digitalmovement-au.github.io/ArrowTurfRedesign/` with `noindex` set, so Google won't index it.

- **One-time setup:** in repo Settings → Pages, set Source to **GitHub Actions**.
- **The quote form doesn't send on Pages** (static hosting). Visitors see the "call 0490 779 707" fallback message.
- **The production build is unaffected:** with no `BASE_PATH` it serves from the domain root.

## Before go-live

1. **Images.** These are currently hotlinked from the WordPress server, and all 80 are verified live. Run `npm run fetch-images`, then set `PUBLIC_UPLOADS_BASE=/uploads` so the site no longer depends on WordPress. Commit `public/uploads` (remove it from `.gitignore`), or host it on a CDN.
2. **Quote form.** On Netlify it works out of the box with Netlify Forms. Anywhere else, set `PUBLIC_FORM_ENDPOINT` (Formspree, Basin, or your own API). See `.env.example`.
3. **Analytics.** Set `PUBLIC_GTM_ID`.
4. **Logo.** The current logo PNG is 168×128. Supply an SVG for crisp rendering.
5. **Check the business info** in `src/data/site.ts`: the map coordinates are approximate.

## Editing content

All copy lives in `src/data/`:

- `site.ts`: business details, nav, varieties, services, reviews, suburbs
- `faqs.ts`: the shared 25-question FAQ bank
- `pages/*.ts`: each page as a list of typed sections (`split`, `prose`, `specs`, `features`, `steps`, `table`, `areas`, `gallery`, `video`, `journey`, `calculator`, `compare`…)

Body text is lightweight markdown.

## Design tokens

Brand fonts kept from the live site: Bricolage Grotesque for display and Instrument Sans for body.

| Token | Hex | Use |
|---|---|---|
| Paddock | `#16301f` | Dark bands, header, footer |
| Leaf | `#2c6e3f` | Actions (the live site's green) |
| Clover | `#b8d86b` | Sunlit blade tips; small doses only |
| Loam | `#5a4632` | Soil side of the turf roll |
| Dew | `#f4f6f1` | Page background |
