import { motion } from "framer-motion";
import { Clock, Users, Coffee, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: Clock,
    title: "Horário marcado",
    description: "Sem filas de espera. Seu tempo é valioso para nós.",
  },
  {
    icon: Users,
    title: "Profissionais experientes",
    description: "Equipe altamente qualificada nas melhores técnicas.",
  },
  {
    icon: Coffee,
    title: "Ambiente confortável",
    description: "Cerveja gelada, café expresso e boa música.",
  },
  {
    icon: MapPin,
    title: "Fácil localização",
    description: "No coração da cidade com estacionamento próprio.",
  },
  {
    icon: MessageCircle,
    title: "Agendamento rápido",
    description: "Marque seu horário em segundos pelo WhatsApp.",
  },
];

export function Differentials() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background border-border h-full hover:border-primary/50 transition-colors duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
