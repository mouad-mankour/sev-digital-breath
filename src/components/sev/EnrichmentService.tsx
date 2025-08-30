import { Sparkles, Target, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";

export function EnrichmentService() {
  return (
    <section className="py-20 bg-black text-white" aria-labelledby="enrichment-title" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 id="enrichment-title" className="text-4xl md:text-5xl font-bold" itemProp="name">Service d'Enrichissement</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformez vos données brutes en intelligence stratégique avec notre IA d'enrichissement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Profilage Avancé</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Enrichissement automatique des profils entreprises avec données comportementales, 
              technographiques et financières pour un ciblage ultra-précis.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Secteur d'activité détaillé</li>
              <li>• Stack technologique</li>
              <li>• Signaux d'achat</li>
              <li>• Score de maturité</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300">
            <Users className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Contacts Décisionnaires</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Identification et enrichissement des contacts clés avec informations personnelles 
              et professionnelles validées pour maximiser vos taux de conversion.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Emails directs vérifiés</li>
              <li>• Profils LinkedIn actifs</li>
              <li>• Numéros de téléphone</li>
              <li>• Rôles et responsabilités</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Intelligence Prédictive</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Analyse prédictive des opportunités avec scoring intelligent et recommandations 
              personnalisées pour optimiser votre approche commerciale.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Score de propension</li>
              <li>• Timing optimal</li>
              <li>• Message personnalisé</li>
              <li>• Canal préférentiel</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Sources d'Enrichissement Premium</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Notre réseau exclusif de sources de données garantit un enrichissement complet et à jour
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-primary mb-2">350+</div>
              <p className="text-gray-300">Sources de données</p>
            </div>
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-300">Taux d'enrichissement</p>
            </div>
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-primary mb-2">24h</div>
              <p className="text-gray-300">Mise à jour continue</p>
            </div>
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-300">Attributs enrichis</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-primary/25"
          >
            Enrichir mes données
          </Button>
        </div>
      </div>
    </section>
  );
}