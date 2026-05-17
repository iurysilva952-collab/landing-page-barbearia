import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const barbers = [
  {
    name: "João Silva",
    specialty: "Especialista em degradê",
    image: "/images/barber-1.png",
  },
  {
    name: "Pedro Santos",
    specialty: "Corte social e barba",
    image: "/images/barber-2.png",
  },
  {
    name: "Lucas Oliveira",
    specialty: "Navalhado e freestyle",
    image: "/images/barber-3.png",
  },
];

export function Barbers() {
  return (
    <section id="barbeiros" className="py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Os Mestres
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Nossa Equipe
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {barbers.map((barber, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6 border border-border">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-2">{barber.name}</h4>
                <p className="text-muted-foreground mb-6">{barber.specialty}</p>
                <Button variant="outline" asChild className="w-full font-bold uppercase tracking-normal border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={`https://wa.me/5579988583155?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário%20com%20o%20${encodeURIComponent(barber.name)}.`} target="_blank" rel="noopener noreferrer">
                    Agendar com este barbeiro
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
