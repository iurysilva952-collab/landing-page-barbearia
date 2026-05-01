import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Melhor barbearia da região, atendimento top! O corte ficou perfeito e a cerveja gelada faz toda a diferença.",
  },
  {
    name: "Rafael S.",
    text: "Corte perfeito e ambiente muito bom. Os barbeiros são muito atenciosos e entendem exatamente o que você quer.",
  },
  {
    name: "Bruno T.",
    text: "Agendei pelo WhatsApp e fui atendido no horário. Serviço impecável, do começo ao fim. Recomendo de olhos fechados.",
  },
];

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            A Palavra de Quem Confia
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Avaliações
          </motion.h3>
        </div>

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
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-serif font-bold text-foreground">— {testimonial.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
