import React from 'react';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const navItems = [
    { label: "NOSOTROS", href: "#about" },
    { label: "EXPERIENCIAS", href: "#experiences" },
    { label: "FACTURACIÓN", href: "#billing" },
    { label: "CONTACTOS", href: "#contact" }
  ];

  return (
    <nav className={`flex items-center gap-[120px] max-md:gap-[60px] max-sm:hidden ${className}`}>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-white text-center text-base font-bold leading-7 tracking-[1.76px] cursor-pointer hover:opacity-80 transition-opacity max-md:text-sm max-md:tracking-[1.2px]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
