"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ctas, navigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="border-t border-light-gray bg-white px-4 py-4 xl:hidden">
      <nav aria-label="Mobile" className="flex flex-col gap-1">
        {navigation.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "rounded-xl px-3 py-3 text-base font-medium",
                active ? "bg-pale-teal text-bravo-navy" : "text-bravo-navy hover:bg-off-white",
              )}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-4 flex flex-col gap-2">
        <Button href={ctas.getStarted.href}>{ctas.getStarted.label}</Button>
        <Button href={ctas.makeReferral.href} variant="secondary">
          {ctas.makeReferral.label}
        </Button>
      </div>
    </div>
  );
}
