import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/useTheme";
import { Fragment, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Fragment>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </Fragment>
  );
}
