import { motion } from "framer-motion";
import { Cake, Church, Heart, PartyPopper, Home } from "lucide-react";

const events = [
  { icon: Cake, label: "Cumpleaños infantiles" },
  { icon: Church, label: "Comuniones" },
  { icon: Heart, label: "Bodas" },
  { icon: PartyPopper, label: "Eventos familiares" },
  { icon: Home, label: "Celebraciones privadas" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 14 } },
};

const EventTypesSection = () => (
  <section className="py-16 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          ¿Para qué <span className="text-primary">evento</span> nos necesitas?
        </h2>
        <p className="mt-3 text-muted-foreground font-body text-lg">
          Adaptamos la animación a cualquier tipo de evento.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
      >
        {events.map((e) => {
          const Icon = e.icon;
          return (
            <motion.div
              key={e.label}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-sm border border-border"
            >
              <Icon size={22} className="text-accent" strokeWidth={1.5} />
              <span className="font-display font-semibold text-foreground text-sm">{e.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default EventTypesSection;
