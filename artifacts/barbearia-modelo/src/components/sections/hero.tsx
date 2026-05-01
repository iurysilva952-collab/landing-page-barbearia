import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário.";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Barbearia Modelo Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 bg-gradient-to-t from-background via-background/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 drop-shadow-lg">
              Corte na régua, <br />
              <span className="text-primary italic">barba bem feita</span> <br />
              e atendimento <br />
              de qualidade.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-light tracking-wide"
          >
            A verdadeira experiência de um grooming atelier. Agende seu horário e sinta a diferença de um serviço premium pensado para o homem moderno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild className="text-base font-bold uppercase tracking-wider h-14 px-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base font-bold uppercase tracking-wider h-14 px-8 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#servicos">
                Ver serviços
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
