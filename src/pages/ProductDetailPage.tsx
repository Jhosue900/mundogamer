import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { products, formatPrice } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ArrowLeft, MessageCircle, Shield, Truck, Tag, Sparkles } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Producto no encontrado</h1>
          <Link to="/productos" className="btn-neon rounded-lg">
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const whatsappUrl = `https://wa.me/573127447155?text=${encodeURIComponent(`¡Hola! Me interesa el producto: ${product.name} - ${formatPrice(product.price)}`)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/productos" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a productos
            </Link>
          </div>

          {/* Product details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold uppercase">
                    <Sparkles className="w-4 h-4" />
                    Nuevo
                  </span>
                )}
                {product.isPromo && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-destructive text-destructive-foreground text-sm font-bold uppercase">
                    <Tag className="w-4 h-4" />
                    Oferta
                  </span>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {/* Platform */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium text-primary w-fit mb-4">
                {product.platform}
              </span>

              {/* Name */}
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Category */}
              <p className="text-muted-foreground mb-6 capitalize">
                {product.category.replace('-', ' ')}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-gradient">
                    {formatPrice(product.price)}
                  </span>
                  {product.priceMax && (
                    <span className="text-xl text-muted-foreground">
                      - {formatPrice(product.priceMax)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  * El precio puede variar según la versión
                </p>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-8">
                <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={product.inStock ? 'text-green-500' : 'text-red-500'}>
                  {product.inStock ? 'Disponible' : 'Agotado'}
                </span>
              </div>

              {/* Description */}
              {product.description && (
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon rounded-xl flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Comprar por WhatsApp
              </a>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Producto 100% original con garantía</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Envíos a todo Colombia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="section-title mb-8">
                <span className="text-foreground">Productos</span>{' '}
                <span className="text-gradient">Relacionados</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetailPage;
