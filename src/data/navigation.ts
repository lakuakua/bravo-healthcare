export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Bravo Home Health", href: "/home-health" },
  { label: "Bravo Residential", href: "/residential" },
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
  exploreServices: { label: "Explore Our Services", href: "/home-health" },
  contactCareTeam: { label: "Contact Our Care Team", href: "/contact" },
  makeReferral: { label: "Make a Referral", href: "/referrals" },
  speakWithTeam: { label: "Speak With Our Team", href: "/contact" },
  exploreHomeHealth: { label: "Explore Bravo Home Health", href: "/home-health" },
  learnMore: { label: "Learn More", href: "/residential" },
  programUpdates: { label: "Receive Program Updates", href: "/residential" },
  requestCall: { label: "Request a Call", href: "/contact" },
  contactUs: { label: "Contact Us", href: "/contact" },
  viewOpportunities: { label: "View Opportunities", href: "/careers" },
  submitResume: { label: "Submit Your Resume", href: "/careers" },
  verifyCoverage: { label: "Verify Coverage", href: "/contact" },
  referAPatient: { label: "Refer a Patient", href: "/referrals" },
  viewAllServices: { label: "Explore Bravo Home Health", href: "/home-health" },
} as const;

export const inquiryInterests = [
  "Bravo Home Health",
  "Skilled Nursing",
  "Private Duty Nursing",
  "Personal Assistance",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech-Language Pathology",
  "Medical Social Services",
  "Bravo Residential",
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
