import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ProductCard } from '@/components/ProductCard';
import { products, categories, platforms } from '@/data/products';
import { Search, SlidersHorizontal, X, Grid, List } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'todos');
  const [selectedPlatform, setSelectedPlatform] = useState('Todos');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory && selectedCategory !== 'todos') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Platform filter
    if (selectedPlatform && selectedPlatform !== 'Todos') {
      result = result.filter(p => p.platform === selectedPlatform);
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Promos filter
    if (searchParams.get('filter') === 'ofertas') {
      result = result.filter(p => p.isPromo);
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Popular - keep original order or sort by isNew/isPromo
        result.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          if (a.isPromo && !b.isPromo) return -1;
          if (!a.isPromo && b.isPromo) return 1;
          return 0;
        });
    }

    return result;
  }, [searchTerm, selectedCategory, selectedPlatform, priceRange, sortBy, searchParams]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'todos') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Nuestros</span>{' '}
              <span className="text-gradient">Productos</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Explora nuestra selección de videojuegos para todas las plataformas. 
              Desde aventuras épicas hasta los lanzamientos más recientes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <div className="glass rounded-xl p-4">
                  <h3 className="font-display text-sm font-semibold mb-4 text-foreground">Buscar</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar productos..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="glass rounded-xl p-4">
                  <h3 className="font-display text-sm font-semibold mb-4 text-foreground">Categorías</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCategoryChange('todos')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === 'todos' 
                          ? 'bg-primary/20 text-primary' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      Todos los productos
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.slug)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                          selectedCategory === cat.slug 
                            ? 'bg-primary/20 text-primary' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs opacity-60">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="glass rounded-xl p-4">
                  <h3 className="font-display text-sm font-semibold mb-4 text-foreground">Plataforma</h3>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform) => (
                      <button
                        key={platform}
                        onClick={() => setSelectedPlatform(platform)}
                        className={`filter-chip ${selectedPlatform === platform ? 'active' : ''}`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile filter toggle & Sort */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtros
                </button>

                <div className="flex items-center gap-4 ml-auto">
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    {filteredProducts.length} productos
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="popular">Más populares</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="name">Nombre A-Z</option>
                  </select>
                </div>
              </div>

              {/* Mobile Filters Panel */}
              {showFilters && (
                <div className="lg:hidden mb-6 glass rounded-xl p-4 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-semibold">Filtros</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar productos..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-sm"
                    />
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCategoryChange('todos')}
                      className={`filter-chip ${selectedCategory === 'todos' ? 'active' : ''}`}
                    >
                      Todos
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.slug)}
                        className={`filter-chip ${selectedCategory === cat.slug ? 'active' : ''}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform) => (
                      <button
                        key={platform}
                        onClick={() => setSelectedPlatform(platform)}
                        className={`filter-chip ${selectedPlatform === platform ? 'active' : ''}`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${index * 0.03}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">No encontramos productos</h3>
                  <p className="text-muted-foreground mb-6">
                    Intenta ajustar los filtros o busca algo diferente
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('todos');
                      setSelectedPlatform('Todos');
                    }}
                    className="btn-outline-neon rounded-lg text-sm"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;
