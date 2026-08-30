import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { divisions } from "@/data/company";
import { ctas } from "@/data/navigation";

export function ResidentialComingSoon({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "" : "bg-pale-teal"}>
      <div className={compact ? "" : "mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24"}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/residential/home.jpg"
            alt="A welcoming home exterior representing Bravo Residential, coming soon"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <span className="inline-flex rounded-full bg-bravo-teal/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-bravo-teal uppercase">
            {divisions.residential.badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem]">{divisions.residential.heading}.</h2>
          <p className="mt-5 text-lg text-text-gray">{divisions.residential.description}</p>
          <div className="mt-8">
            <Button href={ctas.programUpdates.href}>{ctas.programUpdates.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
