import { motion } from "framer-motion";
import { Star, Sparkles, Crown, Check } from "lucide-react";

const packs = [
  {
    name: "Pack Básico",
    price: "150€",
    icon: Star,
    popular: false,
    features: ["1 Animador", "Juegos y música", "1h 30min de diversión", "Globoflexia básica"],
  },
  {
    name: "Pack Estrella",
    price: "250€",
    icon: Sparkles,
    popular: true,
    features: ["2 Animadores", "Pintacaras + Globoflexia", "2h de diversión", "Show de magia", "Música y baile"],
  },
  {
    name: "Pack Premium",
    price: "400€",
    icon: Crown,
    popular: false,
    features: ["3 Animadores", "Todo del Pack Estrella", "Photocall temático", "Disfraces y personajes", "3h de diversión"],
  },
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
          Nuestros <span className="text-primary">Packs</span>
        </h2>
        <p className="mt-3 text-muted-foreground font-body text-lg max-w-xl mx-auto">
          Elige el plan perfecto para la fiesta de tus sueños
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {packs.map((pack) => {
          const Icon = pack.icon;
          return (
            <motion.div
              key={pack.name}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`relative rounded-3xl p-8 flex flex-col items-center text-center transition-shadow duration-500 ${
                pack.popular
                  ? "bg-koala-green-light border-2 border-primary shadow-brand"
                  : "bg-card border border-border shadow-sm"
              }`}
            >
              {pack.popular && (
                <span className="absolute -top-3 bg-accent text-accent-foreground font-display text-xs font-semibold px-4 py-1 rounded-full">
                  Más Popular
                </span>
              )}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                pack.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
              }`}>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{pack.name}</h3>
              <p className="text-3xl font-display font-bold text-primary mt-2">{pack.price}</p>
              <ul className="mt-6 space-y-2 text-left w-full">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80 font-body text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/34633049951?text=Hola!%20Me%20interesa%20el%20${encodeURIComponent(pack.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full py-3 rounded-full font-display font-semibold text-center transition-transform hover:scale-105 ${
                  pack.popular
                    ? "bg-primary text-primary-foreground shadow-brand"
                    : "bg-secondary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Reservar
              </a>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Extras */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <h3 className="font-display text-xl font-bold text-foreground mb-4">Extras Opcionales</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {["Castillo hinchable +80€", "Algodón de azúcar +40€", "Photocall +60€", "Hora extra +50€"].map((extra) => (
            <span
              key={extra}
              className="bg-koala-orange-light text-foreground font-body text-sm px-5 py-2 rounded-full border border-accent/20"
            >
              {extra}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PacksSection;
