import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Glow effect at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://mundogamersshop.com/wp-content/uploads/2025/06/mundogamerslogo-color.png" 
                alt="Mundo Gamers"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Somos Calidad... Somos Mundo Gamers! Tu tienda gamer de confianza con los mejores precios y productos originales.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/mundogamersoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/mundogamersoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/573127447155" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-[#25d366] hover:bg-[#25d366]/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gradient">Navegación</h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Productos', path: '/productos' },
                { name: 'Ofertas', path: '/productos?filter=ofertas' },
                { name: 'Contacto', path: '/contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gradient">Categorías</h4>
            <ul className="space-y-3">
              {[
                'Video Juegos',
                'Consolas',
                'Controles',
                'Accesorios',
                'Streaming',
                'Suscripciones',
              ].map((cat) => (
                <li key={cat}>
                  <Link 
                    to={`/productos?categoria=${cat.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gradient">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a href="tel:+573127447155" className="text-foreground hover:text-primary transition-colors">
                    +57 312 744 7155
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@mundogamersshop.com" className="text-foreground hover:text-primary transition-colors">
                    info@mundogamersshop.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="text-foreground">Colombia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Mundo Gamers Shop. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">Compra Segura</span>
              <span className="text-xs text-muted-foreground">Productos Originales</span>
              <span className="text-xs text-muted-foreground">Envíos a Todo Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
