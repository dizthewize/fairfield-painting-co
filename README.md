# Fairfield Painting Co. — Website

Static marketing site for Fairfield Painting Co. — a painting services business in Fairfield, CA.

Built with [Astro](https://astro.build) + Tailwind CSS and deployed to Netlify.

## Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS v3 + CSS custom properties (design tokens)
- **Fonts:** Fraunces (display) + Manrope (body) via Google Fonts
- **Forms:** Netlify Forms
- **Deploy:** Netlify via GitHub integration

## Local development

```bash
npm install
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  components/       shared + page components
  data/site.ts      business info, services, areas, testimonials, FAQ
  layouts/          page shell with Header/Footer/SEO
  pages/            file-based routes
  styles/global.css CSS custom properties + base styles
public/             favicon, robots.txt, og-image
docs/               product-marketing-context, site-plan, design-system
.web-studio/        web-studio pipeline artifacts
```

## Placeholders before launch

The site was built in web-studio Prompt Mode — business specifics are placeholders. See the "Placeholders" section at the bottom of `docs/product-marketing-context.md` for the full swap list (name, phone, email, address, service areas).

To refresh the site with real info:

```
/web-studio update="refresh Footer and Contact with updated business info"
```
