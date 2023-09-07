import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import { SidebarNav } from "./sidebar-nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen inline-flex items-center justify-center px-4 md:px-16">
      <div className="w-full lg:max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-1">
            <h1 className="relative w-fit text-3xl">
              Configurações
              <div className="top-0 absolute w-full h-full bg-[#a5dc48] opacity-30 rounded-full" />
            </h1>
            <span className="block text-muted-foreground">
              Gerencie suas configurações de conta
            </span>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-[15rem_1fr] items-start gap-8">
            <SidebarNav />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
