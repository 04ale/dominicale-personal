import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 bg-electric text-deep-onyx rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 transition-transform duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-electric animate-ping opacity-20 group-hover:opacity-40"></div>
      
      <MessageCircle size={32} className="relative z-10" />
      
      {/* Tooltip for desktop */}
      <span className="absolute right-full mr-4 bg-gunmetal-grey text-pure-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-platinum-light/10">
        Fale comigo agora!
      </span>
    </a>
  );
}
