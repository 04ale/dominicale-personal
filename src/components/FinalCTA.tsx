import { Rocket, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ id }: { id?: string }) {
  return (
    <section id={id} className="relative py-32 bg-deep-onyx text-pure-white overflow-hidden flex items-center justify-center">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-electric/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">

        {/* Ultimatums / Triggers */}
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight uppercase">
          Daqui a 6 meses você vai desejar ter <span className="text-transparent bg-clip-text bg-linear-to-r from-electric to-pure-white">começado hoje.</span>
        </h2>

        <p className="text-xl md:text-2xl text-silver-mist mb-12 font-medium max-w-2xl mx-auto">
          As vagas para a consultoria VIP e para os horários presenciais são <strong className="text-electric">estritamente limitadas</strong>. Se você adiar agora, sua vaga pode ir para alguém que já tomou a decisão de mudar.
        </p>

        {/* Huge Absurd CTA Button */}
        <div className="relative inline-block group">
          {/* Animated glow ring behind the button */}
          <div className="absolute -inset-1 bg-linear-to-r from-electric to-electric opacity-70 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-pulse"></div>

          <a
            href="https://wa.me/5511944907191?text=Lucas%2C%20estou%20decidido%28a%29%21%20Quero%20mudar%20meu%20corpo%20agora%21"
            target="_blank" rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-3 bg-electric text-deep-onyx text-xl md:text-2xl font-black px-10 py-6 md:px-16 md:py-8 rounded-2xl transform group-hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Button internal shine effect */}
            <div className="absolute top-0 left-0 -translate-x-full w-1/2 h-full bg-pure-white/30 skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]"></div>

            QUERO MUDAR MEU CORPO AGORA
            <Rocket size={28} className="animate-bounce" />
          </a>
        </div>

        {/* Reassurance below CTA */}
        <div className="mt-8 flex items-center justify-center gap-2 text-silver-mist text-sm font-medium">
          <ShieldCheck size={18} className="text-electric" />
          <span>Atendimento direto comigo pelo WhatsApp. Sem robôs.</span>
        </div>

      </div>

      {/* Tailwind Custom Animation Injection for the Shine effect */}
      <style>{`
        @keyframes shine {
          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </section>
  );
}