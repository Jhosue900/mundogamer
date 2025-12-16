import { Shield, Truck, Headphones, CreditCard } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: '100% Originales',
    description: 'Todos nuestros productos son originales y con garantía',
  },
  {
    icon: Truck,
    title: 'Envíos a Todo Colombia',
    description: 'Llevamos tus juegos favoritos hasta la puerta de tu casa',
  },
  {
    icon: Headphones,
    title: 'Atención Personalizada',
    description: 'Soporte 24/7 por WhatsApp para resolver tus dudas',
  },
  {
    icon: CreditCard,
    title: 'Compra Segura',
    description: 'Múltiples métodos de pago seguros y confiables',
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos tu aliado gamer con años de experiencia brindando los mejores productos y servicio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl glass text-center transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
