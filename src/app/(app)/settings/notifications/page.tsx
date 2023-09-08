import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import { api } from "@/services/api";
import { Preferences } from "@/types/request";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NotificationForm } from "./notification-form";

async function getPreferences() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/register");
  }

  try {
    const { data } = await api<{ preferences: Preferences }>(
      "/users/preferences",
      { next: { tags: ["preferences"] } }
    );

    return data.preferences;
  } catch (error) {
    return { communication: false, social: false };
  }
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
