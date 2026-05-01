import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, X } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5511999999999?text=";

const services = [
  {
    id: 1,
    name: "Corte masculino",
    description: "Corte na tesoura ou máquina, com acabamento perfeito na navalha.",
    price: 40,
    tag: null,
  },
  {
    id: 2,
    name: "Barba",
    description: "Barboterapia completa com toalha quente, massagem e óleos essenciais.",
    price: 35,
    tag: null,
  },
  {
    id: 3,
    name: "Corte + Barba",
    description: "O combo completo para renovar o visual.",
    price: 70,
    tag: "Mais popular",
  },
  {
    id: 4,
    name: "Sobrancelha",
    description: "Limpeza e alinhamento na navalha para realçar o olhar.",
    price: 15,
    tag: null,
  },
  {
    id: 5,
    name: "Corte infantil",
    description: "Corte estiloso e atendimento paciente para os pequenos (até 12 anos).",
    price: 35,
    tag: null,
  },
];

function formatPrice(value: number) {
  return `R$ ${value.toFixed(0).replace(".", ",")}`;
}

export function Services() {
  const [selected, setSelected] = useState<number[]>([]);

  function toggle(id: number) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  const selectedServices = services.filter((s) => selected.includes(s.id));
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);

  function buildWhatsAppUrl() {
    if (selectedServices.length === 0) return WHATSAPP_BASE + encodeURIComponent("Olá, vim pelo site e gostaria de agendar um horário.");
    const list = selectedServices.map((s) => `- ${s.name} (${formatPrice(s.price)})`).join("\n");
    const msg = `Olá, vim pelo site e gostaria de agendar os seguintes serviços:\n${list}\n\nTotal: ${formatPrice(total)}`;
    return WHATSAPP_BASE + encodeURIComponent(msg);
  }

  return (
    <section id="servicos" className="py-28 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-primary uppercase mb-3"
          >
            Nossa Especialidade
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3"
          >
            Serviços e Preços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm"
          >
            Selecione um ou mais serviços e agende tudo de uma vez pelo WhatsApp.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-3 mb-6">
          {services.map((service, index) => {
            const isSelected = selected.includes(service.id);
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => toggle(service.id)}
                data-testid={`card-service-${service.id}`}
                className={`w-full text-left flex items-center justify-between p-5 rounded-xl border transition-all duration-200 group cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                    : "border-border bg-card hover:border-primary/40 hover:bg-card/80"
                }`}
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* Checkbox indicator */}
                  <div
                    className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      isSelected
                        ? "bg-primary border-primary"
                        : "border-border group-hover:border-primary/60"
                    }`}
                  >
                    {isSelected && <Check size={14} className="text-primary-foreground" strokeWidth={3} />}
                  </div>

                  {/* Info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="font-serif font-bold text-foreground text-base">{service.name}</span>
                      {service.tag && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          {service.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Price */}
                <span
                  className={`shrink-0 ml-4 text-xl font-bold font-serif transition-colors ${
                    isSelected ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {formatPrice(service.price)}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Sticky booking panel */}
        <AnimatePresence>
          {selected.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="sticky bottom-6 z-30 mt-2"
              data-testid="panel-booking-summary"
            >
              <div className="rounded-2xl border border-primary/50 bg-card/95 backdrop-blur-md shadow-2xl shadow-primary/10 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Summary */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShoppingBag size={16} className="text-primary shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {selected.length} {selected.length === 1 ? "serviço selecionado" : "serviços selecionados"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedServices.map((s) => (
                      <span
                        key={s.id}
                        onClick={(e) => { e.stopPropagation(); toggle(s.id); }}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-primary/15 text-primary rounded-full px-2.5 py-1 cursor-pointer hover:bg-primary/25 transition-colors"
                      >
                        {s.name}
                        <X size={10} strokeWidth={2.5} />
                      </span>
                    ))}
                  </div>
                </div>

                {/* Total + CTA */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total</p>
                    <p className="text-2xl font-serif font-bold text-foreground">{formatPrice(total)}</p>
                  </div>
                  <Button
                    size="lg"
                    asChild
                    className="font-bold uppercase tracking-wider h-12 px-6 text-sm shadow-lg shadow-primary/20"
                    data-testid="button-book-selected"
                  >
                    <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                      Agendar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Default CTA when nothing selected */}
        {selected.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs text-muted-foreground mt-4"
          >
            Toque em um serviço para selecioná-lo
          </motion.p>
        )}
      </div>
    </section>
  );
}
