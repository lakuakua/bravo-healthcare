"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { ctas } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow",
        stuck && "border-b border-light-gray shadow-[0_8px_24px_rgba(1,42,98,0.08)]",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Bravo Healthcare home">
          <Image
            src={company.logo.src}
            alt={company.logo.alt}
            width={220}
            height={73}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>
        <DesktopNavigation tone="light" />
        <div className="hidden items-center gap-3 xl:flex">
          <Link href={ctas.makeReferral.href} className="text-sm font-semibold text-bravo-teal hover:text-bravo-navy">
            {ctas.makeReferral.label}
          </Link>
          <Button href={ctas.getStarted.href} variant="secondary">
            {ctas.getStarted.label}
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-bravo-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div id="mobile-menu">
        <MobileNavigation open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
