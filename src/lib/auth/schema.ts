import { z } from "zod";

export const credentialsSchema = z.object({
  email: z.string().email(),
});

export type CredentialsValues = z.infer<typeof credentialsSchema>;
