import { Target, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";
export function MediaBuying() {
  return <section className="py-16 sm:py-20 md:py-24 relative bg-gradient-to-b from-background to-muted/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-black">
        <div className="absolute top-1/4 left-0 w-full h-1 data-flow" />
        <div className="absolute bottom-1/4 right-0 w-full h-1 data-flow" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-xl">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Media Buying 
              <span className="text-accent ml-2 sm:ml-3">Ultra Ciblé</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90 mb-3 sm:mb-4 leading-relaxed px-4">
              Chaque euro investi atteint votre audience idéale, au moment parfait.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto shadow-lg" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Description */}
            <div className="space-y-6 sm:space-y-8 px-4 md:px-0">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Nous concevons et déployons des campagnes publicitaires à très haute précision, 
                basées sur l'analyse comportementale, les signaux d'achat et la segmentation avancée. 
                <span className="text-primary font-semibold"> Plus de visibilité, moins de gaspillage.</span>
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">95%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Précision ciblage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">-60%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Coût acquisition</div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-all duration-200" onClick={scrollToContact} data-cta="service_media_buying" aria-label="Planifier ma campagne ciblée - Aller au formulaire de contact">
                <span className="hidden sm:inline">Planifier ma campagne ciblée</span>
                <span className="sm:hidden">Ma campagne ciblée</span>
              </Button>
            </div>

            {/* Visual representation */}
            <div className="relative px-4 md:px-0">
              <div className="card-float bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-4 sm:space-y-6">
                  {[{
                  icon: Target,
                  label: "Ciblage comportemental",
                  color: "hsl(var(--primary))"
                }, {
                  icon: TrendingUp,
                  label: "Optimisation temps réel",
                  color: "hsl(var(--accent))"
                }, {
                  icon: Zap,
                  label: "ROI maximisé",
                  color: "hsl(var(--success-green))"
                }].map((item, index) => <div key={item.label} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-muted/30 to-background/30 border border-border/50" style={{
                  animationDelay: `${index * 0.2}s`
                }}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0" style={{
                    backgroundColor: `${item.color}20`,
                    border: `1px solid ${item.color}40`
                  }}>
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{
                      color: item.color
                    }} />
                      </div>
                      <span className="font-medium text-foreground text-sm sm:text-base">{item.label}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}