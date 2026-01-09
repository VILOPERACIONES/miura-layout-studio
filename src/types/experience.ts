// src/types/experience.ts
export type Experience = {
  id: string;
  logo: string;
  alt: string;

  // fondo dinámico por restaurante
  background: string;

  // opcional: si quieres que también cambie el contenido
  title?: string;
  zone?: string;
  description?: string;

  // opcional: para el “logo grande” del panel izquierdo (si lo quieres dinámico)
  heroLogo?: string;
  heroLogoAlt?: string;
};
