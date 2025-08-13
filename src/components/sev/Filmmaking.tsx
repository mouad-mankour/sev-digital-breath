import { Video, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Filmmaking() {
  return (
    <section className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-1 h-full data-flow rotate-90" />
        <div className="absolute bottom-0 left-1/4 w-1 h-full data-flow rotate-90" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shadow-xl">
                <Video className="w-10 h-10 text-accent" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Filmmaking &
              <span className="text-primary ml-3">Content Creation</span>
            </h2>
            
            <p className="text-2xl font-light text-foreground/90 mb-4 leading-relaxed">
              Du storytelling visuel qui transforme vos prospects en clients fidèles.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto shadow-lg" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual representation */}
            <div className="relative order-2 md:order-1">
              <div className="card-float bg-gradient-to-br from-card to-card/50 border border-accent/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  {[
                    { icon: Play, label: "Conception créative", color: "hsl(var(--accent))" },
                    { icon: Video, label: "Production premium", color: "hsl(var(--primary))" },
                    { icon: Heart, label: "Engagement émotionnel", color: "hsl(var(--success-green))" }
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

            {/* Description */}
            <div className="space-y-8 order-1 md:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                De la conception à la diffusion, nous créons des vidéos et contenus à fort impact, 
                optimisés pour l'engagement et la conversion. 
                <span className="text-accent font-semibold"> Une image de marque renforcée, des ventes amplifiées.</span>
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">+300%</div>
                  <div className="text-sm text-muted-foreground">Engagement moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Taux conversion</div>
                </div>
              </div>

              <Button variant="neural" size="lg" className="w-full md:w-auto">
                Créer mon contenu impactant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}