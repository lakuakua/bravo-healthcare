import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  dark = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  dark?: boolean;
}) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 sm:py-20 lg:py-24", dark ? "bg-bravo-navy" : "bg-pale-teal")}>
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow ? (
          <p
            className={cn(
              "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
              dark ? "text-bravo-light-teal" : "text-bravo-teal",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2 className={cn("text-3xl sm:text-4xl lg:text-[2.75rem]", dark && "text-white")}>{title}</h2>
        {description ? (
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg", dark ? "text-white/85" : "text-text-gray")}>
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primary.href} variant={dark ? "light" : "primary"}>
            {primary.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant={dark ? "outline" : "secondary"} className={dark ? "text-white" : ""}>
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
