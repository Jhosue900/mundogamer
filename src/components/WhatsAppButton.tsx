import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '573127447155';
const WHATSAPP_MESSAGE = '¡Hola! Me interesa información sobre sus productos.';

export const WhatsAppButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" fill="white" />
    </button>
  );
};
