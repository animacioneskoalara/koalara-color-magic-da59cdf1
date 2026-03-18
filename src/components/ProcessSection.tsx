import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Lightbulb, PartyPopper } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "1", title: "Nos escribes por WhatsApp", desc: "Cuéntanos qué tienes en mente." },
  { icon: ClipboardList, num: "2", title: "Nos cuentas tu evento", desc: "Fecha, lugar, número de niños y preferencias." },
  { icon: Lightbulb, num: "3", title: "Te asesoramos", desc: "Preparamos una propuesta personalizada." },
  { icon: PartyPopper, num: "4", title: "Disfrutas sin preocuparte", desc: "Nosotros nos encargamos de todo." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 14 } },
};

const ProcessSection = () => (
  <section className="py-20 bg-koala-green-light">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Así de <span className="text-primary">fácil</span> es organizar tu evento
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              variants={item}
              className="bg-card rounded-3xl p-6 shadow-sm border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg">
                {s.num}
              </div>
              <Icon size={28} className="text-accent mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-foreground text-sm">{s.title}</h3>
              <p className="text-muted-foreground font-body text-xs mt-2">{s.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
