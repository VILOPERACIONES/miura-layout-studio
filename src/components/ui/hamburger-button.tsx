interface HamburgerButtonProps {
  onClick?: () => void;
  className?: string;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Abrir menú"
      className={`
        flex
        flex-col
        gap-[6px]
        cursor-pointer
        ${className}
      `}
    >
      <span className="w-11 h-[5px] bg-white block" />
      <span className="w-11 h-[5px] bg-white block" />
      <span className="w-11 h-[5px] bg-white block" />
    </button>
  );
};
