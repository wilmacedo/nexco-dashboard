import withAuth from "next-auth/middleware";
import { authorized, decode } from "./lib/auth";

export default withAuth({
  jwt: { decode },
  callbacks: {
    authorized,
  },
});

export const config = { matcher: ["/discover", "/setup"] };
