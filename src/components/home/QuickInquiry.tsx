import { ContactForm } from "@/components/forms/ContactForm";
import { EmergencyNotice } from "@/components/ui/EmergencyNotice";

export function QuickInquiry() {
  return (
    <section className="bg-off-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-bravo-teal uppercase">
            Start a conversation
          </p>
          <h2 className="text-3xl sm:text-4xl">Tell us how we can support you.</h2>
          <p className="mt-4 max-w-md text-lg text-text-gray">
            Share your name and how to reach you. We will follow up to discuss needs, eligibility,
            and next steps. Please do not include medical records or other sensitive health details.
          </p>
          <EmergencyNotice className="mt-6" />
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-[0_16px_50px_rgba(1,42,98,0.08)] sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
