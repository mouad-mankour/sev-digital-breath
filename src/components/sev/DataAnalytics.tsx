import { BarChart3, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";

export function DataAnalytics() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-muted/20 to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 w-full h-1 data-flow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-0 w-full h-1 data-flow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success-green/20 to-primary/20 flex items-center justify-center shadow-xl">
                <BarChart3 className="w-10 h-10 text-success-green" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Data
              <span className="text-success-green ml-3">Analytics</span>
            </h2>
            
            <p className="text-2xl font-light text-foreground/90 mb-4 leading-relaxed">
              Transformez vos données en décisions stratégiques
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-success-green to-primary rounded-full mx-auto shadow-lg" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous analysons vos données pour révéler les tendances, opportunités et risques invisibles. 
                <span className="text-success-green font-semibold"> Rapports clairs, indicateurs clés, recommandations actionnables</span> 
                — pour piloter votre croissance avec précision.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-green mb-2">12x</div>
                  <div className="text-sm text-muted-foreground">ROI décisions data</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">48h</div>
                  <div className="text-sm text-muted-foreground">Délai insights</div>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full md:w-auto px-8 py-4 text-lg hover:scale-105 transition-all duration-200"
                onClick={scrollToContact}
                data-cta="service_data_analytics"
                aria-label="Obtenir mon audit data - Aller au formulaire de contact"
              >
                Obtenir mon audit data
              </Button>
            </div>

            {/* Visual representation */}
            <div className="relative">
              <div className="card-float bg-gradient-to-br from-card to-card/50 border border-success-green/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  {[
                    { icon: Brain, label: "Intelligence prédictive", color: "hsl(var(--success-green))" },
                    { icon: BarChart3, label: "Visualisation avancée", color: "hsl(var(--primary))" },
                    { icon: TrendingUp, label: "Recommandations ROI", color: "hsl(var(--accent))" }
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