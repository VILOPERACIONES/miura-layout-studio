// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { HamburgerButton } from "./ui/hamburger-button";
import { Sidebar } from "./ui/side-bar";
import { PromotionsModal } from "./PromotionModal";
import { promotionsService } from "@/services/promotions";

export const Hero: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasPromotions, setHasPromotions] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const checkPromotions = async () => {
      try {
        const promos = await promotionsService.getActive();
        if (promos.length > 0) {
          setHasPromotions(true);
          timer = setTimeout(() => {
            setIsModalOpen(true);
          }, 1000);
        }
      } catch (error) {
        console.error("Error checking promotions:", error);
      }
    };
    checkPromotions();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <header
        className="
          relative
          w-full
          h-screen
          min-h-[600px]
          overflow-hidden
          bg-white
          shadow-[6px_4px_3.3px_-50px_rgba(0,0,0,0.25)]
        "
      >
        {/* ===================== */}
        {/* VIDEO BACKGROUND — ALL SCREENS */}
        {/* ===================== */}
        {/* Eliminamos el 'hidden lg:block'. object-cover recorta los lados en móvil para llenar el alto sin deformar. */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dfsrjktyj/image/upload/v1770334986/bg-hero_shvbgi.png"
        >
          <source
            src="https://res.cloudinary.com/dfsrjktyj/video/upload/v1775513475/MIURA_VIDEO_MARZO_skogss.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/20" />

        {/* ===================== */}
        {/* AUDIO TOGGLE — ALL SCREENS */}
        {/* ===================== */}
        {/* Cambiamos 'hidden lg:flex' por 'flex' para que también se vea en móvil */}
        <button
          onClick={() => setIsMuted((prev) => !prev)}
          className="
            absolute bottom-6 right-6 z-30
            flex items-center justify-center
            w-11 h-11 rounded-full
            bg-black/50 backdrop-blur text-white
            hover:bg-black/70 transition
          "
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

        {/* ===================== */}
        {/* HEADER BAR (UNIFICADO) */}
        {/* ===================== */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            z-20
            px-8 pt-8           /* Mobile */
            md:px-12 md:pt-12    /* Tablet */
            lg:px-20 lg:pt-14    /* Desktop */
            flex
            items-center
            justify-between
          "
        >
          <img
            src="https://res.cloudinary.com/dfsrjktyj/image/upload/v1770766588/miura-hospitality-logo_kqsbs8.png"
            alt="Miura Logo"
            className="w-[110px] md:w-[140px] lg:w-[170px] h-auto"
          />

          <HamburgerButton onClick={() => setIsSidebarOpen(true)} />
        </div>

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

      </header>

      {/* Promotions Modal */}
      {hasPromotions && (
        <PromotionsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};