import { motion } from "framer-motion";
import { Palette, Music, PartyPopper, Drama, Gamepad2 } from "lucide-react";

const services = [
  { icon: Palette, title: "Pintacaras", desc: "Diseños creativos y coloridos para los más pequeños." },
  { icon: Music, title: "Música y Baile", desc: "Coreografías y juegos musicales para mover el esqueleto." },
  { icon: PartyPopper, title: "Globoflexia", desc: "Figuras de globos que se convierten en el mejor regalo." },
  { icon: Drama, title: "Disfraces", desc: "Personajes favoritos que cobran vida en tu fiesta." },
  { icon: Gamepad2, title: "Juegos", desc: "Gymkanas, carreras y juegos cooperativos para todas las edades." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 14 } },
};

const ServicesSection = () => (
  <section id="servicios" className="py-20 bg-koala-green-light">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Nuestros <span className="text-primary">Servicios</span>
        </h2>
        <p className="mt-3 text-muted-foreground font-body text-lg max-w-xl mx-auto">
          Todo lo que necesitas para una fiesta perfecta
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="bg-card rounded-3xl p-6 shadow-sm border border-border flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">{s.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
