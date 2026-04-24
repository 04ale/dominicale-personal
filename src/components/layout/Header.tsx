import { Menu } from 'lucide-react';

import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-platinum-light/20 bg-deep-onyx/95 backdrop-blur supports-backdrop-filter:bg-deep-onyx/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">

                {/* Logo Section */}
                <a href="/" className="flex items-center group">
                    <img src={logo} alt="Lucas Dominicale" className="h-10 md:h-12 w-auto object-contain rounded-md" />
                </a>

                {/* Navigation (Hidden on Mobile) */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="/" className="text-sm font-semibold transition-all duration-200 relative py-2 text-pure-white">
                        Home
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-electric rounded-full"></div>
                    </a>
                    <a href="#sobremim" className="text-sm font-semibold transition-all duration-200 py-2 text-silver-mist hover:text-pure-white">Sobre mim</a>
                    <a href="#problemas" className="text-sm font-semibold transition-all duration-200 py-2 text-silver-mist hover:text-pure-white">Problema</a>
                    <a href="#metodologia" className="text-sm font-semibold transition-all duration-200 py-2 text-silver-mist hover:text-pure-white">Metodologia</a>
                    <a href="#resultados" className="text-sm font-semibold transition-all duration-200 py-2 text-silver-mist hover:text-pure-white">Resultados</a>
                    <a href="#comoeutrabalho" className="text-sm font-semibold transition-all duration-200 py-2 text-silver-mist hover:text-pure-white">Como eu trabalho</a>
                    <a href="#ctafinal" className="text-sm font-semibold transition-all duration-200 py-2 text-silver-mist hover:text-pure-white">CTA Final</a>
                    <a href="#planos" className="text-sm font-semibold transition-all duration-200 py-2 text-silver-mist hover:text-pure-white">Planos</a>
                </nav>

                {/* Right Buttons */}
                <div className="flex items-center gap-3">
                    <a href="https://wa.me/5511944907191?text=Ol%C3%A1%20Lucas%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas." className="inline-flex items-center justify-center bg-electric hover:bg-electric/90 text-deep-onyx h-9 px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>
                    <button className="md:hidden flex items-center justify-center text-pure-white hover:bg-gunmetal-grey h-9 w-9 rounded-md transition-colors">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}
