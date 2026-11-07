import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceGrid } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { company, divisions } from "@/data/company";
import { images } from "@/data/images";
import { ctas } from "@/data/navigation";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section>
      <div className="relative overflow-hidden bg-bravo-navy">
        <Image
          src={images.homeHealthBanner}
          alt="A healthcare professional representing Bravo Home Health services"
          fill
          className="object-cover object-left opacity-55 [mask-image:linear-gradient(to_right,black_0%,black_28%,transparent_88%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_28%,transparent_88%)]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bravo-navy/25 via-bravo-navy/55 to-bravo-navy" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            align="center"
            light
            eyebrow={divisions.homeHealth.name}
            title="Home Health Services"
            description={company.homeHealthServicesNote}
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
