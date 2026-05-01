import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, X, ChevronRight, ChevronDown, User } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5511999999999?text=";

const services = [
  { id: 1, name: "Corte masculino", description: "Corte na tesoura ou máquina, com acabamento perfeito na navalha.", basePrice: 40, tag: null },
  { id: 2, name: "Barba", description: "Barboterapia completa com toalha quente, massagem e óleos essenciais.", basePrice: 35, tag: null },
  { id: 3, name: "Corte + Barba", description: "O combo completo para renovar o visual.", basePrice: 70, tag: "Mais popular" },
  { id: 4, name: "Sobrancelha", description: "Limpeza e alinhamento na navalha para realçar o olhar.", basePrice: 15, tag: null },
  { id: 5, name: "Corte infantil", description: "Corte estiloso e atendimento paciente para os pequenos (até 12 anos).", basePrice: 35, tag: null },
];

const barbers = [
  {
    id: 1,
    name: "João Silva",
    specialty: "Especialista em degradê",
    image: "/images/barber-1.png",
    priceOverrides: { 1: 55, 3: 85 } as Record<number, number>,
    note: "Especialista em técnicas de degradê e cortes modernos.",
  },
  {
    id: 2,
    name: "Pedro Santos",
    specialty: "Corte social e barba",
    image: "/images/barber-2.png",
    priceOverrides: {} as Record<number, number>,
    note: "Domina cortes clássicos e barboterapia completa.",
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    specialty: "Navalhado e freestyle",
    image: "/images/barber-3.png",
    priceOverrides: { 2: 50, 3: 90 } as Record<number, number>,
    note: "Mestre em navalhado, freestyle e acabamentos artísticos.",
  },
];

function formatPrice(value: number) {
  return `R$ ${value}`;
}

function getServicePrice(serviceId: number, barberId: number | null) {
  const service = services.find((s) => s.id === serviceId)!;
  if (barberId === null) return service.basePrice;
  const barber = barbers.find((b) => b.id === barberId)!;
  return barber.priceOverrides[serviceId] ?? service.basePrice;
}

