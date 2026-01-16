import React from 'react';

export const Billing: React.FC = () => {
  return (
    <section className="
      relative
      w-full
      h-[500px]
      max-md:h-[400px]
      max-sm:h-[350px]
      overflow-hidden
      bg-white
      flex
      items-center
      justify-center
    ">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a5ccc1c57d73d47cfee66a48a32b43cd5d7f03d9?width=2880" //TODO: AGREGAR A CLOUDINARY Y CAMBIAR LA URL
        alt="Billing background"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      <div className="
        relative
        z-10
        flex
        flex-col
        items-center
        gap-[20px]
        md:gap-[35px]
        lg:gap-[35px]
        w-full
        max-w-[715px]
        px-6
        md:max-w-[600px]
      ">
          <h2
          className="
            h-[32px]
            self-stretch
            font-syncopate
            font-bold
            text-[#12181D]
            text-center
            text-[36px]
            max-md:text-[32px]
            max-sm:text-[24px]
          "
        >
          FACTURACIÓN
        </h2>

        <button className="
          w-full
          max-w-[456px]
          h-[92px]
          max-md:h-20
          max-sm:h-[55px]
          max-sm:w-[280px]
          flex
          items-center
          justify-center
          bg-[#12181D]
          rounded-[41px]
          hover:bg-[#2a3035]
          transition-colors
        ">
          <span
            className="
              font-extralight
              text-white
              text-center
              text-[26px]
              leading-7
              max-md:text-[22px]
              max-sm:text-base
            "
          >
            Ir al portal de facturación
          </span>
        </button>

        <p
          className="
            h-[134px]
            self-stretch
            font-anek
            font-extralight
            text-[#12181D]
            text-center
            text-[26px]
            leading-7
            max-md:text-[26px]
            max-sm:text-base
            max-sm:leading-5
          "
        >
          Accede a nuestro portal de facturación electrónica para generar tu
          comprobante fiscal de manera rápida y segura.
          <br />
          <br />
          Ten a la mano tu ticket de consumo y tus datos fiscales para
          completar el proceso
        </p>
      </div>
    </section>
  );
};
