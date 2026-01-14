import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full h-[70px] justify-center items-center overflow-hidden bg-[#12181D] px-[214px] py-[23px] max-md:px-[100px] max-md:py-5 max-sm:h-auto max-sm:px-5 max-sm:py-[15px]">
      <p
        className="
          font-anek
          font-normal
          text-white
          text-center
          text-[15px]
          leading-[18px]
          max-md:text-[14px]
          max-md:leading-[18px]
          max-sm:text-[12px]
          max-sm:leading-[16px]
        "
      >
        Diseñado por PROTAGONISTA Estudio Creativo, Desarrollado por <a href="https://www.buho-solutions.com/" className="text-white hover:underline">Búho Solutions</a> - Todos los derechos reservados.
      </p>
    </footer>
  );
};
