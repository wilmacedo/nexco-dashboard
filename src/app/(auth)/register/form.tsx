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

const createUserFormSchema = z.object({
  email: z.string().nonempty().email(),
  name: z.string().nonempty().min(3),
  password: z.string().nonempty().min(3),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function Form() {
  const [loading, setLoading] = useState<Loading | null>(null);
  const [step, setStep] = useState(0);

  const router = useRouter();
  const { toast } = useToast();

  const { register, handleSubmit } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function createUser(data: CreateUserFormData) {
    const { email, name, password } = data;

    setLoading("email");

    const baseUrl = process.env.SERVER_URL || "http://localhost:3333";
    const { status } = await fetch(baseUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    });
    if (status !== 201) {
      toast({
        variant: "destructive",
        title: "Oops! Algo deu errado",
      });
      setLoading(null);
      return;
    }

    router.push("/login");
  }

  function handleEmailInput(event: ChangeEvent<HTMLInputElement>) {
    setStep(event.target.value.length > 0 ? 1 : 0);
  }

  function handleSocial() {
    setLoading("google");
    signIn("google", { callbackUrl: "/discover" });
  }

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className="h-full flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold">Cadastro</h1>
        <p className="mt-2 text-sm">Cadastre uma nova com e-mail ou Google</p>

        <div className="mt-4">
          <div data-email={step > 0} className="data-[email=true]:space-y-4">
            <Input
              id="email"
              type="email"
              placeholder="nome@exemplo.com"
              {...register("email", {
                onChange: handleEmailInput,
              })}
            />

            <Input
              data-email={step > 0}
              minLength={3}
              id="name"
              type="text"
              placeholder="Nome"
              className="h-0 py-0 opacity-0 invisible data-[email=true]:py-2 data-[email=true]:h-10 data-[email=true]:opacity-100 data-[email=true]:visible transition-all duration-150"
              {...register("name")}
            />

            <Input
              data-email={step > 0}
              minLength={3}
              id="password"
              type="password"
              placeholder="Senha"
              className="h-0 py-0 opacity-0 invisible data-[email=true]:py-2 data-[email=true]:h-10 data-[email=true]:opacity-100 data-[email=true]:visible transition-all duration-150"
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
              {step > 0 ? "Cadastrar" : "Continuar"}
            </Button>
          </div>

          <div
            data-email={step > 0}
            className="opacity-100 visible data-[email=true]:invisible data-[email=true]:opacity-0 transition-all duration-200"
          >
            <div className="relative flex items-center justify-center my-4">
              <Separator className="absolute left-0" orientation="horizontal" />

              <span className="px-4 z-10 text-muted-foreground bg-background text-sm uppercase">
                ou cadastre-se com
              </span>
            </div>

            <Button
              type="submit"
              onClick={handleSocial}
              className="w-full py-2 flex items-center justify-center gap-2 text-sm"
              variant="outline"
              disabled={loading !== null}
            >
              {(loading === null || loading === "google") && (
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
