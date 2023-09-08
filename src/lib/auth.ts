import { JwtPayload, sign, verify } from "jsonwebtoken";
import { NextAuthOptions, User } from "next-auth";
import { JWTDecodeParams, JWTEncodeParams } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest } from "next/server";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
});

export function authorized({ req: request }: { req: NextRequest }): boolean {
  const sessionToken = request.cookies.get("next-auth.session-token");
  if (!sessionToken) return false;

  const { value } = sessionToken;

  return !!value;
}

function encode({ token, secret }: JWTEncodeParams) {
  if (!token) {
    throw new Error("No token to encode");
  }

  const signedToken = sign(token, secret);
  return signedToken;
}

export function decode({ token, secret }: JWTDecodeParams) {
  if (!token) {
    throw new Error("No token to decode");
  }
  try {
    const decoded = verify(token, secret) as JwtPayload;

    return {
      ...decoded,
      accessToken: token,
    };
  } catch (error) {
    return null;
  }
}

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
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      (session as any).user = {
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
        accessToken: token.accessToken,
      };

      return session;
    },
  },
  pages: {
    signIn: "/register",
  },
};
