"use client";

import { themeCookieName } from "@/config";
import { setCookie } from "cookies-next";
import { ReactNode, createContext, useContext } from "react";

export type Theme = "light" | "dark";
interface ThemeContextProps {
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {
  function toggleTheme() {
    const html = document.querySelector("html");
    if (!html) return;

    const currentTheme = html.classList[0] as Theme;

    ["light", "dark"].forEach((theme) => {
      if (currentTheme === theme) {
        const newTheme = theme === "light" ? "dark" : "light";
        setCookie(themeCookieName, newTheme);

        html.classList.remove(theme);
        html.classList.add(newTheme);
      }
    });
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
