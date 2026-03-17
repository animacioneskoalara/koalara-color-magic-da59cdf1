import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Soy ${form.name}. ${form.message}. Mi email: ${form.email}`;
    window.open(`https://wa.me/34633049951?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="mt-3 text-muted-foreground font-body text-lg">
            ¿Tienes dudas? ¡Escríbenos y te respondemos en minutos!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-sm border border-border space-y-5"
          >
            <div>
              <label className="block font-body font-medium text-foreground text-sm mb-1.5">Nombre</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block font-body font-medium text-foreground text-sm mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block font-body font-medium text-foreground text-sm mb-1.5">Mensaje</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                placeholder="Cuéntanos sobre tu evento..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-display font-semibold py-3 rounded-full hover:scale-105 transition-transform shadow-brand flex items-center justify-center gap-2"
            >
              <Send size={18} /> Enviar por WhatsApp
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-koala-green-light flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground font-body text-sm">+34 633 049 951</p>
                <p className="text-muted-foreground font-body text-xs mt-1">Respondemos en menos de 1 hora</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-koala-orange-light flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Ubicación</h3>
                <p className="text-muted-foreground font-body text-sm">Nos desplazamos a tu evento</p>
                <p className="text-muted-foreground font-body text-xs mt-1">Valencia y alrededores</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
