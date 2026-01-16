import { useState } from "react";
import { Navigation } from "./Navigation";
import { HamburgerButton } from "./ui/hamburger-button";
import { Sidebar } from "./ui/side-bar";

export const Hero: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
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
      {/* Backgrounds */}
      {/* ===================== */}

      {/* Desktop background */}
      <img
        src="/src/assets/images/hero/hero-background-desktop.jpg"
        alt="Background Hero Miura Desktop"
        aria-hidden="true"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          hidden lg:block
        "
          onError={(e) => {
        e.currentTarget.src =
          "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409813/hero-background_sgp0id.jpg";
      }}
    />

      {/* Tablet & Mobile background */}
      <img
        src="/src/assets/images/hero/hero-background-tablet.png"
        alt="Background Hero Miura Tablet"
        aria-hidden="true"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          block lg:hidden
        "
        onError={(e) => {
          e.currentTarget.src =
            "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768501496/bg-movil-hero_jctsb3.png";
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ===================== */}
      {/* TOP BAR — Mobile & Tablet */}
      {/* ===================== */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          px-8
          pt-8
          md:px-12
          md:pt-12
          flex
          items-center
          justify-between
          lg:hidden
          z-20
        "
      >
        {/* Logo (mobile & tablet) */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e501eb6dc45f1b6e29fa83a5498f0ec8a27f67f7?width=340"
          alt="Miura Logo"
          className="
            w-[110px]
            md:w-[140px]
            h-auto
          "
        />

        {/* Hamburger */}
        <HamburgerButton onClick={() => setIsSidebarOpen(true)} />
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* ===================== */}
      {/* Logo — Desktop ONLY */}
      {/* ===================== */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/e501eb6dc45f1b6e29fa83a5498f0ec8a27f67f7?width=340"
        alt="Miura Logo"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-14
          w-[170px]
          h-auto
          hidden
          lg:block
        "
      />

      {/* ===================== */}
      {/* Navigation — Desktop ONLY */}
      {/* ===================== */}
      <Navigation
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[145px]
          w-[823px]
          hidden
          lg:flex
        "
      />
    </header>
  );
};
