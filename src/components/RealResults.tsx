import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Imports de Imagens (Antes e Depois)
import homemA from '../assets/resultados/homem-a.webp';
import homemD from '../assets/resultados/homem-d.webp';
import nova1A from '../assets/resultados/nova1-a.webp';
import nova1D from '../assets/resultados/nova1-d.webp';
import nova2A from '../assets/resultados/nova2-a.webp';
import nova2D from '../assets/resultados/nova2-d.webp';
import obesa1A from '../assets/resultados/obesa1-a.webp';
import obesa1D from '../assets/resultados/obesa1-d.webp';
import obesa2A from '../assets/resultados/obesa2-a.webp';
import obesa2D from '../assets/resultados/obesa2-d.webp';

const transformations = [
  { id: 1, before: homemA, after: homemD, label: "Transformação Corporal" },
  { id: 2, before: nova1A, after: nova1D, label: "Definição e Emagrecimento" },
  { id: 3, before: nova2A, after: nova2D, label: "Ganho de Massa Magra" },
  { id: 4, before: obesa1A, after: obesa1D, label: "Emagrecimento Significativo" },
  { id: 5, before: obesa2A, after: obesa2D, label: "Qualidade de Vida e Estética" },
];

export default function RealResults({ id }: { id?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  return (
    <section id={id} className="py-24 bg-gunmetal-grey text-pure-white overflow-hidden relative">

      <div className="container mx-auto px-4 max-w-5xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-electric/10 text-electric font-bold tracking-wider text-xs uppercase mb-6 border border-electric/20">
            🔥 Resultados Reais
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Contra fatos não há argumentos
          </h2>
          <p className="text-silver-mist text-lg max-w-2xl mx-auto">
            Esses são alunos que disseram "sim" para a própria transformação através do Método.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-deep-onyx border border-platinum-light/10 rounded-3xl p-4 md:p-8 shadow-2xl mx-auto max-w-4xl">

          {/* Main Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {transformations.map((item) => (
                <div key={item.id} className="w-full shrink-0 flex flex-col md:flex-row gap-2 md:gap-4">

                  {/* ANTES */}
                  <div className="w-full md:w-1/2 relative group">
                    <img
                      src={item.before}
                      alt={`Antes - ${item.label}`}
                      className="w-full h-[300px] md:h-[450px] object-cover rounded-xl filter grayscale-30% group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-deep-onyx/80 backdrop-blur text-silver-mist px-4 py-1.5 rounded-md font-bold text-sm border border-platinum-light/20">
                      ANTES
                    </div>
                  </div>

                  {/* DEPOIS */}
                  <div className="w-full md:w-1/2 relative group">
                    <img
                      src={item.after}
                      alt={`Depois - ${item.label}`}
                      className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.15)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-electric text-deep-onyx px-4 py-1.5 rounded-md font-bold text-sm shadow-md">
                      DEPOIS
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Controls & Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-6">

            <div className="flex items-center gap-1 text-electric bg-electric/10 px-4 py-2 rounded-full border border-electric/20">
              <Star size={16} className="fill-electric" />
              <Star size={16} className="fill-electric" />
              <Star size={16} className="fill-electric" />
              <Star size={16} className="fill-electric" />
              <Star size={16} className="fill-electric" />
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${currentIndex === idx
                    ? 'w-8 h-2 bg-electric shadow-[0_0_10px_rgba(0,240,255,0.8)]'
                    : 'w-2 h-2 bg-platinum-light/30 hover:bg-platinum-light/60'
                    }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Slide anterior"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-onyx border border-platinum-light/20 hover:bg-gunmetal-grey hover:text-electric hover:border-electric/50 transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Próximo slide"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-deep-onyx border border-platinum-light/20 hover:bg-gunmetal-grey hover:text-electric hover:border-electric/50 transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}