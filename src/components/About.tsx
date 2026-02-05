import React from "react";
import { VectorLine } from "./ui/vectorLine";

export const About: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3a964e8def1a71e80507c4e8c11e7130e8ff1b04?width=2880"
        alt="Restaurant background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenedor principal */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1200px]
          px-6
          py-20
          lg:py-0
          grid
          gap-8
          lg:grid-cols-[320px_320px_1fr]
          lg:items-start
        "
      >
        {/* Imagen 1 */}
        <div className="hidden lg:block">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5918cf9f920709637b28ffa93f45a0ee93e0eeff?width=680"
            alt="Restaurant photo 1"
            className="w-full h-[480px] object-cover"
          />
        </div>

        {/* Imagen 2 */}
        <div className="hidden lg:block pt-[59px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8d3e26dcc2dfef028b89c5638feb936e3de29fef?width=680"
            alt="Restaurant photo 2"
            className="w-full h-[480px] object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-6 text-center lg:text-left lg:self-center">
          <div className="
            flex
            items-center
            justify-center
            gap-4
            flex-wrap
            lg:justify-start
          ">
            <h2 className="
              font-syncopate
              font-bold
              text-[#12181D]
              text-[32px]
              max-sm:text-[24px]
              leading-tight
              whitespace-nowrap
            ">
              NOSOTROS
            </h2>

            <VectorLine
              width={180}
              className="
                hidden
                lg:block
                flex-shrink-0
              "
            />
          </div>


          <p
            className="
              font-arial
              text-black
              text-[18px]
              leading-7
            "
          >
            Somos un grupo restaurantero con sede en Yucatán, México, enfocado en
            crear experiencias gastronómicas que transcienden lo cotidiano.
            <br />
            <br />
            Con un sin fin de propuestas culinarias, logramos combinar creatividad
            y hospitalidad para ofrecer una experiencia inigualable en cada visita.
          </p>
        </div>

        {/* Vector decorativo
        <VectorLine
          width={209}
          className="hidden lg:block absolute right-0 top-[160px]"
        /> */}
      </div>
    </section>
  );
};
