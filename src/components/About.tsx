import React, { useEffect, useRef } from "react";
import { VectorLine } from "./ui/vectorLine";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About: React.FC = () => {
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);


  // Imágenes para los carousels
  const carousel1Images = [
    "https://admin.miurahospitality.com/images/about/about-carousel-1.webp",
    "https://admin.miurahospitality.com/images/about/about-carousel-2.webp",
  ];

  const carousel2Images = [
    "https://admin.miurahospitality.com/images/about/about-carousel-3.webp",
    "https://admin.miurahospitality.com/images/about/about-carousel-4.webp",
  ];

  const mobileCarouselImages = [...carousel1Images, ...carousel2Images];

  useEffect(() => {
    const carousel1 = carousel1Ref.current;
    const carousel2 = carousel2Ref.current;
    const mobileCarousel = mobileCarouselRef.current;

    if (!carousel1 || !carousel2) return;

    let scrollPosition1 = 0;
    let scrollPosition2 = carousel2.scrollHeight / 2;

    const scroll1 = () => {
      scrollPosition1 += 0.5;
      if (scrollPosition1 >= carousel1.scrollHeight / 2) {
        scrollPosition1 = 0;
      }
      carousel1.scrollTop = scrollPosition1;
    };

    const scroll2 = () => {
      scrollPosition2 -= 0.5;
      if (scrollPosition2 <= 0) {
        scrollPosition2 = carousel2.scrollHeight / 2;
      }
      carousel2.scrollTop = scrollPosition2;
    };

    const interval1 = setInterval(scroll1, 20);
    const interval2 = setInterval(scroll2, 20);

    // Mobile horizontal carousel
    let mobileScrollPos = 0;
    let mobileInterval: ReturnType<typeof setInterval> | null = null;
    if (mobileCarousel) {
      const scrollMobile = () => {
        mobileScrollPos += 0.5;
        if (mobileScrollPos >= mobileCarousel.scrollWidth / 2) {
          mobileScrollPos = 0;
        }
        mobileCarousel.scrollLeft = mobileScrollPos;
      };
      mobileInterval = setInterval(scrollMobile, 20);
    }

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      if (mobileInterval) clearInterval(mobileInterval);
    };
  }, []);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (!textRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none", // solo una vez
      },
    });

    tl.from("h2", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).from("p", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6"); // se superpone ligeramente
  }, textRef);

  return () => ctx.revert();
}, []);


  return (
    <section
    id="about"
    className="relative w-full bg-white overflow-hidden"
    >
      {/* Background */}
      <img
        src="https://admin.miurahospitality.com/images/about/about-background.webp"
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
          pt-20
          pb-4
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
        <div
          ref={textRef}
        className="flex flex-col gap-6 text-center lg:text-left lg:self-center">
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
      {/* Mobile horizontal carousel - visible only below lg */}
        <div className="relative z-10 block lg:hidden mt-6 mb-5 -mx-6">
          <div
            ref={mobileCarouselRef}
            className="overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex gap-3 w-max">
              {[...mobileCarouselImages, ...mobileCarouselImages].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Restaurant photo ${index + 1}`}
                  className="w-[200px] h-[240px] max-sm:w-[160px] max-sm:h-[200px] object-cover rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};