export async function api(route: string, params?: RequestInit) {
  const baseUrl = process.env.SERVER_URL || "http://localhost:3333";
  const request = await fetch(baseUrl + route, params);
  const response = await request.json();

  return response;
}
