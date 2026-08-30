"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function DesktopNavigation({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname();
  const isDark = tone === "dark";

  return (
    <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
      {navigation.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors",
              isDark
                ? active
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
                : active
                  ? "bg-pale-teal text-bravo-navy"
                  : "text-text-gray hover:bg-off-white hover:text-bravo-navy",
            )}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
