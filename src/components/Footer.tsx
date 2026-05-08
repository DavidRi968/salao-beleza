import { Scissors, Instagram, Facebook, Youtube } from 'lucide-react';
import { whatsappLink } from '../App';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center">
                <Scissors size={16} className="text-stone-900 rotate-45" />
              </div>
              <span className="font-playfair text-white text-xl font-bold">Alex Corte</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Barbearia premium no coração de São Paulo. Tradição, estilo e experiência
              desde 2010.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <Icon size={16} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold mb-4">Navegação</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-4">Contato</p>
            <p className="text-sm mb-2">Rua das Palmeiras, 247 – Centro</p>
            <p className="text-sm mb-2">São Paulo – SP, 01234-567</p>
            <p className="text-sm mb-2">(11) 99999-9999</p>
            <p className="text-sm mb-5">contato@domcorte.com.br</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.14 1.548 5.876L0 24l6.356-1.524A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.923 0-3.726-.512-5.281-1.406L2 22l1.435-4.614A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} Barbearia Alex Corte. Todos os direitos reservados.
          </p>
          <p className="text-xs text-stone-600">
            Desenvolvido com dedicação para o melhor resultado
          </p>
        </div>
      </div>

      {/* Fixed WhatsApp bottom bar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-green-600 py-3 px-4 flex items-center justify-center gap-3 shadow-2xl">
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.14 1.548 5.876L0 24l6.356-1.524A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.923 0-3.726-.512-5.281-1.406L2 22l1.435-4.614A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold text-sm tracking-wide"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </footer>
  );
}
