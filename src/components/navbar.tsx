"use client";

import { useTheme } from "@/contexts/useTheme";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Logo } from "./logo";

export function Navbar() {
  const { toggleTheme, getTheme } = useTheme();

  return (
    <nav
      className={twMerge(
        "w-screen z-20 inline-flex items-center justify-center border-b",
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

        <button
          data-theme={getTheme()}
          className="group p-2 rounded-md transition-colors hover:bg-muted"
          onClick={toggleTheme}
        >
          <Sun size={20} className="block dark:hidden" />
          <Moon size={20} className="hidden dark:block" />
        </button>
      </div>
    </nav>
  );
}
