import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

export function EmergencyNotice({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 text-sm text-text-gray",
        className,
      )}
    >
      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bravo-red" aria-hidden="true" />
      <span>{company.emergencyMessage}</span>
    </p>
  );
}
