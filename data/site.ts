export type OpportunityStatus = "move-in" | "coming-soon" | "presale" | "sold";
export type Award = {
  year: number;
  kind: "entry" | "award";
  level?: "Gold" | "Silver" | "Bronze";
  paradeId?: "franklin" | "triangle";
  entryName?: string;
};
export type Highlight = { label: string; detail?: string };
export type GalleryImage = { src: string; caption: string; alt: string };
export type Project = {
  slug: string;
  address?: string;
  planName?: string;
  city?: string;
  community: string;
  lot: string;
  status: "Move-In Ready" | "Coming Soon" | "Pre-Sale Opportunity" | "Sold" | "Completed";
  statusKey?: OpportunityStatus;
  category: "available" | "completed" | "presale";
  price?: string;
  priceLabel?: "Offered at" | "Current plan from";
  bedrooms?: string;
  bathrooms?: string;
  squareFeet?: string;
  acreage?: string;
  garage?: string;
  tags?: string[];
  completed?: string;
  description?: string;
  intro: string;
  highlights?: Highlight[];
  closingLine?: string;
  communityDescription?: string;
  awards?: Award[];
  awardLine?: string;
  listingAgent?: { name: string; company: string; phone: string; phoneHref: string };
  heroImage?: string;
  imageAlt?: string;
  gallery: GalleryImage[];
  tourUrl?: string;
  videoUrl?: string;
  videoTitle?: string;
  videoPlacement?: "walkthrough" | "project-tour";
  metadataImage?: string;
  published?: boolean;
};

// One switch controls every private-tour surface. Set this to false to remove
// the property CTAs and make the request route return 404.
export const PRIVATE_TOURS_ENABLED = true;

export const site = {
  name: "Russin Homes",
  legalName: "Russin Homes, LLC",
  url: "https://www.russinhomes.com",
  phone: "919-520-7342",
  phoneHref: "+19195207342",
  email: "russinhomes@gmail.com",
  license: "NC General Contractors License #80218",
  markets: ["Youngsville", "Wake Forest", "Raleigh"],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/russin_homes/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61565679703069" },
    { name: "YouTube", href: "https://www.youtube.com/@russinhomes" },
  ],
} as const;
const root = "/images/russin-homes/curated";
const listingAgent = {
  name: "Russell Zuccone",
  company: "The Jim Allen Group",
  phone: "919-522-9337",
  phoneHref: "+19195229337",
};
const gallery = (folder: string, address: string, captions: string[]): GalleryImage[] =>
  captions.map((caption, i) => ({
    src: `${root}/${folder}/${String(i + 1).padStart(2, "0")}-${i ? "gallery" : "hero"}.webp`,
    caption,
    alt: `${address}, ${caption.toLowerCase()}`,
  }));
