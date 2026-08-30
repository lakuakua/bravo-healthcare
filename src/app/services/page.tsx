import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { InsuranceNotice } from "@/components/sections/InsuranceNotice";
import { ReferralCta } from "@/components/home/ReferralCta";
import { ServiceGrid } from "@/components/ui/ServiceCard";
import { company, divisions } from "@/data/company";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: company.homeHealthServicesNote,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Bravo Home Health and Bravo Residential"
        description={company.welcome}
        primary={ctas.exploreHomeHealth}
        secondary={ctas.programUpdates}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-light-gray bg-white p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-bravo-teal uppercase">
              {divisions.homeHealth.name}
            </p>
            <h2 className="mt-3 text-2xl">{divisions.homeHealth.heading}</h2>
            <p className="mt-4 text-text-gray">{divisions.homeHealth.description}</p>
            <Link
              href={divisions.homeHealth.href}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-bravo-navy"
            >
              {ctas.exploreHomeHealth.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
          <article className="rounded-3xl bg-pale-teal p-8">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-bravo-teal uppercase">
              {divisions.residential.badge}
            </span>
            <h2 className="mt-4 text-2xl">{divisions.residential.name}</h2>
            <p className="mt-3 text-lg font-medium text-bravo-navy">{divisions.residential.heading}</p>
            <p className="mt-4 text-text-gray">{divisions.residential.description}</p>
            <p className="mt-4 text-sm font-medium text-bravo-navy">{company.residentialComingSoon}</p>
            <Link
              href={divisions.residential.href}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-bravo-navy"
            >
              {ctas.programUpdates.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl">Home Health Services</h2>
          <p className="mt-4 max-w-3xl text-lg text-text-gray">{company.homeHealthServicesNote}</p>
          <div className="mt-10">
            <ServiceGrid items={services} showImages={false} />
          </div>
        </div>
      </section>
      <InsuranceNotice />
      <ReferralCta />
      <CTASection title="Let's Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
