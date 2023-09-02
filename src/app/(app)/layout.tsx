import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <div className="pt-24 overflow-x-hidden">{children}</div>
    </>
  );
}
