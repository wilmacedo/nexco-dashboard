"use server";

import { api } from "@/services/api";
import { revalidateTag } from "next/cache";
import { type NotificationFormValues } from "./notification-form";

export async function createAction(data: NotificationFormValues) {
  const body = {
    communication: data.communication ?? false,
    social: data.social ?? false,
  };

  const { data: response, status } = await api<Error>("/users/preferences", {
    method: "PUT",
    body: JSON.stringify(body),
  });

  if (status !== 204) {
    throw new Error(response.message);
  }

  revalidateTag("preferences");
}
