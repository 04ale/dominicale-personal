import { MapPin, MessageCircle, Mail, Award } from 'lucide-react';

import logo from '../../assets/logo.webp';

export default function Footer({ id }: { id?: string }) {
  return (
    <footer id={id} className="bg-deep-onyx border-t border-platinum-light/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="inline-flex items-center gap-3 group mb-2">
              <img src={logo} alt="Lucas Dominicale" className="h-14 md:h-16 w-auto object-contain rounded-lg" />
              <span className="hidden md:block text-pure-white font-bold tracking-tight text-xl group-hover:text-electric transition-colors">
                Dominicale <span className="text-electric group-hover:text-pure-white transition-colors duration-300">Personal</span>
              </span>
            </a>
            <p className="text-silver-mist mt-4 max-w-xs leading-relaxed text-sm">
              Personal trainer especializado em hipertrofia e emagrecimento. Agressividade nos treinos, precisão nos resultados.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gunmetal-grey border border-platinum-light/10 text-sm font-medium mt-6 w-fit text-silver-mist">
              <MapPin size={16} className="text-electric" />
              <span>Local: Atibaia - SP</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <nav aria-label="Navegação do rodapé">
            <h4 className="text-lg font-bold text-pure-white mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Início
                </a>
              </li>
              <li>
                <a href="#sobremim" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Sobre Mim
                </a>
              </li>
              <li>
                <a href="#problemas" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Dificuldades
                </a>
              </li>
              <li>
                <a href="#resultados" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Resultados
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> O Método
                </a>
              </li>
              <li>
                <a href="#comoeutrabalho" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Consultoria
                </a>
              </li>
              <li>
                <a href="#planos" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Planos
                </a>
              </li>

            </ul>
          </nav>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-pure-white mb-6">Contato Rápido</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric/10 text-electric"><MessageCircle size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-silver-mist uppercase tracking-wider font-semibold">WhatsApp</span>
                  <a href="https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas." target="_blank" rel="noopener noreferrer" className="text-pure-white hover:text-electric transition-colors mt-1 font-medium text-sm">(11) 91979-9090</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric/10 text-electric">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-silver-mist uppercase tracking-wider font-semibold">Instagram</span>
                  <a href="https://instagram.com/dominicale_personal" target="_blank" rel="noopener noreferrer" className="text-pure-white hover:text-electric transition-colors mt-1 font-medium text-sm">@dominicale_personal</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric/10 text-electric"><Mail size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-silver-mist uppercase tracking-wider font-semibold">E-mail</span>
                  <a href="mailto:dominicalepersonal@gmail.com" className="text-pure-white hover:text-electric transition-colors mt-1 font-medium text-sm break-all">dominicalepersonal@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric/10 text-electric"><Award size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-silver-mist uppercase tracking-wider font-semibold">Certificação</span>
                  <span className="text-pure-white mt-1 font-medium text-sm">CREF: 196174-G/SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-platinum-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-silver-mist">
          <p>© 2026 Dominicale Personal. Atibaia. Todos os direitos reservados. Desenvolvido por <a href="https://instagram.com/ale.sep_" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">@ale.sep_</a></p>
          <div className="flex gap-4">
            <a href="#contrato" className="hover:text-electric transition-colors">Contrato</a>
            <a href="#avaliacao" className="hover:text-electric transition-colors">Avaliação</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
