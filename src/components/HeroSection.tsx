import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay gradients - Más oscuro en móvil para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 md:via-background/80 to-background/70 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated particles/glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-neon" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse-neon" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass mb-6 md:mb-8 animate-fade-up">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-foreground/80">
              Los mejores precios en videojuegos
            </span>
          </div>

          {/* Main heading - FIX: Responsive escalable sin desborde */}
          <h1 className="font-display font-black mb-4 md:mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              SOMOS
            </span>
            <span className="block text-gradient neon-glow text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-1 md:mt-0">
              MUNDO GAMERS
            </span>
          </h1>

          {/* Subheading - FIX: Mejor line-height y spacing */}
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Tu tienda gamer de confianza. Videojuegos, consolas, controles y accesorios 
            <span className="text-primary font-semibold"> a los mejores precios</span>.
          </p>

          {/* CTA Buttons - FIX: Stack en móvil, row en desktop */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/productos" className="btn-neon rounded-lg flex items-center justify-center gap-2">
              <Gamepad2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Ver Productos</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <a 
              href="https://wa.me/573127447155" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-neon rounded-lg text-center text-sm md:text-base"
            >
              Contactar por WhatsApp
            </a>
          </div>

          {/* Stats - FIX: Grid de 3 columnas en todas las pantallas */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '250+', label: 'Videojuegos' },
              { value: '100%', label: 'Originales' },
              { value: '24/7', label: 'Soporte' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - Solo visible en desktop */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};