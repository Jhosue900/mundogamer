import { Link } from "react-router-dom";
import { Gamepad2, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 text-center px-4">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="font-display text-[150px] md:text-[200px] font-black text-gradient leading-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Gamepad2 className="w-20 h-20 md:w-32 md:h-32 text-primary/30 animate-float" />
          </div>
        </div>

        {/* Message */}
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          ¡Nivel no encontrado!
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Parece que esta página se fue a otro mundo. No te preocupes, puedes volver al inicio y seguir explorando.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-neon rounded-lg flex items-center gap-2">
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <Link to="/productos" className="btn-outline-neon rounded-lg flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
