import { motion } from "framer-motion";
import { Clock, Puzzle, Users, Sparkles, Check } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "Sin horarios fijos",
    desc: "Tú eliges la duración que mejor se adapte a tu evento.",
  },
  {
    icon: Puzzle,
    title: "Totalmente personalizable",
    desc: "Contrata exactamente lo que quieras: juegos, shows, pintacaras, disfraces y mucho más.",
  },
  {
    icon: Users,
    title: "Monitores profesionales",
    desc: "Nosotros nos encargamos de los monitores, todo el material y los mejores precios.",
  },
];

const includes = [
  "Monitores titulados y con experiencia",
  "Todo el material necesario incluido",
  "Precios adaptados a tu presupuesto",
  "Duración flexible: tú decides",
  "Actividades para todas las edades",
  "Atención personalizada desde el primer contacto",
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 14 } },
};

const PacksSection = () => (
  <section id="packs" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Tu fiesta, <span className="text-primary">a tu medida</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-lg max-w-2xl mx-auto text-pretty">
          No hay horarios ni paquetes fijos. Elige la duración que quieras y contrata todo lo que desees para la diversión de los niños. Nosotros nos encargamos de monitores, material y precios.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14"
      >
        {highlights.map((h) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-3xl p-8 flex flex-col items-center text-center bg-koala-green-light border border-primary/20 shadow-brand"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{h.title}</h3>
              <p className="text-muted-foreground font-body text-sm mt-2">{h.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Lo que incluimos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-card rounded-3xl p-8 border border-border shadow-sm"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-koala-orange-light flex items-center justify-center">
            <Sparkles size={22} className="text-accent" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground">¿Qué incluimos?</h3>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground/80 font-body text-sm">
              <Check size={16} className="text-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/34633049951?text=Hola!%20Quiero%20información%20sobre%20vuestras%20animaciones%20a%20medida"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full py-3 rounded-full bg-accent text-accent-foreground font-display font-semibold text-center hover:scale-105 transition-transform shadow-accent"
        >
          ¡Pide tu presupuesto sin compromiso!
        </a>
      </motion.div>
    </div>
  </section>
);

export default PacksSection;
