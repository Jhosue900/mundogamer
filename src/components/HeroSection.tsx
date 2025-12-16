import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated particles/glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-neon" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse-neon" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Los mejores precios en videojuegos
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">SOMOS</span>
            <br />
            <span className="text-gradient neon-glow">MUNDO GAMERS</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Tu tienda gamer de confianza. Videojuegos, consolas, controles y accesorios 
            <span className="text-primary font-semibold"> a los mejores precios</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/productos" className="btn-neon rounded-lg flex items-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              Ver Productos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://wa.me/573127447155" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-neon rounded-lg"
            >
              Contactar por WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '250+', label: 'Videojuegos' },
              { value: '100%', label: 'Originales' },
              { value: '24/7', label: 'Soporte' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
