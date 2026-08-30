import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { HowCareBegins } from "@/components/home/HowCareBegins";
import { ReferralCta } from "@/components/home/ReferralCta";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { company } from "@/data/company";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Home health services from Bravo Healthcare, including nursing, personal assistance, therapy, and medical social services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Services designed around your needs"
        description={company.eligibilityNote}
        image="/images/services/nursing.jpg"
        imageAlt="A caregiver providing in-home support"
        primary={ctas.contactCareTeam}
      />
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6">
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
              <h2 className="text-2xl">{service.title}</h2>
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
      </section>
      <HowCareBegins />
      <ReferralCta />
      <CTASection title="Let’s Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
