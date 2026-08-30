import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { ctas } from "@/data/navigation";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function InsuranceNotice() {
  return (
    <section className="bg-off-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading align="center" title="Insurance & Payment" />
        <p className="mt-5 text-lg text-text-gray">{company.insuranceNotice}</p>
        <div className="mt-8">
          <Button href={ctas.verifyCoverage.href}>{ctas.verifyCoverage.label}</Button>
        </div>
      </div>
    </section>
  );
}
