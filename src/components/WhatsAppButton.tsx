import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5519997011227"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-novischi-gold hover:bg-novischi-gold-dark text-novischi-black p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" className="text-novischi-black" />
    </a>
  );
}
