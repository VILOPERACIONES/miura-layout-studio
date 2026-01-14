import React from 'react';
import { VectorLine } from './ui/vectorLine';

export const About: React.FC = () => { //TODO: AGREGAR RESPONSIVIDAD CORRECTAMENTE.
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background TODO: SUBIR IMAGENE EN LA NUBE AGREGARLA EN LOS ASSETS/IMAGES */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3a964e8def1a71e80507c4e8c11e7130e8ff1b04?width=2880"
        alt="Restaurant background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENEDOR CENTRADO */}
      <div
        className="
          relative
          w-full
          max-w-[1200px]
          h-[539px]
          mx-auto
          ml-40
          2xl:translate-x-[-120px]
          max-md:h-[400px]
          max-sm:h-[600px]
        "
      >


        {/* Imagen 1 TODO: SUBIR IMAGENE EN LA NUBE AGREGARLA EN LOS ASSETS/IMAGES*/}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5918cf9f920709637b28ffa93f45a0ee93e0eeff?width=680"
          alt="Restaurant photo 1"
          className="absolute left-20 top-0 w-[340px] h-[480px] object-cover
            max-md:left-10 max-md:w-[250px] max-md:h-[350px]
            max-sm:left-5 max-sm:top-5 max-sm:w-[150px] max-sm:h-[200px]"
        />

        {/* Imagen 2 TODO: SUBIR IMAGENE EN LA NUBE AGREGARLA EN LOS ASSETS/IMAGES*/}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8d3e26dcc2dfef028b89c5638feb936e3de29fef?width=680"
          alt="Restaurant photo 2"
          className="absolute left-[476px] top-[59px] w-[340px] h-[480px] object-cover
            max-md:left-80 max-md:top-[30px] max-md:w-[250px] max-md:h-[350px]
            max-sm:left-[190px] max-sm:top-[50px] max-sm:w-[150px] max-sm:h-[200px]"
        />

        {/* TEXTO */}
        <div className="absolute left-[872px] top-[134px] w-[469px]
          max-md:left-[600px] max-md:top-[100px] max-md:w-[350px]
          max-sm:left-5 max-sm:top-[280px] max-sm:w-80
          flex flex-col gap-6">

          <h2 className="font-syncopate font-bold text-[#12181D] text-[32px] leading-tight
            max-md:text-[28px] max-sm:text-2xl max-sm:text-center">
            ¿QUIENES
            <br />
            SOMOS?
          </h2>

          <p className="font-anek text-black font-extralight text-[26px] leading-[28px] text-justify
            max-md:text-[14px] max-md:leading-4
            max-sm:text-[12px] max-sm:leading-[14px] max-sm:text-center">
            Somos un grupo restaurantero con sede en Yucatán, México, enfocado
            en crear experiencias gastronómicas que transcienden lo cotidiano.
            <br /><br />
            Con un sin fin de propuestas culinarias, logramos combinar
            creatividad y hospitalidad para ofrecer una experiencia inigualable
            en cada visita.
          </p>
        </div>

        <VectorLine
          width={209}
          className="absolute left-[1132px] top-[159px]"
        />

      </div>
    </section>
  );
};
