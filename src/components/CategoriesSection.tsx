import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { Gamepad2, Monitor, Joystick, Headphones, Tv, CreditCard, Gift } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'video-juegos': Gamepad2,
  'consolas': Monitor,
  'controles': Joystick,
  'accesorios': Headphones,
  'streaming': Tv,
  'suscripciones': CreditCard,
  'tarjetas': Gift,
};

export const CategoriesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="section-title text-gradient mb-3 sm:mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Encuentra todo lo que necesitas para tu setup gamer. Desde los últimos lanzamientos hasta los clásicos que nunca pasan de moda.
          </p>
        </div>

        {/* Categories grid - FIX: Grid responsive optimizado */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.slug] || Gamepad2;
            return (
              <Link
                key={category.id}
                to={`/productos?categoria=${category.slug}`}
                className="category-card group p-4 sm:p-6 md:p-8 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon - FIX: Tamaño adaptativo */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.gradient} p-3 sm:p-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="w-full h-full text-background" />
                </div>
                
                {/* Category name - FIX: Tamaño de texto responsive */}
                <h3 className="font-display text-xs sm:text-sm md:text-base font-semibold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {category.name}
                </h3>
                
                {/* Count - FIX: Ocultar en móviles muy pequeños si es necesario */}
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  {category.count} productos
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-10`} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};