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
    <section className="relative w-full min-h-[900px] sm:h-[800px] md:h-[800px] overflow-hidden bg-black">
      {/* Fondo */}
      <img
        src={activeExperience.background}
        alt={`Background ${activeExperience.title ?? activeExperience.alt}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay base */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Sombra lateral izquierda - solo visible en desktop */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 25%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.0) 65%)",
        }}
      />

      {/* Sombra superior para mobile */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.0) 100%)",
        }}
      />

      {/* Viñeta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 200px rgba(0,0,0,0.55)",
        }}
      />

      {/* ===== MOBILE LAYOUT (<640px): Flujo vertical ===== */}
      <div className="sm:hidden relative z-10 flex flex-col items-center px-5 pt-10 pb-8 gap-6">
        {/* Título Mobile */}
        <h2 className="text-white text-2xl font-normal text-center">
          EXPERIENCIAS<span className="font-bold"> MIURA</span>
        </h2>

        {/* Panel de información Mobile */}
        <div className="flex flex-col items-center gap-5 text-center max-w-[320px]">
          {/* Logo */}
          <img
            src={activeExperience.heroLogo ?? activeExperience.logo}
            alt={activeExperience.heroLogoAlt ?? activeExperience.alt}
            className="w-[180px] h-auto object-contain"
          />

          {/* Zona */}
          <div className="flex items-center justify-center gap-3">
            <svg width="14" height="22" viewBox="0 0 16 25" fill="none">
              <path
                d="M15.8707 7.86135C15.8707 3.63132 12.3467 0.202026 8 0.202026C3.65325 0.202026 0.129333 3.63132 0.129333 7.86135C0.129333 11.6167 2.90679 14.7409 6.57193 15.3944V24.7976H9.42845V15.3944C13.0932 14.7405 15.871 11.6167 15.871 7.86135Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-base tracking-[4px]">
              {activeExperience.zone ?? "NORTE"}
            </span>
          </div>

          {/* Descripción */}
          <p className="text-white text-sm font-extralight leading-5">
            {activeExperience.description}
          </p>

          {/* Acciones */}
          <div className="flex items-center justify-center gap-4">
            {activeExperience.links?.instagram && (
              <a
                href={activeExperience.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/60 hover:bg-white/10 transition"
              >
                <svg
                  width="18"
                  height="18"
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

            {activeExperience.links?.reserve && (
              <a
                href={activeExperience.links.reserve}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 h-9 flex items-center justify-center rounded-full border border-white/70 text-white text-[10px] tracking-[3px] hover:bg-white hover:text-black transition"
              >
                RESERVAR
              </a>
            )}
          </div>
        </div>

        {/* Carousel Mobile */}
        <div className="w-full mt-4">
          <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
            <CarouselContent className="gap-x-4 px-4">
              {EXPERIENCES.map((experience) => (
                <CarouselItem
                  key={experience.id}
                  className="basis-[160px] flex-shrink-0"
                >
                  <ExperienceCard
                    logo={experience.logo}
                    logoAlt={experience.alt}
                    isActive={experience.id === activeId}
                    onClick={() => setActiveId(experience.id)}
                    size="small"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Navegación Mobile */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <button
            className="w-10 h-10 hover:opacity-80 transition"
            onClick={() => api?.scrollPrev()}
            aria-label="Anterior"
          >
            <svg width="40" height="40" viewBox="0 0 45 45" fill="none">
              <path d="M29 35L13 22.5 29 10" stroke="white" strokeWidth="2" />
            </svg>
          </button>

          <button
            className="w-10 h-10 hover:opacity-80 transition"
            onClick={() => api?.scrollNext()}
            aria-label="Siguiente"
          >
            <svg width="40" height="40" viewBox="0 0 45 45" fill="none">
              <path d="M16 10L32 22.5 16 35" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* ===== TABLET LAYOUT (640px - 1023px): Flujo vertical ===== */}
      <div className="hidden sm:flex lg:hidden relative z-10 flex-col items-center px-8 pt-16 pb-10 gap-8">
        {/* Título Tablet */}
        <h2 className="text-white text-3xl font-normal text-center">
          EXPERIENCIAS<span className="font-bold"> MIURA</span>
        </h2>

        {/* Panel de información Tablet */}
        <div className="flex flex-col items-center gap-6 text-center max-w-[420px]">
          {/* Logo */}
          <img
            src={activeExperience.heroLogo ?? activeExperience.logo}
            alt={activeExperience.heroLogoAlt ?? activeExperience.alt}
            className="w-[220px] h-auto object-contain"
          />

          {/* Zona */}
          <div className="flex items-center justify-center gap-4">
            <svg width="15" height="23" viewBox="0 0 16 25" fill="none">
              <path
                d="M15.8707 7.86135C15.8707 3.63132 12.3467 0.202026 8 0.202026C3.65325 0.202026 0.129333 3.63132 0.129333 7.86135C0.129333 11.6167 2.90679 14.7409 6.57193 15.3944V24.7976H9.42845V15.3944C13.0932 14.7405 15.871 11.6167 15.871 7.86135Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-lg tracking-[5px]">
              {activeExperience.zone ?? "NORTE"}
            </span>
          </div>

          {/* Descripción */}
          <p className="text-white text-lg font-extralight leading-6">
            {activeExperience.description}
          </p>

          {/* Acciones */}
          <div className="flex items-center justify-center gap-5">
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

            {activeExperience.links?.reserve && (
              <a
                href={activeExperience.links.reserve}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 h-10 flex items-center justify-center rounded-full border border-white/70 text-white text-[11px] tracking-[3.5px] hover:bg-white hover:text-black transition"
              >
                RESERVAR
              </a>
            )}
          </div>
        </div>

        {/* Carousel Tablet */}
        <div className="w-full mt-4">
          <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
            <CarouselContent className="gap-x-6 px-6">
              {EXPERIENCES.map((experience) => (
                <CarouselItem
                  key={experience.id}
                  className="basis-[200px] flex-shrink-0"
                >
                  <ExperienceCard
                    logo={experience.logo}
                    logoAlt={experience.alt}
                    isActive={experience.id === activeId}
                    onClick={() => setActiveId(experience.id)}
                    size="small"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Navegación Tablet */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            className="w-11 h-11 hover:opacity-80 transition"
            onClick={() => api?.scrollPrev()}
            aria-label="Anterior"
          >
            <svg width="44" height="44" viewBox="0 0 45 45" fill="none">
              <path d="M29 35L13 22.5 29 10" stroke="white" strokeWidth="2" />
            </svg>
          </button>

          <button
            className="w-11 h-11 hover:opacity-80 transition"
            onClick={() => api?.scrollNext()}
            aria-label="Siguiente"
          >
            <svg width="44" height="44" viewBox="0 0 45 45" fill="none">
              <path d="M16 10L32 22.5 16 35" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (≥1024px): Layout absoluto original ===== */}
      
      {/* Título Desktop */}
      <h2 className="hidden lg:block absolute top-[80px] left-1/2 -translate-x-1/2 text-white text-4xl font-normal text-center xl:text-4xl">
        EXPERIENCIAS<span className="font-bold"> MIURA</span>
      </h2>

      {/* Panel izquierdo Desktop */}
      <div className="hidden lg:flex absolute left-[125px] top-[240px] w-[385px] flex-col gap-8 xl:left-[125px] xl:top-[240px] xl:w-[385px]">
        {/* Logo */}
        <img
          src={activeExperience.heroLogo ?? activeExperience.logo}
          alt={activeExperience.heroLogoAlt ?? activeExperience.alt}
          className="w-[264px] h-[57px] object-contain"
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
        <p className="text-white text-[26px] font-extralight leading-7 xl:text-[26px]">
          {activeExperience.description}
        </p>

        {/* Acciones */}
        <div className="flex items-center gap-6">
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

      {/* Navegación Prev Desktop */}
      <button
        className="hidden lg:block absolute left-[680px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition xl:left-[680px]"
        onClick={() => api?.scrollPrev()}
        aria-label="Anterior"
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M29 35L13 22.5 29 10" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Navegación Next Desktop */}
      <button
        className="hidden lg:block absolute left-[745px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition xl:left-[745px]"
        onClick={() => api?.scrollNext()}
        aria-label="Siguiente"
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M16 10L32 22.5 16 35" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Carousel Desktop */}
      <div
        className="hidden lg:block absolute top-[297px] right-[80px] xl:right-[80px] xl:top-[297px]"
        style={{
          width: "clamp(350px, 55vw, 1200px)",
        }}
      >
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent className="gap-x-8 px-8">
            {EXPERIENCES.map((experience) => (
              <CarouselItem
                key={experience.id}
                className="basis-[260px] 2xl:basis-[220px] last:pr-8"
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
