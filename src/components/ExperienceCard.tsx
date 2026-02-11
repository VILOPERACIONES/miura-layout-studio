import React from "react";

type Props = {
  logo?: string;
  fallbackLogo?: string;
  logoAlt?: string;
  text?: string;
  onClick?: () => void;
  isActive?: boolean;
  size?: "default" | "small";
};

export const ExperienceCard: React.FC<Props> = ({
  logo,
  fallbackLogo,
  logoAlt,
  text,
  onClick,
  isActive,
  size = "default",
}) => {
  const sizeClasses = {
    default: "w-[220px] h-[330px] rounded-[40px]",
    small: "w-[140px] h-[210px] rounded-[28px]",
  };

  const logoSizeClasses = {
    default: "max-w-[70%] max-h-[45%]",
    small: "max-w-[65%] max-h-[40%]",
  };

  const textSizeClasses = {
    default: "text-xl px-6",
    small: "text-sm px-4",
  };

  const activeRingClasses = {
    default: "after:rounded-[40px] after:border-2",
    small: "after:rounded-[28px] after:border-[1.5px]",
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    if (!fallbackLogo) return;

    const img = e.currentTarget;

    // Evita loop infinito
    if (img.src === fallbackLogo) return;

    img.src = fallbackLogo;
  };

  return (
    <button
  type="button"
  onClick={onClick}
  className={[
    "relative isolate overflow-hidden",
    sizeClasses[size],

    // 🔹 BORDE DIAGONAL SUPERIOR
    "after:content-['']",
    "after:absolute after:inset-0",
    "after:rounded-[inherit]",
    "after:border after:border-white/20",
    "after:pointer-events-none",
    "after:[mask-image:linear-gradient(135deg,black_0%,black_65%,transparent_65%)]",

     // 🔹 BORDE COMPLETO SOLO CUANDO ESTÁ ACTIVO
    isActive && [
      "before:content-['']",
      "before:absolute before:inset-0",
      "before:rounded-[inherit]",
      "before:border before:border-white/40",
      "before:pointer-events-none",
    ].join(" "),

    // Layout
    "flex flex-col items-center justify-center gap-4",

    // Glassmorphism
    "bg-gradient-to-b from-white/60 to-white/10",
    "backdrop-blur-sm",

    // Interacción
    "transition-all duration-200 ease-out",
    "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]",

    // Focus accesible
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80",

    // // Active (si quieres mantenerlo)
    // isActive
    //   ? `after:border-white/90`
    //   : "",
  ].join(" ")}
>

      {logo && (
        <img
          src={logo}
          alt={logoAlt ?? ""}
          className={`${logoSizeClasses[size]} object-contain`}
          onError={handleImageError}
        />
      )}

      {text && (
        <div
          className={`text-slate-900 font-semibold tracking-wide text-center ${textSizeClasses[size]}`}
        >
          {text}
        </div>
      )}
    </button>
  );
};
