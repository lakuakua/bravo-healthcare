import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/forms/ContactForm";
import { ServiceArea } from "@/components/home/ServiceArea";
import { company, divisions } from "@/data/company";
import { ctas } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Bravo Residential",
  description: divisions.residential.description,
};

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        badge={divisions.residential.badge}
        eyebrow={divisions.residential.name}
        title={divisions.residential.heading}
        description={divisions.residential.description}
        primary={ctas.programUpdates}
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-bravo-teal uppercase">Coming Soon</p>
        <h2 className="text-3xl">{divisions.residential.name}</h2>
        <p className="mt-4 text-lg text-text-gray">{divisions.residential.description}</p>
        <p className="mt-4 text-lg font-medium text-bravo-navy">{company.residentialComingSoon}</p>
      </section>
      <ServiceArea />
      <section className="bg-pale-teal px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 sm:p-8">
          <ContactForm heading="Receive Program Updates" idPrefix="residential-" submitLabel="Receive Program Updates" />
        </div>
      </section>
      <CTASection title="Let's Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
