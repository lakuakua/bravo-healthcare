import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ReferralForm } from "@/components/forms/ReferralForm";
import { ServiceArea } from "@/components/home/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";
import { InsuranceNotice } from "@/components/sections/InsuranceNotice";
import { ServiceGrid } from "@/components/ui/ServiceCard";
import { company } from "@/data/company";
import { images } from "@/data/images";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Referrals",
  description: company.referralsNote,
};

const who = ["Hospitals", "Rehabilitation facilities", "Physicians", "Case managers", "Healthcare providers"];

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        title="Referrals"
        description={company.referralsNote}
        image={images.careTeam}
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
        <h2 className="mt-14 text-3xl">Bravo Home Health Services</h2>
        <p className="mt-3 mb-8 text-text-gray">{company.homeHealthServicesNote}</p>
        <ServiceGrid items={services} />
      </section>
      <section className="bg-off-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 sm:p-8">
          <h2 className="mb-6 text-3xl">Referral Form</h2>
          <ReferralForm />
        </div>
      </section>
      <InsuranceNotice />
      <ServiceArea />
      <CTASection title="Speak With Our Team" primary={ctas.speakWithTeam} />
    </>
  );
}
