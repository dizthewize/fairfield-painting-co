export const site = {
  name: 'Fairfield Painting Co.',
  tagline: 'Warm color. Clean worksites. Real warranties.',
  domain: 'https://fairfieldpainting.co',
  phone: '(555) 000-0000',
  phoneHref: 'tel:+15550000000',
  email: 'hello@painting.example',
  emailHref: 'mailto:hello@painting.example',
  address: {
    street: '123 Main St',
    city: 'Fairfield',
    region: 'CA',
    postalCode: '94533',
    country: 'US',
  },
  license: 'CA License # TBD',
  hours: 'Mon–Fri 7:30am–5:30pm · Sat by appointment · Sun closed',
  social: {
    instagram: '#',
    facebook: '#',
    google: '#',
  },
} as const;

export type ServiceSlug =
  | 'interior-painting'
  | 'exterior-painting'
  | 'cabinet-refinishing'
  | 'deck-staining'
  | 'drywall-repair';

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: 'interior-painting',
    name: 'Interior Painting',
    short: 'Premium paint, clean crews, color-match guarantee on every wall.',
    description:
      'Fresh interior color changes how your home feels — a full room paint job reads like a bigger renovation than it is. We handle the full scope: moving furniture, masking floors and fixtures, repairing small drywall dings, cutting in by hand, and finishing with a walk-through you actually sign off on.',
    benefits: [
      'Free color consultation with fan decks and sample boards',
      'Floor-to-ceiling masking — your furniture stays in place',
      'Clean-worksite promise: tidy up every evening',
    ],
    cta: 'Get a Free Interior Estimate',
  },
  {
    slug: 'exterior-painting',
    name: 'Exterior Painting',
    short: 'Weather-tested finishes that hold up to Solano County sun.',
    description:
      'California sun is tough on paint, and Fairfield exteriors take a beating on the south and west faces. We start with a full pressure-wash, scrape and sand loose paint, prime bare wood, caulk gaps, and apply two coats of premium exterior-grade paint rated for UV exposure.',
    benefits: [
      'Power-wash and full surface prep included',
      'Premium UV- and weather-rated paints',
      '3-year workmanship warranty',
    ],
    cta: 'Get a Free Exterior Estimate',
  },
  {
    slug: 'cabinet-refinishing',
    name: 'Cabinet Refinishing',
    short: 'A new kitchen without a remodel — and at less than half the cost.',
    description:
      'Refinishing cabinets gives you a brand-new kitchen look for a fraction of a full replacement. We remove all doors and drawer fronts, take them to our off-site finishing shop, sand to bare wood (or degloss laminate), spray with bonding primer and two topcoats, and reinstall once fully cured.',
    benefits: [
      'Off-site spray booth for a factory-grade finish',
      'Kitchen remains usable during the project',
      'Less than half the cost of full cabinet replacement',
    ],
    cta: 'Get a Free Cabinet Refinishing Estimate',
  },
  {
    slug: 'deck-staining',
    name: 'Deck Staining',
    short: 'Protect the wood, deepen the color, extend the life.',
    description:
      'Unsealed decks weather fast in Solano County — cracking, splintering, and sun-bleaching can start within a single summer. We wash to strip mold and failing stain, sand rough boards, replace compromised hardware, and apply two coats of your choice of solid, semi-transparent, or transparent stain.',
    benefits: [
      'Wash, sand, and surface prep included',
      'Choice of solid, semi-transparent, or transparent stains',
      'Penetrating seal for long-term weather protection',
    ],
    cta: 'Get a Free Deck Staining Estimate',
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    short: 'Holes, cracks, and texture matching — patched and painted by one crew.',
    description:
      "Most painters patch drywall and hand it off to a separate texture tech. We don't. Our crew handles hole patching, crack repair, joint-tape replacement, water-damage cutouts, and texture matching (orange peel, knockdown, smooth, skip-trowel) in-house — and then repaints the wall so the repair disappears.",
    benefits: [
      'Seamless patch-and-paint from one crew',
      'All common texture types matched in-house',
      'Fast turnaround on small repairs',
    ],
    cta: 'Get a Free Drywall Repair Estimate',
  },
];

