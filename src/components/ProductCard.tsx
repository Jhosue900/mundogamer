import { Link } from 'react-router-dom';
import { Product, formatPrice } from '@/data/products';
import { ShoppingCart, Eye, Sparkles, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/573127447155?text=${encodeURIComponent(`¡Hola! Me interesa el producto: ${product.name}`)}`;

  return (
    <div className="product-card group">
      {/* Image container */}
      <div className="product-image aspect-square relative bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold uppercase">
              <Sparkles className="w-3 h-3" />
              Nuevo
            </span>
          )}
          {product.isPromo && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-destructive text-destructive-foreground text-xs font-bold uppercase">
              <Tag className="w-3 h-3" />
              Oferta
            </span>
          )}
        </div>

        {/* Platform badge */}
        <span className="absolute top-3 right-3 px-2 py-1 rounded-md glass text-xs font-medium text-foreground">
          {product.platform}
        </span>

        {/* Quick actions overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
          <Link
            to={`/producto/${product.id}`}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform hover:scale-110"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25d366] text-white flex items-center justify-center transition-transform hover:scale-110"
          >
            <ShoppingCart className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
          {product.category.replace('-', ' ')}
        </p>
        
        {/* Name */}
        <h3 className="font-display text-sm font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-gradient">
            {formatPrice(product.price)}
          </span>
          {product.priceMax && (
            <span className="text-sm text-muted-foreground">
              - {formatPrice(product.priceMax)}
            </span>
          )}
        </div>

        {/* Stock status */}
        <div className="mt-3 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-xs text-muted-foreground">
            {product.inStock ? 'En stock' : 'Agotado'}
          </span>
        </div>
      </div>
    </div>
  );
};
