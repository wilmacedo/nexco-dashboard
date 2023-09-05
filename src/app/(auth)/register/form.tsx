"use client";

import { Button } from "@/components/button";
import { GoogleLogo } from "@/components/google-logo";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { z } from "zod";

type Loading = "google" | "email";

const schema = z.object({
  email: z.string().email(),
});

export function Form() {
  const [loading, setLoading] = useState<Loading | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const input = event.currentTarget.querySelector(
      "#email"
    ) as HTMLInputElement;

    const parsedData = schema.safeParse({ email: input.value });
    if (!parsedData.success) {
      toast({
        variant: "destructive",
        title: "O e-mail informado não é válido.",
      });
      return;
    }

    setLoading("email");

    const response = await signIn("credentials", {
      callbackUrl: "/discover",
      email: parsedData.data.email,
      password: "123456",
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

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold">Criar conta</h1>
        <p className="mt-2 text-sm">
          Faça o registro da sua conta via e-mail ou Google
        </p>

        <div className="mt-4">
          <Input id="email" type="email" placeholder="nome@exemplo.com" />
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
    </form>
  );
}
