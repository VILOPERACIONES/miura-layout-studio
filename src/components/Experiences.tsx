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
    <section className="relative w-full h-[800px] overflow-hidden bg-black max-md:h-[700px] max-sm:h-[900px]">
      {/* Fondo */}
      <img
        src={activeExperience.background}
        alt={`Background ${activeExperience.title ?? activeExperience.alt}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay base */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Sombra lateral izquierda */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 25%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.0) 65%)",
        }}
      />

      {/* Viñeta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 200px rgba(0,0,0,0.55)",
        }}
      />

      {/* Título */}
      <h2 className="absolute top-[80px] left-1/2 -translate-x-1/2 text-white text-4xl font-normal text-center max-md:text-3xl max-sm:text-2xl">
        EXPERIENCIAS<span className="font-bold"> MIURA</span>
      </h2>

      {/* Panel izquierdo */}
      <div className="absolute left-[125px] top-[240px] flex w-[385px] flex-col gap-8 max-md:left-20 max-md:top-[180px] max-md:w-80 max-sm:left-5 max-sm:top-[120px] max-sm:w-[280px]">
        {/* Logo */}
        <img
          src={activeExperience.heroLogo ?? activeExperience.logo}
          alt={activeExperience.heroLogoAlt ?? activeExperience.alt}
          className="w-[264px] h-[57px] object-contain max-sm:w-[200px]"
        />

        {/* Zona */}
        <div className="flex items-center gap-4">
          <svg width="16" height="25" viewBox="0 0 16 25" fill="none">
            <path
              d="M15.8707 7.86135C15.8707 3.63132 12.3467 0.202026 8 0.202026C3.65325 0.202026 0.129333 3.63132 0.129333 7.86135C0.129333 11.6167 2.90679 14.7409 6.57193 15.3944V24.7976H9.42845V15.3944C13.0932 14.7405 15.871 11.6167 15.871 7.86135Z"
              fill="white"
            />
          </svg>

          <span className="text-white text-xl tracking-[6.8px]">
            {activeExperience.zone ?? "NORTE"}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-white text-[26px] font-extralight leading-7 max-md:text-[22px] max-sm:text-base max-sm:leading-5">
          {activeExperience.description}
        </p>

        {/* Acciones */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          {activeExperience.links?.instagram && (
            <a
              href={activeExperience.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/60 hover:bg-white/10 transition"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
              >
                <rect x="2" y="2" width="20" height="20" rx="6" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
          )}

          {/* WhatsApp
          {activeExperience.links?.whatsapp && (
            <a
              href={activeExperience.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/60 hover:bg-white/10 transition"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
              >
                <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12Z" />
                <path d="M8.5 10.5c.5 2 2.5 4 4.5 4.5" />
              </svg>
            </a>
          )} */}

          {/* Reservar */}
          {activeExperience.links?.reserve && (
            <a
              href={activeExperience.links.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 h-10 flex items-center justify-center rounded-full border border-white/70 text-white text-xs tracking-[3.5px] hover:bg-white hover:text-black transition"
            >
              RESERVAR
            </a>
          )}
        </div>
      </div>

      {/* Prev */}
      <button
        className="absolute left-[680px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition max-md:left-[400px] max-sm:left-[calc(50%-55px)]"
        onClick={() => api?.scrollPrev()}
        aria-label="Anterior"
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M29 35L13 22.5 29 10" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Next */}
      <button
        className="absolute left-[745px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition max-md:left-[465px] max-sm:left-[calc(50%+10px)]"
        onClick={() => api?.scrollNext()}
        aria-label="Siguiente"
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M16 10L32 22.5 16 35" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Carousel (responsive y expandible en pantallas grandes) */}
      <div
        className="
          absolute top-[297px]
          right-[80px]
          max-md:right-8
          max-sm:right-5
          max-md:top-[250px]
          max-sm:top-[520px]
          max-sm:left-5
        "
        style={{
          width: "clamp(350px, 55vw, 1200px)",
        }}
      >
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          {/* gap-x controla el espacio visual entre cards */}
          <CarouselContent className="gap-x-8 px-8">
            {EXPERIENCES.map((experience) => (
              <CarouselItem
                  key={experience.id}
                  className="
                    basis-[260px]
                    max-sm:basis-[240px]
                    2xl:basis-[220px]
                    last:pr-8
                  "
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