const hi = (rows: [string, string][]) => rows.map(([label, detail]) => ({ label, detail }));
const c205 = [
  "Front elevation",
  "Front exterior",
  "Front entry",
  "Rear exterior and deck",
  "Screened porch",
  "Family room",
  "Family room with fireplace",
  "Family room",
  "Kitchen",
  "Kitchen island",
  "Dining area",
  "Primary bedroom",
  "Primary bath",
  "Media room",
  "Media room",
  "Media room wet bar",
  "Study with built-in desk",
  "Laundry room",
];
const c1123 = [
  "Front elevation",
  "Front exterior",
  "Front exterior and landscaping",
  "Front walk and driveway",
  "Aerial view of the homesite",
  "Aerial view of Silverleaf",
  "Foyer",
  "Family room and staircase",
  "Family room with stone fireplace",
  "Family room",
  "Breakfast area",
  "Kitchen",
  "Kitchen island",
  "Kitchen range and pantry",
  "Scullery and pantry",
  "Breakfast area",
  "Beverage station",
  "Study",
  "Study",
  "Bedroom",
  "Bedroom with tray ceiling",
  "Primary bath",
  "Primary bath",
  "Primary shower",
  "Primary bath soaking tub",
  "Laundry room",
];
const c203 = [
  "Front exterior",
  "Front exterior",
  "Rear exterior",
  "Front exterior and driveway",
  "Front exterior",
  "Staircase",
  "Living room",
  "Great room",
  "Great room",
  "Dining area",
  "Kitchen",
  "Primary bath",
  "Primary bath",
  "Screened porch with fireplace",
];
const c108 = [
  "Front exterior",
  "Garage and driveway",
  "Rear exterior",
  "Staircase",
  "Great room",
  "Kitchen and great room",
  "Kitchen",
  "Kitchen bar",
  "Screened porch",
  "Living room with fireplace",
  "Primary bath",
  "Great room windows",
  "Bedroom",
  "Staircase",
];
const cPrescott = [
  "Front exterior",
  "Rear exterior",
  "Covered porch",
  "Foyer",
  "Dining room",
  "Great room",
  "Great room with fireplace",
  "Kitchen",
  "Kitchen",
  "Primary bedroom",
  "Primary bath",
  "Primary bath soaking tub",
  "Bathroom",
  "Front porch",
];
const red205 = `Custom built by Russin Homes in a private community with tranquil pond views. Featuring 4 bedrooms, 4 full baths and 3,756 square feet of beautifully designed space. The owner's suite and guest suite are conveniently located on the main level with wide plank hardwoods and designer lighting spanning throughout.\n\nThe gourmet kitchen features a stained center island with barstool seating and linear pendant lighting, modern tile backsplash, custom painted ceiling-height cabinetry, and stainless steel appliances including a built-in gas range. An adjoining walk-in pantry adds tons of additional storage, all opening to the vaulted, sun-filled dining area.\n\nThe owner's suite has a tray ceiling with stained floating beams, a designer chandelier, hardwoods, and 4-panel sliding glass doors to a private covered porch. The luxurious en-suite bath features a stained dual vanity with a quartz top and floating pendant lights, a zero-entry spa-style shower with tile-to-ceiling surround, an oversized transom and bench seat, and a huge walk-in closet.\n\nThe family room offers a backlit tray ceiling, a linear fireplace with tile-to-ceiling surround, flanking painted built-in cabinets with stained shelving, and large glass sliding doors to the huge screened porch. Upstairs features an oversized game room with a built-in wet bar and beverage fridge, an open study with a built-in desk, spacious secondary en-suites, and finished storage areas.`;
const dove1123 = `Situated on a serene 1 acre lot in the established neighborhood of Silverleaf. This 4 BR, 4.5 BA, 2 car garage home has a walk-in scullery and pantry, custom cabinets throughout, a professional lighting package, and a professionally designed low voltage system including security, surround sound, and speakers located both inside and out.\n\nThis warm, inviting floor plan features a striking stone fireplace in the family room, a gourmet kitchen, and vaulted ceilings with beams throughout the screened porch, family room, and study. The primary bathroom is appointed with sconce lighting, a zero-entry dual-head shower, and a stand-alone soaking tub. This home is "sitting pretty"!`;
const dove1121 = `For-Evergreen combines stylish design, quality finishes, and comfortable living in this inviting 4-bedroom, 4-bath home. The open-concept floor plan creates a seamless flow for everyday living and entertaining, featuring quartz countertops and a hidden pantry that adds both function and charm to the kitchen.\n\nThe first-floor primary suite offers a private retreat with a soaking tub, spacious walk-in shower, and generous closet space. A dedicated office and study provides a quiet place to work or learn, while the bonus room with a bar is ideal for entertaining family and friends.\n\nEnjoy outdoor living on the screened porch, and appreciate the added value of a sealed crawl space and independent energy testing. With versatile living spaces and a 2-car garage, the attention to detail throughout is stunning!`;

