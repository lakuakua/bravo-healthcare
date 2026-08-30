import { company } from "@/data/company";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeHealthCareService",
    name: company.name,
    description: company.description,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: "TX",
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    areaServed: "Texas HHSC Region 6",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
