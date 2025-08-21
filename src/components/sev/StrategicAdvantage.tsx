import { Button } from "@/components/ui/button";
import { BarChart3, Target, Award, Zap, Database, Brain, Rocket, Shield } from "lucide-react";
import { scrollToContact } from "@/lib/scroll";
import { useEffect, useRef, useState } from "react";
const StrategicAdvantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [counters, setCounters] = useState({
    companies: 0,
    targeting: 0,
    decisions: 0,
    roi: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        // Animate counters with staggered timing
        setTimeout(() => animateCounter('companies', 250000, 2500), 500);
        setTimeout(() => animateCounter('targeting', 100, 2000), 800);
        setTimeout(() => animateCounter('decisions', 95, 2200), 1100);
        setTimeout(() => animateCounter('roi', 300, 2800), 1400);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width * 100,
          y: (e.clientY - rect.top) / rect.height * 100
        });
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      observer.disconnect();
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
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
      setCounters(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }));
    }, 16);
  };
  const differentiators = [{
    icon: Database,
    value: `+${counters.companies.toLocaleString()}`,
    label: "entreprises marocaines",
    subtitle: "Base exclusive classifiée",
    gradient: "from-emerald-400 to-teal-600",
    delay: "0ms"
  }, {
    icon: Brain,
    value: `${counters.targeting}%`,
    label: "Ciblage intelligent & signaux d'achat",
    subtitle: "IA prédictive avancée",
    gradient: "from-violet-400 to-purple-600",
    delay: "200ms"
  }, {
    icon: Shield,
    value: `${counters.decisions}%`,
    label: "Accès aux décideurs validés",
    subtitle: "Contacts vérifiés premium",
    gradient: "from-blue-400 to-cyan-600",
    delay: "400ms"
  }, {
    icon: Rocket,
    value: `+${counters.roi}%`,
    label: "ROI immédiat & mesurable",
    subtitle: "Performance garantie",
    gradient: "from-orange-400 to-red-600",
    delay: "600ms"
  }];
  return <section ref={sectionRef} className="relative min-h-screen py-8 sm:py-12 md:py-16 overflow-hidden bg-black">
      {/* Dynamic Background Effects */}
      <div ref={containerRef} className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sev-primary/10 to-transparent animate-pulse" style={{
          transform: `translateX(${mousePosition.x * 0.05}px)`
        }} />
          <div style={{
          transform: `translateY(${mousePosition.y * 0.05}px)`
        }} className="absolute inset-0 bg-gradient-to-b from-transparent via-sev-secondary/10 to-transparent animate-pulse delay-1000" />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-4 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 blur-3xl animate-float" />
        <div className="absolute top-1/3 right-4 sm:right-1/4 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-3xl animate-float delay-1000" />
        <div className="absolute bottom-1/4 left-4 sm:left-1/3 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-600/20 blur-3xl animate-float delay-2000" />
        <div className="absolute bottom-20 right-4 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 blur-3xl animate-float delay-3000" />
        
        {/* Data Flow Lines */}
        <div className="hidden sm:block absolute inset-0">
          
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative inline-block mb-4 sm:mb-6 md:mb-8 rounded-xl px-2 sm:px-8 md:px-16 lg:px-24 py-2 sm:py-4 md:py-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-sev-accent via-sev-primary to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] leading-tight animate-pulse hover:scale-105 transition-all duration-500 cursor-default mx-0 my-0 px-0 py-0">
              <span className="inline-block animate-bounce text-yellow-400 px-[57px] my-[26px] py-0 mx-[72px] text-center font-extrabold text-8xl">Databblead</span>{" "}
              {" "}
              {" "}
              {" "}
              {" "}
              <span className="inline-block" style={{
              animationDelay: '0.5s'
            }}>base</span>{" "}
              {" "}
              <span style={{
              animationDelay: '0.7s'
            }} className="inline-block text-slate-50">vos</span>{" "}
              <span style={{
              animationDelay: '0.8s'
            }} className="inline-block animate-bounce text-yellow-400">Prospects</span>{" "}
              <span style={{
              animationDelay: '0.9s'
            }} className="inline-block text-slate-50">,</span>{" "}
              <span style={{
              animationDelay: '1s'
            }} className="inline-block animate-bounce text-orange-500">extraits, enrichis et vérifiés.</span>
            </h2>
            
            {/* Underline effect */}
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-sev-primary to-transparent animate-pulse" />
          </div>
          
          <div className="relative px-2 sm:px-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 font-light">L'AI est partout, une data stratégique c'est unique
          </p>
            
            
            {/* Decorative elements */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-sev-primary/50 animate-pulse" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-sev-secondary/50 animate-pulse delay-1000" />
          </div>
        </div>

        {/* Narrative Text */}
        <div className={`max-w-6xl mx-auto text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
        </div>

        {/* Differentiators Grid */}
        

        {/* CTA */}
        <div className={`text-center px-4 transition-all duration-1500 delay-1200 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          <div className="relative inline-block w-full sm:w-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sev-primary to-sev-secondary blur-xl opacity-50 animate-pulse" />
            
            <Button onClick={scrollToContact} className="relative group px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl font-bold rounded-full 
                         bg-gradient-to-r from-sev-primary via-sev-accent to-sev-secondary 
                         text-white shadow-2xl hover:shadow-3xl
                         border-2 border-white/30 hover:border-white/50
                         transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:rotate-1
                         backdrop-blur-sm
                         before:absolute before:inset-0 before:rounded-full 
                         before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
                         before:translate-x-[-100%] before:transition-transform before:duration-700
                         hover:before:translate-x-[100%]
                         overflow-hidden
                         w-full sm:w-auto max-w-lg sm:max-w-none mx-auto" data-cta="strategic_advantage_pipeline">
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-4">
                <Database className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="hidden sm:inline">Construire mon pipeline stratégique</span>
                <span className="sm:hidden">Mon pipeline stratégique</span>
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              
              {/* Inner glow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            {/* Floating particles - Cachées sur mobile */}
            <div className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 bg-sev-primary rounded-full animate-bounce opacity-60" />
            <div className="hidden sm:block absolute -top-4 right-4 w-3 h-3 bg-sev-secondary rounded-full animate-bounce delay-500 opacity-60" />
            <div className="hidden sm:block absolute -bottom-2 left-8 w-2 h-2 bg-sev-accent rounded-full animate-bounce delay-1000 opacity-60" />
          </div>
          
          <p className="mt-4 sm:mt-6 md:mt-8 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Rejoignez les entreprises qui ont transformé leur approche commerciale avec notre intelligence data exclusive
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-sev-primary/50 to-transparent" />
        <div className="h-4 bg-gradient-to-t from-sev-primary/10 to-transparent bg-black" />
      </div>
      
      {/* Floating data points */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-sev-primary/30 rounded-full animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }} />)}
      </div>
    </section>;
};
export default StrategicAdvantage;