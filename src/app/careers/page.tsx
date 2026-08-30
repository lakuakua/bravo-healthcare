import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/data/company";
import { images } from "@/data/images";
import { ctas } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Careers",
  description: "Contact Bravo Healthcare for career information.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        description={company.contactIntro}
        image={images.careersTeam}
        imageAlt="A caregiver and client sharing a supportive moment"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl">Career Information</h2>
        <p className="mt-4 text-lg text-text-gray">{company.contactIntro}</p>
        <div className="mt-10 rounded-3xl border border-light-gray p-6">
          <h3 className="text-xl">Open Positions</h3>
          <p className="mt-3 text-text-gray">
            There are no published openings at this time. You may submit a general application for
            future consideration.
          </p>
        </div>
      </section>
      <section className="bg-off-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 sm:p-8">
          <ContactForm heading="Submit a general application" idPrefix="careers-" />
        </div>
      </section>
      <CTASection title="Let's Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
