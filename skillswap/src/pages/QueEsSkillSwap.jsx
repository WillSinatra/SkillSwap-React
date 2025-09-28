import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle, Users, Zap, Target, MessageSquare, Calendar, Star } from "lucide-react";
import skillswapLogo from "@/assets/skillswap-logo.png";

const QueEsSkillSwap = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
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
            <Link to="/">
              <Button variant="nav" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ¿Qué es SkillSwap?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Una plataforma innovadora que conecta personas para intercambiar habilidades y conocimientos 
              de manera justa y colaborativa.
            </p>
          </div>

          {/* Main Features */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 shadow-card border-0 bg-gradient-hero hover:shadow-glow transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conecta con Expertos</h3>
              <p className="text-muted-foreground">
                Encuentra personas con las habilidades que necesitas aprender y conecta con ellas 
                de manera directa y personal.
              </p>
            </Card>

            <Card className="p-6 shadow-card border-0 bg-gradient-hero hover:shadow-glow transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intercambio Justo</h3>
              <p className="text-muted-foreground">
                No solo aprendes, también enseñas. Cada intercambio es una oportunidad 
                de crecimiento mutuo y colaboración.
              </p>
            </Card>

            <Card className="p-6 shadow-card border-0 bg-gradient-hero hover:shadow-glow transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Crecimiento Personal</h3>
              <p className="text-muted-foreground">
                Desarrolla nuevas competencias mientras contribuyes al crecimiento 
                de otros miembros de la comunidad.
              </p>
            </Card>
          </div>

          {/* How it Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">¿Cómo Funciona?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Regístrate</h3>
                <p className="text-muted-foreground text-sm">
                  Crea tu perfil y describe las habilidades que tienes y las que quieres aprender.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Explora</h3>
                <p className="text-muted-foreground text-sm">
                  Busca personas que tengan las habilidades que necesitas y que estén interesadas en las tuyas.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Conecta</h3>
                <p className="text-muted-foreground text-sm">
                  Inicia conversaciones y acuerda los detalles de tu intercambio de habilidades.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-white rounded-full mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Intercambia</h3>
                <p className="text-muted-foreground text-sm">
                  Realiza sesiones de aprendizaje mutuo y haz crecer tu red de conocimientos.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Chat Integrado</h3>
                  <p className="text-muted-foreground">
                    Comunícate directamente con otros usuarios para coordinar tus intercambios de habilidades.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Programación de Sesiones</h3>
                  <p className="text-muted-foreground">
                    Organiza y programa tus sesiones de intercambio con un sistema de calendario integrado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sistema de Valoraciones</h3>
                  <p className="text-muted-foreground">
                    Evalúa y recibe evaluaciones de tus intercambios para construir tu reputación en la plataforma.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Perfiles Verificados</h3>
                  <p className="text-muted-foreground">
                    Conecta con confianza gracias a nuestro sistema de verificación de usuarios y habilidades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <Card className="p-8 shadow-glow border-0 bg-gradient-hero mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">¿Por qué elegir SkillSwap?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Aprende habilidades prácticas de expertos reales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Comparte tus conocimientos y construye tu reputación</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Conecta con una comunidad global de aprendizaje</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Intercambios justos sin costo monetario</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Flexibilidad total para organizar tus sesiones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Crecimiento personal y profesional continuo</span>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu intercambio?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a miles de personas que ya están intercambiando habilidades y creciendo juntas en SkillSwap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button variant="hero" size="lg" className="group">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/quienes-somos">
                <Button variant="outline" size="lg">
                  Conoce nuestro equipo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QueEsSkillSwap;