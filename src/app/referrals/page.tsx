import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ReferralForm } from "@/components/forms/ReferralForm";
import { ServiceArea } from "@/components/home/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceGrid } from "@/components/ui/ServiceCard";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Referrals",
  description:
    "Bravo Healthcare accepts referrals from hospitals, rehabilitation facilities, physicians, case managers, and other healthcare providers.",
};

const who = ["Hospitals", "Rehabilitation facilities", "Physicians", "Case managers", "Healthcare providers"];
const steps = [
  { number: "01", title: "Submit a referral", detail: "Share the information needed to start a conversation." },
  { number: "02", title: "Our team follows up", detail: "We review the request and contact the referral source." },
  { number: "03", title: "Eligibility review", detail: "Needs, orders, eligibility, and authorization are considered." },
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        title="Make a Referral"
        description="Bravo accepts referrals from hospitals, rehabilitation facilities, physicians, case managers, and other healthcare providers."
        image="/images/about/care-team.jpg"
        imageAlt="A caregiver supporting a client during a home visit"
        primary={ctas.speakWithTeam}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl">Who Can Refer</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {who.map((item) => (
            <li key={item} className="rounded-2xl bg-pale-blue px-4 py-4 font-medium text-bravo-navy">
              {item}
            </li>
          ))}
        </ul>
        <h2 className="mt-14 text-3xl">Referral Process</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="rounded-3xl border border-light-gray p-6">
              <span className="font-heading text-3xl font-semibold text-bravo-teal">{step.number}</span>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-2 text-text-gray">{step.detail}</p>
            </li>
          ))}
        </ol>
        <h2 className="mt-14 text-3xl">Services Available</h2>
        <p className="mt-3 mb-8 text-text-gray">
          Requested services may include skilled nursing, private duty nursing, personal assistance,
          therapy, and medical social services, based on assessed needs and authorization.
        </p>
        <ServiceGrid items={services} />
      </section>
      <section className="bg-off-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 sm:p-8">
          <h2 className="mb-6 text-3xl">Referral Form</h2>
          <ReferralForm />
        </div>
      </section>
      <ServiceArea />
      <CTASection title="Speak With Our Team" primary={ctas.speakWithTeam} />
    </>
  );
}
