import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/34633049951?text=Hola,%20quiero%20información%20para%20un%20evento%20en%20Valencia"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] rounded-full shadow-lg hover:scale-105 transition-transform px-5 py-3"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", delay: 1 }}
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={24} className="text-white" />
    <span className="text-white font-display font-semibold text-sm hidden sm:inline">
      💬 Reserva tu fecha ahora
    </span>
  </motion.a>
);

export default WhatsAppButton;
