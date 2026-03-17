import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/34600000000?text=Hola!%20Quiero%20información%20sobre%20vuestras%20animaciones"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", delay: 1 }}
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={28} className="text-white" />
  </motion.a>
);

export default WhatsAppButton;
