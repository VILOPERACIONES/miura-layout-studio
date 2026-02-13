/**
 * Promotions API service.
 *
 * Every function maps 1-to-1 with a backend endpoint.
 * See src/types/promotion.ts for data shapes.
 *
 * ──────────────────────────────────────────────
 * BACKEND ENDPOINTS REQUIRED
 * ──────────────────────────────────────────────
 * GET    /api/promotions              → list (optional query: ?active=true&type=promo)
 * GET    /api/promotions/active       → only active promotions
 * GET    /api/promotions/:id          → single promotion
 * POST   /api/promotions              → create (FormData: type, title, link, is_active, image_desktop, image_mobile)
 * PUT    /api/promotions/:id          → update (FormData)
 * PATCH  /api/promotions/:id/toggle   → toggle { is_active: boolean }
 * DELETE /api/promotions/:id          → delete
 * ──────────────────────────────────────────────
 */

import { api } from "./api";
import type { Promotion, PromotionFilters } from "@/types/promotion";

export const promotionsService = {
  /**
   * Fetch all promotions with optional filters.
   * GET /api/promotions?active=true&type=promo
   */
  getAll: async (filters?: PromotionFilters): Promise<Promotion[]> => {
    const params = new URLSearchParams();
    if (filters?.active !== undefined)
      params.set("active", String(filters.active));
    if (filters?.type) params.set("type", filters.type);
    const qs = params.toString();
    return api.get<Promotion[]>(`/promotions${qs ? `?${qs}` : ""}`);
  },

  /**
   * Fetch only active promotions (used by the public dashboard).
   * GET /api/promotions/active
   */
  getActive: async (): Promise<Promotion[]> => {
    return api.get<Promotion[]>("/promotions/active");
  },

  /**
   * Fetch a single promotion by ID.
   * GET /api/promotions/:id
   */
  getById: async (id: string): Promise<Promotion> => {
    return api.get<Promotion>(`/promotions/${id}`);
  },

  /**
   * Create a new promotion.
   * POST /api/promotions
   * Body: FormData with fields: type, title, link, is_active, image_desktop (File), image_mobile (File)
   */
  create: async (data: FormData): Promise<Promotion> => {
    return api.post<Promotion>("/promotions", data);
  },

  /**
   * Update an existing promotion.
   * PUT /api/promotions/:id
   * Body: FormData (same fields as create)
   */
  update: async (id: string, data: FormData): Promise<Promotion> => {
    // Laravel no soporta multipart/form-data con PUT/PATCH de forma nativa.
    // Usamos POST con "spoofing" de método enviando _method=PUT.
    data.append("_method", "PUT");
    return api.post<Promotion>(`/promotions/${id}`, data);
  },

  /**
   * Toggle promotion active state.
   * PATCH /api/promotions/:id/toggle
   * Body: { is_active: boolean }
   */
  toggle: async (id: string, isActive: boolean): Promise<Promotion> => {
    return api.patch<Promotion>(`/promotions/${id}/toggle`, {
      is_active: isActive,
    });
  },

  /**
   * Delete a promotion.
   * DELETE /api/promotions/:id
   */
  delete: async (
    id: string
  ): Promise<{ success: boolean; message: string }> => {
    return api.delete<{ success: boolean; message: string }>(
      `/promotions/${id}`
    );
  },
};
