"use client";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/useTheme";
import { SessionProvider } from "next-auth/react";
import { Fragment, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Fragment>
      <SessionProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </SessionProvider>
    </Fragment>
  );
}
