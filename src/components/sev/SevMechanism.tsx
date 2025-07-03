import { Search, Zap, CheckCircle, ArrowRight } from "lucide-react";

const dataSteps = [
  {
    icon: Search,
    title: "Identifier",
    description: "Nous détectons vos prospects idéaux",
    detail: "Notre IA analyse des millions de données pour identifier précisément vos futurs clients selon vos critères.",
    color: "hsl(var(--data-stream))"
  },
  {
    icon: Zap,
    title: "Qualifier", 
    description: "Nous enrichissons chaque profil",
    detail: "Intelligence contextuelle : budget, timing, besoins. Chaque lead devient une opportunité documentée.",
    color: "hsl(var(--primary))"
  },
  {
    icon: CheckCircle,
    title: "Connecter",
    description: "Nous facilitons la prise de contact",
    detail: "Approche personnalisée, canaux optimaux, moment parfait. Votre message arrive au bon moment.",
    color: "hsl(var(--success-green))"
  }
];

export function SevMechanism() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Notre méthode
            <span className="data-flow bg-clip-text text-transparent ml-3">databblead</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trois piliers pour transformer vos données en pipeline commercial. 
            <br />
            <em className="text-primary">Chaque étape, une expertise. Chaque résultat, mesurable.</em>
          </p>
        </div>

        {/* Diagramme Data Intelligence */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {dataSteps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connecteur entre les étapes */}
              {index < dataSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight 
                    className="w-8 h-8 text-accent/60" 
                    style={{ 
                      filter: `drop-shadow(0 0 10px ${step.color})`,
                      animation: `pulse-glow 2s ease-in-out infinite ${index * 0.5}s`
                    }}
                  />
                </div>
              )}

              {/* Carte d'étape */}
              <div className="card-float bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-3xl p-10 h-full shadow-xl backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  {/* Icône avec effet de lueur */}
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative"
                    style={{ 
                      backgroundColor: `${step.color}20`,
                      border: `2px solid ${step.color}40`,
                      boxShadow: `0 0 20px ${step.color}30`
                    }}
                  >
                    <step.icon 
                      className="w-10 h-10" 
                      style={{ color: step.color }}
                    />
                    
                    {/* Effet de pulsation */}
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  {/* Contenu */}
                  <h3 className="text-2xl font-bold mb-3" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 font-medium">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision synthétique */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-3xl p-10 max-w-5xl shadow-2xl backdrop-blur-md">
            <p className="text-xl text-foreground/95 leading-relaxed font-light">
              "Data intelligence. Lead generation. Croissance mesurable."
              <br />
              <span className="text-primary font-semibold text-2xl">
                databblead transforme vos ambitions en résultats tangibles.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}