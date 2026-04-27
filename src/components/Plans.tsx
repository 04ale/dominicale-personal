import { useState } from 'react';
import { Check, X } from 'lucide-react';

type PlanType = 'presencial' | 'consultoria';

export default function Plans({ id }: { id?: string }) {
  const [activeTab, setActiveTab] = useState<PlanType>('presencial');

  return (
    <section id={id} className="py-24 bg-deep-onyx text-pure-white relative">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-12">
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

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-gunmetal-grey/80 p-1.5 rounded-full border border-platinum-light/10 inline-flex relative backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('presencial')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'presencial' ? 'text-deep-onyx' : 'text-silver-mist hover:text-pure-white'
                }`}
            >
              Treino Presencial
            </button>
            <button
              onClick={() => setActiveTab('consultoria')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'consultoria' ? 'text-deep-onyx' : 'text-silver-mist hover:text-pure-white'
                }`}
            >
              Consultoria Online
            </button>

            {/* Sliding Pill Background */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-electric rounded-full transition-transform duration-300 ease-out shadow-[0_0_15px_rgba(0,240,255,0.4)] ${activeTab === 'consultoria' ? 'translate-x-full' : 'translate-x-0'
                }`}
            ></div>
          </div>
        </div>

        {/* Pricing Cards - Presencial */}
        {activeTab === 'presencial' && (
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
        )}

        {/* Pricing Cards - Consultoria */}
        {activeTab === 'consultoria' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* PLANO BIMESTRAL */}
            <div className="bg-gunmetal-grey/50 border border-platinum-light/10 rounded-3xl p-8 flex flex-col h-full relative">
              <h3 className="text-xl font-bold mb-2">Bimestral</h3>
              <p className="text-silver-mist text-sm mb-6 h-10">O começo ideal para testar a metodologia.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">R$ 297</span>
                <span className="text-silver-mist">/2 meses</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Planilha de treino personalizada</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Suporte para dúvidas (App)</span></li>
                <li className="flex items-start gap-3 opacity-40"><X size={20} className="text-silver-mist shrink-0" /> <span className="text-sm text-silver-mist line-through">Análise de vídeos da execução</span></li>
              </ul>
              <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20assinar%20a%20Consultoria%20Bimestral." target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-lg border border-platinum-light/20 text-pure-white h-12 font-bold hover:bg-gunmetal-grey hover:border-electric hover:text-electric transition-colors">
                Assinar Bimestral
              </a>
            </div>

            {/* PLANO SEMESTRAL (Mais Popular) */}
            <div className="bg-linear-to-b from-gunmetal-grey to-deep-onyx border-2 border-electric rounded-3xl p-8 flex flex-col h-full relative md:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.15)] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric text-deep-onyx px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                Melhor Custo-Benefício
              </div>
              <h3 className="text-2xl font-bold mb-2 text-pure-white">Semestral</h3>
              <p className="text-electric text-sm mb-6 h-10 font-medium">Tempo suficiente para ver seu corpo mudar de verdade.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-pure-white">R$ 497</span>
                <span className="text-silver-mist">/6 meses</span>
                <p className="text-xs text-silver-mist mt-2">(Equivale a R$ 82/mês)</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Troca de treino periódica</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Análise de vídeos de execução</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-pure-white font-medium">Acesso total ao Aplicativo VIP</span></li>
              </ul>
              <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20assinar%20a%20Consultoria%20Semestral%21" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-lg bg-electric text-deep-onyx h-14 font-extrabold hover:bg-electric/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                Assinar Semestral
              </a>
            </div>

            {/* PLANO ANUAL */}
            <div className="bg-gunmetal-grey/50 border border-platinum-light/10 rounded-3xl p-8 flex flex-col h-full relative">
              <h3 className="text-xl font-bold mb-2">Anual</h3>
              <p className="text-silver-mist text-sm mb-6 h-10">Comprometimento de longo prazo para uma vida nova.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">R$ 797</span>
                <span className="text-silver-mist">/ano</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Todos os benefícios do semestral</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">1 Encontro por chamada de vídeo/mês</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-electric shrink-0" /> <span className="text-sm text-silver-mist">Planejamento do ano completo</span></li>
              </ul>
              <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20assinar%20a%20Consultoria%20Anual." target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-lg border border-platinum-light/20 text-pure-white h-12 font-bold hover:bg-gunmetal-grey hover:border-electric hover:text-electric transition-colors">
                Assinar Anual
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}