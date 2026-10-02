export const site = {
  name: "Acco Electric",
  shortName: "Acco Electric",
  tagline: "Expert electricians for all your electrical needs.",
  phone: "(415) 971-2857",
  phoneHref: "tel:+14159712857",
  email: "Acco_Electric@comcast.net",
  emailHref: "mailto:Acco_Electric@comcast.net",
  address: {
    street: "75 Red Hill Ave",
    city: "San Anselmo",
    state: "CA",
    zip: "94960",
    full: "75 Red Hill Ave, San Anselmo, CA 94960",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=75+Red+Hill+Ave,+San+Anselmo,+CA+94960",
  mapsEmbed:
    "https://www.google.com/maps?q=75+Red+Hill+Ave,+San+Anselmo,+CA+94960&output=embed",
  hours: "Monday-Friday, 7:30am-4:00pm",
  hoursShort: "Mon-Fri 7:30am-4:00pm",
  established: "2007",
  serviceArea: "San Anselmo and the greater Marin / Bay Area",
  sourceUrl: "https://www.acco-electric.com/",
  owners: "Nate and Layne",
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "residential",
    title: "Residential electrical",
    summary:
      "From troubleshooting outlets to whole-home wiring, we deliver licensed, insured workmanship that stands up to Marin homes.",
    image: "/images/gallery-great-room-2.jpg",
    imageAlt: "Lit great room with layered ceiling and accent lighting",
  },
  {
    slug: "panels",
    title: "Panel upgrades and inspections",
    summary:
      "Panel replacements and thorough checks of outlets and the electrical system so your home is safe and ready for modern loads.",
    image: "/images/gallery-panel-2.jpg",
    imageAlt: "Electrical panel and wiring work in progress",
  },
  {
    slug: "ev-chargers",
    title: "EV charger installation",
    summary:
      "Hard-wired Level 2 chargers tied cleanly into your panel so your car can fast-charge at home.",
    image: "/images/gallery-work-2.jpg",
    imageAlt: "Electrical installation work on a residential project",
  },
  {
    slug: "lighting",
    title: "Lighting and smart controls",
    summary:
      "Designer lighting installs and Lutron-style dimming systems you can control from your phone - upgrades, not emergencies.",
    image: "/images/gallery-kitchen.jpg",
    imageAlt: "Modern kitchen with warm recessed and pendant lighting",
  },
  {
    slug: "remodels",
    title: "Remodel and custom installs",
    summary:
      "Major remodel electrical, creative routing, and finish work that stays on time and on estimate.",
    image: "/images/gallery-dining.jpg",
    imageAlt: "Dining room with architectural lighting and glass doors",
  },
  {
    slug: "audio",
    title: "Audio and networking",
    summary:
      "Custom in-wall and in-ceiling audio, Sonos, and home network installs under the Acco Sound side of the shop.",
    image: "/images/gallery-bedroom.jpg",
    imageAlt: "Bedroom with clean architectural lighting and speakers",
  },
] as const;

export const gallery = [
  {
    src: "/images/gallery-kitchen.jpg",
    alt: "Kitchen remodel with recessed lighting and pendants",
    width: 2003,
    height: 2400,
  },
  {
    src: "/images/gallery-dining.jpg",
    alt: "Dining room with glass doors and ceiling lights",
    width: 2400,
    height: 1808,
  },
  {
    src: "/images/gallery-great-room-2.jpg",
    alt: "Great room with layered ceiling lighting",
    width: 1400,
    height: 933,
  },
  {
    src: "/images/gallery-bedroom.jpg",
    alt: "Bedroom with recessed lighting and clean finishes",
    width: 2400,
    height: 1855,
  },
  {
    src: "/images/gallery-belvedere-1.jpg",
    alt: "Interior living space with warm lighting",
    width: 800,
    height: 562,
  },
  {
    src: "/images/gallery-belvedere-2.jpg",
    alt: "Interior hallway and living area lighting",
    width: 800,
    height: 601,
  },
  {
    src: "/images/gallery-millvalley.jpg",
    alt: "Mill Valley interior lighting project",
    width: 1500,
    height: 2250,
  },
  {
    src: "/images/gallery-lighting.jpg",
    alt: "Architectural lighting detail",
    width: 1500,
    height: 2000,
  },
  {
    src: "/images/gallery-interior.jpg",
    alt: "Interior electrical finish work",
    width: 1333,
    height: 2000,
  },
  {
    src: "/images/gallery-rei.jpg",
    alt: "Commercial electrical project",
    width: 2400,
    height: 1800,
  },
  {
    src: "/images/gallery-work-1.jpg",
    alt: "Recent electrical field work",
    width: 1800,
    height: 2400,
  },
  {
    src: "/images/gallery-work-2.jpg",
    alt: "On-site electrical installation",
    width: 2400,
    height: 1800,
  },
  {
    src: "/images/gallery-panel-2.jpg",
    alt: "Panel and wiring detail",
    width: 2400,
    height: 1800,
  },
  {
    src: "/images/gallery-panel-3.jpg",
    alt: "Electrical equipment close-up",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/hero-crew.jpg",
    alt: "Acco Electric crew on a fishing trip in company shirts",
    width: 1205,
    height: 599,
  },
  {
    src: "/images/hero-vw.jpg",
    alt: "Nate in the Acco Electric red VW Beetle with company logo",
    width: 2400,
    height: 1350,
  },
] as const;

/** Public reviews cited on third-party listings for the San Anselmo shop. */
export const reviews = [
  {
    quote:
      "Nate and his team did a great job of installing my Electric Charger for my car. Aaron hard wired the charger into my panel - and upgraded my Lutron lighting controls. ACCO does excellent work.",
    attribution: "Local homeowner",
    year: "2023",
  },
  {
    quote:
      "Long-time customers of Nate and his awesome crew: efficient, polite, creative, actually fun to work with. Acco has done major electrical for us as well as custom in-wall audio and networking. Highest recommendation.",
    attribution: "Repeat client",
    year: "2021",
  },
  {
    quote:
      "I have used Acco Electric for both panel replacement and a comprehensive inspection of my home's outlets and electrical system. They are professional, responsive, and stand behind their work.",
    attribution: "Bay Area client",
    year: "2026",
  },
] as const;
