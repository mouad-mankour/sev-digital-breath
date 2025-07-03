import { TrendingUp, Scale, Users, Building } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "L'investisseur visionnaire",
    story: "Un VC a ciblé 300 investisseurs AI en 2 jours.",
    detail: "Scraper les fonds, enrichir les profils, vérifier les investissements récents. Mission accomplie.",
    metrics: "300 prospects qualifiés",
    sector: "Venture Capital"
  },
  {
    icon: Scale,
    title: "Le cabinet juridique",
    story: "Un cabinet a mis à jour sa base juridique en 1 clic.",
    detail: "Surveillance réglementaire automatisée, veille jurisprudentielle, compliance en temps réel.",
    metrics: "2000 documents analysés",
    sector: "Droit & Compliance"
  },
  {
    icon: Users,
    title: "L'équipe commerciale",
    story: "Une startup a enrichi 1000 prospects en une nuit.",
    detail: "LinkedIn, sites web, réseaux sociaux — l'agent a tout connecté, tout vérifié.",
    metrics: "1000 profils enrichis",
    sector: "Sales & Marketing"
  },
  {
    icon: Building,
    title: "Le consultancy stratégique",
    story: "Une mission de due diligence bouclée en 48h.",
    detail: "Analyse financière, mapping concurrentiel, vérification des équipes dirigeantes.",
    metrics: "48h de gain de temps",
    sector: "Conseil Stratégique"
  }
];

export function UseCases() {
  return (
    <section className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-2 data-flow" />
        <div className="absolute bottom-0 left-0 w-full h-2 data-flow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6">
        {/* Titre inspirant */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils ont osé confier
            <span className="text-accent ml-3">une mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment SEV a transformé des intentions en réalisations concrètes.
            <br />
            <em>Chaque histoire est unique. Chaque résultat, authentique.</em>
          </p>
        </div>

        {/* Grille de cas d'usage */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title}
              className="card-float bg-card border border-border rounded-2xl overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header avec secteur */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-accent">{useCase.sector}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {useCase.metrics}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu de l'histoire */}
              <div className="p-6">
                <blockquote className="text-lg font-medium text-foreground mb-4 italic">
                  "{useCase.story}"
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.detail}
                </p>

                {/* Effet de hover - révéler plus */}
                <div className="mt-4 p-4 bg-muted/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-accent font-medium">Mission SEV :</span> 
                    L'agent a automatisé ce qui prenait des semaines en quelques heures.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Citation inspirante */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-foreground/90 italic leading-relaxed">
              "Dans un monde où chaque minute compte,
              <br />
              <span className="text-primary font-medium">
                SEV transforme l'attente en action,
              </span>
              <br />
              l'intention en réalisation."
            </blockquote>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}