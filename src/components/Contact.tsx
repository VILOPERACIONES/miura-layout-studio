import React from 'react';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        min-h-[608px]
        flex
        overflow-hidden
        bg-white
      "
    >
      {/* Background */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/084c54347d44d5c53f3fd1d10e2f680bbfea9a6b?width=2880"
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover blur-[3.75px]"
      />
      <div className="absolute inset-0 bg-[rgba(18,24,29,0.55)]" />

      {/* Wrapper que ocupa TODA la altura */}
      <div className="
        relative
        z-10
        flex
        flex-col
        w-full
        max-w-[960px]
        mx-auto
        px-4
        min-h-[608px]
      ">
        {/* Contenido centrado */}
        <div className="flex flex-col items-center gap-10 pt-16">
          <h2
            className="
              font-syncopate
              font-bold
              text-white
              text-center
              text-[36px]
              max-md:text-[32px]
              max-sm:text-[24px]
            "
          >
            contáctanos
          </h2>

          <ContactForm />
        </div>

        {/* Footer pegado abajo */}
        <p
          className="
            mt-auto
            pb-4
            text-center
            font-anek
            text-[10px]
            text-white
            opacity-80
          "
        >
          Diseñado por PROTAGONISTA Estudio Creativo, Desarrollado por <a href="https://www.buho-solutions.com/">Búho Solutions</a> –
          Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};
