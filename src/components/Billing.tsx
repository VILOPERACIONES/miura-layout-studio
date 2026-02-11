import React from 'react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const Billing: React.FC = () => {
  const billingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (!billingRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(billingRef.current!.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.18,
      scrollTrigger: {
        trigger: billingRef.current,
        start: "top 85%",
        once: true,
      },
    });
  }, billingRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      className="
        relative
        w-full
        min-h-[500px]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-white
        px-4
      "
    >
      {/* Background */}
      <img
        src="https://res.cloudinary.com/dfsrjktyj/image/upload/v1770766069/bg-billing_sgce7l.png" //TODO: AGREGAR EL ON-ERROR AQUÍ
        alt="Billing background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div
        ref={billingRef}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          gap-6
          md:gap-8
          w-full
          max-w-[715px]
          md:max-w-[600px]
          text-center
        "
      >
        <h2
          className="
            font-syncopate
            font-bold
            text-[#12181D]
            text-[36px]
            max-md:text-[32px]
            max-sm:text-[24px]
          "
        >
          FACTURACIÓN
        </h2>

        <button
          className="
            w-full
            max-w-[252px]
            h-[56px]
            flex
            items-center
            justify-center
            bg-[#12181D]
            rounded-full
            hover:bg-[#2a3035]
            transition-colors
          "
        >
          <span
            className="
              font-arial
              font-bold
              text-white
              text-[24px]
              max-sm:text-base
            "
          >
            Ir al portal
          </span>
        </button>

        <p
          className="
            font-arial
            text-[#12181D]
            text-[18px]
            leading-7
            max-md:text-base
            max-sm:text-base
            max-w-[560px]
          "
        >
          Accede a nuestro portal de facturación electrónica para generar tu
          comprobante fiscal de manera rápida y segura.
          <br />
          <br />
          Ten a la mano tu ticket de consumo y tus datos fiscales para completar
          el proceso.
        </p>
      </div>
    </section>
  );
};

