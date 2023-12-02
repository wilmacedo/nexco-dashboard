import { api } from "@/services/api";

export async function signIn({ profile }: any) {
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
