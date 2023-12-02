import { api } from "@/services/api";

export async function signIn({ account, profile }: any) {
  if (account && account.type === "credentials") return true;

  const { name, email } = profile;
  const { status } = await api("/users", {
    method: "POST",
    body: JSON.stringify({ name, email }),
  });
  if (status === 500) {
    return false;
  }

  return true;
}
