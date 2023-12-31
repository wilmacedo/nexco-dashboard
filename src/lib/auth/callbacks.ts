import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { NextRequest } from "next/server";

interface AuthorizedProps {
  req: NextRequest;
}

interface JWTProps {
  token: JWT;
  user: User;
}

interface SessionProps {
  session: Session;
  token: JWT;
}

export function authorized({ req: request }: AuthorizedProps): boolean {
  let token;
  const sessionToken = request.cookies.get("next-auth.session-token");
  const secureSessionToken = request.cookies.get(
    "__Secure-next-auth.session-token"
  );
  if (sessionToken) {
    token = sessionToken;
  } else if (secureSessionToken) {
    token = secureSessionToken;
  } else {
    return false;
  }

  const { value } = token;

  return !!value;
}

export async function jwt({ token, user }: JWTProps) {
  return { ...token, ...user };
}

export async function session({ session, token }: SessionProps) {
  (session as any).user = {
    name: session.user?.name,
    email: session.user?.email,
    image: session.user?.image,
    accessToken: token.accessToken,
  };

  return session;
}
