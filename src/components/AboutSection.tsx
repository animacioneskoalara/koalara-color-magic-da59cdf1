import { motion } from "framer-motion";
import { ShieldCheck, Heart, Smile } from "lucide-react";
import teamImg from "@/assets/pintacaras.jpg";

const values = [
  { icon: ShieldCheck, title: "Seguridad", desc: "Animadores certificados y protocolos de seguridad infantil." },
  { icon: Heart, title: "Pasión", desc: "Amamos lo que hacemos y se nota en cada fiesta." },
  { icon: Smile, title: "Diversión", desc: "Risas garantizadas con actividades pensadas para cada edad." },
];

const AboutSection = () => (
  <section id="nosotros" className="py-20 bg-background">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 14 }}
      >
        <img
          src={teamImg}
          alt="Equipo de Animaciones Koalara"
          className="rounded-3xl shadow-brand w-full object-cover aspect-[4/3]"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.1 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Sobre <span className="text-primary">Nosotros</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-8 text-pretty">
          En Animaciones Koalara hacemos que cada cumpleaños sea inolvidable con shows, juegos y diversión segura. Nuestro equipo de animadores profesionales está dedicado a crear momentos mágicos para los más pequeños.
        </p>
        <div className="space-y-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-koala-green-light flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
