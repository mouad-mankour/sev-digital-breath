import { HeroSection } from "@/components/sev/HeroSection";
import { SevMechanism } from "@/components/sev/SevMechanism";
import StrategicAdvantage from "@/components/sev/StrategicAdvantage";
import { MediaBuying } from "@/components/sev/MediaBuying";
import { Filmmaking } from "@/components/sev/Filmmaking";
import { DataAnalytics } from "@/components/sev/DataAnalytics";
import { BusinessStrategy } from "@/components/sev/BusinessStrategy";
import { UseCases } from "@/components/sev/UseCases";
import { ContactForm } from "@/components/sev/ContactForm";
import { Footer } from "@/components/sev/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SevMechanism />
      <StrategicAdvantage />
      <MediaBuying />
      <Filmmaking />
      <DataAnalytics />
      <BusinessStrategy />
      <UseCases />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
