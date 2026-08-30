import { CountyGrid } from "@/components/ui/CountyGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { company } from "@/data/company";

export function ServiceArea() {
  return (
    <section className="bg-pale-blue px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          title={`Proudly Serving ${company.region}`}
          description="Bravo Home Health proudly serves eligible individuals and families throughout Texas HHSC Region 6."
        />
        <div className="mt-10">
          <CountyGrid />
        </div>
      </div>
    </section>
  );
}
