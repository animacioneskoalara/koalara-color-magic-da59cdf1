import { motion } from "framer-motion";
import { ShieldCheck, Smile, Heart } from "lucide-react";

const bullets = [
  { icon: ShieldCheck, text: "Animadores profesionales" },
  { icon: Heart, text: "Actividades adaptadas" },
  { icon: Smile, text: "Diversión garantizada" },
];

const TrustSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-xl md:text-2xl font-display font-bold text-foreground text-pretty leading-relaxed">
          Creamos momentos únicos para los niños y{" "}
          <span className="text-primary">tranquilidad total</span> para los padres en Valencia y alrededores.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {bullets.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.text} className="flex items-center gap-2 bg-koala-green-light rounded-full px-5 py-3 border border-primary/20">
                <Icon size={20} className="text-primary" strokeWidth={1.5} />
                <span className="font-body font-medium text-foreground text-sm">{b.text}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
