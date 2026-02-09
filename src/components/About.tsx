import React, { useEffect, useRef } from "react";
import { VectorLine } from "./ui/vectorLine";

export const About: React.FC = () => {
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);

  // Imágenes para los carousels
  const carousel1Images = [
    "https://api.builder.io/api/v1/image/assets/TEMP/5918cf9f920709637b28ffa93f45a0ee93e0eeff?width=680",
    "https://api.builder.io/api/v1/image/assets/TEMP/8d3e26dcc2dfef028b89c5638feb936e3de29fef?width=680",
    "https://api.builder.io/api/v1/image/assets/TEMP/3a964e8def1a71e80507c4e8c11e7130e8ff1b04?width=680",
  ];

  const carousel2Images = [
    "https://api.builder.io/api/v1/image/assets/TEMP/8d3e26dcc2dfef028b89c5638feb936e3de29fef?width=680",
    "https://api.builder.io/api/v1/image/assets/TEMP/5918cf9f920709637b28ffa93f45a0ee93e0eeff?width=680",
    "https://api.builder.io/api/v1/image/assets/TEMP/3a964e8def1a71e80507c4e8c11e7130e8ff1b04?width=680",
  ];

  useEffect(() => {
    const carousel1 = carousel1Ref.current;
    const carousel2 = carousel2Ref.current;

    if (!carousel1 || !carousel2) return;

    let scrollPosition1 = 0;
    let scrollPosition2 = carousel2.scrollHeight / 2;

    const scroll1 = () => {
      scrollPosition1 += 0.5; // Velocidad hacia abajo

      if (scrollPosition1 >= carousel1.scrollHeight / 2) {
        scrollPosition1 = 0;
      }

      carousel1.scrollTop = scrollPosition1;
    };

    const scroll2 = () => {
      scrollPosition2 -= 0.5; // Velocidad hacia arriba

      if (scrollPosition2 <= 0) {
        scrollPosition2 = carousel2.scrollHeight / 2;
      }

      carousel2.scrollTop = scrollPosition2;
    };

    const interval1 = setInterval(scroll1, 20);
    const interval2 = setInterval(scroll2, 20);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

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
        {/* Carousel 1 - Desplazamiento hacia abajo */}
        <div className="hidden lg:block h-[480px] overflow-hidden">
          <div
            ref={carousel1Ref}
            className="h-full overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex flex-col">
              {[...carousel1Images, ...carousel1Images].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Restaurant photo ${index + 1}`}
                  className="w-full h-[480px] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel 2 - Desplazamiento hacia arriba */}
        <div className="hidden lg:block h-[480px] overflow-hidden">
          <div
            ref={carousel2Ref}
            className="h-full overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex flex-col">
              {[...carousel2Images, ...carousel2Images].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Restaurant photo ${index + 1}`}
                  className="w-full h-[480px] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
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
      </div>
    </section>
  );
};