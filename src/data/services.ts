import type { HomeHealthSection, Service } from "@/types";
import { images } from "@/data/images";

export const homeHealthSections: HomeHealthSection[] = [
  {
    slug: "skilled-private-duty-nursing",
    title: "Skilled and Private Duty Nursing",
    intro:
      "We provide skilled and extended-hour nursing care for children and adults with medical and complex care needs. Services may include:",
    icon: "stethoscope",
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

/** Card summaries — each card image is unique; skilled nursing uses icon only (photo on /home-health hero). */
export const services: Service[] = [
  {
    slug: "skilled-private-duty-nursing",
    title: "Skilled and Private Duty Nursing",
    shortDescription:
      "Skilled and extended-hour nursing care for children and adults with medical and complex care needs.",
    fullDescription:
      "We provide skilled and extended-hour nursing care for children and adults with medical and complex care needs.",
    icon: "stethoscope",
    category: "nursing",
    features: homeHealthSections[0].features ?? [],
  },
  {
    slug: "personal-assistance",
    title: "Personal Assistance Services",
    shortDescription:
      "Daily living support that promotes independence, safety, comfort, and dignity at home.",
    fullDescription: "Our care professionals support daily living and independence.",
    icon: "heart-handshake",
    image: images.personalAssistance,
    imageAlt: "Personal assistance in a home setting",
    category: "personal-assistance",
    features: homeHealthSections[1].features ?? [],
  },
  {
    slug: "therapy-services",
    title: "Therapy Services",
    shortDescription:
      "Physical therapy, occupational therapy, and speech-language pathology when authorized and available.",
    fullDescription:
      "When authorized and available, therapy services may include physical therapy, occupational therapy, and speech-language pathology.",
    icon: "accessibility",
    image: images.therapy,
    imageAlt: "Therapy support during a home care session",
    category: "therapy",
    availabilityDisclaimer: "When authorized and available.",
    features: ["Physical therapy", "Occupational therapy", "Speech-language pathology"],
  },
  {
    slug: "medical-social-services",
    title: "Medical Social Services",
    shortDescription:
      "Support for individuals and families navigating resources, planning, and adjustment to care needs.",
    fullDescription: "Medical social services may assist individuals and families with:",
    icon: "users",
    category: "social",
    features: homeHealthSections[3].features ?? [],
  },
];

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
