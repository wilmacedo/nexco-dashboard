import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ProfileForm } from "./profile-form";

async function getUser() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/login");
  }

  return session.user;
}

export default async function Page() {
  const user = await getUser();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium">Perfil</h3>
        <p className="text-sm text-muted-foreground">
          Atualize as informações básicas da sua conta
        </p>
      </div>

      <Separator />

      <ProfileForm {...user} />
    </div>
  );
}
