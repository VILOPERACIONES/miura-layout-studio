import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="w-full h-[539px] overflow-hidden relative bg-white max-md:h-[400px] max-sm:h-[600px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3a964e8def1a71e80507c4e8c11e7130e8ff1b04?width=2880"
        alt="Restaurant background"
        className="w-full h-[539px] absolute object-cover left-0 top-0 max-md:h-[400px] max-sm:h-[600px]"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/5918cf9f920709637b28ffa93f45a0ee93e0eeff?width=680"
        alt="Restaurant photo 1"
        className="w-[340px] h-[480px] absolute object-cover left-20 top-0 max-md:w-[250px] max-md:h-[350px] max-md:left-10 max-sm:w-[150px] max-sm:h-[200px] max-sm:left-5 max-sm:top-5"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8d3e26dcc2dfef028b89c5638feb936e3de29fef?width=680"
        alt="Restaurant photo 2"
        className="w-[340px] h-[480px] absolute object-cover left-[476px] top-[59px] max-md:w-[250px] max-md:h-[350px] max-md:left-80 max-md:top-[30px] max-sm:w-[150px] max-sm:h-[200px] max-sm:left-[190px] max-sm:top-[50px]"
      />

      <div>
        <svg
          width="209"
          viewBox="0 0 209 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[1132px] top-[189px]"
        >
          <path d="M0 0.5H209" stroke="#12181D" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
      </div>

      <div className="flex w-[469px] flex-col items-start gap-[26px] absolute h-[212px] left-[872px] top-[164px] max-md:w-[350px] max-md:left-[600px] max-md:top-[100px] max-sm:w-80 max-sm:left-5 max-sm:top-[280px]">
        <h2 className="h-[66px] self-stretch text-[#12181D] text-[32px] font-bold max-md:text-[28px] max-sm:text-2xl max-sm:text-center"> {/* syncopate Bold size-32 */}
          ¿QUIENES
          <br />
          SOMOS?
        </h2>

        <p className="h-[120px] self-stretch text-black text-justify text-base font-normal leading-[18px] max-md:text-sm max-md:leading-4 max-sm:text-xs max-sm:leading-[14px] max-sm:text-center">  anek telugu regular size-16
          Somos un grupo restaurantero con sede en Yucatán, México, enfocado
          en crear experiencias gastronómicas que transcienden lo cotidiano.
          <br />
          <br />
          Con un sin fin de propuestas culinarias, logramos combinar
          creatividad y hospitalidad para ofrecer una experiencia inigualable
          en cada visita.
        </p>
      </div>
    </section>
  );
};
