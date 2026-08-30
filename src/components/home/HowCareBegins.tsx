import { company } from "@/data/company";
import { SectionHeading } from "@/components/sections/SectionHeading";

const steps = [
  { number: "01", title: "Contact Bravo" },
  { number: "02", title: "Discuss Your Needs" },
  { number: "03", title: "Eligibility & Authorization Review" },
  { number: "04", title: "Care Begins" },
];

export function HowCareBegins() {
  return (
    <section className="bg-off-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          title="How Care Begins"
          description={company.eligibilityNote}
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="rounded-3xl bg-white p-6">
              <span className="font-heading text-3xl font-semibold text-bravo-teal">{step.number}</span>
              <h3 className="mt-3 text-xl">{step.title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
