import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { homeHealthSections } from "@/data/services";

export function HomeHealthServiceSections() {
  return (
    <div className="space-y-10">
      {homeHealthSections.map((section) => (
        <article
          key={section.slug}
          id={section.slug}
          className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(1,42,98,0.08)] sm:p-10"
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pale-teal text-bravo-teal">
            <ServiceIcon name={section.icon} className="h-6 w-6" />
          </div>
          <h2 className="text-2xl">{section.title}</h2>
          <p className="mt-3 text-lg text-text-gray">{section.intro}</p>
          {section.availabilityDisclaimer ? (
            <p className="mt-3 text-sm font-medium text-bravo-teal">{section.availabilityDisclaimer}</p>
          ) : null}
          {section.features ? (
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {section.features.map((feature) => (
                <li key={feature} className="text-text-gray before:mr-2 before:text-bravo-teal before:content-['•']">
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}
          {section.therapyTypes ? (
            <ul className="mt-6 space-y-2">
              {section.therapyTypes.map((type) => (
                <li key={type} className="text-text-gray before:mr-2 before:text-bravo-teal before:content-['•']">
                  {type}
                </li>
              ))}
            </ul>
          ) : null}
          {section.closingNote ? (
            <p className="mt-6 text-lg text-text-gray">{section.closingNote}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
