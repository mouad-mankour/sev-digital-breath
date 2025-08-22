import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Stratégie reçue ✨",
      description: "Votre projet a été transmis à databblead. Nous analysons votre défi et vous recontactons sous 24h."
    });
    setIsSubmitting(false);
    e.currentTarget.reset();
  };
  return (
    <section id="contact-form" className="py-16 sm:py-20 md:py-24 relative transition-all duration-300" aria-labelledby="contact-title" itemScope itemType="https://schema.org/ContactPage">
      {/* Effets visuels de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble absolute top-10 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 opacity-30" />
        <div className="bubble absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-8 sm:w-16 h-8 sm:h-16 opacity-20" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Titre évocateur */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/40 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
              <span className="text-accent text-xs sm:text-sm font-semibold tracking-wide">Prêt à transformer vos données ?</span>
            </div>
            
            <h2 id="contact-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4" itemProp="name">
              Prêt à transformer
              <span className="text-accent ml-2 sm:ml-3">la DATA BUSINESS en LEADS ?</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Partagez-nous vos défis commerciaux. Nous concevrons une stratégie data sur-mesure.
              <br className="hidden sm:block" />
              <em className="text-primary">Votre pipeline de demain se construit aujourd'hui.</em>
            </p>
          </div>

          {/* Formulaire élégant */}
          <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-md border border-primary/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 card-float shadow-2xl mx-4">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Informations de contact */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="name" className="text-foreground font-semibold text-sm sm:text-base">
                    Votre nom
                  </Label>
                  <Input id="name" name="name" required className="bg-muted/30 border-border/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-500 text-base sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl backdrop-blur-sm shadow-inner" placeholder="Prénom et nom de famille" />
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="email" className="text-foreground font-semibold text-sm sm:text-base">
                    Votre email professionnel
                  </Label>
                  <Input id="email" name="email" type="email" required className="bg-muted/30 border-border/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-500 text-base sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl backdrop-blur-sm shadow-inner" placeholder="prenom@entreprise.com" />
                </div>
              </div>

              {/* Mission description */}
              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="mission" className="text-foreground font-semibold text-sm sm:text-base">
                  Votre défi commercial
                </Label>
                <Textarea id="mission" name="mission" required rows={5} className="bg-muted/30 border-border/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-500 text-base sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl backdrop-blur-sm shadow-inner resize-none" placeholder="Décrivez vos objectifs de croissance, vos défis actuels, vos cibles prioritaires..." />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-2">
                  Plus vous détaillez votre contexte, plus nous pourrons personnaliser notre approche. 
                  Parlez-nous de vos objectifs, votre marché, vos contraintes.
                </p>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-4 sm:pt-6">
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full group text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 h-auto shadow-2xl">
                  {isSubmitting ? <>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span className="hidden sm:inline">Analyse en cours...</span>
                      <span className="sm:hidden">Analyse...</span>
                    </> : <>
                      <span className="hidden sm:inline">Lancer ma stratégie databblead</span>
                      <span className="sm:hidden">Ma stratégie databblead</span>
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-all duration-300" />
                    </>}
                </Button>
              </div>

              {/* Note de confidentialité */}
              <div className="pt-4 sm:pt-6 border-t border-border/20">
                <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed px-2">
                  <span className="text-accent font-semibold">Confidentialité totale.</span> 
                  Vos données stratégiques restent protégées.
                  <br />
                  Analyse personnalisée sous 24h, sans engagement de votre part.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}