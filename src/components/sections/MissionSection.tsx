import { company } from "@/data/company";

export function MissionSection() {
  return (
    <section className="bg-bravo-navy px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-bravo-light-teal uppercase">
          Our Mission
        </p>
        <blockquote className="font-heading text-2xl leading-snug font-medium text-white sm:text-3xl lg:text-4xl">
          {company.mission}
        </blockquote>
      </div>
    </section>
  );
}
