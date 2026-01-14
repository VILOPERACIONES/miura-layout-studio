import React from 'react';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full h-[608px] overflow-hidden relative bg-white max-md:h-[500px] max-sm:h-[600px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/084c54347d44d5c53f3fd1d10e2f680bbfea9a6b?width=2880"
        alt="Contact background"
        className="w-full h-[608px] aspect-[45/19] blur-[3.75px] absolute object-cover left-0 top-0 max-md:h-[500px] max-sm:h-[600px]"
      />
      <div className="w-full h-[608px] absolute bg-[rgba(18,24,29,0.55)] left-0 top-0 max-md:h-[500px] max-sm:h-[600px]" />
      <h2
        className="
          w-[494px]
          h-[26px]
          font-syncopate
          font-bold
          text-white
          text-center
          text-[36px]
          absolute
          -translate-x-2/4
          left-2/4
          top-[75px]
          max-md:text-[32px]
          max-md:top-[50px]
          max-sm:text-2xl
          max-sm:w-[300px]
          max-sm:top-[30px]
        "
      >
        CONTACTO
      </h2>
      <div className="relative z-10 flex flex-col items-center justify-center mt-[140px] max-md:mt-[120px] max-sm:mt-[90px]">
        <ContactForm />
      </div>

    </section>
  );
};
