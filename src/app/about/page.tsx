import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { MissionSection } from "@/components/sections/MissionSection";
import { CTASection } from "@/components/sections/CTASection";
import { InsuranceNotice } from "@/components/sections/InsuranceNotice";
import { ServiceArea } from "@/components/home/ServiceArea";
import { company, divisions } from "@/data/company";
import { images } from "@/data/images";
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
        title="Welcome to Bravo Healthcare"
        description={company.welcome}
        image={images.familySupport}
        imageAlt="A family meeting with a care planner in a comfortable living room"
        primary={ctas.contactUs}
      />
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={images.nursePortrait}
                alt="A Bravo Healthcare nurse reviewing a client care plan"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -right-4 -bottom-8 hidden w-52 overflow-hidden rounded-3xl border-8 border-white shadow-lg sm:block">
              <Image
                src={images.carePlanning}
                alt="A care planner connecting with a family by video"
                width={416}
                height={312}
                className="h-36 w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-bravo-teal uppercase">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl">{company.name}</h2>
            <p className="mt-5 text-lg text-text-gray">{company.welcome}</p>
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
            <p className="mt-4 text-sm font-medium text-bravo-navy">{company.residentialComingSoon}</p>
          </article>
        </div>
      </section>
      <MissionSection />
      <InsuranceNotice />
      <ServiceArea />
      <CTASection title="Let's Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
