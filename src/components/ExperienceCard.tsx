import React from "react";

type Props = {
  logo?: string;
  logoAlt?: string;
  text?: string;
};

export const ExperienceCard: React.FC<Props> = ({ logo, logoAlt, text }) => {
  return (
    <div className="relative w-[220px] h-[330px] rounded-[40px] bg-white/70 backdrop-blur-sm border border-white/40 flex flex-col items-center justify-center gap-4 overflow-hidden">
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
    </div>
  );
};
