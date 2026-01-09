import React from "react";

type Props = {
  logo?: string;
  logoAlt?: string;
  text?: string;

  // nuevo
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
        "relative w-[220px] h-[330px] rounded-[40px] bg-white/70 backdrop-blur-sm border border-white/40",
        "flex flex-col items-center justify-center gap-4 overflow-hidden",
        "transition-all duration-200 hover:bg-white/80 hover:-translate-y-1",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        isActive ? "ring-2 ring-white shadow-xl" : "shadow-md",
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
