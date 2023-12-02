import { api } from "@/services/api";
import { User } from "@/types/request";
import { User as AuthUser } from "next-auth";
import { z } from "zod";

export const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export async function authorize(
  credentials: Record<never, string> | undefined
): Promise<AuthUser | null> {
  const { email, password } = credentialsSchema.parse(credentials);

  const {
    data: { user },
    status,
  } = await api<{ user: User }>("/users/authenticate", {
    method: "POST",
    body: JSON.stringify({ provider: "credentials", email, password }),
  });

  if (status !== 200) {
    throw new Error("Email or password invalid");
  }

  return {
    id: user.email,
    email: user.email,
    image: "https://github.com/wilmacedo.png",
    name: user.name,
  };
}
