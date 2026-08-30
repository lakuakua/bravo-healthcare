import Image from "next/image";
import Link from "next/link";
import { EmergencyNotice } from "@/components/ui/EmergencyNotice";
import { company } from "@/data/company";
import { footerLegal, navigation } from "@/data/navigation";
import { footerServices } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-bravo-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-3 py-2">
            <Image
              src={company.logo.src}
              alt={company.logo.alt}
              width={200}
              height={67}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">{company.shortDescription}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-bravo-light-teal uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-bravo-light-teal uppercase">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServices.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-bravo-light-teal uppercase">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/85">
            <p>
              {company.address.street}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </p>
            <p>
              {company.hours.days}
              <br />
              {company.hours.time}
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Bravo Healthcare. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerLegal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <EmergencyNotice className="text-white/70 [&_span]:text-white/70" />
          </div>
        </div>
      </div>
    </footer>
  );
}
