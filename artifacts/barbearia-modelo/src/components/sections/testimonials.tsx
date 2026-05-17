import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Mendes",
    text: "Melhor corte que já fiz. Atendimento rápido e profissional, sem enrolação.",
  },
  {
    name: "Rafael Silva",
    text: "Agendei pelo WhatsApp e fui atendido no horário certinho. Serviço impecável.",
  },
  {
    name: "Bruno Teixeira",
    text: "Ambiente top e barbeiros experientes. Já virei cliente fixo.",
  },
];

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* 🔥 TÍTULO MAIS FORTE */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Clientes Reais
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Mais de 500 clientes satisfeitos
          </motion.h3>

          {/* 💬 reforço de confiança */}
          <p className="text-muted-foreground mt-4">
            Atendimento de qualidade comprovado por quem já passou por aqui.
          </p>
        </div>

        {/* 📊 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-background border-border h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-8">

                  {/* ⭐ estrelas */}
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  {/* 💬 depoimento */}
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* 👤 nome */}
                  <h4 className="font-serif font-bold text-foreground">
                    — {testimonial.name}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA DENTRO DA PROVA SOCIAL (MUITO FORTE) */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition"
          >
            Agendar meu horário agora
          </a>
        </div>

      </div>
    </section>
  );
}