import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Productos', path: '/productos' },
  { name: 'Ofertas', path: '/productos?filter=ofertas' },
  { name: 'Contacto', path: '/contacto' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'navbar-blur py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="https://mundogamersshop.com/wp-content/uploads/2025/06/mundogamerslogo-color.png" 
                alt="Mundo Gamers"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-display text-xl font-bold text-gradient hidden sm:block">
              MUNDO GAMERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'font-display text-sm uppercase tracking-wider transition-all duration-300 relative group',
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                )}
              >
                {item.name}
                <span className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300',
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                )} />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-foreground/80 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              to="/productos" 
              className="p-2 text-foreground/80 hover:text-primary transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute left-0 right-0 top-full glass overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'block font-display text-sm uppercase tracking-wider py-2 transition-colors',
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
