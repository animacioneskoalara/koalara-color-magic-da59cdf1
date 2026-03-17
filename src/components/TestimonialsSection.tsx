import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    text: "Los niños se lo pasaron increíble. Los animadores son súper profesionales y cariñosos. ¡Repetiremos seguro!",
    rating: 5,
    avatar: "MG",
    color: "bg-koala-pink",
  },
  {
    name: "Carlos Rodríguez",
    text: "Contratamos el Pack Estrella y fue la mejor decisión. Todo organizado al detalle y los peques encantados.",
    rating: 5,
    avatar: "CR",
    color: "bg-koala-green-light",
  },
  {
    name: "Laura Martínez",
    text: "Animaciones Koalara hizo del cumpleaños de mi hija un día mágico. El show de magia fue lo más.",
    rating: 5,
    avatar: "LM",
    color: "bg-koala-orange-light",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 14 } },
};

const TestimonialsSection = () => (
  <section id="testimonios" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Lo que dicen las <span className="text-primary">familias</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={item}
            className="bg-card rounded-3xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-display font-bold text-foreground text-sm`}>
                {t.avatar}
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-foreground/80 font-body text-sm text-pretty leading-relaxed">"{t.text}"</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
