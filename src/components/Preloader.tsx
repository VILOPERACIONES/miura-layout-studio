import React from "react";

export const Preloader: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black
        transition-all
        duration-700
        ease-in-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"}
      `}
    >
      <img
        src="https://res.cloudinary.com/dfsrjktyj/image/upload/v1770850684/Pre-loader_q74tor.png"
        alt="MIURA"
        className="
          w-[140px]
          md:w-[180px]
          opacity-90
          animate-pulse
        "
      />
    </div>
  );
};
