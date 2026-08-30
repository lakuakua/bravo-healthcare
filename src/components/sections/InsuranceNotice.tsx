import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { ctas } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function InsuranceNotice({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id={compact ? undefined : "insurance-and-payment"}
      aria-labelledby={compact ? "insurance-and-payment-heading-compact" : "insurance-and-payment-heading"}
      className={cn(
        compact
          ? "rounded-3xl border border-bravo-teal/20 bg-white p-6 shadow-[0_10px_30px_rgba(1,42,98,0.06)] sm:p-8"
          : "scroll-mt-28 border-y border-bravo-teal/15 bg-pale-blue px-4 py-16 sm:px-6 lg:py-20",
      )}
    >
      <div className={cn(compact ? "" : "mx-auto max-w-3xl text-center")}>
        {!compact ? (
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-bravo-teal shadow-sm">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </div>
        ) : (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pale-teal text-bravo-teal">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
        )}
        <h2
          id={compact ? "insurance-and-payment-heading-compact" : "insurance-and-payment-heading"}
          className={cn(compact ? "text-2xl" : "text-3xl sm:text-4xl")}
        >
          Insurance and Payment
        </h2>
        <p className={cn("text-lg leading-relaxed text-text-gray", compact ? "mt-3" : "mt-5")}>
          {company.insuranceNotice}
        </p>
        <div className={compact ? "mt-5" : "mt-8"}>
          <Button href={ctas.verifyCoverage.href}>{ctas.verifyCoverage.label}</Button>
        </div>
      </div>
    </section>
  );
}
