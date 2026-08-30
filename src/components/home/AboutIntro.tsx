import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Home } from "lucide-react";
import { company, divisions } from "@/data/company";
import { images } from "@/data/images";
import { ctas } from "@/data/navigation";

export function AboutIntro() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={images.familyHome}
              alt="A caregiver offering supportive, personal attention to a client"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-8 -left-2 hidden w-48 overflow-hidden rounded-3xl border-8 border-white shadow-lg sm:block sm:w-56">
            <Image
              src={images.hands}
              alt="Supportive hands during a care session"
              width={448}
              height={336}
              className="h-36 w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:pl-6">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-bravo-teal uppercase">About Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem]">Welcome to Bravo Healthcare</h2>
          <p className="mt-5 text-lg text-text-gray">{company.welcome}</p>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pale-teal text-bravo-teal">
                <HeartHandshake className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg">{divisions.homeHealth.name}</h3>
                <p className="mt-1 text-text-gray">{divisions.homeHealth.heading}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pale-blue text-bravo-navy">
                <Home className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg">{divisions.residential.name}</h3>
                <p className="mt-1 text-text-gray">
                  {divisions.residential.heading} — {divisions.residential.badge}
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-bravo-navy"
          >
            Learn More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-light-gray bg-white p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-bravo-teal uppercase">
            {divisions.homeHealth.name}
          </p>
          <h3 className="mt-3 text-2xl">{divisions.homeHealth.heading}</h3>
          <p className="mt-4 text-text-gray">{divisions.homeHealth.description}</p>
          <Link
            href={ctas.exploreHomeHealth.href}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-bravo-navy"
          >
            {ctas.exploreHomeHealth.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
        <article className="rounded-3xl bg-pale-teal p-8">
          <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-bravo-teal uppercase">
            {divisions.residential.badge}
          </span>
          <h3 className="mt-4 text-2xl">{divisions.residential.heading}</h3>
          <p className="mt-4 text-text-gray">{divisions.residential.description}</p>
          <p className="mt-4 text-sm font-medium text-bravo-navy">{company.residentialComingSoon}</p>
          <Link
            href={ctas.programUpdates.href}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-bravo-navy"
          >
            {ctas.programUpdates.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
      </div>
    </section>
  );
}
