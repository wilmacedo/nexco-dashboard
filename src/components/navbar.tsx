"use client";

import { useTheme } from "@/contexts/useTheme";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";
import { Logo } from "./logo";
import { Notifications } from "./notification-nav";
import { Separator } from "./ui/separator";
import { UserNav } from "./user-nav";

export function Navbar() {
  const { toggleTheme, getTheme } = useTheme();

  return (
    <nav
      className={twMerge(
        "w-screen z-20 fixed inline-flex items-center justify-center border-b bg-background",
        "px-4 md:px-16"
      )}
    >
      <div
        className={twMerge(
          "py-4 w-full inline-flex items-center justify-between gap-4",
          "lg:max-w-5xl"
        )}
      >
        <div className="inline-flex items-center gap-2">
          <Logo className="w-6 h-6" />
          <h3 className="font-semibold text-lg">NEXCO</h3>
        </div>

        <div className="inline-flex items-center gap-2">
          <Button variant="ghost" className="group p-2" onClick={toggleTheme}>
            <Sun size={20} className="block dark:hidden" />
            <Moon size={20} className="hidden dark:block" />
          </Button>

          <Separator orientation="vertical" className="mx-2 h-6" />

          <Notifications />
          {/* <Button
            variant="outline"
            className="mr-1 py-1 px-2 inline-flex items-center gap-1"
          >
            <Bell size={14} />
            <span className="text-sm">12</span>
          </Button> */}

          <UserNav />
        </div>
      </div>
    </nav>
  );
}
