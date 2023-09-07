export async function api(route: string, params?: RequestInit) {
  if (params?.method === "POST") {
    params.headers = {
      "Content-Type": "application/json",
    };
  }

  const baseUrl = process.env.SERVER_URL || "http://localhost:3333";
  const request = await fetch(baseUrl + route, params);
  const response = await request.json();

  return response;
}
