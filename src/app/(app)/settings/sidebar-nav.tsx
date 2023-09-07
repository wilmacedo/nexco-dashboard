"use client";

import { Button } from "@/components/button";
import { sidebarLinks } from "@/config/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex md:flex-col space-y-1">
      {sidebarLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant="ghost"
            data-current={pathname === link.href}
            className={twMerge(
              "w-full py-2 px-4 text-sm text-start hover:underline rounded-sm",
              "data-[current=true]:bg-muted data-[current=true]:hover:bg-muted"
            )}
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
