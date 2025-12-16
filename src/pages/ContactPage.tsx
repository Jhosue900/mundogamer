import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Contáctanos</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-8">
              <h2 className="font-display text-2xl font-bold text-gradient">Información de Contacto</h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/573127447155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-xl glass group hover:border-[#25d366]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25d366]/20 flex items-center justify-center group-hover:bg-[#25d366]/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#25d366]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-primary">+57 312 744 7155</p>
                    <p className="text-sm text-muted-foreground mt-1">Respuesta rápida</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+573127447155"
                  className="flex items-start gap-4 p-6 rounded-xl glass group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-primary">+57 312 744 7155</p>
                    <p className="text-sm text-muted-foreground mt-1">Llámanos cuando quieras</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:info@mundogamersshop.com"
                  className="flex items-start gap-4 p-6 rounded-xl glass group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-primary">info@mundogamersshop.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Te responderemos pronto</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 rounded-xl glass">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-foreground">Colombia</p>
                    <p className="text-sm text-muted-foreground mt-1">Envíos a todo el país</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 rounded-xl glass">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Horario de Atención</h3>
                    <p className="text-foreground">24/7</p>
                    <p className="text-sm text-muted-foreground mt-1">Siempre disponibles para ti</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/mundogamersoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/mundogamersoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative rounded-3xl overflow-hidden">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-neon-green to-neon-blue opacity-90" />
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-12 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                      ¿Listo para jugar?
                    </h2>
                    
                    <p className="text-white/90 mb-8 max-w-md mx-auto">
                      Escríbenos por WhatsApp y te ayudamos a encontrar el producto perfecto para ti. 
                      ¡Respuesta inmediata!
                    </p>
                    
                    <a
                      href="https://wa.me/573127447155?text=¡Hola! Me gustaría información sobre sus productos."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-primary font-display font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chatear Ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
