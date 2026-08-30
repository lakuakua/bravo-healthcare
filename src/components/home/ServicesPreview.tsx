import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceGrid } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section>
      <div className="relative overflow-hidden bg-bravo-navy">
        <Image
          src="/images/about/care-team.jpg"
          alt="A caregiver supporting a client during in-home care"
          fill
          className="object-cover object-left opacity-55 [mask-image:linear-gradient(to_right,black_0%,black_28%,transparent_88%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_28%,transparent_88%)]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bravo-navy/25 via-bravo-navy/55 to-bravo-navy" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            align="center"
            light
            title="Comprehensive Care Designed Around Your Needs"
            description="Services may include the following based on the individual’s assessed needs, physician’s orders, eligibility, authorization, and the agency’s approved service categories."
          />
        </div>
      </div>
      <div className="bg-off-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <ServiceGrid items={services} />
          </FadeIn>
          <div className="mt-10 text-center">
            <Button href={ctas.viewAllServices.href}>{ctas.viewAllServices.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
