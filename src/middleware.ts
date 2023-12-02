import withAuth from "next-auth/middleware";
import { authorized } from "./lib/auth/callbacks";
import { decode } from "./lib/auth/jwt";

export default withAuth({
  jwt: { decode },
  callbacks: {
    authorized,
  },
});

export const config = { matcher: ["/discover", "/setup"] };