export const projects: Project[] = [
  {
    slug: "205-red-cardinal-court",
    planName: "The Patricia Marie",
    address: "205 Red Cardinal Court",
    city: "Youngsville, NC 27596",
    community: "East Woods of Patterson",
    lot: "Lot 85",
    status: "Move-In Ready",
    statusKey: "move-in",
    category: "available",
    priceLabel: "Offered at",
    price: "$1,000,000",
    bedrooms: "4",
    bathrooms: "4",
    squareFeet: "3,756",
    acreage: "0.80 acre, pond lot",
    garage: "2-car",
    tags: ["Community pool"],
    intro: "A move-in ready Russin Homes residence with tranquil pond views.",
    description: red205,
    highlights: hi([
      ["Flexible Layout", "Designed for flexibility and everyday living."],
      ["First-Floor Primary Suite", "A spa-like shower and a large walk-in closet."],
      [
        "First-Floor Guest Suite",
        "Use it as a guest suite or an office. Ideal for extended stays or multi-generational living.",
      ],
      [
        "Gourmet Kitchen",
        "GE Café appliances, custom white oak cabinetry, a large island, and a pantry.",
      ],
      ["Outdoor Living", "An oversized screened porch with an open-air deck overlooking the pond."],
      [
        "Media Room",
        "Designed for game night or movie night, with a wet bar and an undercounter fridge.",
      ],
      [
        "Second Bonus Room",
        "Use it as finished storage, an alternate game room, an exercise room, or an office.",
      ],
      ["Two-Car Garage", "Generous space for two vehicles, with an epoxied garage floor."],
      ["Community Pool", "A community pool in East Woods of Patterson."],
      ["2025 Parade of Homes", "Silver and Best Kitchen."],
    ]),
    closingLine: "This home is complete with timeless design elements and modern amenities.",
    awards: [{ year: 2025, kind: "award", level: "Silver" }],
    awardLine: "2025 Parade of Homes, Silver and Best Kitchen.",
    listingAgent,
    heroImage: `${root}/01-available-205-red-cardinal-court/01-hero.webp`,
    imageAlt: "205 Red Cardinal Court, front elevation",
    gallery: gallery("01-available-205-red-cardinal-court", "205 Red Cardinal Court", c205),
    videoUrl: "https://www.youtube.com/shorts/Lvdp1fC1kXc",
    videoTitle: "205 Red Cardinal Court video tour",
    videoPlacement: "walkthrough",
  },
  {
    slug: "1123-dovefield-lane",
    address: "1123 Dovefield Lane",
    city: "Youngsville, NC 27596",
    community: "Silverleaf",
    lot: "Lot 85",
    status: "Move-In Ready",
    statusKey: "move-in",
    category: "available",
    priceLabel: "Offered at",
    price: "$965,000",
    bedrooms: "4",
    bathrooms: "4.5",
    squareFeet: "3,352",
    acreage: "0.92 acre",
    garage: "2-car",
    intro:
      "Sitting Pretty is a move-in ready Silverleaf home and a 2026 Triangle Parade of Homes entry.",
    description: dove1123,
    highlights: hi([
      ["Gourmet Kitchen and Scullery", "A gourmet kitchen with a walk-in scullery and pantry."],
      ["Custom Cabinetry", "Custom cabinets throughout the home."],
      ["Stone Fireplace", "A striking stone fireplace in the family room."],
      [
        "Vaulted, Beamed Ceilings",
        "Vaulted ceilings with beams through the screened porch, family room, and study.",
      ],
      [
        "Primary Bath",
        "Sconce lighting, a zero-entry dual-head shower, and a freestanding soaking tub.",
      ],
      ["Professional Lighting", "A professional lighting package."],
      [
        "Low-Voltage System",
        "Professionally designed security, surround sound, and speakers inside and out.",
      ],
      ["Two-Car Garage", "A two-car garage."],
      [
        "Established Neighborhood",
        "Approximately 0.92 acre in the established Silverleaf neighborhood.",
      ],
      ["2026 Parade of Homes", "Triangle Parade of Homes entry, Sitting Pretty."],
    ]),
    awards: [{ year: 2026, kind: "entry", paradeId: "triangle", entryName: "Sitting Pretty" }],
    listingAgent,
    heroImage: `${root}/02-available-1123-dovefield-lane/01-hero.webp`,
    imageAlt: "1123 Dovefield Lane, front elevation",
    gallery: gallery("02-available-1123-dovefield-lane", "1123 Dovefield Lane", c1123),
    tourUrl:
      "https://www.zillow.com/view-imx/f01a1c62-9aed-4168-bb39-acaa18df007c?wl=true&setAttribution=mls&initialViewType=pano",
  },
  {
    slug: "1121-dovefield-lane",
    address: "1121 Dovefield Lane",
    city: "Youngsville, NC 27596",
    community: "Silverleaf",
    lot: "Lot 86",
    status: "Move-In Ready",
    statusKey: "move-in",
    category: "available",
    priceLabel: "Offered at",
    price: "$1,025,000",
    bedrooms: "4",
    bathrooms: "4",
    squareFeet: "3,515",
    acreage: "0.92 acre",
    garage: "2-car",
    intro:
      "For-Evergreen is a move-in ready Silverleaf home and a 2026 Franklin County Parade of Homes entry.",
    description: dove1121,
    highlights: hi([
      ["Open-Concept Plan", "An open floor plan that flows for everyday living and entertaining."],
      ["Kitchen", "Quartz countertops and a hidden pantry."],
      [
        "First-Floor Primary Suite",
        "A soaking tub, a spacious walk-in shower, and generous closet space.",
      ],
      ["Dedicated Office", "A dedicated office and study."],
      ["Bonus Room with Bar", "Room to entertain family and friends."],
      ["Screened Porch", "A screened porch for outdoor living."],
      ["Sealed Crawl Space", "A sealed crawl space and independent energy testing."],
      ["Two-Car Garage", "A two-car garage."],
      ["Homesite", "Approximately 0.92 acre in Silverleaf."],
      ["2026 Parade of Homes", "Franklin County Parade of Homes entry, For-Evergreen."],
    ]),
    awards: [{ year: 2026, kind: "entry", paradeId: "franklin", entryName: "For-Evergreen" }],
    listingAgent,
    gallery: [],
    imageAlt: "Photography coming soon for 1121 Dovefield Lane",
    metadataImage: "/images/russin-homes/1121-dovefield-social.svg",
    videoUrl: "https://youtube.com/shorts/Lubwl4tObBU",
    videoTitle: "1121 Dovefield Lane video tour",
    videoPlacement: "walkthrough",
  },
  {
    slug: "315-hidden-lake-drive",
    address: "315 Hidden Lake Drive",
    city: "Youngsville, NC 27596",
    community: "Hidden Lake",
    lot: "Homesite 22",
    status: "Pre-Sale Opportunity",
    statusKey: "presale",
    category: "presale",
    priceLabel: "Current plan from",
    price: "$1,750,000",
    bedrooms: "4",
    bathrooms: "4.5",
    squareFeet: "4,876",
    acreage: "3.21 acres",
    garage: "3-car",
    tags: ["Water view", "Pool-ready"],
    intro: "Come home to Hidden Lake.",
    highlights: hi([
      ["Water-View Homesite", "Approximately 3.21 acres in Hidden Lake."],
      ["Pool-Ready Homesite", "The homesite is ready for a pool."],
      ["Three-Car Garage", "A three-car garage."],
    ]),
    heroImage: `${root}/available-homesites/hidden-lake-homesite-22.webp`,
    imageAlt: "Proposed design for 315 Hidden Lake Drive",
    gallery: [],
  },
  {
    slug: "163-forest-bridge-road",
    address: "163 Forest Bridge Road",
    city: "Youngsville, NC 27596",
    community: "Hidden Lake",
    lot: "Homesite 75",
    status: "Pre-Sale Opportunity",
    statusKey: "presale",
    category: "presale",
    priceLabel: "Current plan from",
    price: "$2,350,000",
    bedrooms: "5",
    bathrooms: "6",
    squareFeet: "3,278 to 5,395",
    acreage: "1.36 acres",
    garage: "3-car",
    tags: ["Waterfront", "Ranch plan with basement", "Pool-ready"],
    intro: "Come home to Hidden Lake.",
    highlights: hi([
      ["Waterfront Homesite", "Approximately 1.36 acres on the water in Hidden Lake."],
      ["Ranch Plan with Basement", "A ranch plan with a basement."],
      ["Pool-Ready Homesite", "The homesite is ready for a pool."],
      ["Three-Car Garage", "A three-car garage."],
    ]),
    heroImage: `${root}/available-homesites/hidden-lake-75/01-front-exterior-rendering.webp`,
    imageAlt: "Proposed front exterior rendering for 163 Forest Bridge Road",
    gallery: [],
  },
  {
    slug: "7613-thompson-mill-road",
    planName: "The Willowbrook",
    address: "7613 Thompson Mill Road",
    city: "Wake Forest, NC 27587",
    community: "Thompson Mill",
    lot: "Lot 1",
    status: "Pre-Sale Opportunity",
    statusKey: "presale",
    category: "presale",
    priceLabel: "Current plan from",
    price: "$1,300,000",
    bedrooms: "4",
    bathrooms: "4.5",
    acreage: "Approximately 1.1 acres",
    garage: "3-car",
    tags: ["No HOA", "Pool-ready"],
    intro: "Two exceptional homes. Created with a purpose. Designed for life.",
    highlights: hi([
      ["No HOA", "No homeowners association."],
      ["Pool-Ready Homesite", "Approximately 1.1 acres, ready for a pool."],
      ["First-Floor Living", "A first-floor primary suite, study, and guest suite."],
      ["Gourmet Kitchen", "A gourmet kitchen with a walk-in pantry and scullery."],
      ["Three-Car Garage", "A three-car garage."],
      ["McMillan Design Plan", "A McMillan Design floor plan, or bring your own plan."],
      [
        "Wake Forest Location",
        "Convenient to downtown Wake Forest's restaurants, shops, breweries, and community events.",
      ],
    ]),
    heroImage: `${root}/available-homesites/thompson-mill-homesite-1.webp`,
    imageAlt: "Proposed design for The Willowbrook at 7613 Thompson Mill Road",
    gallery: [],
  },
  {
    slug: "7609-thompson-mill-road",
    planName: "The Ashford",
    address: "7609 Thompson Mill Road",
    city: "Wake Forest, NC 27587",
    community: "Thompson Mill",
    lot: "Lot 2",
    status: "Pre-Sale Opportunity",
    statusKey: "presale",
    category: "presale",
    priceLabel: "Current plan from",
    price: "$1,300,000",
    bathrooms: "4.5",
    acreage: "Approximately 1.1 acres",
    garage: "3-car, including an oversized boat bay",
    tags: ["No HOA", "Pool-ready"],
    intro: "Two exceptional homes. Created with a purpose. Designed for life.",
    highlights: hi([
      ["No HOA", "No homeowners association."],
      ["Pool-Ready Homesite", "Approximately 1.1 acres, ready for a pool."],
      ["First-Floor Living", "A first-floor primary suite and guest suite."],
      ["Gourmet Kitchen", "A gourmet kitchen with a walk-in pantry."],
      [
        "Three-Car Garage with Boat Bay",
        "A three-car garage, including one oversized 12 by 25 foot bay for your boat.",
      ],
      ["McMillan Design Plan", "A McMillan Design floor plan, or bring your own plan."],
      [
        "Wake Forest Location",
        "Minutes from Wegmans, Harris Teeter, and downtown Wake Forest shopping and dining.",
      ],
    ]),
    heroImage: `${root}/available-homesites/thompson-mill-homesite-2.webp`,
    imageAlt: "Proposed design for The Ashford at 7609 Thompson Mill Road",
    gallery: [],
  },
  {
    slug: "203-red-cardinal-court",
    address: "203 Red Cardinal Court",
    city: "Youngsville, NC 27596",
    community: "East Woods of Patterson",
    lot: "Lot 84",
    status: "Completed",
    category: "completed",
    completed: "September 2024",
    bedrooms: "4",
    bathrooms: "4",
    squareFeet: "3,890",
    acreage: "0.67 acre",
    intro: "A completed Russin Homes residence in East Woods of Patterson, Youngsville.",
    highlights: hi([
      ["Exposed Wood Beams", "Exposed wood beams in the great room, dining area, and kitchen."],
      ["Linear Fireplace", "A linear fireplace with built-in floating shelves."],
      ["Gourmet Kitchen", "An oversized island and a walk-in pantry."],
      ["Primary Bath", "A frameless glass shower and a freestanding tub."],
      ["Screened Porch", "A wood-plank ceiling and an outdoor fireplace."],
      ["Open Staircase", "An open staircase with a black metal railing."],
      ["2024 Parade of Homes", "Bronze award."],
    ]),
    awards: [{ year: 2024, kind: "award", level: "Bronze" }],
    heroImage: `${root}/03-completed-203-red-cardinal-court/01-hero.webp`,
    imageAlt: "203 Red Cardinal Court, front exterior",
    gallery: gallery("03-completed-203-red-cardinal-court", "203 Red Cardinal Court", c203),
    videoUrl: "https://youtu.be/auB70R5hF1Y",
    videoTitle: "203 Red Cardinal Court video tour",
    videoPlacement: "walkthrough",
  },
  {
    slug: "108-red-cardinal-court",
    address: "108 Red Cardinal Court",
    city: "Youngsville, NC 27596",
    community: "East Woods of Patterson",
    lot: "Lot 93",
    status: "Completed",
    category: "completed",
    completed: "July 2022",
    bedrooms: "4",
    bathrooms: "3",
    squareFeet: "3,150",
    acreage: "0.74 acre",
    intro: "A completed Russin Homes residence in East Woods of Patterson, Youngsville.",
    highlights: hi([
      [
        "Vaulted, Beamed Ceiling",
        "A vaulted wood-plank ceiling with beams over the kitchen and great room.",
      ],
      ["Natural Light", "Natural light galore."],
      ["Contemporary Gourmet Kitchen", "A large custom island."],
      ["Kitchen Bar", "A kitchen bar with a wine fridge."],
      ["Screened Porch", "A screened porch with a wood-plank ceiling."],
      ["Open Staircase", "An open staircase with a metal railing."],
      ["2022 Parade of Homes", "Silver award."],
    ]),
    awards: [{ year: 2022, kind: "award", level: "Silver" }],
    heroImage: `${root}/04-completed-108-red-cardinal-court/01-hero.webp`,
    imageAlt: "108 Red Cardinal Court, front exterior",
    gallery: gallery("04-completed-108-red-cardinal-court", "108 Red Cardinal Court", c108),
    videoUrl: "https://youtu.be/OXzVzdkGsP8",
    videoTitle: "108 Red Cardinal Court video tour",
    videoPlacement: "walkthrough",
  },
  {
    slug: "6504-prescott-shore-drive",
    address: "6504 Prescott Shore Drive",
    community: "Prescott",
    lot: "Lot 18",
    status: "Completed",
    category: "completed",
    completed: "January 2022",
    bedrooms: "4",
    bathrooms: "4",
    squareFeet: "3,519",
    acreage: "0.97 acre",
    intro: "A completed Russin Homes residence in Prescott.",
    highlights: hi([
      ["Exposed Cedar Beams", "Exposed cedar beams in the great room and kitchen."],
      ["Fireplace", "A fireplace with built-in shelving."],
      ["Covered Porch Access", "Sliding doors to the covered porch."],
      ["Farmhouse Sink", "A farmhouse sink."],
      ["Primary Suite", "A wood tray ceiling in the primary bedroom."],
      ["Primary Bath", "A freestanding tub and a glass shower."],
      ["Wainscoting", "Wainscoting in the foyer and dining room."],
      ["Outdoor Living", "A screened porch and a covered deck."],
    ]),
    heroImage: `${root}/05-completed-prescott-lot-18/01-hero.webp`,
    imageAlt: "6504 Prescott Shore Drive, front exterior",
    gallery: gallery("05-completed-prescott-lot-18", "6504 Prescott Shore Drive", cPrescott),
  },
  {
    slug: "303-black-swan-drive",
    address: "303 Black Swan Drive",
    community: "East Woods of Patterson",
    lot: "Lot 77",
    status: "Completed",
    category: "completed",
    intro: "A completed Russin Homes residence in East Woods of Patterson.",
    gallery: [],
    published: false,
  },
  {
    slug: "east-woods-lot-57",
    community: "East Woods of Patterson",
    lot: "Lot 57",
    status: "Completed",
    category: "completed",
    intro: "A completed Russin Homes residence in East Woods of Patterson.",
    awards: [{ year: 2020, kind: "award", level: "Gold" }],
    gallery: [],
    published: false,
  },
];
export const opportunities = projects.filter(
  (p) => p.category === "available" || p.category === "presale",
);
export const portfolioProjects = projects.filter(
  (p) => p.category === "completed" && p.published !== false,
);
export const publishedProjects = projects.filter((p) => p.published !== false);
export const parades = [
  {
    id: "franklin" as const,
    name: "Franklin County Parade of Homes",
    weekends: [
      { label: "October 3 and 4", start: "2026-10-03", end: "2026-10-04" },
      { label: "October 10 and 11", start: "2026-10-10", end: "2026-10-11" },
      { label: "October 17 and 18", start: "2026-10-17", end: "2026-10-18" },
    ],
  },
  {
    id: "triangle" as const,
    name: "Triangle Parade of Homes",
    weekends: [
      { label: "October 3 and 4", start: "2026-10-03", end: "2026-10-04" },
      { label: "October 9 through 11", start: "2026-10-09", end: "2026-10-11" },
      { label: "October 16 through 18", start: "2026-10-16", end: "2026-10-18" },
    ],
  },
] as const;
export type Testimonial = {
  attribution: string;
  pullQuote: string;
  quote: string;
};

