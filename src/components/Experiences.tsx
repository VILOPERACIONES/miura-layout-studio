// Experiences.tsx
import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { EXPERIENCES } from "@/constants/experiences";

export const Experiences: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const [activeId, setActiveId] = React.useState<string>(
    EXPERIENCES[0]?.id ?? ""
  );

  const activeExperience =
    EXPERIENCES.find((x) => x.id === activeId) ?? EXPERIENCES[0];

  return (
    <section className="w-full h-[800px] overflow-hidden relative bg-white max-md:h-[700px] max-sm:h-[900px]">
      {/* Fondo dinámico */}
      <img
        src={activeExperience.background}
        alt={`Background ${activeExperience.title ?? activeExperience.alt}`}
        className="w-full h-[800px] aspect-[9/5] absolute object-cover left-0 top-0 max-md:h-[700px] max-sm:h-[900px]"
      />

      <div className="w-full h-[800px] bg-black/40 absolute left-0 top-0 max-md:h-[700px] max-sm:h-[900px]" />

      {/* Título */}
      <h2 className="w-[494px] text-white text-center text-4xl font-normal absolute -translate-x-1/2 left-1/2 top-[81px] max-md:text-[32px] max-md:top-[60px] max-sm:text-2xl max-sm:w-[300px] max-sm:top-10">
        EXPERIENCIAS<span className="font-bold"> MIURA</span>
      </h2>

      {/* Panel izquierdo */}
      <div className="flex w-[385px] flex-col justify-center items-start gap-[39px] absolute h-[307px] left-[125px] top-60 max-md:w-80 max-md:left-20 max-md:top-[180px] max-sm:w-[280px] max-sm:left-5 max-sm:top-[120px]">
        <img
          src={activeExperience.heroLogo ?? activeExperience.logo}
          alt={activeExperience.heroLogoAlt ?? activeExperience.alt}
          className="w-[264px] h-[57px] object-contain max-sm:w-[200px] max-sm:h-[43px]"
        />

        <div className="flex items-center gap-4">
          <svg
            width="16"
            height="25"
            viewBox="0 0 16 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8707 7.86135C15.8707 3.63132 12.3467 0.202026 8 0.202026C3.65325 0.202026 0.129333 3.63132 0.129333 7.86135C0.129333 11.6167 2.90679 14.7409 6.57193 15.3944V24.7976H9.42845V15.3944C13.0932 14.7405 15.871 11.6167 15.871 7.86135Z"
              fill="white"
            />
          </svg>

          <span className="text-white text-xl tracking-[6.8px]">
            {activeExperience.zone ?? "NORTE"}
          </span>
        </div>

        <p className="text-white text-[26px] font-extralight leading-7 max-md:text-[22px] max-sm:text-base max-sm:leading-5">
          {activeExperience.description}
        </p>
      </div>

      {/* Botones Prev / Next del carousel */}
      <button
        className="absolute left-[680px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition-opacity max-md:left-[400px] max-sm:left-[calc(50%-55px)]"
        onClick={() => api?.scrollPrev()}
        aria-label="Anterior"
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path
            d="M29.0012 35.169L12.8912 22.4994L29.0012 9.83099"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </button>

      <button
        className="absolute left-[745px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition-opacity max-md:left-[465px] max-sm:left-[calc(50%+10px)]"
        onClick={() => api?.scrollNext()}
        aria-label="Siguiente"
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path
            d="M15.9988 9.83099L32.1088 22.5006L15.9988 35.169"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Carousel */}
      <div className="absolute left-[656px] top-[297px] w-[750px] max-md:left-[400px] max-md:top-[250px] max-md:w-[350px] max-sm:left-5 max-sm:top-[520px] max-sm:w-[calc(100%-40px)]">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-[38px] max-md:-ml-5 max-sm:-ml-5">
            {EXPERIENCES.map((experience) => (
              <CarouselItem
                key={experience.id}
                className="pl-[38px] basis-auto max-md:pl-5 max-sm:pl-5 max-sm:basis-[280px]"
              >
                <ExperienceCard
                  logo={experience.logo}
                  logoAlt={experience.alt}
                  isActive={experience.id === activeId}
                  onClick={() => setActiveId(experience.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
