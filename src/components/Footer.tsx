import logo from "@/assets/logo-koalara.jpg";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Animaciones Koalara" className="h-10 rounded-lg" />
        <span className="font-display font-semibold text-primary-foreground text-sm">Animaciones Koalara</span>
      </div>
      <p className="font-body text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Animaciones Koalara. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
