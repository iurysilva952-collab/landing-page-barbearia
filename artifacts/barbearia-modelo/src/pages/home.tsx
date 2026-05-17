import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Differentials } from "@/components/sections/differentials";
import { Services } from "@/components/sections/services";
import { Barbers } from "@/components/sections/barbers";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      
      <Header />

      <Hero />

      {/* 🔥 CTA leve após o hero */}
      <section className="text-center py-8">
        <p className="text-red-400 text-sm mb-3">
          ⚠️ Últimos horários disponíveis hoje
        </p>

        <a
          href="https://wa.me/5579988583155"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Agendar agora
        </a>
      </section>

      <Differentials />

      <Services />

      {/* 🔥 CTA no meio (mais suave) */}
      <section className="text-center py-12">
        <h2 className="text-xl font-bold mb-4">
          Pronto para um corte de qualidade?
        </h2>

        <a
          href="https://wa.me/5579988583155"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Falar no WhatsApp
        </a>
      </section>

      <Barbers />

      <Gallery />

      <Testimonials />

      {/* ❌ REMOVIDO CTA duplicado aqui */}

      <Location />

      <Contact />

      <Footer />

      {/* ✅ Botão fixo global */}
      <FloatingWhatsApp />
    </main>
  );
}