/**
 * Promotion entity returned by the API.
 *
 * Endpoints that return promotions:
 *   GET  /api/promotions
 *   GET  /api/promotions/active
 *   GET  /api/promotions/:id
 *   POST /api/promotions
 *   PUT  /api/promotions/:id
 *   PATCH /api/promotions/:id/toggle
 */
export interface Promotion {
  id: string;
  type: "promo" | "evento";
  title: string;
  link?: string;
  image_desktop_url: string; // URL de la imagen para desktop/monitor
  image_mobile_url: string; // URL de la imagen para mobile
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Shape used when creating / editing a promotion on the frontend form.
 * Files are handled via FormData before sending to the API.
 */
export interface PromotionFormValues {
  type: "promo" | "evento";
  title: string;
  link?: string;
  image_desktop: File | null;
  image_mobile: File | null;
  is_active: boolean;
}

/**
 * Filters accepted by the list endpoint.
 * GET /api/promotions?active=true&type=promo
 */
export interface PromotionFilters {
  active?: boolean;
  type?: "promo" | "evento";
  search?: string;
}
