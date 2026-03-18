import { motion } from "framer-motion";
import { Palette, Music, PartyPopper, Gamepad2, Users } from "lucide-react";

const services = [
  { icon: Gamepad2, title: "Juegos dinámicos", desc: "Gymkanas, carreras y juegos cooperativos para todas las edades." },
  { icon: Palette, title: "Pintacaras", desc: "Diseños creativos y coloridos que encantarán a los más pequeños." },
  { icon: PartyPopper, title: "Globoflexia", desc: "Figuras de globos que se convierten en el mejor regalo." },
  { icon: Music, title: "Música y animación", desc: "Coreografías y juegos musicales para mover el esqueleto." },
  { icon: Users, title: "Dinámicas grupales", desc: "Actividades en equipo para que todos participen y se diviertan." },
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
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Nuestros <span className="text-primary">Servicios</span>
        </h2>
        <p className="mt-3 text-muted-foreground font-body text-lg max-w-2xl mx-auto">
          Incluimos todo lo necesario para una animación completa
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

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10 text-foreground/70 font-body font-medium text-lg"
      >
        Nos encargamos de todo para que tú solo disfrutes.
      </motion.p>
    </div>
  </section>
);

export default ServicesSection;
