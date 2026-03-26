import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export default function FloatingWhatsApp({ onClick }: FloatingWhatsAppProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}
