import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-24 relative bg-card/50">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title mb-2">
              <span className="text-foreground">Productos</span>{' '}
              <span className="text-gradient">Destacados</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Descubre nuestra selección de los mejores productos para gamers
            </p>
          </div>
          <Link 
            to="/productos" 
            className="btn-outline-neon rounded-lg text-sm flex items-center gap-2 self-start md:self-auto"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
