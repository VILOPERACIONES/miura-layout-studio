/**
 * Auth API service.
 *
 * ──────────────────────────────────────────────
 * BACKEND ENDPOINT REQUIRED
 * ──────────────────────────────────────────────
 * POST /api/auth/login
 *   Body:    { email: string, password: string }
 *   Returns: { token: string, user: { id, email, name } }
 * ──────────────────────────────────────────────
 */

import { api } from "./api";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

interface LoginResponse {
  token: string;
  user: AuthUser;
}

export const authService = {
  /**
   * POST /api/auth/login
   */
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const data = await api.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    localStorage.setItem("admin_token", data.token);
    localStorage.setItem("admin_user", JSON.stringify(data.user));
    return data;
  },

  logout: () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
  },

  getStoredUser: (): AuthUser | null => {
    const raw = localStorage.getItem("admin_user");
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("admin_token");
  },
};
