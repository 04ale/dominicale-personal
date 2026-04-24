import { MapPin, MessageCircle, Mail, Award } from 'lucide-react';

import logo from '../../assets/logo.png';

export default function Footer({ id }: { id?: string }) {
  return (
    <footer id={id} className="bg-deep-onyx border-t border-platinum-light/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col gap-4">
            <a href="/" className="inline-flex group mb-2">
              <img src={logo} alt="Lucas Dominicale" className="h-14 md:h-16 w-auto object-contain rounded-lg" />
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
          <div>
            <h4 className="text-lg font-bold text-pure-white mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Home
                </a>
              </li>
              <li>
                <a href="#planos" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Planos
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Método
                </a>
              </li>
              <li>
                <a href="#contato" className="text-silver-mist hover:text-electric transition-colors duration-200 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric/40" /> Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-pure-white mb-6">Contato Rápido</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric/10 text-electric"><MessageCircle size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-silver-mist uppercase tracking-wider font-semibold">WhatsApp</span>
                  <a href="https://wa.me/5511944907191?text=Ol%C3%A1%20Lucas%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas." target="_blank" rel="noopener noreferrer" className="text-pure-white hover:text-electric transition-colors mt-1 font-medium text-sm">(11) 94490-7191</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric/10 text-electric"><Mail size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-silver-mist uppercase tracking-wider font-semibold">E-mail</span>
                  <a href="mailto:wandertrainingbr@gmail.com" className="text-pure-white hover:text-electric transition-colors mt-1 font-medium text-sm break-all">wandertrainingbr@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-electric/10 text-electric"><Award size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-silver-mist uppercase tracking-wider font-semibold">Certificação</span>
                  <span className="text-pure-white mt-1 font-medium text-sm">CREF: 210771-G/SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-platinum-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-silver-mist">
          <p>© 2026 Wander-Training. Atibaia.</p>
          <div className="flex gap-8">
            <a href="#contrato" className="hover:text-electric transition-colors">Contrato</a>
            <a href="#avaliacao" className="hover:text-electric transition-colors">Avaliação</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
