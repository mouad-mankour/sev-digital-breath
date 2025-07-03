export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      {/* Ligne de données subtile */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Message poétique */}
          <div>
            <p className="text-muted-foreground italic">
              "Où que vous soyez dans votre transformation digitale,
              <br />
              <span className="text-primary">SEV vous accompagne</span> avec intelligence et discrétion."
            </p>
          </div>

          {/* Informations de contact */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="mailto:contact@sev-agent.com"
              className="hover:text-accent transition-colors"
            >
              contact@sev-agent.com
            </a>
            
            <span className="hidden md:block w-1 h-1 bg-muted-foreground/50 rounded-full" />
            
            <a 
              href="#"
              className="hover:text-accent transition-colors"
            >
              Mentions légales
            </a>
          </div>

          {/* Signature créative */}
          <div className="pt-6 border-t border-border/20">
            <p className="text-sm text-muted-foreground">
              Fait avec <span className="text-accent">♡</span> par{" "}
              <span className="text-primary font-medium">Loustad</span>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              © 2024 — Agent SEV, l'intelligence qui révèle vos données
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}