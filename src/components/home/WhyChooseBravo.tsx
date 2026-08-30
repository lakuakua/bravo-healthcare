import { HeartHandshake, Home, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";

const features = [
  {
    title: "Personalized Care",
    description: "Care centered around individual needs, circumstances, and goals.",
    icon: Sparkles,
  },
  {
    title: "Compassion & Dignity",
    description: "Support delivered with respect, understanding, and compassion.",
    icon: HeartHandshake,
  },
  {
    title: "Coordinated Care",
    description:
      "Collaboration with physicians, caregivers, families, and healthcare teams when appropriate.",
    icon: Users,
  },
  {
    title: "Independence",
    description:
      "Support individuals in remaining safe and comfortable while maintaining as much independence as possible.",
    icon: Home,
  },
  {
    title: "Family Support",
    description: "Support clients as well as the caregivers and families involved in their care.",
    icon: ShieldCheck,
  },
];

export function WhyChooseBravo() {
  return (
    <section className="bg-off-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center" eyebrow="Why Choose Us" title="Care that stays close to home." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-3xl bg-white p-6 text-center shadow-[0_10px_30px_rgba(1,42,98,0.06)]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-bravo-blue text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-gray">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
