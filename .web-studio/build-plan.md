# Build Plan

Synthesized from docs/product-marketing-context.md, docs/site-plan.md, docs/design-system.md

## Stack (Stack Scout)
- **Framework:** Astro 5 (content-first, static, SEO-ready)
- **Styling:** Tailwind CSS v3 via `@astrojs/tailwind`
- **Fonts:** Google Fonts (Fraunces + Manrope) via preconnect
- **Deploy:** Netlify (via GitHub integration)
- **Auth:** None
- **Database:** None

### Dependencies
```
astro
@astrojs/tailwind
@astrojs/sitemap
tailwindcss
autoprefixer
postcss
```

### Folder Structure
```
src/
  components/
    Button.astro
    Header.astro
    Footer.astro
    MobileStickyBar.astro
    LeadCaptureForm.astro
    ServicesGrid.astro
    ServiceCard.astro
    TrustSignalsBar.astro
    TestimonialsSection.astro
    FAQAccordion.astro
    PaletteStrip.astro
    FinalCTA.astro
    Hero.astro
    SEO.astro
    LocalBusinessSchema.astro
  layouts/
    Layout.astro
  pages/
    index.astro
    about.astro
    contact.astro
    gallery.astro
    services/index.astro
    services/interior-painting.astro
    services/exterior-painting.astro
    services/cabinet-refinishing.astro
    services/deck-staining.astro
    services/drywall-repair.astro
    service-areas/index.astro
    service-areas/fairfield.astro
    service-areas/vacaville.astro
    service-areas/suisun-city.astro
    service-areas/vallejo.astro
    service-areas/napa.astro
  data/
    site.ts       (business info, services, service areas, testimonials, FAQ)
  styles/
    global.css    (CSS variables, base styles)
public/
  robots.txt
  favicon.svg
netlify.toml
```

## Component Map (Component Analyst)

| Component | File | Purpose |
|-----------|------|---------|
| Layout | `src/layouts/Layout.astro` | Shell — injects Header, Footer, MobileStickyBar, SEO |
| Header | `src/components/Header.astro` | Sticky nav, scroll-shrink, dropdown for Services + Service Areas |
| Footer | `src/components/Footer.astro` | 4-column (brand, services, areas, contact) on dark charcoal |
| MobileStickyBar | `src/components/MobileStickyBar.astro` | Fixed bottom bar, call + estimate |
| Button | `src/components/Button.astro` | variants: primary, secondary, ghost · sizes: sm, md, lg |
| LeadCaptureForm | `src/components/LeadCaptureForm.astro` | Netlify Forms; Name, Phone, Email, Service, Project |
| Hero | `src/components/Hero.astro` | Asymmetric 2-col hero with embedded form |
| ServicesGrid | `src/components/ServicesGrid.astro` | 3-col grid of ServiceCard |
| ServiceCard | `src/components/ServiceCard.astro` | Photography-forward card |
| TrustSignalsBar | `src/components/TrustSignalsBar.astro` | Horizontal badge row on charcoal |
| TestimonialsSection | `src/components/TestimonialsSection.astro` | 3-card testimonial grid |
| FAQAccordion | `src/components/FAQAccordion.astro` | Details/summary accordion with a11y |
| PaletteStrip | `src/components/PaletteStrip.astro` | 5 color swatches signature band |
| FinalCTA | `src/components/FinalCTA.astro` | Dark charcoal CTA band with form |
| SEO | `src/components/SEO.astro` | Meta tags, OG, Twitter |
| LocalBusinessSchema | `src/components/LocalBusinessSchema.astro` | JSON-LD |

## SEO Plan (SEO Mapper)
See `docs/site-plan.md` SEO Keyword Map. Every page receives `<SEO>` with title+description; homepage adds `<LocalBusinessSchema>`; service pages add Service JSON-LD. `sitemap.xml` auto-generated via `@astrojs/sitemap`.

## Copy Integrator
All copy lives in `docs/site-plan.md` Copy Brief. `src/data/site.ts` centralizes business info and lists. Pages pull copy from site.ts + inline-per-page where appropriate.

## Conversion Optimizer
- Primary CTA ("Get a Free Estimate") in header, hero, every service page, FinalCTA, and MobileStickyBar.
- Phone `tel:` link in header, footer, MobileStickyBar, Contact page, and FinalCTA.
- LeadCaptureForm embedded on: Homepage (hero + FinalCTA) and Contact. Other CTAs link to /contact#estimate.
- MobileStickyBar: visible below 768px on every page.

## Image Planner
No API keys available → CSS gradient placeholders in this build. Image manifest documented in `docs/design-system.md` Image Brief. Re-run `/site-builder start-at=images` after adding nano-banana or PEXELS_API_KEY.
