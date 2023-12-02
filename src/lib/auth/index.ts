import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { jwt, session } from "./callbacks";
import { decode, encode } from "./jwt";
import { authorize } from "./providers/credentials";
import { signIn } from "./providers/social";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: { encode, decode },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize,
    }),
  ],
  callbacks: {
    jwt,
    session,
    signIn,
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};
