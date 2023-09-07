import { Separator } from "@/components/ui/separator";
import { api } from "@/services/api";
import { getServerSession } from "next-auth";
import { NotificationForm } from "./notification-form";

async function getPreferences() {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("Not authorized");
  }

  const { preferences } = await api("/users/preferences", {
    method: "POST",
    body: JSON.stringify({ userEmail: session.user.email }),
  });

  return preferences;
}

export default async function Page() {
  const preferences = await getPreferences();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium">Notificações</h3>
        <p className="text-sm text-muted-foreground">
          Configure como você recebe as notificações
        </p>
      </div>

      <Separator />

      <NotificationForm {...preferences} />
    </div>
  );
}
