import { HeroSection } from "@/components/sev/HeroSection";
import { SevMechanism } from "@/components/sev/SevMechanism";
import { UseCases } from "@/components/sev/UseCases";
import { ContactForm } from "@/components/sev/ContactForm";
import { Footer } from "@/components/sev/Footer";

export default function SevLanding() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SevMechanism />
      <UseCases />
      <ContactForm />
      <Footer />
    </div>
  );
}