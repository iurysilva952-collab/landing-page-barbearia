import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário.";

const services = [
  {
    name: "Corte masculino",
    description: "Corte na tesoura ou máquina, com acabamento perfeito na navalha.",
    price: "R$ 40",
  },
  {
    name: "Barba",
    description: "Barboterapia completa com toalha quente, massagem e óleos essenciais.",
    price: "R$ 35",
  },
  {
    name: "Corte + Barba",
    description: "O combo completo para renovar o visual. Nosso serviço mais popular.",
    price: "R$ 70",
  },
  {
    name: "Sobrancelha",
    description: "Limpeza e alinhamento na navalha para realçar o olhar.",
    price: "R$ 15",
  },
  {
    name: "Corte infantil",
    description: "Corte estiloso e atendimento paciente para os pequenos (até 12 anos).",
    price: "R$ 35",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Nossa Especialidade
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Serviços e Preços
          </motion.h3>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group"
            >
              <div className="flex-1 mb-4 sm:mb-0 pr-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-serif font-bold text-foreground">{service.name}</h4>
                  <span className="text-xl font-bold text-primary sm:hidden">{service.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
              <div className="flex items-center gap-6 sm:pl-6 sm:border-l border-border">
                <span className="text-2xl font-bold text-primary hidden sm:block whitespace-nowrap w-24 text-right">{service.price}</span>
                <Button size="sm" asChild className="w-full sm:w-auto font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Agendar
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
