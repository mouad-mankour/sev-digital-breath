import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/sev-hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond héroique */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      {/* Bulles organiques flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble absolute top-20 left-20 w-32 h-32" />
        <div className="bubble absolute top-40 right-32 w-24 h-24" />
        <div className="bubble absolute bottom-32 left-1/4 w-40 h-40" />
        <div className="bubble absolute bottom-20 right-20 w-28 h-28" />
      </div>

      {/* Lignes de données animées */}
      <div className="absolute inset-0 opacity-20">
        <div className="data-line absolute top-1/4 left-0 w-full h-px" />
        <div className="data-line absolute top-1/2 left-0 w-full h-px" style={{ animationDelay: '1s' }} />
        <div className="data-line absolute top-3/4 left-0 w-full h-px" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge d'introduction */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-accent text-sm font-medium">Agent SEV - Intelligence Automatisée</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="block">Quand la donnée</span>
          <span className="block hero-gradient bg-clip-text text-transparent animate-gradient">
            devient évidente
          </span>
        </h1>

        {/* Sous-titre poétique */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Donnez-lui un nom, une mission, et notre agent s'en charge.
          <br />
          <span className="text-primary">Il scrute, il enrichit, il vérifie</span> — 
          l'allié invisible de vos équipes.
        </p>

        {/* CTA principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="group text-lg px-8 py-4 h-auto"
          >
            Voir ce que notre agent peut faire pour vous
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="neural" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
          >
            Découvrir SEV en action
          </Button>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-accent/40 rounded-full p-1">
            <div className="w-1 h-3 bg-accent rounded-full mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}