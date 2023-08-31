import { Toaster } from "@/components/ui/toaster";
import { Fragment, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Fragment>
      {children}
      <Toaster />
    </Fragment>
  );
}
