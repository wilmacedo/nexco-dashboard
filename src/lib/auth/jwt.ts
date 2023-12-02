import { JwtPayload, sign, verify } from "jsonwebtoken";
import { JWTDecodeParams, JWTEncodeParams } from "next-auth/jwt";

export function encode({ token, secret }: JWTEncodeParams) {
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
