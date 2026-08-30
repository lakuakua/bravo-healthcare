import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function ImageTextSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2",
          reverse && "lg:[&>div:first-child]:order-2",
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div>
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-bravo-teal uppercase">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-5 text-lg text-text-gray">{description}</p>
          {cta ? (
            <div className="mt-8">
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
