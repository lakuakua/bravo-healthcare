import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { ctas } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Bravo Healthcare and help deliver compassionate, person-centered care.",
};

const categories = ["Nursing", "Caregiving", "Therapy", "Administrative", "Residential Support"];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Build a Career That Makes a Difference"
        description="Join a team committed to compassionate, respectful, person-centered care."
        image="/images/careers/team.jpg"
        imageAlt="A caregiver and client sharing a supportive moment"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl">Careers at Bravo</h2>
        <p className="mt-4 text-lg text-text-gray">
          Bravo Healthcare is building a team dedicated to personalized care that promotes comfort,
          dignity, and well-being. Career categories below are organizational only.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {categories.map((item) => (
            <li key={item} className="rounded-2xl bg-pale-blue px-4 py-4 font-medium text-bravo-navy">
              {item}
            </li>
          ))}
        </ul>
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
      <CTASection title="Let’s start a conversation." primary={ctas.submitResume} />
    </>
  );
}