export const testimonials = [
  {
    attribution: "Todd and Karen Hock",
    pullQuote:
      "He actually answers his phone, which, as anyone who has worked with contractors knows, is surprisingly rare!",
    quote: `The biggest thing that stood out about working with Russin Homes was how accessible, responsive, and genuinely helpful Jeremy was throughout the entire process. He actually answers his phone, which, as anyone who has worked with contractors knows, is surprisingly rare!\n\nEven on the day of closing, Jeremy came out personally just to turn a faucet in a different direction. That small gesture says a lot about the kind of builder he is and the level of care he has for his customers.\n\nWhen we wanted to take on some DIY projects ourselves, Jeremy was incredibly helpful in providing hardware recommendations and building-material information so we could do things the right way. He was always willing to share his knowledge and help us along the way.\n\nRussin Homes isn't just a great builder. They're backed by a great guy. Jeremy takes pride in his work, cares about his customers, and goes above and beyond even after the house is built.\n\nGREAT BUILDER. GREAT GUY. HIGHLY RECOMMENDED!`,
  },
  {
    attribution: "Sharon D.",
    pullQuote:
      "Because I was not living in the area during construction, I especially appreciated how proactive Jeremy was in keeping me informed.",
    quote: `Building a custom home is a significant investment, and choosing the right builder can make all the difference. From the very beginning, Jeremy Russin of Russin Homes exceeded my expectations.\n\nJeremy took the time to truly listen and understand my vision for my new home, and he brought that vision to life with exceptional quality and craftsmanship. What stood out just as much as the quality of the work, however, was his communication throughout the entire process. Because I was not living in the area during construction, I especially appreciated how proactive Jeremy was in keeping me informed. He consistently provided updates, pictures, and clear information about progress and next steps, which gave me confidence that my home was being built with the same care and attention to detail that I would have given it myself.\n\nBefore closing, Jeremy conducted a thorough walkthrough with me to identify and review any outstanding items. He also provided an incredibly detailed binder containing important information about the home, including manufacturers and specifications for the HVAC system and appliances, subcontractors by trade, and details on the cosmetic finishes, colors, stone, siding, and other selections. That level of organization and attention to detail was incredibly valuable and demonstrated how committed he was to delivering not just a beautiful home, but a complete and thoughtful building experience.\n\nEven after closing, Jeremy continued to stand behind his work. A few items identified during the final walkthrough needed attention after I moved in, and they were addressed quickly and professionally within just a couple of weeks.\n\nI could not be happier with my home or with the experience of working with Russin Homes. Jeremy combines quality craftsmanship, attention to detail, integrity, and exceptional communication in a way that is becoming increasingly difficult to find.\n\nIf you are looking for a custom home builder who will listen to your vision, communicate openly throughout the process, and take genuine pride in the quality of the finished product, I would highly recommend Russin Homes.`,
  },
  {
    attribution: "The Francis Family",
    pullQuote:
      "The craftsmanship and finishes throughout the home have been excellent, and we could tell that a lot of care went into the overall build.",
    quote:
      "We had a very positive experience building our home with Russin Homes. From the beginning, we really appreciated the quality, attention to detail, and the ability to make the home feel truly custom to us. The craftsmanship and finishes throughout the home have been excellent, and we could tell that a lot of care went into the overall build. The process was smooth, communication was good, and we always felt like the team wanted us to be happy with the final result. We are very satisfied with our home and would absolutely consider building with Russin Homes again. We would definitely recommend them to anyone looking for a high-quality, custom home and a builder who takes pride in their work.",
  },
  {
    attribution: "Ron & Pat C.",
    pullQuote:
      "We have been in our home close to 5 years and we have not encountered any major problems and we are still happy with our home design and workmanship.",
    quote:
      "We chose Russin Homes because they were a Custom Builder, we came with our own blueprints but Jeremy gave us a 2nd option that we both liked better. We liked Jeremy because he was open to suggestions of changes and he made them upon our request. We have been in our home close to 5 years and we have not encountered any major problems and we are still happy with our home design and workmanship. During the time our home was built it was the Pandemic, when materials and supplies were difficult to get. We would recommend Jeremy to anyone who has interest in buying a custom home or not.",
  },
] as const satisfies readonly Testimonial[];
export const HOME_HERO_WORDS = ["Experience", "Personal", "Homebuilding"] as const;
export const assets = {
  logo: `${root}/branding/russin-homes-primary-option-a.svg`,
  headerLogo: `${root}/branding/russin-homes-header-option-d.svg`,
  hero: `${root}/01-available-205-red-cardinal-court/01-hero.webp`,
  exteriorOne: `${root}/03-completed-203-red-cardinal-court/01-hero.webp`,
  exteriorTwo: `${root}/04-completed-108-red-cardinal-court/01-hero.webp`,
  exteriorThree: `${root}/05-completed-prescott-lot-18/01-hero.webp`,
  detailTwo: `${root}/04-completed-108-red-cardinal-court/06-gallery.webp`,
  detailThree: `${root}/05-completed-prescott-lot-18/06-gallery.webp`,
  interiorOne: `${root}/03-completed-203-red-cardinal-court/08-gallery.webp`,
  aboutPortrait: "/images/russin-homes/jeremy-and-patty-russin.jpg",
} as const;
export const locations = {
  youngsville: {
    name: "Youngsville",
    eyebrow: "Franklin County",
    title: "Custom homes shaped for life in Youngsville.",
    copy: "Russin Homes builds in established communities and on selected homesites across Youngsville.",
    detail:
      "Current Youngsville work includes three available homes, two Hidden Lake presale opportunities, and completed residences that show the range of our work.",
    image: projects[7].heroImage!,
  },
  "wake-forest": {
    name: "Wake Forest",
    eyebrow: "Wake and Franklin counties",
    title: "Direct builder involvement in Wake Forest.",
    copy: "Russin Homes brings personal oversight to selected custom builds and presale opportunities around Wake Forest.",
    detail:
      "Two Thompson Mill presale homesites are currently offered with proposed plans. Prescott Lot 18 is one completed example of our nearby work.",
    image: projects[9].heroImage!,
  },
  raleigh: {
    name: "Raleigh",
    eyebrow: "Wake County",
    title: "A focused approach to building in Raleigh.",
    copy: "Russin Homes considers Raleigh projects where the homesite, goals, and timing align.",
    detail:
      "No Raleigh inventory is currently advertised. Start with a direct conversation about your site and plans.",
    image: projects[8].heroImage!,
  },
} as const;
export const routes = [
  "/",
  "/portfolio",
  "/opportunities",
  "/parade-of-homes",
  "/about",
  "/contact",
  "/locations/youngsville",
  "/locations/wake-forest",
  "/locations/raleigh",
  "/build-updates",
  ...(PRIVATE_TOURS_ENABLED ? ["/private-tour"] : []),
  ...publishedProjects.map(
    (p) => `${p.category === "presale" ? "/opportunities" : "/portfolio"}/${p.slug}`,
  ),
];
