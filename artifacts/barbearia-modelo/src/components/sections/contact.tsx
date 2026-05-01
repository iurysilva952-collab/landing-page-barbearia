import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiWhatsapp, SiInstagram } from "react-icons/si";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário.";

export function Contact() {
  return (
    <section id="contato" className="py-32 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Não deixe para amanhã
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8"
          >
            Agende seu horário
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Pronto para dar aquele talento no visual? Nosso atendimento é 100% via WhatsApp para sua maior comodidade.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" asChild className="w-full sm:w-auto text-lg h-16 px-10 font-bold uppercase tracking-normal bg-[#25D366] hover:bg-[#20bd5a] text-white">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <SiWhatsapp size={24} />
                Agendar agora pelo WhatsApp
              </a>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg h-16 px-8 font-bold uppercase tracking-normal hover:text-[#E1306C] hover:border-[#E1306C]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <SiInstagram size={24} />
                Siga-nos
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
