export const company = {
  name: "Bravo Healthcare",
  legalName: "Bravo Healthcare",
  email: "admin@bravohcs.com",
  address: {
    street: "1601 Industrial Blvd, Ste 3059",
    city: "Sugar Land",
    state: "Texas",
    zip: "77478",
    formatted: "1601 Industrial Blvd, Ste 3059, Sugar Land, Texas 77478",
  },
  hours: {
    days: "Monday–Friday",
    time: "9:00 a.m.–5:00 p.m.",
    short: "Monday–Friday • 9:00 AM–5:00 PM",
  },
  emergencyMessage: "For medical emergencies, call 911.",
  region: "Texas HHSC Region 6",
  regionLine:
    "Serving eligible individuals and families throughout Texas HHSC Region 6",
  utilityRegion: "Serving Texas HHSC Region 6",
  mission:
    "Our mission is to improve the quality of life of every individual we serve by providing personalized care that promotes comfort, dignity, and well-being for clients and their caregivers.",
  description:
    "Bravo Healthcare provides compassionate care and dependable support at home and in residential settings, helping individuals live safely, comfortably, and independently.",
  shortDescription:
    "Compassionate care and dependable support in home and residential settings.",
  insuranceNotice:
    "Please contact our office to verify current payer participation. Coverage, eligibility, authorization, and benefits must be verified before services begin. Acceptance of an insurance plan does not guarantee payment.",
  eligibilityNote:
    "Services may depend on assessed needs, physician orders, eligibility, authorization, and approved service categories.",
  logo: {
    src: "/images/logo/bravo-healthcare-logo.png",
    alt: "Bravo Healthcare",
    width: 2048,
    height: 683,
  },
} as const;

export const divisions = {
  homeHealth: {
    name: "Bravo Home Health",
    heading: "Professional Care in the Comfort of Home",
    description:
      "Bravo Home Health provides compassionate home-based healthcare and services to help individuals safely manage their health, maintain independence, and remain comfortable at their residence.",
    href: "/home-health",
  },
  residential: {
    name: "Bravo Residential",
    heading: "A Safe Place to Call Home",
    badge: "Coming Soon",
    description:
      "Bravo Residential is being developed to provide safe, welcoming, and person-centered living environments for eligible individuals who need assistance with daily living, personal development, and community participation.",
    href: "/residential",
  },
} as const;
