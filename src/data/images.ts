/**
 * Each photo is used exactly once across the site.
 * home-care.jpg (black male client) → homepage hero only.
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
