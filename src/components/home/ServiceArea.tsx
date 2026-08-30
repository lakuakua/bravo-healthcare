import { CountyGrid } from "@/components/ui/CountyGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { company } from "@/data/company";

export function ServiceArea() {
  return (
    <section className="bg-pale-blue px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center" title="Service Area" description={company.serviceAreaLine} />
        <div className="mt-10">
          <CountyGrid />
        </div>
      </div>
    </section>
  );
}
