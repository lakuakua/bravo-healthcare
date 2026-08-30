import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/forms/ContactForm";
import { divisions } from "@/data/company";
import { ctas } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Residential",
  description: divisions.residential.description,
};

const vision = [
  {
    title: "Daily Living Support",
    description:
      "Intended to assist eligible individuals who need help with daily living in a safe, welcoming environment.",
  },
  {
    title: "Personal Development",
    description:
      "Being developed around person-centered living that supports growth, dignity, and individual goals.",
  },
  {
    title: "Community Participation",
    description:
      "Planned to help eligible individuals take part in community life with appropriate support.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        badge={divisions.residential.badge}
        title={divisions.residential.heading}
        description={divisions.residential.description}
        image="/images/residential/home.jpg"
        imageAlt="A welcoming home representing Bravo Residential, a program being developed"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-bravo-teal uppercase">Coming Soon</p>
        <h2 className="text-3xl">What Bravo Residential Is</h2>
        <p className="mt-4 text-lg text-text-gray">
          Bravo Residential is currently being developed. It is intended to provide safe, welcoming,
          person-centered living environments for eligible individuals who need assistance with daily
          living, personal development, and community participation.
        </p>
      </section>
      <section className="bg-off-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl">Our Vision</h2>
          <p className="mt-4 max-w-3xl text-lg text-text-gray">
            A safe place to call home—where eligible individuals can receive support with daily living,
            personal development, and community participation.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {vision.map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(1,42,98,0.06)]">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-text-gray">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-pale-teal px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 sm:p-8">
          <ContactForm heading="Receive Program Updates" idPrefix="residential-" submitLabel="Receive Program Updates" />
        </div>
      </section>
      <CTASection title="Let’s Discuss How Bravo Healthcare Can Help." primary={ctas.contactUs} />
    </>
  );
}
