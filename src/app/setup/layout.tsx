import { Metadata } from "next";
import { Fragment, ReactNode } from "react";

interface SetupLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Configurador",
};

export default function SetupLayout({ children }: SetupLayoutProps) {
  return <Fragment>{children}</Fragment>;
}
