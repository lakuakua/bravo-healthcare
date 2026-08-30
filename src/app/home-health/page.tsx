import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceGrid } from "@/components/ui/ServiceCard";
import { HowCareBegins } from "@/components/home/HowCareBegins";
import { ServiceArea } from "@/components/home/ServiceArea";
import { ReferralCta } from "@/components/home/ReferralCta";
import { company, divisions } from "@/data/company";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Home Health",
  description: divisions.homeHealth.description,
};

export default function HomeHealthPage() {
  return (
    <>
      <PageHero
        eyebrow="Bravo Home Health"
        title={divisions.homeHealth.heading}
        description={divisions.homeHealth.description}
        image="/images/hero/home-care.jpg"
        imageAlt="Home-based care between a Bravo caregiver and client"
        primary={ctas.contactCareTeam}
        secondary={ctas.makeReferral}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-bravo-teal uppercase">Overview</p>
        <h2 className="text-3xl">Professional Care in the Comfort of Home</h2>
        <p className="mt-4 max-w-3xl text-lg text-text-gray">
          Bravo Home Health provides compassionate, home-based healthcare and services to help
          individuals safely manage their health, maintain independence, and remain comfortable at
          their residence. {company.eligibilityNote}
        </p>
      </section>
      <section className="bg-off-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl">Home Health Services</h2>
          <ServiceGrid items={services} />
        </div>
      </section>
      <HowCareBegins />
      <ReferralCta />
      <ServiceArea />
      <CTASection title="Contact Our Care Team" primary={ctas.contactUs} secondary={ctas.makeReferral} />
    </>
  );
}
