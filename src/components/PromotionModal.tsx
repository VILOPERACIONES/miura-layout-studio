// src/components/PromotionsModal.tsx
import { useEffect, useState } from "react";
import { promotionsService } from "@/services/promotions";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Promotion } from "@/types/promotion";

interface PromotionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromotionsModal: React.FC<PromotionsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadPromotions();
    }
  }, [isOpen]);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await promotionsService.getActive();
      setPromotions(data);
      setCurrentIndex(0);
    } catch (err) {
      console.error("Error loading promotions:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? promotions.length - 1 : prev - 1
    );
  };

  const handlePromotionClick = () => {
    const currentPromo = promotions[currentIndex];
    if (currentPromo?.link) {
      window.open(currentPromo.link, "_blank");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/70
        backdrop-blur-sm
        px-4
        animate-in fade-in duration-200
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-4xl
          bg-white
          rounded-lg
          shadow-2xl
          overflow-hidden
          animate-in zoom-in-95 duration-200
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4 right-4
            z-10
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-black/50
            hover:bg-black/70
            text-white
            transition
          "
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center h-[500px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center h-[500px] p-8 text-center">
            <p className="text-lg text-gray-600 mb-4">
              No se pudieron cargar las promociones
            </p>
            <button
              onClick={loadPromotions}
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Reintentar
            </button>
          </div>
        )}

        {/* No promotions */}
        {!loading && !error && promotions.length === 0 && (
          <div className="flex items-center justify-center h-[500px] p-8">
            <p className="text-lg text-gray-600">
              No hay promociones disponibles en este momento
            </p>
          </div>
        )}

        {/* Promotions carousel */}
        {!loading && !error && promotions.length > 0 && (
          <div className="relative">
            {/* Current promotion */}
            <div
              className={`
                relative
                ${promotions[currentIndex]?.link ? "cursor-pointer" : ""}
              `}
              onClick={handlePromotionClick}
            >
              {/* Desktop image */}
              <img
                src={promotions[currentIndex]?.image_desktop_url}
                alt={promotions[currentIndex]?.title}
                className="
                  w-full
                  h-auto
                  max-h-[600px]
                  object-contain
                  hidden md:block
                "
              />

              {/* Mobile image */}
              <img
                src={promotions[currentIndex]?.image_mobile_url}
                alt={promotions[currentIndex]?.title}
                className="
                  w-full
                  h-auto
                  max-h-[600px]
                  object-contain
                  block md:hidden
                "
              />

              {/* Promotion type badge */}
              {/* <div
                className="
                  absolute
                  top-4 left-4
                  px-3 py-1
                  bg-white/90
                  backdrop-blur
                  rounded-full
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                {promotions[currentIndex]?.type === "promo"
                  ? "Promoción"
                  : "Evento"}
              </div> */}

              {/* Link indicator */}
              {promotions[currentIndex]?.link && (
                <div
                  className="
                    absolute
                    bottom-4 right-4
                    px-4 py-2
                    bg-black/80
                    backdrop-blur
                    rounded-md
                    text-sm
                    text-white
                    flex items-center gap-2
                  "
                >
                  Click para ver más
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Navigation arrows (only if multiple promotions) */}
            {promotions.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-12 h-12
                    flex items-center justify-center
                    rounded-full
                    bg-black/50
                    hover:bg-black/70
                    text-white
                    transition
                  "
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    w-12 h-12
                    flex items-center justify-center
                    rounded-full
                    bg-black/50
                    hover:bg-black/70
                    text-white
                    transition
                  "
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Dots indicator */}
            {promotions.length > 1 && (
              <div className="flex items-center justify-center gap-2 py-4 bg-white">
                {promotions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`
                      w-2 h-2
                      rounded-full
                      transition
                      ${
                        index === currentIndex
                          ? "bg-black w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }
                    `}
                    aria-label={`Ir a promoción ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};