export function Services() {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [expandedBarberPrices, setExpandedBarberPrices] = useState<number | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  function toggleService(id: number) {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
    setSelectedBarber(null);
  }

  function selectBarber(id: number) {
    setSelectedBarber((prev) => (prev === id ? null : id));
  }

  function toggleBarberPrices(id: number) {
    setExpandedBarberPrices((prev) => (prev === id ? null : id));
  }

  function hasDifferentPrices(barberId: number) {
    const barber = barbers.find((b) => b.id === barberId)!;
    return selectedServices.some((sId) => barber.priceOverrides[sId] !== undefined);
  }

  const chosenServices = services.filter((s) => selectedServices.includes(s.id));
  const total = chosenServices.reduce((sum, s) => sum + getServicePrice(s.id, selectedBarber), 0);
  const chosenBarber = barbers.find((b) => b.id === selectedBarber);

  function buildWhatsAppUrl() {
    const barberLine = chosenBarber ? `\nBarbeiro: ${chosenBarber.name}` : "";
    const list = chosenServices
      .map((s) => `- ${s.name} (${formatPrice(getServicePrice(s.id, selectedBarber))})`)
      .join("\n");
    const msg = `Olá, vim pelo site e gostaria de agendar:${barberLine}\n${list}\n\nTotal: ${formatPrice(total)}`;
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
            Selecione os serviços desejados e escolha seu barbeiro.
          </motion.p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[
            { n: 1, label: "Serviços" },
            { n: 2, label: "Barbeiro" },
          ].map(({ n, label }, i) => (
            <div key={n} className="flex items-center gap-3">
              <button
                onClick={() => n === 2 && selectedServices.length > 0 ? setStep(2) : setStep(1)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  step === n
                    ? "bg-primary text-primary-foreground border-primary"
                    : selectedServices.length > 0 && n === 2
                    ? "border-primary/40 text-primary cursor-pointer hover:bg-primary/10"
                    : "border-border text-muted-foreground cursor-default"
                }`}
                data-testid={`step-indicator-${n}`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                  step === n ? "bg-primary-foreground text-primary" : "bg-border text-muted-foreground"
                }`}>{n}</span>
                {label}
              </button>
              {i === 0 && (
                <ChevronRight size={14} className={`transition-colors ${selectedServices.length > 0 ? "text-primary" : "text-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1: Services */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-3 mb-6">
                {services.map((service, index) => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <motion.button
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.07 }}
                      onClick={() => toggleService(service.id)}
                      data-testid={`card-service-${service.id}`}
                      className={`w-full text-left flex items-center justify-between p-5 rounded-xl border transition-all duration-200 group cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                          isSelected ? "bg-primary border-primary" : "border-border group-hover:border-primary/60"
                        }`}>
                          {isSelected && <Check size={14} className="text-primary-foreground" strokeWidth={3} />}
                        </div>
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
                      <span className={`shrink-0 ml-4 text-xl font-bold font-serif transition-colors ${
                        isSelected ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {formatPrice(service.basePrice)}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {selectedServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <Button
                    size="lg"
                    onClick={() => setStep(2)}
                    className="font-bold uppercase tracking-wider px-8 h-12 gap-2"
                    data-testid="button-next-barber"
                  >
                    Escolher barbeiro
                    <ChevronRight size={16} />
                  </Button>
                </motion.div>
              )}

              {selectedServices.length === 0 && (
                <p className="text-center text-xs text-muted-foreground mt-2">
                  Toque em um serviço para selecioná-lo
                </p>
              )}
            </motion.div>
          )}

          {/* STEP 2: Barber selection */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Selected services summary */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {chosenServices.map((s) => (
                  <span
                    key={s.id}
                    onClick={() => { setStep(1); }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/15 text-primary border border-primary/30 rounded-full px-3 py-1 cursor-pointer hover:bg-primary/25 transition-colors"
                    data-testid={`tag-selected-${s.id}`}
                  >
                    {s.name}
                    <X size={10} strokeWidth={2.5} />
                  </span>
                ))}
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-full px-3 py-1 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  Editar serviços
                </button>
              </div>

              {/* Barber cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {barbers.map((barber, index) => {
                  const isSelected = selectedBarber === barber.id;
                  const hasDiff = hasDifferentPrices(barber.id);
                  const isExpanded = expandedBarberPrices === barber.id;

                  return (
                    <motion.div
                      key={barber.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.1 }}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isSelected
                          ? "border-primary shadow-lg shadow-primary/15"
                          : "border-border hover:border-primary/40"
                      }`}
                      data-testid={`card-barber-${barber.id}`}
                    >
                      {/* Barber photo + info */}
                      <button
                        onClick={() => selectBarber(barber.id)}
                        className="w-full text-left group"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={barber.image}
                            alt={barber.name}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                          {isSelected && (
                            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-md">
                              <Check size={14} className="text-primary-foreground" strokeWidth={3} />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <p className="font-serif font-bold text-foreground text-base">{barber.name}</p>
                          <p className="text-muted-foreground text-xs mt-0.5">{barber.specialty}</p>
                        </div>
                      </button>

                      {/* Price difference indicator */}
                      {hasDiff && (
                        <div className="px-4 pb-4">
                          <button
                            onClick={() => toggleBarberPrices(barber.id)}
                            className="flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline transition-colors"
                            data-testid={`button-prices-${barber.id}`}
                          >
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                            />
                            Ver preços diferenciados
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-3 space-y-2">
                                  {chosenServices.map((s) => {
                                    const overridePrice = barber.priceOverrides[s.id];
                                    const diff = overridePrice !== undefined ? overridePrice - s.basePrice : 0;
                                    return (
                                      <div key={s.id} className="flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground">{s.name}</span>
                                        <div className="flex items-center gap-1.5">
                                          {overridePrice !== undefined ? (
                                            <>
                                              <span className="line-through text-muted-foreground/50">{formatPrice(s.basePrice)}</span>
                                              <span className="font-bold text-foreground">{formatPrice(overridePrice)}</span>
                                              <span className={`font-bold text-[10px] px-1.5 py-0.5 rounded-full ${
                                                diff > 0
                                                  ? "bg-orange-500/15 text-orange-400"
                                                  : "bg-green-500/15 text-green-400"
                                              }`}>
                                                {diff > 0 ? `+R$${diff}` : `-R$${Math.abs(diff)}`}
                                              </span>
                                            </>
                                          ) : (
                                            <span className="font-bold text-foreground">{formatPrice(s.basePrice)}</span>
                                          )}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Skip barber option */}
              <p className="text-center text-xs text-muted-foreground mb-6">
                Ou{" "}
                <button
                  onClick={() => setSelectedBarber(null)}
                  className="text-primary hover:underline"
                >
                  pular e agendar sem preferência de barbeiro
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sticky booking panel */}
        <AnimatePresence>
          {(selectedServices.length > 0 && (step === 2)) && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="sticky bottom-6 z-30 mt-4"
              data-testid="panel-booking-summary"
            >
              <div className="rounded-2xl border border-primary/50 bg-card/95 backdrop-blur-md shadow-2xl shadow-primary/10 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShoppingBag size={14} className="text-primary shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {chosenServices.length} {chosenServices.length === 1 ? "serviço" : "serviços"}
                      {chosenBarber ? ` · ${chosenBarber.name}` : ""}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {chosenServices.map((s) => (
                      <span key={s.id} className="inline-flex items-center gap-1 text-[11px] font-medium bg-primary/15 text-primary rounded-full px-2 py-0.5">
                        {s.name}
                        {selectedBarber && barbers.find(b => b.id === selectedBarber)?.priceOverrides[s.id] !== undefined && (
                          <span className="text-[10px] opacity-70">({formatPrice(getServicePrice(s.id, selectedBarber))})</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

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
                      {chosenBarber ? `Agendar com ${chosenBarber.name.split(" ")[0]}` : "Agendar via WhatsApp"}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
