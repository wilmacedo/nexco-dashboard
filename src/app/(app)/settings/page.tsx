import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./profile-form";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium">Perfil</h3>
        <p className="text-sm text-muted-foreground">
          Atualize as informações básicas da sua conta
        </p>
      </div>

      <Separator />

      <ProfileForm />
    </div>
  );
}
