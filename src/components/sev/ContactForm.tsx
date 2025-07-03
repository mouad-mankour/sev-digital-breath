import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Stratégie reçue ✨",
      description: "Votre projet a été transmis à databblead. Nous analysons votre défi et vous recontactons sous 24h.",
    });

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section className="py-24 relative">
      {/* Effets visuels de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble absolute top-10 left-10 w-20 h-20 opacity-30" />
        <div className="bubble absolute bottom-20 right-20 w-16 h-16 opacity-20" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Titre évocateur */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/40 rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-accent text-sm font-semibold tracking-wide">Prêt à transformer vos données ?</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Prêt à transformer
              <span className="text-accent ml-3">vos données en croissance ?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Partagez-nous vos défis commerciaux. Nous concevrons une stratégie data sur-mesure.
              <br />
              <em className="text-primary">Votre pipeline de demain se construit aujourd'hui.</em>
            </p>
          </div>

          {/* Formulaire élégant */}
          <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-md border border-primary/30 rounded-3xl p-10 md:p-16 card-float shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Informations de contact */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-foreground font-semibold text-base">
                    Votre nom
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-muted/30 border-border/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-500 text-lg py-4 px-6 rounded-2xl backdrop-blur-sm shadow-inner"
                    placeholder="Prénom et nom de famille"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground font-semibold text-base">
                    Votre email professionnel
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-muted/30 border-border/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-500 text-lg py-4 px-6 rounded-2xl backdrop-blur-sm shadow-inner"
                    placeholder="prenom@entreprise.com"
                  />
                </div>
              </div>

              {/* Mission description */}
              <div className="space-y-3">
                <Label htmlFor="mission" className="text-foreground font-semibold text-base">
                  Votre défi commercial
                </Label>
                <Textarea
                  id="mission"
                  name="mission"
                  required
                  rows={6}
                  className="bg-muted/30 border-border/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-500 text-lg py-4 px-6 rounded-2xl backdrop-blur-sm shadow-inner resize-none"
                  placeholder="Décrivez vos objectifs de croissance, vos défis actuels, vos cibles prioritaires..."
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Plus vous détaillez votre contexte, plus nous pourrons personnaliser notre approche. 
                  Parlez-nous de vos objectifs, votre marché, vos contraintes.
                </p>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-6">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group text-xl px-10 py-6 h-auto shadow-2xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Analyse en cours...
                    </>
                  ) : (
                    <>
                      Lancer ma stratégie databblead
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" />
                    </>
                  )}
                </Button>
              </div>

              {/* Note de confidentialité */}
              <div className="pt-6 border-t border-border/20">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
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