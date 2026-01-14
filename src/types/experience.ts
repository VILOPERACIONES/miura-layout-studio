// src/types/experience.ts
export type Experience = {
  id: string;
  logo: string;
  onErrorLogo?: string;
  alt: string;

  // fondo dinámico por restaurante
  background: string;
  onErrorBackground?: string;

  // opcional: si quieres que también cambie el contenido
  title?: string;
  zone?: string;
  description?: string;

  // opcional: para el “logo grande” del panel izquierdo (si lo quieres dinámico)
  heroLogo?: string;
  onErrorHeroLogo?: string;
  heroLogoAlt?: string;
  ubicacion?: string;
  links?: {
    instagram?: string;
    whatsapp?: string;
    reserve?: string;
  };
};
