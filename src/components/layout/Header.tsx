import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../../assets/logo.webp';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-platinum-light/20 bg-deep-onyx/95 backdrop-blur supports-backdrop-filter:bg-deep-onyx/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">

                {/* Logo Section */}
                <a href="/" className="flex items-center group" onClick={closeMenu}>
                    <img src={logo} alt="Lucas Dominicale" className="h-10 md:h-12 w-auto object-contain rounded-md" fetchPriority="high" />
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
                    <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas." className="inline-flex items-center justify-center bg-electric hover:bg-electric/90 text-deep-onyx h-9 px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center text-pure-white hover:bg-gunmetal-grey h-9 w-9 rounded-md transition-colors"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-deep-onyx border-b border-platinum-light/20 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col p-4">
                        <a href="/" onClick={closeMenu} className="text-base font-semibold py-3 border-b border-platinum-light/10 text-pure-white">Home</a>
                        <a href="#sobremim" onClick={closeMenu} className="text-base font-semibold py-3 border-b border-platinum-light/10 text-silver-mist hover:text-pure-white">Sobre mim</a>
                        <a href="#problemas" onClick={closeMenu} className="text-base font-semibold py-3 border-b border-platinum-light/10 text-silver-mist hover:text-pure-white">Problema</a>
                        <a href="#metodologia" onClick={closeMenu} className="text-base font-semibold py-3 border-b border-platinum-light/10 text-silver-mist hover:text-pure-white">Metodologia</a>
                        <a href="#resultados" onClick={closeMenu} className="text-base font-semibold py-3 border-b border-platinum-light/10 text-silver-mist hover:text-pure-white">Resultados</a>
                        <a href="#comoeutrabalho" onClick={closeMenu} className="text-base font-semibold py-3 border-b border-platinum-light/10 text-silver-mist hover:text-pure-white">Como eu trabalho</a>
                        <a href="#ctafinal" onClick={closeMenu} className="text-base font-semibold py-3 border-b border-platinum-light/10 text-silver-mist hover:text-pure-white">CTA Final</a>
                        <a href="#planos" onClick={closeMenu} className="text-base font-semibold py-3 text-silver-mist hover:text-pure-white">Planos</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
