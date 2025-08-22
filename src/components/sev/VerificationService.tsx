import { Shield, CheckCircle2, AlertTriangle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";

export function VerificationService() {
  return (
    <section className="py-20 bg-black text-white" aria-labelledby="verification-title" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 id="verification-title" className="text-4xl md:text-5xl font-bold" itemProp="name">Service de Vérification</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Validation multi-niveau de vos données pour garantir une qualité et une conformité optimales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-900/20 to-gray-800 p-8 rounded-xl border border-green-700/30">
              <CheckCircle2 className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Validation Temps Réel</h3>
              <p className="text-gray-300 leading-relaxed">
                Vérification instantanée de la validité des emails, numéros de téléphone et adresses. 
                Algorithmes propriétaires avec taux de précision de 99,5%.
              </p>
              <div className="mt-4 flex gap-4 text-sm">
                <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full">Emails</span>
                <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full">Téléphones</span>
                <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full">Adresses</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-gray-800 p-8 rounded-xl border border-blue-700/30">
              <AlertTriangle className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Conformité RGPD</h3>
              <p className="text-gray-300 leading-relaxed">
                Audit automatique de conformité avec les réglementations internationales et locales. 
                Traçabilité complète et rapports de conformité détaillés.
              </p>
              <div className="mt-4 flex gap-4 text-sm">
                <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">RGPD</span>
                <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">Audit</span>
                <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">Traçabilité</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 rounded-2xl border border-gray-700">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary">Certification Premium</h3>
              <p className="text-gray-300 mt-2">Garantie de qualité maximale</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-gray-800">
                <span className="text-gray-300">Emails valides</span>
                <span className="text-primary font-bold">99.5%</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-gray-800">
                <span className="text-gray-300">Numéros actifs</span>
                <span className="text-primary font-bold">97.2%</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-gray-800">
                <span className="text-gray-300">Adresses vérifiées</span>
                <span className="text-primary font-bold">98.8%</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-gray-800">
                <span className="text-gray-300">Conformité RGPD</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Processus de Vérification Multi-Étapes</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Notre méthodologie propriétaire garantit la plus haute qualité de données du marché
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Validation Syntaxique</h4>
              <p className="text-gray-400 text-sm">Format et structure des données</p>
            </div>
            
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Test de Délivrabilité</h4>
              <p className="text-gray-400 text-sm">Vérification active des contacts</p>
            </div>
            
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Contrôle Qualité</h4>
              <p className="text-gray-400 text-sm">Analyse de cohérence avancée</p>
            </div>
            
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Certification</h4>
              <p className="text-gray-400 text-sm">Label de qualité premium</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-primary/25"
          >
            Vérifier mes données
          </Button>
        </div>
      </div>
    </section>
  );
}