import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section id="localizacao" className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Como nos encontrar</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Nossa Localização</h3>
            
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <p className="text-xl font-bold text-foreground mb-2">Rua Exemplo, 123 - Centro</p>
                <p className="text-muted-foreground mb-6">São Paulo, SP - 01000-000</p>
                
                <div className="space-y-2 mb-8">
                  <h4 className="font-bold text-foreground uppercase tracking-wider text-sm mb-3">Horários de funcionamento</h4>
                  <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-2">
                    <span>Segunda a sexta</span>
                    <span className="font-medium text-foreground">09:00 às 19:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-2">
                    <span>Sábado</span>
                    <span className="font-medium text-foreground">09:00 às 17:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground pb-2">
                    <span>Domingo</span>
                    <span className="font-medium text-destructive">Fechado</span>
                  </div>
                </div>

                <Button size="lg" asChild className="w-full sm:w-auto font-bold uppercase tracking-wider">
                  <a href="https://maps.google.com/?q=Rua+Exemplo,123-Centro" target="_blank" rel="noopener noreferrer">
                    Como chegar
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full h-[400px] bg-card rounded-lg overflow-hidden border border-border relative group"
          >
            {/* Placeholder for map - replacing actual iframe for demo, but mimicking the look */}
            <div className="absolute inset-0 bg-muted/20 flex flex-col items-center justify-center p-6 text-center">
              <MapPin size={48} className="text-primary mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-muted-foreground font-serif text-lg">Mapa Interativo (Google Maps)</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Rua Exemplo, 123 - Centro</p>
            </div>
            {/* Real implementation would use: */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
