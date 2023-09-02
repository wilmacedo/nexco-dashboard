import { Bell, Cog } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger className="mr-1 py-1 px-2 inline-flex items-center gap-1 border rounded-lg transition-colors hover:bg-muted">
        <Bell size={14} />
        <span className="text-sm">12</span>
      </PopoverTrigger>

      <PopoverContent align="center" className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Notificações</span>
          <Link
            href="/notifications"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Cog size={18} />
          </Link>
        </div>

        <Tabs defaultValue="news" className="mt-2">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger size="sm" value="news">
              Novas
            </TabsTrigger>
            <TabsTrigger size="sm" value="archived">
              Arquivadas
            </TabsTrigger>
          </TabsList>

          <Separator className="my-4" />

          <TabsContent value="news">
            <div className="w-full inline-flex items-center justify-center">
              <span className="text-xs text-text-muted-foreground">
                Nenhuma nova notificação
              </span>
            </div>
          </TabsContent>

          <TabsContent value="archived">
            <div className="w-full inline-flex items-center justify-center">
              <span className="text-xs text-text-muted-foreground">
                Nenhuma notificação arquivada
              </span>
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
