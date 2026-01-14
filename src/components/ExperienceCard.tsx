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
        "relative isolate",
        sizeClasses[size],
        "flex flex-col items-center justify-center gap-4",
        "bg-white/70 backdrop-blur-sm border border-white/40",
        "transition-transform transition-colors duration-200",
        "hover:bg-white/80 hover:-translate-y-1",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        isActive
          ? "shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          : "shadow-[0_12px_40px_rgba(0,0,0,0.18)]",
        isActive
          ? `after:content-[''] after:absolute after:inset-0 ${activeRingClasses[size]} after:border-white after:pointer-events-none`
          : "",
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
