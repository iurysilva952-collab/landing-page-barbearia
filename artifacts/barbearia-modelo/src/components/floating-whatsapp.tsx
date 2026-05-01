import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário.";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300"
      aria-label="Agendar via WhatsApp"
    >
      <SiWhatsapp size={32} />
      
      {/* Pulsing rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2s' }}></span>
    </motion.a>
  );
}
