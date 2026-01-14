import { Navigation } from "./Navigation";

export const Hero: React.FC = () => {
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
      {/* Background */}
      <img
        src="/src/assets/images/hero/hero-background.jpg"
        alt="https://console.cloudinary.com/app/c-e5f1597fa9bf395aa4f6796c3751ab/assets/media_library/folders/cddeb82a0d891f40543f443a94d5f499f4/asset/b062203e27ea7028f60c5e309422f8d4/manage/summary?view_mode=mosaic&context=manage"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (si lo necesitas) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Logo TODO: SUBIR IMAGENE EN LA NUBE AGREGARLA EN LOS ASSETS/IMAGES*/}
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
          max-md:w-[140px]
          max-sm:w-[120px]
        "
      />

      {/* Navigation */}
      <Navigation
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[145px]
          w-[823px]
          max-md:w-[600px]
          max-md:top-[120px]
        "
      />
    </header>
  );
};
