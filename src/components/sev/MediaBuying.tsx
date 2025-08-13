import { Target, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MediaBuying() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-muted/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-1 data-flow" />
        <div className="absolute bottom-1/4 right-0 w-full h-1 data-flow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-xl">
                <Target className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Media Buying 
              <span className="text-accent ml-3">Ultra Ciblé</span>
            </h2>
            
            <p className="text-2xl font-light text-foreground/90 mb-4 leading-relaxed">
              Chaque euro investi atteint votre audience idéale, au moment parfait.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto shadow-lg" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous concevons et déployons des campagnes publicitaires à très haute précision, 
                basées sur l'analyse comportementale, les signaux d'achat et la segmentation avancée. 
                <span className="text-primary font-semibold"> Plus de visibilité, moins de gaspillage.</span>
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Précision ciblage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">-60%</div>
                  <div className="text-sm text-muted-foreground">Coût acquisition</div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full md:w-auto">
                Planifier ma campagne ciblée
              </Button>
            </div>

            {/* Visual representation */}
            <div className="relative">
              <div className="card-float bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  {[
                    { icon: Target, label: "Ciblage comportemental", color: "hsl(var(--primary))" },
                    { icon: TrendingUp, label: "Optimisation temps réel", color: "hsl(var(--accent))" },
                    { icon: Zap, label: "ROI maximisé", color: "hsl(var(--success-green))" }
                  ].map((item, index) => (
                    <div 
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-muted/30 to-background/30 border border-border/50"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${item.color}20`,
                          border: `1px solid ${item.color}40`
                        }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}