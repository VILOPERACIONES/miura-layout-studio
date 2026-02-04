import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { EXPERIENCES } from "@/constants/experiences";
import { VectorLine } from "./ui/vectorLine";
import { InstagramButton } from "./ui/isntagram-button";

export const Experiences: React.FC = () => {
  // APIs separadas para cada carousel
  const [mobileApi, setMobileApi] = React.useState<CarouselApi>();
  const [desktopApi, setDesktopApi] = React.useState<CarouselApi>();

  const [activeId, setActiveId] = React.useState<string>(
    EXPERIENCES[2]?.id ?? EXPERIENCES[0]?.id ?? ""
  );

  const activeExperience =
    EXPERIENCES.find((x) => x.id === activeId) ?? EXPERIENCES[0];

  // Efecto para selección automática basada en el slide central (mobile/tablet)
  React.useEffect(() => {
    if (!mobileApi) return;

    const onSelect = () => {
      const selectedIndex = mobileApi.selectedScrollSnap();
      const experience = EXPERIENCES[selectedIndex];
      if (experience) {
        setActiveId(experience.id);
      }
    };

    // Escuchar evento de selección
    mobileApi.on("select", onSelect);
    onSelect();

    return () => {
      mobileApi.off("select", onSelect);
    };
  }, [mobileApi]);

  // Efecto para selección automática en desktop (primer elemento visible)
  React.useEffect(() => {
    if (!desktopApi) return;

    const onSelect = () => {
      const selectedIndex = desktopApi.selectedScrollSnap();
      const experience = EXPERIENCES[selectedIndex];
      if (experience) {
        setActiveId(experience.id);
      }
    };

    desktopApi.on("select", onSelect);
    onSelect();

    return () => {
      desktopApi.off("select", onSelect);
    };
  }, [desktopApi]);

  return (
    <section className="
      relative
      w-full
      min-h-[900px]
      sm:h-[800px]
      md:h-[800px]
      overflow-hidden
      bg-black

      flex
      items-center
      justify-center
    ">
      {/* Fondo */}
      <img
        src={activeExperience.background}
        alt={`Background ${activeExperience.title ?? activeExperience.alt}`}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            activeExperience.onErrorBackground;
        }}
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

      {/* ===== MOBILE - TABLET LAYOUT (<1300px): Flujo vertical ===== */}
      <div className="
        desktop:hidden
        relative
        z-10
        flex
        flex-col
        items-center
      ">
        <h2 className="text-white text-2xl font-syncopate font-normal text-center">
          EXPERIENCIAS <br />
          <span className="font-bold"> MIURA</span>
        </h2>

        {/* Panel de información Mobile */}
        <div className="flex flex-col items-center gap-2 text-center w-[460px] max-sm:w-[320px]">
          {/* Logo */}
          <img
            src={activeExperience.heroLogo ?? activeExperience.logo}
            alt={activeExperience.heroLogoAlt ?? activeExperience.alt}
            className="w-[168px] h-[166px] object-contain"
          />

          {/* Descripción */}
          <p className="
            font-anek
            text-white
            font-extralight
            text-[26px]
            max-sm:text-base
            text-justify
            lg:text-justify
            text-center
          ">
            {activeExperience.description}
          </p>

          {/* Acciones */}
          <div className="flex items-center w-full">

            {/* Accion Zona */}
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
            {/* Acciones de ig + reservar */}
            <div className="ml-auto flex items-center gap-1.5">

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
        </div>

        {/* Carousel Mobile/Tablet con selección automática */}
        <div className="w-screen mt-4">
          <Carousel
            setApi={setMobileApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: false,
              startIndex: 2, // Iniciar en índice 2 para mostrar items a la izquierda
            }}
            // className="cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="gap-x-4 py-6 px-4">
              {EXPERIENCES.map((experience, index) => (
                <CarouselItem
                  key={experience.id}
                  className="basis-[140px] last:pr-6"
                >
                  <ExperienceCard
                    logo={experience.logo}
                    fallbackLogo={experience.onErrorLogo}
                    logoAlt={experience.alt}
                    isActive={experience.id === activeId}
                    onClick={() => {
                      mobileApi?.scrollTo(index);
                    }}
                    size="small"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Navegación Mobile/Tablet */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <button
            onClick={() => mobileApi?.scrollPrev()}
            aria-label="Anterior"
            className="w-[45px] h-[45px] hover:opacity-80 transition z-10"
          >
            <img
              src="/src/assets/images/experiences/prev_button.png"
              alt="Anterior"
              onError={(e) => {
                e.currentTarget.src = "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409812/prev_button_bovkx5.png";
              }}
              className="w-full h-full object-contain"
            />
          </button>

          <button
            onClick={() => mobileApi?.scrollNext()}
            aria-label="Siguiente"
            className="w-[45px] h-[45px] hover:opacity-80 transition z-10"
          >
            <img
              src="/src/assets/images/experiences/next_button.png"
              alt="Siguiente"
              className="w-full h-full object-contain"
              onError={(e) => {
              e.currentTarget.src = "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409812/next_button_rsydr0.png"
              }}
            />
          </button>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (≥1300px): Layout absoluto original =====  PERO QUIERO QUE SE VEA SOLO MAYOR A 1300px como se realiarìa esto?*/}
      {/* Título Desktop */}
      <h2 className="hidden desktop:block absolute top-[80px] left-1/2 -translate-x-1/2 text-white text-[36px] font-syncopate font-normal text-center">
        EXPERIENCIAS
        <span className="font-bold"> MIURA</span>
      </h2>

      {/*  Panel izquierdo Desktop */}
      <div className="hidden desktop:flex absolute left-[125px] top-[200px] w-[385px] flex-col gap-5 xl:left-[125px] xl:top-[200px] xl:w-[385px]">
        {/* Logo */}
        <div className="w-[264px] h-[130px] flex items-end justify-start">
          <img
            src={activeExperience.heroLogo ?? activeExperience.logo}
            alt={activeExperience.heroLogoAlt ?? activeExperience.alt}
            onError={(e) => {
              e.currentTarget.src = activeExperience.onErrorHeroLogo;
            }}
            className="max-h-full w-auto object-contain"
          />
        </div>

        {/* Zona */}
        <a href={activeExperience.ubicacion}>
          <div className="flex items-center gap-4 font-anek font-medium text-[20px]">
            <svg width="16" height="25" viewBox="0 0 16 25" fill="none">
              <path
                d="M15.8707 7.86135C15.8707 3.63132 12.3467 0.202026 8 0.202026C3.65325 0.202026 0.129333 3.63132 0.129333 7.86135C0.129333 11.6167 2.90679 14.7409 6.57193 15.3944V24.7976H9.42845V15.3944C13.0932 14.7405 15.871 11.6167 15.871 7.86135Z"
                fill="white"
              />
            </svg>

            <span className="text-white tracking-[6.8px]">
              {activeExperience.zone ?? "NORTE"}
            </span>
          </div>
        </a>


        <div className="h-[225px] overflow-hidden">
          <p className="font-anek font-extralight text-white text-[26px] leading-7">
            {activeExperience.description}
          </p>
        </div>


        {/* Acciones */}
        <div className="flex items-center gap-6">
          {activeExperience.links?.instagram && (
            <InstagramButton
              href={activeExperience.links.instagram}
              className="hover:bg-white/20"
            />
          )}

          {activeExperience.links?.reserve ? (
            activeExperience.links.reserve ===
            "https://www.rappi.com.mx/restaurantes/1930050449-kona" ? (
              <a
                  href={activeExperience.links.reserve}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ordenar en Rappi"
                  className="
                    h-10
                    px-7
                    flex items-center justify-center
                    bg-transparent
                    hover:bg-white/10
                    transition
                  "
                >
                  <img
                    src="/src/assets/images/shared/rappi.png"
                    alt="Rappi"
                    className="h-[41px] object-contain"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768434000/rappi_droqcf.png";
                    }}
                  />
                </a>
            ) : (
              <a
                href={activeExperience.links.reserve}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 h-10 flex items-center justify-center
                  rounded-full border border-white/70
                  text-white text-[11px] tracking-[3.5px]
                  hover:bg-white hover:text-black
                  transition
                "
              >
                RESERVAR
              </a>
            )
          ) : (
            <div
              className="
                px-6 h-10 flex items-center justify-center
                rounded-full border border-white/70
                text-white text-[11px] tracking-[3.5px]
                cursor-default select-none
              "
            >
              PRÓXIMAMENTE
            </div>
          )}

        </div>
      </div>

      <div
        className="
          hidden desktop:block
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[80px]
          z-20
        "
      >
        {/* Contenedor de botones (punto de anclaje) */}
        <div className="relative flex items-center gap-6">
          <button
            onClick={() => desktopApi?.scrollPrev()}
            aria-label="Anterior"
            className="w-[45px] h-[45px] hover:opacity-80 transition z-10"
          >
            <img
              src="/src/assets/images/experiences/prev_button.png"
              alt="Anterior"
              onError={(e) => {
                e.currentTarget.src = "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409812/prev_button_bovkx5.png";
              }}
              className="w-full h-full object-contain"
            />
          </button>

          <button
            onClick={() => desktopApi?.scrollNext()}
            aria-label="Siguiente"
            className="w-[45px] h-[45px] hover:opacity-80 transition z-10"
          >
            <img
              src="/src/assets/images/experiences/next_button.png"
              alt="Siguiente"
              className="w-full h-full object-contain"
              onError={(e) => {
              e.currentTarget.src = "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409812/next_button_rsydr0.png"
              }}
            />
          </button>


          <VectorLine
            width={900}
            color="#FFFFFF"
            className="absolute left-full top-1/2 -translate-y-1/2 ml-6"
          />
        </div>
      </div>



      {/* Carousel Desktop con selección automática del primer elemento visible */}
      <div
        className="hidden desktop:block absolute top-[297px] right-[0px] xl:right-[0px] xl:top-[297px]"
        style={{
          width: "clamp(350px, 55vw, 1200px)",
        }}
      >
        <Carousel setApi={setDesktopApi} opts={{ align: "start", loop: true, skipSnaps: false }}>
          <CarouselContent className="gap-x-8 px-8 py-10">
            {EXPERIENCES.map((experience) => (
              <CarouselItem
                key={experience.id}
                className="basis-[220px] last:pr-8"
              >
                <ExperienceCard
                  logo={experience.logo}
                  fallbackLogo={experience.onErrorLogo}
                  logoAlt={experience.alt}
                  isActive={experience.id === activeId}
                  onClick={() => {
                    const index = EXPERIENCES.findIndex(e => e.id === experience.id);
                    desktopApi?.scrollTo(index);
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
