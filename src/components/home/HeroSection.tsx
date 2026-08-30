import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/data/company";
import { ctas } from "@/data/navigation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bravo-navy">
      <Image
        src="/images/hero/home-care.jpg"
        alt="A caregiver sitting with a client at home, offering compassionate support"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-bravo-light-teal uppercase">
            Bravo Healthcare
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.05] font-semibold text-white">
            Compassionate Care. Right Where You Call Home.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
            Bravo Healthcare provides personalized home health and support services designed to help
            individuals live safely, comfortably, and independently.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={ctas.exploreServices.href} variant="gray">
              {ctas.exploreServices.label}
            </Button>
            <Button href={ctas.contactCareTeam.href} variant="outline" className="text-white">
              {ctas.contactCareTeam.label}
            </Button>
          </div>
          <p className="mt-8 text-sm font-medium text-bravo-light-teal">{company.regionLine}</p>
        </div>
        <div className="rounded-3xl bg-white/15 p-5 sm:p-7">
          <ContactForm compact heading="How Can We Help?" idPrefix="hero-" />
        </div>
      </div>
    </section>
  );
}
