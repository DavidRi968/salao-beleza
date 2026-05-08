import { ChevronDown } from 'lucide-react';
import { whatsappLink } from '../App';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-stone-900/75 to-stone-950/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          Barbearia Premium — Desde 2010
        </p>
        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          Alex Corte
        </h1>
        <p className="text-stone-300 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Onde cada detalhe importa. Cortes precisos, barbas perfeitas
          e uma experiência que você não vai esquecer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Agendar Horário
          </a>
          <a
            href="#servicos"
            className="px-8 py-4 border border-stone-400 hover:border-amber-400 text-stone-200 hover:text-amber-400 font-semibold rounded-full text-base transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Serviços
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 hover:text-amber-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
