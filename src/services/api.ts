/**
 * Base API client.
 *
 * All requests include the JWT token stored in localStorage (key: "admin_token").
 * The BASE_URL should point to the backend once it's implemented.
 *
 * TODO (backend): Set the correct BASE_URL when deploying the API.
 */

const BASE_URL = "/api";

function getToken(): string | null {
  return localStorage.getItem("admin_token");
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();

  const headers: HeadersInit = {
    ...(options.headers as Record<string, string>),
  };

  // Don't set Content-Type for FormData – the browser sets it with the boundary
  if (!(options.body instanceof FormData)) {
    (headers as Record<string, string>)["Content-Type"] = "application/json";
  }

  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    window.location.href = "/admin/login";
    throw new Error("Sesión expirada. Inicia sesión nuevamente.");
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      (body as { message?: string }).message ??
        `Error ${res.status}: ${res.statusText}`
    );
  }

  // 204 No Content
  if (res.status === 204) return undefined as unknown as T;

  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, body: unknown) =>
    request<T>(url, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  put: <T>(url: string, body: unknown) =>
    request<T>(url, {
      method: "PUT",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  patch: <T>(url: string, body: unknown) =>
    request<T>(url, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  delete: <T>(url: string) => request<T>(url, { method: "DELETE" }),
};
