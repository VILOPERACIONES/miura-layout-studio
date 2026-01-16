import React from "react";
import { VectorLine } from "./ui/vectorLine";

export const About: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3a964e8def1a71e80507c4e8c11e7130e8ff1b04?width=2880"
        alt="Restaurant background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENEDOR GENERAL */}
      <div
        className="
          relative
          w-full
          max-w-[1200px]
          mx-auto

          h-auto
          lg:h-[539px]

          lg:translate-x-[-80px]
          xl:translate-x-[-120px]

          py-20
          lg:py-0
        "
      >
        {/* Imagen 1 — SOLO DESKTOP */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5918cf9f920709637b28ffa93f45a0ee93e0eeff?width=680" //TODO: AGREGAR A CLOUDINARY Y AGREGAR IMAGENES EN LOS ASSETS
          alt="Restaurant photo 1"
          className="
            absolute
            left-20
            top-0
            w-[340px]
            h-[480px]
            object-cover
            hidden
            lg:block
          "
        />

        {/* Imagen 2 — SOLO DESKTOP */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8d3e26dcc2dfef028b89c5638feb936e3de29fef?width=680" //TODO: AAGREGAR A CLOUDINARY Y AGREGAR IMAGENES EN LOS ASSETS
          alt="Restaurant photo 2"
          className="
            absolute
            left-[476px]
            top-[59px]
            w-[340px]
            h-[480px]
            object-cover
            hidden
            lg:block
          "
        />

        {/* TEXTO */}
        <div
          className="
            flex flex-col gap-6 items-center text-center px-6
            max-w-[650px]
            mx-auto

            lg:absolute
            lg:items-start
            lg:text-left
            lg:px-0
            lg:left-[872px]
            lg:top-[134px]
            lg:w-[469px]
          "
        >
          <h2 className="font-syncopate font-bold text-[#12181D] text-[32px] max-sm:text-[24px] leading-tight"> {/* TODO: CUANDO SEA LA VERSIÓN MOBILE Y TABLETA NO SE DIVIDA */}
            ¿QUIENES
            <br />
            SOMOS?
          </h2>

          <p className="font-anek text-black font-extralight text-[26px] max-sm:text-base leading-[28px] text-justify lg:text-justify text-center">
            Somos un grupo restaurantero con sede en Yucatán, México, enfocado en
            crear experiencias gastronómicas que transcienden lo cotidiano.
            <br />
            <br />
            Con un sin fin de propuestas culinarias, logramos combinar
            creatividad y hospitalidad para ofrecer una experiencia inigualable
            en cada visita.
          </p>
        </div>

        {/* Vector — SOLO DESKTOP */}
        <VectorLine
          width={209}
          className="absolute left-[1132px] top-[159px] hidden lg:block"
        />
      </div>
    </section>
  );
};
