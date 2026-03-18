import { motion } from "framer-motion";
import { Clock, Sparkles, Users, Package, Check } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Duración flexible", desc: "Tú eliges cuánto tiempo dura la animación." },
  { icon: Sparkles, title: "Actividades personalizadas", desc: "Selecciona las actividades que más encajen con tu evento." },
  { icon: Users, title: "Animadores incluidos", desc: "Profesionales titulados y con experiencia." },
  { icon: Package, title: "Material incluido", desc: "Todo el material necesario, sin costes extra." },
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
          Tu evento, <span className="text-primary">a medida</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-lg max-w-2xl mx-auto text-pretty">
          No trabajamos con packs cerrados. Adaptamos cada animación según tus necesidades y número de niños.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14"
      >
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-3xl p-6 flex flex-col items-center text-center bg-koala-green-light border border-primary/20 shadow-brand"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{b.title}</h3>
              <p className="text-muted-foreground font-body text-sm mt-2">{b.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-foreground/80 font-body text-lg mb-6 text-pretty">
          Cuéntanos tu idea y nosotros nos encargamos de todo.
        </p>
        <a
          href="https://wa.me/34633049951?text=Hola,%20quiero%20información%20para%20un%20evento%20en%20Valencia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-8 rounded-full bg-accent text-accent-foreground font-display font-semibold text-lg hover:scale-105 transition-transform shadow-accent"
        >
          Solicitar presupuesto
        </a>
        <p className="mt-3 text-sm text-muted-foreground font-body">Sin compromiso · Nos adaptamos a ti</p>
      </motion.div>
    </div>
  </section>
);

export default PacksSection;
