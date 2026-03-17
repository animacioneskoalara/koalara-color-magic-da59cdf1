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
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground text-balance leading-tight">
          Donde la{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">magia</span>
            <span className="absolute bottom-1 left-0 right-0 h-3 bg-koala-orange/30 rounded-full -z-0" />
          </span>{" "}
          se vuelve realidad
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body max-w-lg">
          Experiencias únicas de animación infantil para cumpleaños y eventos que tus hijos nunca olvidarán.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/34633049951?text=Hola!%20Quiero%20reservar%20una%20fiesta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-accent animate-pulse-soft"
          >
            ¡Quiero una fiesta inolvidable!
          </a>
          <a
            href="#packs"
            className="border-2 border-primary text-primary font-display font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Ver Packs
          </a>
        </div>
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
            alt="Niños felices en una fiesta de cumpleaños con animadores"
            className="w-full h-auto object-cover aspect-[16/10]"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
