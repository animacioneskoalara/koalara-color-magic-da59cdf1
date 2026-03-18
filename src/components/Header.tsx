import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-koalara.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Eventos", href: "#packs" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Animaciones Koalara" className="h-14 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body font-medium text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/34633049951?text=Hola,%20quiero%20información%20para%20un%20evento%20en%20Valencia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-display font-600 px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-transform shadow-brand"
          >
            Reservar fecha
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-4 pb-4 flex flex-col gap-3"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-body font-medium text-foreground/80 py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/34633049951?text=Hola,%20quiero%20información%20para%20un%20evento%20en%20Valencia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-display px-5 py-2.5 rounded-full text-sm text-center shadow-brand"
          >
            Reservar fecha
          </a>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
