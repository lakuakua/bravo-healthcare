import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
            light ? "text-bravo-light-teal" : "text-bravo-teal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-3xl sm:text-4xl lg:text-[2.75rem]", light && "text-white")}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/85" : "text-text-gray",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
