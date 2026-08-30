import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { MissionSection } from "@/components/sections/MissionSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceArea } from "@/components/home/ServiceArea";
import { WhyChooseBravo } from "@/components/home/WhyChooseBravo";
import { company, divisions } from "@/data/company";
import { ctas } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About",
  description: company.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Bravo Healthcare"
        title="Care built around the individual."
        description={company.description}
        image="/images/about/family-home.jpg"
        imageAlt="A caregiver offering personal support to a Bravo Healthcare client"
        primary={ctas.contactUs}
      />
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/hero/home-care.jpg"
                alt="A caregiver sitting with a client at home"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -right-4 -bottom-8 hidden w-52 overflow-hidden rounded-3xl border-8 border-white shadow-lg sm:block">
              <Image
                src="/images/about/family-home.jpg"
                alt="A supportive care conversation"
                width={416}
                height={312}
                className="h-36 w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-bravo-teal uppercase">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl">Bravo Healthcare</h2>
            <p className="mt-5 text-lg text-text-gray">
              Bravo Healthcare represents Bravo Home Health and Bravo Residential. We provide compassionate
              care and dependable support at home and in residential settings, helping individuals live
              safely, comfortably, and independently.
            </p>
            <p className="mt-4 text-lg text-text-gray">
              We focus on personalized support that promotes comfort, dignity, and well-being for clients
              and their caregivers.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-off-white px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(1,42,98,0.06)]">
            <h2 className="text-2xl">{divisions.homeHealth.name}</h2>
            <p className="mt-3 text-lg font-medium text-bravo-navy">{divisions.homeHealth.heading}</p>
            <p className="mt-4 text-text-gray">{divisions.homeHealth.description}</p>
          </article>
          <article className="rounded-3xl bg-pale-teal p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-bravo-teal uppercase">
              {divisions.residential.badge}
            </p>
            <h2 className="mt-2 text-2xl">{divisions.residential.name}</h2>
            <p className="mt-3 text-lg font-medium text-bravo-navy">{divisions.residential.heading}</p>
            <p className="mt-4 text-text-gray">{divisions.residential.description}</p>
          </article>
        </div>
      </section>
      <MissionSection />
      <WhyChooseBravo />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl">Our Approach to Care</h2>
        <p className="mt-4 text-lg text-text-gray">
          We focus on personalized support that promotes comfort, dignity, and well-being for clients
          and their caregivers. Services may depend on assessed needs, physician orders, eligibility,
          authorization, and approved service categories.
        </p>
      </section>
      <ServiceArea />
      <CTASection title="Let’s Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
