import { Dumbbell, Utensils, Compass, XCircle, CheckCircle2 } from 'lucide-react';

export default function Problem({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-deep-onyx text-pure-white border-t border-platinum-light/5">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-electric/10 text-electric font-bold tracking-wider text-xs uppercase mb-6 border border-electric/20">
            💥 O Problema (Conexão)
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Dificuldades no Treino e Dieta?
          </h2>
          <div className="w-20 h-1 bg-electric mx-auto rounded-full"></div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">

          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-electric/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Card 1 */}
          <div className="bg-gunmetal-grey/80 backdrop-blur-sm border border-platinum-light/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-electric/50 hover:-translate-y-1 transition-all duration-300 relative z-10 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-deep-onyx border border-platinum-light/10 flex items-center justify-center mb-6 shadow-inner">
              <Dumbbell size={28} className="text-electric" />
            </div>
            <h3 className="text-xl font-bold mb-3">Estagnação na Academia</h3>
            <p className="text-silver-mist text-sm leading-relaxed">
              Passa horas na academia, se esforça, mas não vê <strong>hipertrofia</strong> ou diferença real no espelho.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gunmetal-grey/80 backdrop-blur-sm border border-platinum-light/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-electric/50 hover:-translate-y-1 transition-all duration-300 relative z-10 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-deep-onyx border border-platinum-light/10 flex items-center justify-center mb-6 shadow-inner">
              <Utensils size={28} className="text-electric" />
            </div>
            <h3 className="text-xl font-bold mb-3">Estagnação na Dieta</h3>
            <p className="text-silver-mist text-sm leading-relaxed">
              Cortou tudo que gosta, passou fome, mas o <strong>emagrecimento</strong> e o corpo estagnaram.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gunmetal-grey/80 backdrop-blur-sm border border-platinum-light/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-electric/50 hover:-translate-y-1 transition-all duration-300 relative z-10 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-deep-onyx border border-platinum-light/10 flex items-center justify-center mb-6 shadow-inner">
              <Compass size={28} className="text-electric" />
            </div>
            <h3 className="text-xl font-bold mb-3">Se sente perdido na academia</h3>
            <p className="text-silver-mist text-sm leading-relaxed">
              Não sabe qual aparelho usar, como dividir o treino ou se está fazendo certo.
            </p>
          </div>
        </div>

        {/* The Conclusion Highlight */}
        <div className="bg-linear-to-r from-gunmetal-grey to-deep-onyx border border-platinum-light/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">

          {/* Left glowing border effect */}
          <div className="absolute top-0 left-0 w-2 h-full bg-electric shadow-[0_0_20px_rgba(0,240,255,0.8)]"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

            <div className="flex flex-col items-center gap-4 text-center md:text-right">
              <div className="w-12 h-12 rounded-full bg-deep-onyx flex items-center justify-center border border-platinum-light/20">
                <XCircle size={24} className="text-silver-mist" />
              </div>
              <span className="text-2xl font-medium text-silver-mist">
                👉 O problema <br className="hidden md:block" /><span className="line-through decoration-electric/50">não é você.</span>
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-platinum-light/10 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-platinum-light/10 bg-deep-onyx flex items-center justify-center text-xs font-bold text-silver-mist">
                VS
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-center md:text-right">
              <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center border border-electric/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <CheckCircle2 size={24} className="text-electric" />
              </div>
              <span className="text-2xl md:text-3xl font-extrabold text-pure-white">
                👉 O problema <br className="hidden md:block" /><span className="text-electric">é o método.</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}