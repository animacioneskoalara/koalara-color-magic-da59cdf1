import { motion } from "framer-motion";
import heroImg from "@/assets/fiesta-infantil.jpg";

const spring = { type: "spring" as const, stiffness: 100, damping: 14 };

const HeroSection = () => (
  <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={spring}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground text-balance leading-tight">
          Convierte cualquier evento en una experiencia{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">inolvidable</span>
            <span className="absolute bottom-1 left-0 right-0 h-3 bg-koala-orange/30 rounded-full -z-0" />
          </span>{" "}
          🎉
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body max-w-lg text-pretty">
          Animación infantil personalizada en Valencia y alrededores para cumpleaños, comuniones, bodas y eventos familiares.
        </p>
        <p className="mt-2 text-base text-foreground/70 font-body font-medium">
          Nos encargamos de todo para que tú solo disfrutes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/34633049951?text=Hola,%20quiero%20información%20para%20un%20evento%20en%20Valencia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-accent"
          >
            Solicitar presupuesto por WhatsApp
          </a>
          <a
            href="#contacto"
            className="border-2 border-primary text-primary font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contactar ahora
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-body">
          Respuesta rápida · Sin compromiso · Fechas limitadas
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-3xl overflow-hidden shadow-brand">
          <img
            src={heroImg}
            alt="Animación infantil en Valencia - niños felices en una fiesta de cumpleaños"
            className="w-full h-auto object-cover aspect-[16/10]"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-display font-semibold text-sm px-5 py-2 rounded-full shadow-accent whitespace-nowrap">
          ⚠️ Fechas limitadas los fines de semana
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
