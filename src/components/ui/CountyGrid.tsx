import { MapPin } from "lucide-react";
import { serviceCounties } from "@/data/counties";

export function CountyGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {serviceCounties.map((county) => (
        <li
          key={county}
          className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-bravo-navy shadow-[0_6px_20px_rgba(1,42,98,0.05)]"
        >
          <MapPin className="h-4 w-4 shrink-0 text-bravo-teal" aria-hidden="true" />
          {county} County
        </li>
      ))}
    </ul>
  );
}
