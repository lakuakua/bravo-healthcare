export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  imageAlt: string;
  features: string[];
  category: string;
  availabilityDisclaimer?: string;
};

export type HomeHealthSection = {
  slug: string;
  title: string;
  intro: string;
  icon: string;
  image: string;
  imageAlt: string;
  features?: string[];
  therapyTypes?: string[];
  closingNote?: string;
  availabilityDisclaimer?: string;
};
