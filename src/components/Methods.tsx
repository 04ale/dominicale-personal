import { UserCheck, TrendingUp, CalendarRange, Activity, ArrowRight } from 'lucide-react';

export default function Methods({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-deep-onyx text-pure-white overflow-hidden relative">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gunmetal-grey/30 -skew-x-12 translate-x-20 pointer-events-none hidden lg:block"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Column: Title and Explanation */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-electric/10 text-electric font-bold tracking-wider text-xs uppercase mb-6 border border-electric/20">
              ⚡ O Diferencial
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Apresentando o <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pure-white to-electric">
                Método Lucas Dominicale
              </span>
            </h2>
            <p className="text-silver-mist text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Esqueça as fichas de treino genéricas. O <strong>Método Lucas Dominicale</strong> foi desenhado para quem cansou de tentar e não ver <strong>resultados reais</strong>. Uma <strong>engenharia corporal</strong> focada no que o seu biotipo realmente precisa.
            </p>

            <a
              href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20conhecer%20mais%20sobre%20o%20M%C3%A9todo%20Lucas%20Dominicale."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-electric text-electric hover:bg-electric hover:text-deep-onyx text-lg h-14 px-8 transition-all duration-300 font-bold group"
            >
              Quero esse método
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {/* Card 1 */}
            <div className="bg-gunmetal-grey border border-platinum-light/10 p-6 rounded-2xl hover:border-electric/40 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-deep-onyx border border-platinum-light/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <UserCheck size={24} className="text-electric" />
              </div>
              <h3 className="text-lg font-bold mb-2">Treino Individualizado</h3>
              <p className="text-silver-mist text-sm">
                Desenhado especificamente para a sua rotina, suas limitações e o seu biotipo corporal.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gunmetal-grey border border-platinum-light/10 p-6 rounded-2xl hover:border-electric/40 transition-colors duration-300 group sm:translate-y-8">
              <div className="w-12 h-12 rounded-xl bg-deep-onyx border border-platinum-light/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <TrendingUp size={24} className="text-electric" />
              </div>
              <h3 className="text-lg font-bold mb-2">Progressão Estratégica</h3>
              <p className="text-silver-mist text-sm">
                Evolução de cargas e volume pensada semana a semana para evitar a estagnação.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gunmetal-grey border border-platinum-light/10 p-6 rounded-2xl hover:border-electric/40 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-deep-onyx border border-platinum-light/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <CalendarRange size={24} className="text-electric" />
              </div>
              <h3 className="text-lg font-bold mb-2">Ajustes Semanais</h3>
              <p className="text-silver-mist text-sm">
                O corpo muda rápido, o treino acompanha. Checagens constantes para otimizar os ganhos.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gunmetal-grey border border-platinum-light/10 p-6 rounded-2xl hover:border-electric/40 transition-colors duration-300 group sm:translate-y-8">
              <div className="w-12 h-12 rounded-xl bg-deep-onyx border border-platinum-light/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Activity size={24} className="text-electric" />
              </div>
              <h3 className="text-lg font-bold mb-2">Estética + Performance</h3>
              <p className="text-silver-mist text-sm">
                Músculos aparentes não bastam. Você terá força, resistência e um visual impactante.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}