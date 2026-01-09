import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full h-[70px] justify-center items-center overflow-hidden bg-[#12181D] px-[214px] py-[23px] max-md:px-[100px] max-md:py-5 max-sm:h-auto max-sm:px-5 max-sm:py-[15px]">
      <p className="text-white text-center text-[15px] font-bold max-md:text-[13px] max-sm:text-[11px] max-sm:leading-4">
        Desarrollado por PROTAGONISTA Estudio Creativo - Todos los derechos
        reservados.
      </p>
    </footer>
  );
};
