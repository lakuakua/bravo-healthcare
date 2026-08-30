import type { HomeHealthSection, Service } from "@/types";
import { images } from "@/data/images";

const sectionImages: Record<string, { image: string; imageAlt: string }> = {
  "skilled-private-duty-nursing": {
    image: images.nursing,
    imageAlt: "A caregiver providing in-home nursing support",
  },
  "personal-assistance": {
    image: images.personalAssistance,
    imageAlt: "Daily living support in a home setting",
  },
  "therapy-services": {
    image: images.therapy,
    imageAlt: "Mobility support during a home therapy session",
  },
  "medical-social-services": {
    image: images.careTeam,
    imageAlt: "A caregiver supporting a client during a home visit",
  },
};

export const homeHealthSections: HomeHealthSection[] = [
  {
    slug: "skilled-private-duty-nursing",
    title: "Skilled and Private Duty Nursing",
    intro:
      "We provide skilled and extended-hour nursing care for children and adults with medical and complex care needs. Services may include:",
    icon: "stethoscope",
    ...sectionImages["skilled-private-duty-nursing"],
    features: [
      "Health assessments and vital-sign monitoring",
      "Medication administration and education",
      "Chronic disease, wound, and post-surgical care",
      "Tracheostomy, ventilator, oxygen, and respiratory care",
      "G-tube feeding, catheter, and ostomy care",
      "Seizure, aspiration, infection, and skin precautions",
      "Patient and caregiver education",
      "Coordination with physicians and the healthcare team",
    ],
  },
  {
    slug: "personal-assistance",
    title: "Personal Assistance Services",
    intro: "Our care professionals support daily living and independence through:",
    icon: "heart-handshake",
    ...sectionImages["personal-assistance"],
    features: [
      "Bathing, grooming, dressing, and toileting",
      "Mobility, transfers, and walking assistance",
      "Meal preparation and feeding support",
      "Medication reminders",
      "Light housekeeping and laundry",
      "Appointment and activity assistance",
      "Respite care and companionship",
    ],
  },
  {
    slug: "therapy-services",
    title: "Therapy Services",
    intro: "When authorized and available, therapy services may include:",
    icon: "accessibility",
    ...sectionImages["therapy-services"],
    therapyTypes: ["Physical therapy", "Occupational therapy", "Speech-language pathology"],
    closingNote:
      "Therapy services are designed to help individuals improve or maintain mobility, communication, swallowing, strength, coordination, safety, and daily functioning.",
    availabilityDisclaimer: "When authorized and available.",
  },
  {
    slug: "medical-social-services",
    title: "Medical Social Services",
    intro: "Medical social services may assist individuals and families with:",
    icon: "users",
    ...sectionImages["medical-social-services"],
    features: [
      "Psychosocial assessments",
      "Community-resource identification",
      "Long-term care planning",
      "Financial and social-resource referrals",
      "Adjustment to illness or disability",
      "Coordination with community organizations",
      "Patient and family support",
    ],
  },
];

export const services: Service[] = homeHealthSections.map((section) => ({
  slug: section.slug,
  title: section.title,
  shortDescription:
    section.slug === "skilled-private-duty-nursing"
      ? "Skilled and extended-hour nursing care for children and adults with medical and complex care needs."
      : section.slug === "personal-assistance"
        ? "Daily living support that promotes independence, safety, comfort, and dignity at home."
        : section.slug === "therapy-services"
          ? "Physical therapy, occupational therapy, and speech-language pathology when authorized and available."
          : "Support for individuals and families navigating resources, planning, and adjustment to care needs.",
  fullDescription: section.intro,
  icon: section.icon,
  image: section.image,
  imageAlt: section.imageAlt,
  category:
    section.slug === "skilled-private-duty-nursing"
      ? "nursing"
      : section.slug === "personal-assistance"
        ? "personal-assistance"
        : section.slug === "therapy-services"
          ? "therapy"
          : "social",
  availabilityDisclaimer: section.availabilityDisclaimer,
  features: section.features ?? section.therapyTypes ?? [],
}));

export const footerServices = [
  { label: "Bravo Home Health", href: "/home-health" },
  { label: "Bravo Residential", href: "/residential" },
  { label: "Skilled and Private Duty Nursing", href: "/home-health#skilled-private-duty-nursing" },
  { label: "Personal Assistance Services", href: "/home-health#personal-assistance" },
  { label: "Therapy Services", href: "/home-health#therapy-services" },
  { label: "Medical Social Services", href: "/home-health#medical-social-services" },
  { label: "Insurance & Payment", href: "/#insurance-and-payment" },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getHomeHealthSection(slug: string) {
  return homeHealthSections.find((section) => section.slug === slug);
}
