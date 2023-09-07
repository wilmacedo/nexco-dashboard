import { Separator } from "@/components/ui/separator";
import { NotificationForm } from "./notification-form";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium">Notificações</h3>
        <p className="text-sm text-muted-foreground">
          Configure como você recebe as notificações
        </p>
      </div>

      <Separator />

      <NotificationForm />
    </div>
  );
}
