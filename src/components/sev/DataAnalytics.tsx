import { BarChart3, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";
export function DataAnalytics() {
  return <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Service de data Analytics</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformez vos données en insights stratégiques avec notre plateforme d'analyse avancée
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">IA Prédictive</h3>
            <p className="text-gray-300">
              Algorithmes d'intelligence artificielle pour prédire les tendances du marché
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <BarChart3 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Analyse Comportementale</h3>
            <p className="text-gray-300">
              Comprenez les patterns de vos prospects et optimisez votre approche
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">ROI Optimisé</h3>
            <p className="text-gray-300">
              Maximisez votre retour sur investissement avec des insights précis
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Découvrir nos solutions data
          </Button>
        </div>
      </div>
    </section>;
}