import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function PageHero({
  eyebrow,
  title,
  description,
  badge,
  image,
  imageAlt,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative min-h-[48vh] overflow-hidden bg-bravo-navy">
      {image && imageAlt ? (
        <>
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-bravo-navy/72" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-bravo-navy via-bravo-blue to-bravo-navy" />
      )}
      <div className="relative mx-auto flex min-h-[48vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-3xl">
          {badge ? (
            <span className="mb-4 inline-flex rounded-full bg-bravo-teal/20 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-bravo-light-teal uppercase">
              {badge}
            </span>
          ) : null}
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-bravo-light-teal uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-[clamp(2.25rem,4vw,4rem)] text-white">{title}</h1>
          {description ? <p className="mt-5 max-w-2xl text-lg text-white/90">{description}</p> : null}
          {primary || secondary ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary ? (
                <Button href={primary.href} variant="light">
                  {primary.label}
                </Button>
              ) : null}
              {secondary ? (
                <Button href={secondary.href} variant="outline" className="text-white">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
