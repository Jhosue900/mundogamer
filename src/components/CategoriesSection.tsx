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
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient mb-4">Explora Nuestras Categorías</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra todo lo que necesitas para tu setup gamer. Desde los últimos lanzamientos hasta los clásicos que nunca pasan de moda.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.slug] || Gamepad2;
            return (
              <Link
                key={category.id}
                to={`/productos?categoria=${category.slug}`}
                className="category-card group p-6 md:p-8 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="w-full h-full text-background" />
                </div>
                
                {/* Category name */}
                <h3 className="font-display text-sm md:text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                {/* Count */}
                <p className="text-xs text-muted-foreground">
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
