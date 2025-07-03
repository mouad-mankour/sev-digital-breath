import { Search, Zap, CheckCircle, ArrowRight } from "lucide-react";

const sevSteps = [
  {
    icon: Search,
    title: "Scraper",
    description: "Il explore, collecte, découvre",
    detail: "Notre agent navigue dans l'immensité des données, capture l'essentiel avec une précision chirurgicale.",
    color: "hsl(var(--data-stream))"
  },
  {
    icon: Zap,
    title: "Enrichir", 
    description: "Il comprend, analyse, structure",
    detail: "Chaque donnée brute devient intelligence. L'agent enrichit, contextualise, révèle les connexions cachées.",
    color: "hsl(var(--primary))"
  },
  {
    icon: CheckCircle,
    title: "Vérifier",
    description: "Il valide, certifie, confirme",
    detail: "La confiance par la vérification. Chaque information est contrôlée, authentifiée, prête à l'usage.",
    color: "hsl(var(--success-green))"
  }
];

export function SevMechanism() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            La mécanique
            <span className="data-flow bg-clip-text text-transparent ml-3">SEV</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trois étapes. Une mission. Des résultats qui parlent d'eux-mêmes.
          </p>
        </div>

        {/* Diagramme SEV */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sevSteps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connecteur entre les étapes */}
              {index < sevSteps.length - 1 && (
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
              <div className="card-float bg-card border border-primary/20 rounded-2xl p-8 h-full">
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
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-4xl">
            <p className="text-lg text-foreground/90 leading-relaxed">
              "Un agent. Trois actions. Une mission accomplie."
              <br />
              <span className="text-primary font-medium">
                SEV transforme vos intentions en résultats concrets.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}