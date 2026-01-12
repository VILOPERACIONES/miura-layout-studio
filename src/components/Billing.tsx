import React from 'react';

export const Billing: React.FC = () => {
  return (
    <section className="w-full h-[500px] overflow-hidden relative bg-white max-md:h-[400px] max-sm:h-[350px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a5ccc1c57d73d47cfee66a48a32b43cd5d7f03d9?width=2880"
        alt="Billing background"
        className="w-full h-[539px] absolute object-cover left-0 -top-5"
      />

      <div className="flex w-[715px] flex-col items-center gap-[38px] absolute -translate-x-2/4 h-[328px] left-2/4 top-[91px] max-md:w-[600px] max-md:top-[70px] max-sm:w-80 max-sm:top-[50px]">
          <h2
          className="
            h-[26px]
            self-stretch
            font-syncopate
            font-bold
            text-[#12181D]
            text-center
            text-[36px]
            max-md:text-[32px]
            max-sm:text-2xl
          "
        >
          FACTURACIÓN
        </h2>

        <button className="w-[456px] h-[92px] flex items-center justify-center bg-[#12181D] rounded-[41px] hover:bg-[#2a3035] transition-colors max-md:w-[380px] max-md:h-20 max-sm:w-[280px] max-sm:h-[60px]">
          <span
            className="
              font-anek
              font-normal
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
            font-normal
            text-[#12181D]
            text-center
            text-[26px]
            leading-7
            max-md:text-[22px]
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
