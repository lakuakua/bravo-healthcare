import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for the Bravo Healthcare website.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="text-4xl">Privacy Policy</h1>
      <p className="mt-6 text-lg text-text-gray">
        Bravo Healthcare respects your privacy. This website is intended to provide information about
        our organization and to help people contact our office.
      </p>
      <h2 className="mt-10 text-2xl">Information you provide</h2>
      <p className="mt-4 text-text-gray">
        Public contact and referral forms collect only the details needed to follow up, such as name,
        email, phone, county, and a brief message. Please do not submit Social Security numbers,
        diagnoses, medication lists, medical records, or insurance identification numbers through these
        forms.
      </p>
      <h2 className="mt-10 text-2xl">How we use contact information</h2>
      <p className="mt-4 text-text-gray">
        Information submitted through this website is used to respond to inquiries, referrals, and
        career interest. Form submissions on this initial site are processed as contact requests and
        are not a clinical record.
      </p>
      <h2 className="mt-10 text-2xl">Contact</h2>
      <p className="mt-4 text-text-gray">
        Questions about this policy may be sent to{" "}
        <a href={`mailto:${company.email}`} className="font-medium text-bravo-navy">
          {company.email}
        </a>
        .
      </p>
      <p className="mt-8 text-sm text-text-gray">{company.emergencyMessage}</p>
    </article>
  );
}
