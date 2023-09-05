import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const parsedCredentials = credentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          throw new Error("Invalid credentials");
        }

        if (parsedCredentials.data.email !== "wil.macedo.sa@gmail.com")
          throw new Error("Invalid credentials");

        const user: User = {
          id: "1",
          email: "wil.macedo.sa@gmail.com",
          image: "https://github.com/wilmacedo.png",
          name: "Wil Macedo",
        };

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/register",
  },
});

export { handler as GET, handler as POST };
