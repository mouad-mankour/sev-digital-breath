import { Search, Database, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";

export function ScrapingService() {
  return (
    <section className="py-20 bg-black text-white" aria-labelledby="scraping-title" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Search className="w-8 h-8 text-primary" />
            <h2 id="scraping-title" className="text-4xl md:text-5xl font-bold" itemProp="name">Service de Scraping</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Extraction intelligente de données web en temps réel avec notre technologie de pointe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Extraction Massive</h3>
              <p className="text-gray-300 leading-relaxed">
                Collectez des millions de données structurées depuis n'importe quelle source web avec notre infrastructure haute performance. 
                Traitement parallèle pour une efficacité maximale.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Temps Réel</h3>
              <p className="text-gray-300 leading-relaxed">
                Monitoring continu et extraction en temps réel des données critiques. 
                Alertes instantanées pour les changements importants dans vos sources.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 rounded-2xl border border-gray-700">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">Fonctionnalités Premium</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Anti-détection avancée</h4>
                    <p className="text-gray-400 text-sm">Rotation d'IP, headers dynamiques, délais intelligents</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Format de sortie personnalisé</h4>
                    <p className="text-gray-400 text-sm">JSON, CSV, XML, base de données directe</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Gestion des erreurs intelligente</h4>
                    <p className="text-gray-400 text-sm">Retry automatique, fallback, reporting détaillé</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Support multi-sites</h4>
                    <p className="text-gray-400 text-sm">E-commerce, réseaux sociaux, annuaires, médias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <p className="text-gray-300">Pages scrapées par jour</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-gray-300">Taux de disponibilité</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">&lt;2s</div>
              <p className="text-gray-300">Temps de réponse moyen</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-primary/25"
          >
            Démarrer le scraping
          </Button>
        </div>
      </div>
    </section>
  );
}