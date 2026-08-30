import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { InsuranceNotice } from "@/components/sections/InsuranceNotice";
import { ReferralCta } from "@/components/home/ReferralCta";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { company, divisions } from "@/data/company";
import { images } from "@/data/images";
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
        image={images.nursing}
        imageAlt="A caregiver providing in-home support"
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
        <div className="mt-16 space-y-10">
          <div>
            <h2 className="text-3xl">Home Health Services</h2>
            <p className="mt-4 max-w-3xl text-lg text-text-gray">{company.homeHealthServicesNote}</p>
          </div>
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 grid overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_rgba(1,42,98,0.08)] lg:grid-cols-2"
            >
              <div className={`relative min-h-64 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-8 sm:p-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pale-teal text-bravo-teal">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-2xl">{service.title}</h3>
                <p className="mt-3 text-lg text-text-gray">{service.fullDescription}</p>
                {service.availabilityDisclaimer ? (
                  <p className="mt-3 text-sm font-medium text-bravo-teal">{service.availabilityDisclaimer}</p>
                ) : null}
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-text-gray before:mr-2 before:text-bravo-teal before:content-['•']">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <InsuranceNotice />
      <ReferralCta />
      <CTASection title="Let's Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