export interface ServiceArea {
  slug: string;
  city: string;
  blurb: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'fairfield',
    city: 'Fairfield',
    blurb:
      "Our home base. We know the mid-century ranches in Cordelia, the newer builds in Rancho Solano, and the character homes north of Travis Blvd. Fairfield homeowners are our largest customer base — we're here every week.",
  },
  {
    slug: 'vacaville',
    city: 'Vacaville',
    blurb:
      'From Browns Valley to downtown Vacaville, we paint everything from craftsman-style bungalows to two-story tract homes. Shorter commute means faster scheduling.',
  },
  {
    slug: 'suisun-city',
    city: 'Suisun City',
    blurb:
      'Waterfront homes in Suisun City see extra humidity and salt air — exteriors especially benefit from premium paints and proper prep. We spec product accordingly.',
  },
  {
    slug: 'vallejo',
    city: 'Vallejo',
    blurb:
      "Vallejo's Victorian trim work is a specialty — detailed sanding, careful color selection, historic-appropriate palettes. We also handle modern homes in Glen Cove and Hiddenbrooke.",
  },
  {
    slug: 'napa',
    city: 'Napa',
    blurb:
      "Napa homes and winery exteriors need finishes that stand up to hot summers and hold color over time. We work with homeowners and small commercial properties across the Napa valley.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They masked, taped, and tarped every surface — I could barely tell a painting crew had been in the house. The color match on the trim was perfect.",
    name: 'Sarah K.',
    city: 'Fairfield',
    service: 'Interior Painting',
  },
  {
    quote:
      "Got three quotes. Fairfield Painting wasn't the cheapest, but the walk-through was the most thorough, and the final price was exactly what they quoted. Will hire again.",
    name: 'Miguel R.',
    city: 'Vacaville',
    service: 'Exterior Painting',
  },
  {
    quote:
      'Our 1980s oak kitchen looks like it came out of a showroom. Saved us from a full remodel.',
    name: 'Jenna T.',
    city: 'Suisun City',
    service: 'Cabinet Refinishing',
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'How much does it cost to paint a house in Fairfield, CA?',
    a: 'Pricing varies by square footage, prep work, and paint grade. Most interior rooms run $400–$900, and full home exteriors typically range $4,500–$9,500. We send a fixed-price written estimate within one business day of your walk-through — no surprises.',
  },
  {
    q: 'How long does an interior painting job take?',
    a: 'A single room is usually a one-day job. A full home interior runs 3–5 business days depending on size and prep. We give you a day-by-day schedule up front and stick to it.',
  },
  {
    q: 'Do you provide the paint, or do I?',
    a: 'We do. We work primarily with Sherwin-Williams and Benjamin Moore premium lines, and your estimate includes all paint, primer, and materials. If you have a specific product in mind, let us know.',
  },
  {
    q: 'Are you licensed and insured?',
    a: "Yes. We're fully licensed in California and carry general liability plus workers' comp. We're happy to send you a copy of our certificates before the job.",
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Every interior job is backed by a 2-year workmanship warranty. Exteriors carry a 3-year warranty. If paint peels, blisters, or fails due to our application, we come back and fix it — no hassle.',
  },
  {
    q: "What's a free color consultation?",
    a: "Picking colors is usually the hardest part. On every estimate, we bring fan decks and sample boards, discuss lighting and finishes, and — if you want — suggest palettes based on your home's style. No extra cost.",
  },
  {
    q: 'How soon can you start?',
    a: 'Typically 1–2 weeks after your estimate is approved. For urgent jobs (listing prep, move-in dates), we do our best to fit you in sooner.',
  },
  {
    q: 'Do you paint cabinets? Will they really look factory-finished?',
    a: 'Yes — cabinet refinishing is one of our specialties. We remove doors, spray them off-site in a controlled environment, and reinstall once fully cured. The finish is factory-smooth.',
  },
];

export const trustSignals = [
  'Licensed & Insured',
  'Family-Owned',
  'Color-Match Guarantee',
  'Clean Worksite Promise',
  '2-Year Workmanship Warranty',
];

export const palette = [
  { name: 'Revere Pewter', hex: '#E8DFD0', textLight: false },
  { name: 'Edgecomb Gray', hex: '#C9BBA0', textLight: false },
  { name: 'Dried Thyme', hex: '#7C8873', textLight: true },
  { name: 'Hale Navy', hex: '#2C3E50', textLight: true },
  { name: 'Cracked Pepper', hex: '#1F1B17', textLight: true },
] as const;

export const nav = {
  primary: [
    { label: 'Services', href: '/services', dropdown: 'services' as const },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Service Areas', href: '/service-areas', dropdown: 'areas' as const },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
