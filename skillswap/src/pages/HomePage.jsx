import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Target } from "lucide-react";
import skillswapLogo from "@/assets/skillswap-logo.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAVBAR */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={skillswapLogo} 
                alt="SkillSwap Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SkillSwap
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/quienes-somos" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ¿Quiénes somos?
              </Link>
              <Link 
                to="/que-es-skillswap" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ¿Qué es SkillSwap?
              </Link>
              <Link to="/login">
                <Button variant="nav" size="sm">
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main>
        <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  SKILLSWAP
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Intercambia habilidades. Conecta. Crece.
              </p>
              <h2 className="text-lg md:text-xl text-foreground/80 mb-8">
                Only in the same place.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/login">
                  <Button variant="hero" size="lg" className="group">
                    Comenzar Ahora
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/que-es-skillswap">
                  <Button variant="outline" size="lg">
                    Saber Más
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué elegir SkillSwap?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Una plataforma innovadora que conecta personas con habilidades complementarias
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-card border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Conecta</h3>
                <p className="text-muted-foreground">
                  Encuentra personas con las habilidades que necesitas y comparte las tuyas
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intercambia</h3>
                <p className="text-muted-foreground">
                  Realiza intercambios justos de conocimientos y habilidades
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Crece</h3>
                <p className="text-muted-foreground">
                  Desarrolla nuevas competencias mientras ayudas a otros a crecer
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-muted/30 border-t border-border/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 SkillSwap Hackaton
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;