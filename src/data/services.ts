import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "skilled-private-duty-nursing",
    title: "Skilled & Private Duty Nursing",
    shortDescription:
      "Skilled and extended-hour nursing care for children and adults with medical and complex care needs.",
    fullDescription:
      "Bravo provides skilled and extended-hour nursing care for children and adults with medical and complex care needs. Services may include health assessments, vital-sign monitoring, medication support, and coordination with the healthcare team.",
    icon: "stethoscope",
    image: "/images/services/nursing.jpg",
    imageAlt: "A caregiver providing in-home nursing support",
    category: "nursing",
    features: [
      "Health assessments",
      "Vital-sign monitoring",
      "Medication administration",
      "Medication education",
      "Chronic disease care",
      "Wound care",
      "Post-surgical care",
      "Tracheostomy care",
      "Ventilator care",
      "Oxygen support",
      "Respiratory care",
      "G-tube feeding",
      "Catheter care",
      "Ostomy care",
      "Seizure precautions",
      "Aspiration precautions",
      "Infection precautions",
      "Skin precautions",
      "Patient education",
      "Caregiver education",
      "Coordination with physicians",
      "Coordination with the healthcare team",
    ],
  },
  {
    slug: "personal-assistance",
    title: "Personal Assistance Services",
    shortDescription:
      "Daily living support that promotes independence, safety, comfort, and dignity at home.",
    fullDescription:
      "Care professionals support daily living and independence through personal care, mobility assistance, household help, and companionship.",
    icon: "heart-handshake",
    image: "/images/services/personal-assistance.jpg",
    imageAlt: "Daily living support in a home setting",
    category: "personal-assistance",
    features: [
      "Bathing",
      "Grooming",
      "Dressing",
      "Toileting",
      "Mobility support",
      "Transfers",
      "Walking assistance",
      "Meal preparation",
      "Feeding support",
      "Medication reminders",
      "Light housekeeping",
      "Laundry",
      "Appointment assistance",
      "Activity assistance",
      "Respite care",
      "Companionship",
    ],
  },
  {
    slug: "physical-therapy",
    title: "Physical Therapy",
    shortDescription:
      "Support for mobility, strength, coordination, safety, and daily functioning.",
    fullDescription:
      "Physical therapy focuses on mobility, strength, coordination, safety, and daily functioning.",
    icon: "accessibility",
    image: "/images/services/therapy.jpg",
    imageAlt: "Mobility support during a home therapy session",
    category: "therapy",
    availabilityDisclaimer: "When authorized and available.",
    features: ["Mobility", "Strength", "Coordination", "Safety", "Daily functioning"],
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    shortDescription:
      "Support for daily functioning, independence, safety, and coordination.",
    fullDescription:
      "Occupational therapy focuses on daily functioning, independence, safety, and coordination.",
    icon: "hand-helping",
    image: "/images/about/hands.jpg",
    imageAlt: "Supportive hands during a care session",
    category: "therapy",
    availabilityDisclaimer: "When authorized and available.",
    features: ["Daily functioning", "Independence", "Safety", "Coordination"],
  },
  {
    slug: "speech-language-pathology",
    title: "Speech-Language Pathology",
    shortDescription:
      "Support for communication, swallowing, and daily functioning.",
    fullDescription:
      "Speech-language pathology focuses on communication, swallowing, and daily functioning.",
    icon: "message-circle",
    image: "/images/about/family-home.jpg",
    imageAlt: "A supportive conversation between a caregiver and client",
    category: "therapy",
    availabilityDisclaimer: "When authorized and available.",
    features: ["Communication", "Swallowing", "Daily functioning"],
  },
  {
    slug: "medical-social-services",
    title: "Medical Social Services",
    shortDescription:
      "Support for individuals and families navigating resources, planning, and adjustment to care needs.",
    fullDescription:
      "Medical social services may assist individuals and families with psychosocial assessments, community resources, long-term care planning, and family support.",
    icon: "users",
    image: "/images/about/care-team.jpg",
    imageAlt: "A caregiver supporting a client during a home visit",
    category: "social",
    features: [
      "Psychosocial assessments",
      "Community-resource identification",
      "Long-term care planning",
      "Financial-resource referrals",
      "Social-resource referrals",
      "Adjustment to illness",
      "Adjustment to disability",
      "Coordination with community organizations",
      "Patient support",
      "Family support",
    ],
  },
];

export const footerServices = [
  { label: "Skilled Nursing", href: "/services#skilled-private-duty-nursing" },
  { label: "Private Duty Nursing", href: "/services#skilled-private-duty-nursing" },
  { label: "Personal Assistance", href: "/services#personal-assistance" },
  { label: "Physical Therapy", href: "/services#physical-therapy" },
  { label: "Occupational Therapy", href: "/services#occupational-therapy" },
  { label: "Speech-Language Pathology", href: "/services#speech-language-pathology" },
  { label: "Medical Social Services", href: "/services#medical-social-services" },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
