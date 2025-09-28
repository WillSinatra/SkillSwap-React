import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Lightbulb } from "lucide-react";
import skillswapLogo from "@/assets/skillswap-logo.png";

const QuienesSomos = () => {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ¿Quiénes somos?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos un equipo apasionado por conectar personas y democratizar el acceso al conocimiento 
              a través del intercambio de habilidades.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <Card className="p-8 shadow-card border-0 bg-gradient-hero">
              <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
              <p className="text-muted-foreground mb-4">
                SkillSwap nació de una idea simple pero poderosa: todos tenemos algo que enseñar y algo que aprender. 
                En un mundo donde el conocimiento tradicional está cambiando rápidamente, creemos que las habilidades 
                prácticas y la experiencia real son más valiosas que nunca.
              </p>
              <p className="text-muted-foreground">
                Desarrollado durante un hackaton, nuestro proyecto busca crear una comunidad donde el intercambio 
                de conocimientos sea justo, accesible y mutuamente beneficioso para todos los participantes.
              </p>
            </Card>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comunidad</h3>
              <p className="text-muted-foreground">
                Creemos en el poder de las conexiones humanas y en construir una comunidad 
                de aprendizaje mutuo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusión</h3>
              <p className="text-muted-foreground">
                Todos tienen algo valioso que compartir, independientemente de su formación 
                o experiencia previa.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovación</h3>
              <p className="text-muted-foreground">
                Utilizamos tecnología para hacer que el intercambio de conocimientos 
                sea más fácil y efectivo.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Nuestro Equipo</h2>
            <Card className="p-8 shadow-card">
              <p className="text-lg text-muted-foreground mb-6">
                Somos un grupo de desarrolladores, diseñadores y entusiastas del aprendizaje 
                colaborativo, unidos por la visión de democratizar el acceso al conocimiento.
              </p>
              <p className="text-muted-foreground">
                Este proyecto fue desarrollado como parte del <strong>SkillSwap Hackaton 2025</strong>, 
                donde nos propusimos crear una solución innovadora para el intercambio de habilidades.
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
            <p className="text-muted-foreground mb-8">
              Únete a nuestra comunidad y comienza a intercambiar habilidades hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button variant="hero" size="lg">
                  Comenzar Ahora
                </Button>
              </Link>
              <Link to="/que-es-skillswap">
                <Button variant="outline" size="lg">
                  Conoce más sobre SkillSwap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuienesSomos;