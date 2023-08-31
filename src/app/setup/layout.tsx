import { Fragment, ReactNode } from "react";

interface SetupLayoutProps {
  children: ReactNode;
}

export default function SetupLayout({ children }: SetupLayoutProps) {
  return <Fragment>{children}</Fragment>;
}
