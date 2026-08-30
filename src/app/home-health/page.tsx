import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { HomeHealthServiceSections } from "@/components/sections/HomeHealthServiceSections";
import { InsuranceNotice } from "@/components/sections/InsuranceNotice";
import { ServiceGrid } from "@/components/ui/ServiceCard";
import { ReferralCta } from "@/components/home/ReferralCta";
import { ServiceArea } from "@/components/home/ServiceArea";
import { company, divisions } from "@/data/company";
import { images } from "@/data/images";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Bravo Home Health",
  description: divisions.homeHealth.description,
};

export default function HomeHealthPage() {
  return (
    <>
      <PageHero
        eyebrow={divisions.homeHealth.name}
        title={divisions.homeHealth.heading}
        description={divisions.homeHealth.description}
        image={images.personalAssistance}
        imageAlt="Home-based care between a Bravo caregiver and client"
        primary={ctas.contactCareTeam}
        secondary={ctas.makeReferral}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-bravo-teal uppercase">Overview</p>
        <h2 className="text-3xl">{divisions.homeHealth.heading}</h2>
        <p className="mt-4 max-w-3xl text-lg text-text-gray">{divisions.homeHealth.description}</p>
      </section>
      <section className="bg-off-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl">Home Health Services</h2>
          <p className="mb-10 max-w-3xl text-lg text-text-gray">{company.homeHealthServicesNote}</p>
          <ServiceGrid items={services} />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <HomeHealthServiceSections />
      </section>
      <ReferralCta />
      <ServiceArea />
      <InsuranceNotice />
      <CTASection title="Let's Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} secondary={ctas.makeReferral} />
    </>
  );
}
