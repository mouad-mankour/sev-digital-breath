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
      title: "Mission reçue ✨",
      description: "Votre demande a été transmise à notre équipe. Nous vous recontactons sous 24h.",
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
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Prêt à confier votre mission ?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Et vous, quelle mission
              <span className="text-primary ml-3">allez-vous lui confier ?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Décrivez votre vision. Notre agent SEV la transformera en réalité.
              <br />
              <em>Chaque mission est unique, chaque approche sur-mesure.</em>
            </p>
          </div>

          {/* Formulaire élégant */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 card-float">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations de contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Votre nom
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background/50 border-border/60 focus:border-primary transition-colors"
                    placeholder="Comment vous appelle-t-on ?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Votre email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/50 border-border/60 focus:border-primary transition-colors"
                    placeholder="Où peut-on vous joindre ?"
                  />
                </div>
              </div>

              {/* Mission description */}
              <div className="space-y-2">
                <Label htmlFor="mission" className="text-foreground font-medium">
                  Votre mission pour l'agent SEV
                </Label>
                <Textarea
                  id="mission"
                  name="mission"
                  required
                  rows={6}
                  className="bg-background/50 border-border/60 focus:border-primary transition-colors resize-none"
                  placeholder="Décrivez votre mission... Quelles données collecter ? Quels insights rechercher ? Quels résultats espérer ?"
                />
                <p className="text-sm text-muted-foreground">
                  Plus vous serez précis, plus l'agent pourra être efficace. 
                  N'hésitez pas à détailler vos objectifs et contraintes.
                </p>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="mission"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto group text-lg px-8 py-4 h-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Transmission en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma mission
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              {/* Note de confidentialité */}
              <div className="pt-4 border-t border-border/30">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="text-accent">Confidentialité assurée.</span> 
                  Votre mission reste entre vos mains et les nôtres.
                  <br />
                  Réponse sous 24h, sur-mesure et sans engagement.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}