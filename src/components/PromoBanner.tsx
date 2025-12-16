import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const PromoBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-neon-purple to-neon-pink opacity-90" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          {/* Animated glow orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse-neon" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-[80px] animate-pulse-neon" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">¡PROMOS DE HOY!</span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl font-black mb-4 text-white">
                COMBO X 15
                <br />
                VIDEOJUEGOS
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-md">
                ¡Descubre todas las ofertas que tenemos para ti! Los mejores juegos a precios increíbles.
              </p>

              <a
                href="https://wa.me/573127447155?text=¡Hola! Me interesa el Combo x15 Videojuegos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-display font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25"
              >
                Comprar Ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
