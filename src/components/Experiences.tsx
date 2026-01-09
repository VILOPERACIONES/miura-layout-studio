import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
type Experience = {
  logo: string;
  alt: string;
  text?: string;
};

export const Experiences: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const experiences: Experience[] = [
    {
      logo: "/images/experiences/Logo-47-th-street.png",
      alt: "47th Street Logo"
    },
    {
      logo: "/images/experiences/Logo-Casa-Blanca.png",
      alt: "Casa Blanca Logo"
    },
    {
      logo: "/images/experiences/MIURA-LOGO-NEGRO.png",
      alt: "Miura Logo"
    },
    {
      logo: "/images/experiences/Branding-Valhalla-02.png",
      alt: "Valhalla Logo",
    },
    {
      logo: "/images/experiences/KonaLogo.png",
      alt: "Kōnā Logo",
    },
    {
      logo: "/images/experiences/FAENA-logo.png",
      alt: "Faena Taberna Logo",
    },
    {
      logo: "/images/experiences/LOGO-TERCER-ACTO-NEGRO.png",
      alt: "Tercer Acto Logo",
    },
  ];

  return (
    <section className="w-full h-[800px] overflow-hidden relative bg-white max-md:h-[700px] max-sm:h-[900px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4b44aadc15639e5269ca91c36327202bfb9aee46?width=2880"
        alt="Restaurant experience background"
        className="w-full h-[800px] aspect-[9/5] absolute object-cover left-0 top-0 max-md:h-[700px] max-sm:h-[900px]"
      />
      <div className="w-full h-[800px] bg-blend-multiply absolute left-0 top-0 max-md:h-[700px] max-sm:h-[900px]" />

      <h2 className="w-[494px] h-[26px] text-white text-center text-4xl font-normal absolute -translate-x-2/4 left-2/4 top-[81px] max-md:text-[32px] max-md:top-[60px] max-sm:text-2xl max-sm:w-[300px] max-sm:top-10">
        ExPERIENCIAS<span className="font-bold">MIURA</span>
      </h2>

      <div className="flex w-[385px] flex-col justify-center items-start gap-[39px] absolute h-[307px] left-[125px] top-60 max-md:w-80 max-md:left-20 max-md:top-[180px] max-sm:w-[280px] max-sm:left-5 max-sm:top-[120px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/82b38d32f0ea37f690b1eefb6e7cf0ab4fd87a8e?width=528"
          alt="Yakuza Logo"
          className="w-[264px] h-[57px] aspect-[88/19] max-sm:w-[200px] max-sm:h-[43px]"
        />

        <div className="flex items-center gap-4 w-[121px] h-[25px]">
          <svg
            width="16"
            height="25"
            viewBox="0 0 16 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-hidden w-4 h-[25px]"
          >
            <g clipPath="url(#clip0_29_67)">
              <path d="M15.8707 7.86135C15.8707 3.63132 12.3467 0.202026 8 0.202026C3.65325 0.202026 0.129333 3.63132 0.129333 7.86135C0.129333 11.6167 2.90679 14.7409 6.57193 15.3944V24.7976H9.42845V15.3944C13.0932 14.7405 15.871 11.6167 15.871 7.86135H15.8707ZM2.81736 7.86135C2.81506 8.34165 2.04941 8.3409 2.05171 7.86135C2.05478 7.18498 2.17145 6.5045 2.41477 5.86996C3.28174 3.60928 5.51844 2.08399 8 2.07279C8.49355 2.07055 8.49278 2.81564 8 2.81788C7.37635 2.82087 6.76651 2.92656 6.18086 3.13571C4.1679 3.85541 2.82734 5.78929 2.81736 7.86098V7.86135Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_29_67">
                <rect width="16" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="w-[89px] h-[19px] text-white text-xl font-medium leading-7 tracking-[6.8px]">
            NORTE
          </span>
        </div>

        <p className="w-[385px] h-[147px] text-white text-[26px] font-extralight leading-7 max-md:text-[22px] max-md:w-80 max-sm:text-base max-sm:w-[280px] max-sm:leading-5">
          Inspirado en los restaurantes japoneses de la zona de Ginza. Yakuza
          nace como un espacio donde los ingredientes de la auténtica cocina
          japonesa se fusionan con componentes gourmet.
        </p>
      </div>

      <div className="w-[201px] h-[33px] absolute flex items-center gap-[45px] left-32 top-[601px] max-sm:left-5 max-sm:top-[450px]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-hidden w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <g clipPath="url(#clip0_29_69)">
            <path d="M31.7029 15.9996C31.7029 24.6951 24.672 31.7437 16 31.7437C7.32799 31.7437 0.297043 24.6951 0.297043 15.9996C0.297043 7.3041 7.32722 0.255493 16 0.255493C24.6728 0.255493 31.7029 7.30487 31.7029 15.9996ZM20.1065 25.6094C20.9808 25.6094 21.7537 25.4054 22.5098 25.1053C24.6382 24.2603 25.6015 22.2478 25.6998 20.023V11.9785C25.5992 9.74752 24.6421 7.74661 22.5105 6.89468C21.736 6.58531 20.9378 6.38906 20.0766 6.38906L11.8674 6.39214C10.9824 6.39214 10.1572 6.6107 9.36665 6.94932C7.31033 7.82895 6.39769 9.80524 6.30098 11.9778V20.023C6.39769 22.2132 7.32875 24.2018 9.40964 25.0699C10.1887 25.3947 10.9985 25.6086 11.8674 25.6086H20.1065V25.6094Z" fill="white" />
            <path d="M19.9852 23.7963L12.0493 23.7986C11.4107 23.7986 10.8396 23.677 10.2624 23.4623C8.87464 22.9466 8.1869 21.5291 8.09095 20.0884L8.08711 12.1671C8.08711 10.641 8.81554 9.0549 10.3054 8.52312C10.8496 8.32842 11.3846 8.20605 11.9848 8.20605H20.0144C20.6146 8.20605 21.1512 8.32688 21.6938 8.52312C23.1292 9.04105 23.9037 10.5802 23.9037 12.0401V19.963C23.9037 21.4229 23.1292 22.9613 21.6931 23.48C21.1504 23.6754 20.6208 23.7978 19.9844 23.7978L19.9852 23.7963ZM22.1528 10.9088C22.1528 10.344 21.6961 9.88682 21.1335 9.88682C20.5709 9.88682 20.1142 10.3447 20.1142 10.9088C20.1142 11.4729 20.5709 11.9308 21.1335 11.9308C21.6961 11.9308 22.1528 11.4729 22.1528 10.9088ZM21.1097 16.0004C21.1097 13.1714 18.8223 10.878 16.0008 10.878C13.1792 10.878 10.8918 13.1714 10.8918 16.0004C10.8918 18.8294 13.1792 21.1227 16.0008 21.1227C18.8223 21.1227 21.1097 18.8294 21.1097 16.0004Z" fill="white" />
            <path d="M16 19.3042C17.8199 19.3042 19.2952 17.825 19.2952 16.0004C19.2952 14.1757 17.8199 12.6965 16 12.6965C14.1801 12.6965 12.7048 14.1757 12.7048 16.0004C12.7048 17.825 14.1801 19.3042 16 19.3042Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_29_69">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <button className="w-[124px] h-[33px] border flex items-center justify-center rounded-xl border-solid border-white hover:bg-white hover:text-black transition-colors">
          <span className="text-white text-center text-xs font-normal tracking-[3.48px] hover:text-black">
            RESERVAR
          </span>
        </button>
      </div>

      <button
        className="absolute left-[680px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition-opacity max-md:left-[400px] max-sm:left-[calc(50%-55px)]"
        onClick={() => api?.scrollPrev()}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-hidden w-[45px] h-[45px]"
        >
          <path d="M39.8383 43.933H5.16168C2.93488 43.933 1.12366 42.117 1.12366 39.8844V5.11574C1.12366 2.88311 2.93488 1.06714 5.1606 1.06714H39.8383C42.0651 1.06714 43.8764 2.88311 43.8764 5.11574V39.8844C43.8764 42.117 42.0651 43.933 39.8383 43.933ZM5.1606 3.18397C4.09847 3.18397 3.23495 4.04975 3.23495 5.11574V39.8844C3.23495 40.9504 4.09955 41.8162 5.16168 41.8162H39.8383C40.9005 41.8162 41.7651 40.9504 41.7651 39.8844V5.11574C41.7651 4.04975 40.9005 3.18397 39.8383 3.18397H5.1606Z" fill="white" />
          <path d="M29.0012 35.169C28.7691 35.169 28.536 35.0922 28.3406 34.9353L12.8912 22.4994L28.3406 10.0636C28.795 9.69884 29.4589 9.77135 29.8248 10.227C30.1896 10.6826 30.1173 11.3482 29.6629 11.715L16.2633 22.4994L29.6629 33.2859C30.1173 33.6517 30.1907 34.3173 29.8248 34.7729C29.6165 35.0337 29.3099 35.169 29.0012 35.169Z" fill="white" />
        </svg>
      </button>

      <button
        className="absolute left-[745px] top-[700px] w-[45px] h-[45px] hover:opacity-80 transition-opacity max-md:left-[465px] max-sm:left-[calc(50%+10px)]"
        onClick={() => api?.scrollNext()}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-hidden w-[45px] h-[45px]"
        >
          <path d="M5.16167 1.06701L39.8383 1.06701C42.0651 1.06701 43.8763 2.88298 43.8763 5.11561L43.8763 39.8843C43.8763 42.1169 42.0651 43.9329 39.8394 43.9329L5.16166 43.9329C2.93487 43.9329 1.12365 42.1169 1.12365 39.8843L1.12365 5.11561C1.12365 2.88298 2.93488 1.06701 5.16167 1.06701ZM39.8394 41.816C40.9015 41.816 41.765 40.9503 41.765 39.8843L41.765 5.11561C41.765 4.04962 40.9005 3.18384 39.8383 3.18384L5.16167 3.18384C4.09954 3.18384 3.23495 4.04962 3.23495 5.11561L3.23494 39.8843C3.23494 40.9502 4.09954 41.816 5.16166 41.816L39.8394 41.816Z" fill="white" />
          <path d="M15.9988 9.83099C16.2309 9.83099 16.464 9.90783 16.6594 10.0648L32.1088 22.5006L16.6594 34.9364C16.205 35.3012 15.5411 35.2286 15.1752 34.773C14.8104 34.3174 14.8827 33.6518 15.3371 33.285L28.7367 22.5006L15.3371 11.7141C14.8827 11.3483 14.8093 10.6827 15.1752 10.2271C15.3835 9.96627 15.6901 9.83099 15.9988 9.83099Z" fill="white" />
        </svg>
      </button>

      <div className="absolute left-[656px] top-[297px] w-[750px] max-md:left-[400px] max-md:top-[250px] max-md:w-[350px] max-sm:left-5 max-sm:top-[520px] max-sm:w-[calc(100%-40px)]">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-[38px] max-md:-ml-5 max-sm:-ml-5">
            {experiences.map((experience, index) => (
              <CarouselItem key={index} className="pl-[38px] basis-auto max-md:pl-5 max-sm:pl-5 max-sm:basis-[280px]">
                <ExperienceCard
                  logo={experience.logo}
                  logoAlt={experience.alt}
                  text={experience.text}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
