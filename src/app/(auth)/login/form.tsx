"use client";

import { Button } from "@/components/button";
import { GoogleLogo } from "@/components/google-logo";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Loading = "google" | "email";

const loginUserFormSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(3),
});

type LoginUserFormData = z.infer<typeof loginUserFormSchema>;

export function Form() {
  const [loading, setLoading] = useState<Loading | null>(null);
  const [step, setStep] = useState(0);

  const router = useRouter();
  const { toast } = useToast();

  const { register, handleSubmit } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  async function authorizeUser(data: LoginUserFormData) {
    const { email, password } = data;

    setLoading("email");

    const response = await signIn("credentials", {
      callbackUrl: "/discover",
      email,
      password,
      redirect: false,
    });

    if (response?.error) {
      toast({
        variant: "destructive",
        title: "Oops! Algo deu errado",
        description: "Credenciais inválidas.",
      });

      setLoading(null);
    }

    router.push("/discover");
  }

  function handleSocial() {
    setLoading("google");
    signIn("google", { callbackUrl: "/discover" });
  }

  function handleEmailInput(event: ChangeEvent<HTMLInputElement>) {
    setStep(event.target.value.length > 0 ? 1 : 0);
  }

  return (
    <form
      onSubmit={handleSubmit(authorizeUser)}
      className="h-full flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold">Entrar</h1>
        <p className="mt-2 text-sm">Entre com sua conta via e-mail ou Google</p>

        <div className="mt-4">
          <div
            data-credentials={step > 0}
            className="data-[credentials=true]:space-y-4"
          >
            <Input
              id="email"
              type="email"
              placeholder="nome@exemplo.com"
              {...register("email", {
                onChange: handleEmailInput,
              })}
            />

            <Input
              data-credentials={step > 0}
              minLength={3}
              id="password"
              type="password"
              placeholder="Senha"
              className="h-0 py-0 opacity-0 invisible data-[credentials=true]:py-2 data-[credentials=true]:h-10 data-[credentials=true]:opacity-100 data-[credentials=true]:visible transition-all duration-150"
              {...register("password")}
            />

            <Button
              type="submit"
              className="mt-1 w-full py-2 flex items-center justify-center gap-2 bg-[#D9EAB8] text-sm disabled:hover:bg-[#D9EAB8]"
              disabled={loading !== null}
            >
              {loading === "email" && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              Entrar com Email
            </Button>
          </div>

          <div
            data-credentials={step > 0}
            className="opacity-100 visible data-[credentials=true]:opacity-0 data-[credentials=true]:invisible transition-all duration-150"
          >
            <div className="relative flex items-center justify-center my-4">
              <Separator className="absolute left-0" orientation="horizontal" />

              <span className="px-4 z-10 text-muted-foreground bg-background text-sm uppercase">
                ou continue com
              </span>
            </div>

            <Button
              onClick={handleSocial}
              className="w-full py-2 flex items-center justify-center gap-2 text-sm"
              variant="outline"
              disabled={loading !== null}
            >
              {(loading === null || loading !== "google") && (
                <GoogleLogo className="mr-2 h-4 w-4" />
              )}
              {loading === "google" && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Entrar com Google
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
