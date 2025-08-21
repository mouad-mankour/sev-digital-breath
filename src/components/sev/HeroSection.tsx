import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/sev-hero-bg.jpg";
import { scrollToContact } from "@/lib/scroll";
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond héroique */}
      <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      {/* Bulles organiques flottantes - Optimisées mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble absolute top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32" />
        <div className="bubble absolute top-40 right-4 sm:right-32 w-12 sm:w-24 h-12 sm:h-24" />
        <div className="bubble absolute bottom-32 left-1/4 w-20 sm:w-40 h-20 sm:h-40" />
        <div className="bubble absolute bottom-20 right-4 sm:right-20 w-14 sm:w-28 h-14 sm:h-28" />
      </div>

      {/* Lignes de données animées */}
      <div className="absolute inset-0 opacity-20">
        <div className="data-line absolute top-1/4 left-0 w-full h-px" />
        <div className="data-line absolute top-1/2 left-0 w-full h-px" style={{
        animationDelay: '1s'
      }} />
        <div className="data-line absolute top-3/4 left-0 w-full h-px" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge d'introduction */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/40 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg backdrop-blur-sm">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-wide">databblead • Data Intelligence</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-tight">
          <span className="block text-foreground/95">DATA BtoB</span>
          <span className="block hero-gradient bg-clip-text text-transparent animate-gradient">prêt à la transformer en leads ?</span>
        </h1>

        {/* Sous-titre poétique */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          L'intelligence artificielle au service de votre croissance commerciale.
          <br className="hidden sm:block" />
          <span className="text-primary font-medium">Nous identifions, qualifions et connectons</span> — 
          vos futurs clients vous attendent.
        </p>

        {/* CTA principal */}
        <div className="flex justify-center px-4">
          <Button variant="hero" size="lg" className="group text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 h-auto shadow-2xl hover:scale-105 transition-all duration-200 w-full sm:w-auto max-w-sm sm:max-w-none" onClick={scrollToContact} data-cta="hero_launch_strategy" aria-label="Lancer ma stratégie databblead - Aller au formulaire de contact">
            Lancer ma stratégie databblead
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-accent/40 rounded-full p-1">
            <div className="w-1 h-3 bg-accent rounded-full mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>;
}