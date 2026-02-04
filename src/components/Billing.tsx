import React from 'react';

export const Billing: React.FC = () => {
  return (
    <section className="
      relative
      w-full
      h-[500px]
      max-md:h-[450px]
      max-sm:h-[450px]
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

      {/* para la versión mobile son 20px de gap*/}
      <div className="
        relative
        z-10
        flex
        flex-col
        items-center
        gap-[20px] md:gap-[35px]
        w-full
        max-w-[715px]
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

        {/*TODO: Adapbar el botton a la versión mobile */}
        <button className="
          w-full
          max-w-[252px]
          h-[63px]
          max-md:h-[63px]
          max-md:w-[252px]
          max-sm:h-[63px]
          max-sm:w-[252px]
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
              font-arial
              font-bold
              text-white
              text-center
              text-[24px]
              leading-7
              max-md:text-[22px]
              max-sm:text-base
            "
          >
            Ir al portal
          </span>
        </button>

        <p
          className="
            h-[134px]
            self-stretch
            font-arial
            font-regular
            text-[#12181D]
            text-center
            text-[18px]
            leading-7
            max-md:text-base
            max-sm:text-base

          "
        >
          Accede a nuestro portal de facturación electrónica para
          <br />
          generar tu comprobante fiscal de manera rápida y segura.
          <br />
          <br />
          Ten a la mano tu ticket de consumo y tus datos fiscales para
          <br />
          completar el proceso
        </p>
      </div>
    </section>
  );
};
