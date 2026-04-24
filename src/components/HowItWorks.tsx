import { UserPlus, ClipboardList, CalendarCheck, Settings } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Início da Consultoria",
        description: <>Você toma a decisão e entra para o time, preenchendo uma <strong>avaliação física</strong> inicial completa.</>,
        icon: <UserPlus size={32} className="text-electric" />
    },
    {
        number: "02",
        title: "Treino Personalizado",
        description: <>Desenvolvo seu <strong>plano de treino</strong> 100% individualizado baseado no seu corpo e rotina.</>,
        icon: <ClipboardList size={32} className="text-electric" />
    },
    {
        number: "03",
        title: "Check-in Semanal",
        description: <>Acompanhamento real para medir sua <strong>evolução física</strong> e garantir que não haja estagnação.</>,
        icon: <CalendarCheck size={32} className="text-electric" />
    },
    {
        number: "04",
        title: "Ajuste de Estratégia",
        description: <>Lapido os detalhes e ajusto o planejamento para você continuar tendo <strong>resultados de performance</strong>.</>,
        icon: <Settings size={32} className="text-electric" />
    }
];

export default function HowItWorks({ id }: { id?: string }) {
    return (
        <section id={id} className="py-24 bg-deep-onyx relative overflow-hidden border-t border-platinum-light/5">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-electric/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-electric/10 text-electric font-bold tracking-wider text-xs uppercase mb-4 border border-electric/20">
                        Passo a Passo
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-pure-white tracking-tight mb-4">
                        COMO <span className="text-transparent bg-clip-text bg-linear-to-r from-electric to-pure-white">FUNCIONA</span>
                    </h2>
                    <p className="text-silver-mist text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Simples, direto e focado no seu resultado. Sem enrolação.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Card */}
                            <div className="h-full bg-gunmetal-grey/30 border border-platinum-light/10 rounded-2xl p-8 hover:bg-gunmetal-grey/50 hover:border-electric/30 transition-all duration-300 flex flex-col items-start relative z-10">
                                <div className="flex items-center justify-between w-full mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-deep-onyx border border-platinum-light/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-black text-platinum-light/10 group-hover:text-electric/20 transition-colors duration-300">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-pure-white mb-3 group-hover:text-electric transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-silver-mist leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connecting line (desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px border-t border-dashed border-platinum-light/20 z-0"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}