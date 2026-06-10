import { Check, X } from 'lucide-react';

interface PlansProps {
  id?: string;
}

export default function Plans({ id }: PlansProps) {

  return (
    <section id={id} className="py-24 bg-deep-onyx text-pure-white relative">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-electric/10 text-electric font-bold tracking-wider text-xs uppercase mb-6 border border-electric/20">
            💰 Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Escolha o seu plano
          </h2>
          <p className="text-silver-mist text-lg max-w-2xl mx-auto">
            Dê o primeiro passo para a sua transformação. Selecione a modalidade que melhor se adapta à sua rotina e aos seus objetivos.
          </p>
        </div>

        {/* Pricing Cards - Presencial */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* PLANO ESSENCIAL (Ancoragem) */}
            <div className="bg-gunmetal-grey/50 border border-platinum-light/10 rounded-3xl p-8 flex flex-col h-full relative">
              <h3 className="text-xl font-bold mb-1 uppercase tracking-tighter">Plano Essencial</h3>
              <p className="text-silver-mist text-sm mb-6 h-12">Treino presencial puro. Sem suporte extra, sem ajustes, sem acompanhamento.</p>

              <div className="space-y-3 mb-8 p-4 bg-deep-onyx/50 rounded-2xl border border-platinum-light/5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-silver-mist">2x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 820<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-silver-mist">3x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 1.230<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-silver-mist">5x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 2.050<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Treino presencial</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Suporte limitado</span></li>
                <li className="flex items-start gap-3 opacity-40"><X size={20} className="text-silver-mist shrink-0" /> <span className="text-sm text-silver-mist">Sem acompanhamento fora da aula</span></li>
                <li className="flex items-start gap-3 opacity-40"><X size={20} className="text-silver-mist shrink-0" /> <span className="text-sm text-silver-mist">Sem ajustes semanais</span></li>
              </ul>
              <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20saber%20mais%20sobre%20o%20Plano%20Essencial." target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-lg border border-platinum-light/20 text-pure-white h-12 font-bold hover:bg-gunmetal-grey hover:border-electric hover:text-electric transition-colors">
                Escolher Essencial
              </a>
            </div>

            {/* PLANO PERFORMANCE (O que queremos vender) */}
            <div className="bg-linear-to-b from-gunmetal-grey to-deep-onyx border-2 border-electric rounded-3xl p-8 flex flex-col h-full relative md:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.15)] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric text-deep-onyx px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                Seu Foco 🚀
              </div>
              <h3 className="text-2xl font-bold mb-2 text-pure-white uppercase tracking-tighter">Plano Performance</h3>
              <p className="text-electric text-sm mb-6 h-10 font-medium">O formato ideal para garantir resultados expressivos e rápidos.</p>
              
              <div className="space-y-3 mb-8 p-4 bg-electric/5 rounded-2xl border border-electric/10">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-pure-white/70">2x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 880<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-pure-white/70">3x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 1.260<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-pure-white/70">5x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 2.100<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Treino presencial</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Ajustes semanais</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Suporte no WhatsApp</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Estratégia personalizada</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Acompanhamento de evolução</span></li>
              </ul>
              <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20fechar%20o%20Plano%20Performance%21" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-lg bg-electric text-deep-onyx h-14 font-extrabold hover:bg-electric/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                Quero o Performance
              </a>
            </div>

            {/* PLANO ELITE (Ancoragem Superior) */}
            <div className="bg-gunmetal-grey/50 border border-platinum-light/10 rounded-3xl p-8 flex flex-col h-full relative">
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">Plano Elite 💰</h3>
              <p className="text-silver-mist text-sm mb-6 h-10">Acompanhamento extremo e exclusivo para quem busca o máximo.</p>
              
              <div className="space-y-3 mb-8 p-4 bg-deep-onyx/50 rounded-2xl border border-platinum-light/5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-silver-mist">2x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 1.050<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-silver-mist">3x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 1.500<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-silver-mist">5x semana</span>
                  <span className="text-lg font-bold text-pure-white">R$ 2.500<span className="text-[10px] font-normal text-silver-mist">/mês</span></span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Tudo do Performance +</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Prioridade total no suporte</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Ajustes quase diários</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Planejamento completo</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Atendimento VIP</span></li>
              </ul>
              <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20fechar%20o%20Plano%20Presencial%20Elite." target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-lg border border-platinum-light/20 text-pure-white h-12 font-bold hover:bg-gunmetal-grey hover:border-electric hover:text-electric transition-colors">
                Escolher Elite
              </a>
            </div>

          </div>

      </div>
    </section>
  );
}