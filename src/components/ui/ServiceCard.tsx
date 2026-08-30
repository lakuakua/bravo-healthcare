import Image from "next/image";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_rgba(1,42,98,0.08)]">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pale-teal text-bravo-teal">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-bravo-navy">{service.title}</h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-text-gray">{service.shortDescription}</p>
        {service.availabilityDisclaimer ? (
          <p className="mt-3 text-sm text-text-gray">{service.availabilityDisclaimer}</p>
        ) : null}
        <Link
          href={`/home-health#${service.slug}`}
          className="mt-5 text-sm font-semibold text-bravo-teal hover:text-bravo-navy"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
