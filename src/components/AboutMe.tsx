import { Target, Trophy } from 'lucide-react';
import profileImg from '../assets/eu.webp';

export default function AboutMe({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-gunmetal-grey text-pure-white overflow-hidden relative border-t border-platinum-light/5">

      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image/Photo Area */}
          <div className="lg:w-5/12 w-full relative group">
            {/* Frame offset */}
            <div className="absolute inset-0 bg-electric/20 rounded-3xl translate-x-4 translate-y-4 border border-electric/30 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>

            <div className="relative bg-deep-onyx border border-platinum-light/10 rounded-3xl overflow-hidden aspect-4/5 flex items-center justify-center shadow-2xl">
              <img
                src={profileImg}
                alt="Lucas Dominicale"
                className="w-full h-full object-cover filter grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                fetchPriority="high"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-2 sm:-left-6 bg-deep-onyx border border-platinum-light/20 p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center">
                <Trophy size={24} className="text-electric" />
              </div>
              <div>
                <p className="text-xs text-silver-mist font-bold uppercase tracking-wider">Resultados Reais</p>
                <p className="text-lg font-black text-pure-white">Comprovados</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-7/12 w-full">
            <span className="inline-block py-1 px-3 rounded-full bg-electric/10 text-electric font-bold tracking-wider text-xs uppercase mb-6 border border-electric/20">
              Sobre o Treinador
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight wrap-break-word">
              Prazer, sou <span className="text-transparent bg-clip-text bg-linear-to-r from-electric to-pure-white">Lucas Dominicale.</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-silver-mist font-medium mb-8 border-l-4 border-electric pl-4">
              Personal Trainer especializado em transformação corporal e performance.
            </h3>

            <div className="space-y-6 text-silver-mist leading-relaxed text-lg">
              <p>
                Minha missão é simples: <strong className="text-pure-white">te tirar da estagnação e te levar a um novo nível físico</strong>, com estratégia, constância e um método que realmente funciona.
              </p>

              <p>
                Ao longo dos últimos anos, venho ajudando alunos a conquistarem resultados reais, respeitando a individualidade de cada corpo e cada rotina.
              </p>

              <div className="bg-deep-onyx/50 border border-platinum-light/10 p-6 rounded-xl relative overflow-hidden my-8">
                <div className="absolute top-0 left-0 w-1 h-full bg-electric"></div>
                <p className="font-medium text-pure-white">
                  Aqui, você não recebe um treino genérico.
                </p>
                <p className="mt-2 text-silver-mist text-base">
                  Você recebe um plano pensado exclusivamente pra você, com acompanhamento de verdade e ajustes constantes.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-platinum-light/10">
                <Target size={24} className="text-electric shrink-0" />
                <p className="font-extrabold text-xl text-pure-white">
                  Se você está disposto a evoluir, eu vou te mostrar o caminho.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}