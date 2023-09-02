import { Theme } from "@/contexts/useTheme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "../styles/global.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexco",
  description: "The Next platform of Contributing and investments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function getTheme(): Theme {
    const theme = cookies().get("theme");
    if (!theme || !["light", "dark"].includes(theme.value)) return "light";

    return theme.value as Theme;
  }

  return (
    <html lang="en" className={getTheme()}>
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
