import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility commitment for the Bravo Healthcare website.",
};

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="text-4xl">Accessibility</h1>
      <p className="mt-6 text-lg text-text-gray">
        Bravo Healthcare is committed to making this website usable for as many people as possible. We
        aim to follow WCAG 2.2 AA guidance where practical, including semantic structure, keyboard
        access, visible focus, descriptive alternative text, and respect for reduced-motion
        preferences.
      </p>
      <h2 className="mt-10 text-2xl">Feedback</h2>
      <p className="mt-4 text-text-gray">
        If you experience a barrier on this website, please email{" "}
        <a href={`mailto:${company.email}`} className="font-medium text-bravo-navy">
          {company.email}
        </a>{" "}
        and include the page URL and a short description of the issue.
      </p>
    </article>
  );
}
