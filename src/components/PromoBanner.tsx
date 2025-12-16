import { ArrowRight, Sparkles } from 'lucide-react';

export const PromoBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient - Elegant violet to magenta */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-violet via-neon-magenta to-neon-pink opacity-95" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-10" />
          
          {/* Animated glow orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[120px] animate-pulse-neon" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-gold/20 rounded-full blur-[80px] animate-pulse-neon" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-neon-gold" />
                <span className="text-sm font-semibold tracking-wide">¡PROMOS DE HOY!</span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
                COMBO X 15
                <br />
                <span className="text-white/90">VIDEOJUEGOS</span>
              </h2>

              <p className="text-lg text-white/80 mb-8 max-w-md font-body">
                ¡Descubre todas las ofertas que tenemos para ti! Los mejores juegos a precios increíbles.
              </p>

              <a
                href="https://wa.me/573127447155?text=¡Hola! Me interesa el Combo x15 Videojuegos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-neon-violet font-display font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30"
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
