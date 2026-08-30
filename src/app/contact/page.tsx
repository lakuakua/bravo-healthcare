import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { EmergencyNotice } from "@/components/ui/EmergencyNotice";
import { PageHero } from "@/components/sections/PageHero";
import { company } from "@/data/company";
import { serviceCounties } from "@/data/counties";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bravo Healthcare to discuss home health services, referrals, or career information.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s Discuss How Bravo Healthcare Can Help"
        description="Whether you need home health services, residential program updates, referral assistance, or career information, our team is ready to speak with you."
        image="/images/hero/home-care.jpg"
        imageAlt="A Bravo caregiver sitting with a client at home"
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl">Office</h2>
          <address className="mt-5 space-y-3 text-lg not-italic text-text-gray">
            <p>
              {company.address.street}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="font-medium text-bravo-navy">
                {company.email}
              </a>
            </p>
            <p>
              {company.hours.days}
              <br />
              {company.hours.time}
            </p>
          </address>
          <p className="mt-6 text-text-gray">
            Service area: {company.region}, including {serviceCounties.slice(0, -1).join(", ")}, and{" "}
            {serviceCounties[serviceCounties.length - 1]} counties.
          </p>
          <EmergencyNotice className="mt-6" />
        </div>
        <div className="rounded-3xl bg-off-white p-6 sm:p-8">
          <ContactForm heading="Send a message" idPrefix="contact-" />
        </div>
      </section>
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-light-gray">
          <iframe
            title="Map of Bravo Healthcare office in Sugar Land, Texas"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-95.65%2C29.59%2C-95.61%2C29.64&layer=mapnik&marker=29.6196%2C-95.6349"
          />
        </div>
      </section>
    </>
  );
}
