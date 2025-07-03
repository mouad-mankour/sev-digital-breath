import { TrendingUp, Scale, Users, Building } from "lucide-react";

const successStories = [
  {
    icon: TrendingUp,
    title: "SaaS en hypercroissance",
    story: "+400% de leads qualifiés en 3 mois.",
    detail: "Identification des entreprises en transition digitale, scoring intelligent, approche personnalisée. Pipeline multiplié par 4.",
    metrics: "400% ROI",
    sector: "Technology"
  },
  {
    icon: Scale,
    title: "Cabinet de conseil",
    story: "200 nouveaux clients enterprise en 6 mois.",
    detail: "Mapping des décideurs C-level, analyse des besoins sectoriels, timing optimal de contact.",
    metrics: "200 clients enterprise",
    sector: "Consulting"
  },
  {
    icon: Users,
    title: "Agence marketing",
    story: "Pipeline prédictif avec 85% de précision.",
    detail: "Intelligence comportementale, signaux d'achat, orchestration multicanal. Chaque lead devient prédictible.",
    metrics: "85% précision",
    sector: "Marketing Agency"
  },
  {
    icon: Building,
    title: "Fintech internationale",
    story: "Expansion géographique accélérée.",
    detail: "Cartographie des marchés émergents, identification des early adopters, stratégie d'entrée data-driven.",
    metrics: "5 nouveaux pays",
    sector: "Financial Services"
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
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ils ont fait confiance à
            <span className="text-accent ml-3">databblead</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Découvrez comment nous avons transformé leur approche commerciale en machine de croissance.
            <br />
            <em className="text-primary">Chaque stratégie est sur-mesure. Chaque résultat, mesurable.</em>
          </p>
        </div>

        {/* Grille de cas d'usage */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {successStories.map((story, index) => (
            <div 
              key={story.title}
              className="card-float bg-gradient-to-br from-card to-card/80 border border-primary/20 rounded-3xl overflow-hidden group shadow-xl backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header avec secteur */}
              <div className="bg-gradient-to-r from-primary/8 to-accent/8 p-8 border-b border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                      <story.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {story.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">{story.sector}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full border border-primary/20">
                      {story.metrics}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu de l'histoire */}
              <div className="p-8">
                <blockquote className="text-xl font-semibold text-foreground mb-6 italic leading-relaxed">
                  "{story.story}"
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed text-base">
                  {story.detail}
                </p>

                {/* Effet de hover - révéler plus */}
                <div className="mt-6 p-5 bg-gradient-to-r from-muted/20 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-accent font-semibold">databblead Impact :</span> 
                    Intelligence artificielle, stratégie sur-mesure, résultats exponentiels.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Citation inspirante */}
        <div className="text-center">
          <div className="max-w-5xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light text-foreground/95 italic leading-relaxed">
              "Là où d'autres voient des données,
              <br />
              <span className="text-primary font-semibold">
                databblead révèle des opportunités.
              </span>
              <br />
              Votre croissance commence ici."
            </blockquote>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}