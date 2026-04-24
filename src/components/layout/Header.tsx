import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../../assets/logo.webp';

const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Sobre mim', href: '#sobremim', id: 'sobremim' },
    { label: 'Problema', href: '#problemas', id: 'problemas' },
    { label: 'Metodologia', href: '#metodologia', id: 'metodologia' },
    { label: 'Resultados', href: '#resultados', id: 'resultados' },
    { label: 'Como eu trabalho', href: '#comoeutrabalho', id: 'comoeutrabalho' },
    { label: 'CTA Final', href: '#ctafinal', id: 'ctafinal' },
    { label: 'Planos', href: '#planos', id: 'planos' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        // Special case for scrolling to top
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-platinum-light/20 bg-deep-onyx/95 backdrop-blur supports-backdrop-filter:bg-deep-onyx/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">

                {/* Logo Section */}
                <a href="/" className="flex items-center group" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    closeMenu();
                }}>
                    <img src={logo} alt="Lucas Dominicale" className="h-10 md:h-12 w-auto object-contain rounded-md" fetchPriority="high" />
                </a>

                {/* Navigation (Hidden on Mobile) */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a 
                            key={item.id}
                            href={item.href} 
                            className={`text-sm font-semibold transition-all duration-300 relative py-2 ${
                                activeSection === item.id ? 'text-pure-white' : 'text-silver-mist hover:text-pure-white'
                            }`}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-electric rounded-full transition-all duration-300"></div>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Right Buttons */}
                <div className="flex items-center gap-3">
                    <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas." className="inline-flex items-center justify-center bg-electric hover:bg-electric/90 text-deep-onyx h-9 px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>
                    <button 
                        onClick={toggleMenu}
                        className="xl:hidden flex items-center justify-center text-pure-white hover:bg-gunmetal-grey h-9 w-9 rounded-md transition-colors"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="xl:hidden absolute top-16 left-0 w-full bg-deep-onyx border-b border-platinum-light/20 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col p-4 max-h-[70vh] overflow-y-auto">
                        {navItems.map((item) => (
                            <a 
                                key={item.id}
                                href={item.href} 
                                onClick={closeMenu} 
                                className={`text-base font-semibold py-3 border-b border-platinum-light/10 ${
                                    activeSection === item.id ? 'text-electric' : 'text-silver-mist hover:text-pure-white'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
