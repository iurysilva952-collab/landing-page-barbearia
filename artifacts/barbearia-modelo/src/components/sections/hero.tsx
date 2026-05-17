import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5579988583155?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário.";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Barbearia Modelo Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Scissors size={12} />
            Atendimento com hora marcada
          </motion.div>

          {/* 🔥 HEADLINE MELHORADA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-5">
              Corte premium sem espera{" "}
              <span className="text-primary italic block">
                direto no WhatsApp
              </span>
            </h1>
          </motion.div>

          {/* 💬 SUBHEADLINE MAIS DIRETA */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg font-light leading-relaxed"
          >
            Atendimento rápido, barbeiros profissionais e horário garantido sem fila.
          </motion.p>

          {/* ⚠️ ESCASSEZ */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-red-400 text-sm mb-8"
          >
            ⚠️ Últimos horários disponíveis hoje
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              asChild
              className="text-sm font-bold uppercase tracking-widest h-13 px-8 shadow-lg shadow-primary/20"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar agora
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-sm font-bold uppercase tracking-widest h-13 px-8 bg-transparent border-foreground/20 hover:border-primary hover:text-primary transition"
            >
              <a href="#servicos">Ver serviços</a>
            </Button>
          </motion.div>

          {/* 📈 STATS MAIS FORTES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-8 mt-14 pt-10 border-t border-border/40"
          >
            {[
              { value: "500+", label: "Clientes atendidos" },
              { value: "4.9★", label: "Avaliação média" },
              { value: "30min", label: "Tempo médio por corte" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-serif font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}