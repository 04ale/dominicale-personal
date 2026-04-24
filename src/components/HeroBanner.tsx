import { MapPin, ArrowRight } from 'lucide-react';
import heroBannerImg from '../assets/heroBanner.webp';

export default function HeroBanner({ id }: { id?: string }) {
    return (
        <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-onyx pt-16">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBannerImg}
                    alt="Personal Trainer Wander"
                    className="w-full h-full object-cover object-[66%] md:object-center opacity-70 md:opacity-60"
                    fetchPriority="high"
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-b from-deep-onyx/60 via-deep-onyx/40 to-deep-onyx"></div>

                {/* Subtle electric glow effect */}
                <div className="absolute inset-0 bg-electric/5 mix-blend-overlay"></div>
            </div>

            {/* Content Container */}
            <div className="container relative z-10 mx-auto px-6 flex flex-col items-start md:items-center justify-center text-left md:text-center pt-20 pb-32 max-w-5xl">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-platinum-light/20 bg-gunmetal-grey/50 backdrop-blur-md text-pure-white text-sm font-medium mb-8">
                    <MapPin size={16} className="text-electric" />
                    <span>Personal Trainer • Atibaia/SP</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pure-white tracking-tight leading-[1.1] mb-8 drop-shadow-lg">
                    TRANSFORME SEU CORPO  <br className="hidden md:block" />
                    COM UM <span className="text-electric">MÉTODO PERSONALIZADO</span> — SEM TREINOS GENÉRICOS
                </h1>

                {/* Description */}
                <div className="text-lg md:text-xl text-silver-mist max-w-2xl md:mx-auto space-y-3 mb-12 font-medium drop-shadow-md">
                    <p>Consultoria online com acompanhamento real, </p>
                    <p>ajustes semanais e foco em resultado estético e performance </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start md:items-center justify-start md:justify-center gap-4 w-full sm:w-auto">
                    <a
                        href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Quero%20dar%20o%20primeiro%20passo%20para%20transformar%20meu%20corpo."
                        target="_blank" rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-electric hover:bg-electric/90 text-deep-onyx text-lg h-14 px-10 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 font-bold hover:scale-105"
                    >
                        COMEÇAR AGORA
                        <ArrowRight size={20} />
                    </a>

                </div>

            </div>
        </section>
    );
}