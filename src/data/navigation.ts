export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Home Health", href: "/home-health" },
  { label: "Residential", href: "/residential" },
  { label: "Services", href: "/services" },
  { label: "Referrals", href: "/referrals" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export const ctas = {
  getStarted: { label: "Get Started", href: "/contact" },
  exploreServices: { label: "Explore Our Services", href: "/services" },
  contactCareTeam: { label: "Contact Our Care Team", href: "/contact" },
  makeReferral: { label: "Make a Referral", href: "/referrals" },
  speakWithTeam: { label: "Speak With Our Team", href: "/contact" },
  exploreHomeHealth: { label: "Explore Home Health", href: "/home-health" },
  learnMore: { label: "Learn More", href: "/residential" },
  programUpdates: { label: "Receive Program Updates", href: "/residential" },
  requestCall: { label: "Request a Call", href: "/contact" },
  contactUs: { label: "Contact Us", href: "/contact" },
  viewOpportunities: { label: "View Opportunities", href: "/careers" },
  submitResume: { label: "Submit Your Resume", href: "/careers" },
  verifyCoverage: { label: "Verify Coverage", href: "/contact" },
  referAPatient: { label: "Refer a Patient", href: "/referrals" },
  viewAllServices: { label: "View All Services", href: "/services" },
} as const;

export const inquiryInterests = [
  "Home Health",
  "Skilled Nursing",
  "Private Duty Nursing",
  "Personal Assistance",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech-Language Pathology",
  "Medical Social Services",
  "Residential Services",
  "Referral Information",
  "Careers",
  "Other",
] as const;

export const referralServices = [
  "Skilled Nursing",
  "Private Duty Nursing",
  "Personal Assistance",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech-Language Pathology",
  "Medical Social Services",
  "Other",
] as const;
