import React from "react";

interface InstagramButtonProps {
  href: string;
  size?: number;
  className?: string;
}

export const InstagramButton: React.FC<InstagramButtonProps> = ({
  href,
  size = 32,
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className={`
        flex items-center justify-center rounded-full
        hover:bg-white/10 transition
        ${className}
      `}
      style={{ width: size, height: size }}
    >
      <img
        src="/src/assets/images/shared/instagram_button.png"
        alt="Instagram"
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.src = "https://res.cloudinary.com/dfsrjktyj/image/upload/v1768409813/instagram_button_djdulp.png";
        }}
      />
    </a>
  );
};
