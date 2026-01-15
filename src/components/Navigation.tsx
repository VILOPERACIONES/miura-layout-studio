interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const navItems = [
    { label: "NOSOTROS", href: "#about" },
    { label: "EXPERIENCIAS", href: "#experiences" },
    { label: "FACTURACIÓN", href: "#billing" },
    { label: "CONTACTOS", href: "#contact" },
  ];

  return (
    <nav
      className={`
        items-center
        gap-[120px]
        ${className}
      `}
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="
            font-source
            font-bold
            text-[16px]
            leading-7
            tracking-[1.76px]
            text-white
            text-center
            cursor-pointer
            hover:opacity-80
            transition-opacity
          "
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
