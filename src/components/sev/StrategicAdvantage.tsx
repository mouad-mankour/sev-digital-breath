import { Button } from "@/components/ui/button";
import { BarChart3, Target, Award, Zap } from "lucide-react";
import { scrollToContact } from "@/lib/scroll";
import { useEffect, useRef, useState } from "react";

const StrategicAdvantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    companies: 0,
    targeting: 0,
    decisions: 0,
    roi: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          animateCounter('companies', 250000, 2000);
          animateCounter('targeting', 100, 1500);
          animateCounter('decisions', 95, 1800);
          animateCounter('roi', 300, 2200);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounter = (key: keyof typeof counters, target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 16);
  };

  const differentiators = [
    {
      icon: BarChart3,
      value: `+${counters.companies.toLocaleString()}`,
      label: "entreprises marocaines",
      delay: "0ms"
    },
    {
      icon: Target,
      value: `${counters.targeting}%`,
      label: "Ciblage intelligent & signaux d'achat",
      delay: "200ms"
    },
    {
      icon: Award,
      value: `${counters.decisions}%`,
      label: "Accès aux décideurs validés",
      delay: "400ms"
    },
    {
      icon: Zap,
      value: `+${counters.roi}%`,
      label: "ROI immédiat & mesurable",
      delay: "600ms"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sev-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-sev-secondary/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sev-primary/5 to-transparent skew-y-12 transform" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-sev-accent to-sev-primary bg-clip-text text-transparent">
            L'Atout Stratégique de Databblead
          </h2>
          <p className="text-xl md:text-2xl text-sev-accent font-light mb-8">
            L'IA est partout. La data intelligente, c'est notre signature.
          </p>
        </div>

        {/* Narrative Text */}
        <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            <span className="text-white font-semibold">Databblead détient la plus grande base classifiée du Maroc</span> : plus de 250 000 entreprises actives dans tous les secteurs.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Ce patrimoine exclusif, enrichi avec les contacts décisionnaires clés, est exploité grâce à notre 
            <span className="text-sev-primary font-semibold"> expertise en intelligence économique</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            <span className="text-sev-accent font-semibold">Résultat</span> : des pipelines sur mesure, prêts à activer, qui transforment vos ambitions en 
            <span className="text-white font-semibold"> croissance mesurable</span>.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sev-primary/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: isVisible ? item.delay : '0ms',
                animationDelay: item.delay 
              }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-xl bg-gradient-to-br from-sev-primary/20 to-sev-secondary/20 border border-sev-primary/30">
                  <item.icon className="w-8 h-8 text-sev-primary" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sev-primary to-sev-accent bg-clip-text text-transparent">
                  {item.value}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            onClick={scrollToContact}
            className="hero-gradient text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-sev-primary/25 transition-all duration-300 hover:scale-105 border border-white/20"
            data-cta="strategic_advantage_pipeline"
          >
            Construire mon pipeline stratégique
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sev-primary/50 to-transparent" />
    </section>
  );
};

export default StrategicAdvantage;