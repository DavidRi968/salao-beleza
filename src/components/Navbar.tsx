import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { whatsappLink } from '../App';

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <Scissors size={16} className="text-stone-900 rotate-45" />
            </div>
            <span className="font-playfair text-white text-lg font-bold tracking-wide">
              Alex Corte
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-900 text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-stone-900 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 gap-4 pb-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-stone-300 hover:text-amber-400 text-base font-medium py-1 border-b border-stone-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 text-sm font-semibold rounded-full text-center transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
