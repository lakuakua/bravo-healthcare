/**
 * Site photography paths. Every photo below is used in exactly one place,
 * and no person appears in more than one photo.
 */
export const images = {
  heroHomeCare: "/images/hero/home-care.jpg",
  familyHome: "/images/about/family-home.jpg",
  familySupport: "/images/about/family-support.jpg",
  nursePortrait: "/images/about/nurse-portrait.jpg",
  consultation: "/images/about/consultation.jpg",
  careCoordination: "/images/about/care-coordination.jpg",
  carePlanning: "/images/about/care-planning.jpg",
  physician: "/images/about/physician.jpg",
  homeHealthBanner: "/images/about/home-health-banner.jpg",
  nursingCare: "/images/services/nursing-care.jpg",
  personalCare: "/images/services/personal-care.jpg",
  therapySession: "/images/services/therapy-session.jpg",
  socialSupport: "/images/services/social-support.jpg",
  wellbeing: "/images/services/wellbeing.jpg",
  office: "/images/contact/office.jpg",
  careersTeam: "/images/careers/care-team.jpg",
  residentialHome: "/images/residential/home.jpg",
} as const;

export type SiteImage = (typeof images)[keyof typeof images];
