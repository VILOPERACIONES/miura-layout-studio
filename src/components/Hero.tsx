import React from 'react';
import { Navigation } from './Navigation';

export const Hero: React.FC = () => {
  return (
    <header className="w-full h-[780px] shadow-[6px_4px_3.3px_-50px_rgba(0,0,0,0.25)] overflow-hidden relative bg-white max-md:h-[600px] max-sm:h-[500px]">
      <img
        src="/src/assets/images/hero/hero-background.jpg"
        alt="Restaurant interior background"
        className="w-full h-[780px] aspect-[24/13] absolute object-cover left-0 top-0 max-md:h-[600px] max-sm:h-[500px]"
      />
      <div className="w-full h-[800px] bg-blend-multiply absolute left-0 top-0 max-md:h-[600px] max-sm:h-[500px]" />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/e501eb6dc45f1b6e29fa83a5498f0ec8a27f67f7?width=340" //? Logo de Miura
        alt="Miura Logo"
        className="w-[170px] h-10 aspect-[17/4] absolute -translate-x-2/4 left-2/4 top-14 max-md:w-[140px] max-md:h-8 max-md:top-10 max-sm:w-[120px] max-sm:h-7 max-sm:top-[30px]"
      />

      <Navigation className="absolute -translate-x-2/4 w-[823px] h-[27px] left-2/4 top-[145px] max-md:w-[600px] max-md:top-[120px]" />
    </header>
  );
};
