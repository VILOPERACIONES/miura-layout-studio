import React from "react";

type Props = {
  logo?: string;
  logoAlt?: string;
  text?: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const ExperienceCard: React.FC<Props> = ({
  logo,
  logoAlt,
  text,
  onClick,
  isActive,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative isolate w-[220px] h-[330px] rounded-[40px]",
        "flex flex-col items-center justify-center gap-4 overflow-hidden",
        "bg-white/70 backdrop-blur-sm border border-white/40",
        "transition-transform transition-colors duration-200",
        "hover:bg-white/80 hover:-translate-y-1",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        isActive
          ? "shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          : "shadow-[0_12px_40px_rgba(0,0,0,0.18)]",
        isActive
          ? "after:content-[''] after:absolute after:inset-0 after:rounded-[40px] after:border-2 after:border-white after:pointer-events-none"
          : "",
      ].join(" ")}
    >
      {logo ? (
        <img
          src={logo}
          alt={logoAlt ?? ""}
          className="max-w-[70%] max-h-[45%] object-contain"
          onError={() => console.log("Logo no carga:", logo)}
        />
      ) : null}

      {text ? (
        <div className="text-slate-900 text-xl font-semibold tracking-wide text-center px-6">
          {text}
        </div>
      ) : null}
    </button>
  );
};
