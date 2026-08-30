import { HeartHandshake, Home, MapPin, Sparkles } from "lucide-react";

const highlights = [
  { label: "Texas HHSC Region 6", detail: "Approved service area", icon: MapPin },
  { label: "Bravo Home Health", detail: "Care in the comfort of home", icon: HeartHandshake },
  { label: "Bravo Residential", detail: "Coming soon", icon: Home },
  { label: "Person-centered support", detail: "Comfort, dignity, and well-being", icon: Sparkles },
];

export function TrustBar() {
  return (
    <section className="bg-bravo-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {highlights.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-bravo-light-teal" aria-hidden="true" />
            <div>
              <p className="font-heading text-lg font-semibold">{item.label}</p>
              <p className="text-sm text-white/80">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
