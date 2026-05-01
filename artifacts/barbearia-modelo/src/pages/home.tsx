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
      <Differentials />
      <Services />
      <Barbers />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
