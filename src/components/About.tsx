import React, { useEffect, useRef } from "react";
import { VectorLine } from "./ui/vectorLine";

export const About: React.FC = () => {
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);

  // Imágenes para los carousels
  const carousel1Images = [
    "https://res.cloudinary.com/dfsrjktyj/image/upload/v1770666127/Foto_3_znvayu.png",
    "https://res.cloudinary.com/dfsrjktyj/image/upload/v1770665998/Foto_1_b3y5iv.png",
  ];

  const carousel2Images = [
    "https://res.cloudinary.com/dfsrjktyj/image/upload/v1770665909/Foto_2_n5ucyv.png",
    "https://res.cloudinary.com/dfsrjktyj/image/upload/v1770666063/Foto_4_vp7ii6.png",
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
        src="https://res.cloudinary.com/dfsrjktyj/image/upload/v1770766234/bg-about_y5pqyk.png"
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
            <div className="flex flex-col gap-y-8">
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
            <div className="flex flex-col gap-y-8">
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