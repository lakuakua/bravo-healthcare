import { Clock, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { ctas } from "@/data/navigation";
import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="bg-bravo-blue text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-medium tracking-wide">{company.utilityRegion}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-white/90">
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {company.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {company.hours.short}
          </span>
          <span className="hidden items-center gap-1.5 lg:inline-flex">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Sugar Land, Texas
          </span>
          <Link
            href={ctas.referAPatient.href}
            className="font-semibold text-bravo-light-teal hover:text-white"
          >
            {ctas.referAPatient.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
