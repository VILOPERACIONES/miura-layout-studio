interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            bg-black/50
            z-30
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          right-0
          h-full
          w-[320px]
          bg-black/90
          backdrop-blur-md
          z-40
          transform
          transition-transform
          duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          className="
            absolute
            top-6
            right-6
            text-white
            text-2xl
            cursor-pointer
          "
        >
          ✕
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-8 pt-32 px-10">
          {[
            { label: "NOSOTROS", href: "#about" },
            { label: "EXPERIENCIAS", href: "#experiences" },
            { label: "FACTURACIÓN", href: "#billing" },
            { label: "CONTACTOS", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="
                font-source
                font-bold
                text-white
                text-[18px]
                tracking-[2px]
                hover:opacity-80
                transition-opacity
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};
