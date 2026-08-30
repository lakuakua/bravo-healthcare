/**
 * Site photography paths.
 * home-care.jpg (black male client) is reserved for the homepage hero only.
 */
export const images = {
  heroHomeCare: "/images/hero/home-care.jpg",
  familyHome: "/images/about/family-home.jpg",
  careTeam: "/images/about/care-team.jpg",
  hands: "/images/about/hands.jpg",
  nursing: "/images/services/nursing.jpg",
  personalAssistance: "/images/services/personal-assistance.jpg",
  therapy: "/images/services/therapy.jpg",
  residentialHome: "/images/residential/home.jpg",
  careersTeam: "/images/careers/team.jpg",
} as const;

export type SiteImage = (typeof images)[keyof typeof images];
