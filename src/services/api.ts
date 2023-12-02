import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

interface Response<T> {
  data: T;
  status: number;
}

async function getHeaders(params?: RequestInit): Promise<HeadersInit> {
  let headers = {};
  if (params) {
    headers = { ...params.headers };
  }

  let method = params?.method ?? "GET";
  if (["POST", "PUT"].includes(method)) {
    headers = { ...headers, "Content-Type": "application/json" };
  }

  const session = await getServerSession(authOptions);
  let token = session?.user.accessToken;
  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  return headers;
}

export async function api<T>(
  route: string,
  params?: RequestInit
): Promise<Response<T>> {
  const headers = await getHeaders(params);

  const baseUrl = process.env.SERVER_URL || "http://localhost:3333";
  const request = await fetch(baseUrl + route, { ...params, headers });
  if (request.status === 204 || request.status === 201) {
    return { data: {} as T, status: request.status };
  }

  const response = await request.json();

  return { data: response, status: request.status };
}
