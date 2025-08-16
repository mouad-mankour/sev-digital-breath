import { Lightbulb, Building2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";

export function BusinessStrategy() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="hidden sm:block absolute top-1/2 left-1/4 w-1 h-full data-flow rotate-45" />
        <div className="hidden sm:block absolute bottom-1/2 right-1/4 w-1 h-full data-flow rotate-45" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-success-green/20 flex items-center justify-center shadow-xl">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Business Strategy &
              <span className="text-primary ml-2 sm:ml-3">Modeling</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90 mb-3 sm:mb-4 leading-relaxed px-4">
              Des fondations solides pour une croissance durable.
            </p>
            
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-success-green rounded-full mx-auto shadow-lg" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual representation */}
            <div className="relative order-2 md:order-1">
              <div className="card-float bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  {[
                    { icon: Lightbulb, label: "Stratégie sur-mesure", color: "hsl(var(--primary))" },
                    { icon: Building2, label: "Business model solide", color: "hsl(var(--accent))" },
                    { icon: FileText, label: "Business plan investisseur", color: "hsl(var(--success-green))" }
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
                Nous construisons avec vous la stratégie, le business model et le business plan 
                qui guideront vos décisions et séduiront vos investisseurs. 
                <span className="text-primary font-semibold"> Vision, chiffres et exécution alignés.</span>
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Validation investisseurs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-green mb-2">3-6m</div>
                  <div className="text-sm text-muted-foreground">Délai levée fonds</div>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full md:w-auto px-8 py-4 text-lg hover:scale-105 transition-all duration-200"
                onClick={scrollToContact}
                data-cta="service_business_strategy"
                aria-label="Structurer ma stratégie - Aller au formulaire de contact"
              >
                Structurer ma stratégie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}