import { Scissors, Zap, Sparkles, Droplets } from 'lucide-react';
import { whatsappLink } from '../App';

interface Service {
  icon: React.ElementType;
  name: string;
  description: string;
  price: string;
  duration: string;
  highlight?: boolean;
}

const services: Service[] = [
  {
    icon: Scissors,
    name: 'Corte Clássico',
    description: 'Corte masculino tradicional com acabamento perfeito e finalização.',
    price: 'R$ 45',
    duration: '30 min',
  },
  {
    icon: Scissors,
    name: 'Corte Degradê',
    description: 'Degradê moderno com máquina e tesoura, do zero ao cavanhaque.',
    price: 'R$ 55',
    duration: '40 min',
    highlight: true,
  },
  {
    icon: Zap,
    name: 'Barba Completa',
    description: 'Modelagem, toalha quente, hidratação e acabamento com navalha.',
    price: 'R$ 40',
    duration: '25 min',
  },
  {
    icon: Sparkles,
    name: 'Combo Corte + Barba',
    description: 'O melhor dos dois mundos: corte premium mais barba completa.',
    price: 'R$ 85',
    duration: '60 min',
    highlight: true,
  },
  {
    icon: Droplets,
    name: 'Hidratação Capilar',
    description: 'Tratamento intensivo para cabelos ressecados e sem brilho.',
    price: 'R$ 50',
    duration: '30 min',
  },
  {
    icon: Sparkles,
    name: 'Relaxamento / Progressiva',
    description: 'Alinhamento e disciplina dos fios com produtos profissionais.',
    price: 'R$ 120',
    duration: '90 min',
  },
  {
    icon: Scissors,
    name: 'Corte Infantil',
    description: 'Corte especial para os pequenos, com paciência e carinho.',
    price: 'R$ 35',
    duration: '25 min',
  },
  {
    icon: Zap,
    name: 'Sobrancelha na Navalha',
    description: 'Design e acabamento de sobrancelha com navalha e pinça.',
    price: 'R$ 20',
    duration: '15 min',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Tabela de Preços
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Nossos Serviços
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Escolha o serviço ideal para você. Todos realizados por profissionais especializados
            com produtos de alta qualidade.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.name}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                s.highlight
                  ? 'bg-stone-900 text-white shadow-lg shadow-stone-900/20'
                  : 'bg-white border border-stone-100 shadow-sm hover:border-amber-200'
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Popular
                </span>
              )}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  s.highlight ? 'bg-amber-500/20' : 'bg-amber-50'
                }`}
              >
                <s.icon size={20} className={s.highlight ? 'text-amber-400' : 'text-amber-500'} />
              </div>
              <h3
                className={`font-playfair text-lg font-semibold mb-2 ${
                  s.highlight ? 'text-white' : 'text-stone-900'
                }`}
              >
                {s.name}
              </h3>
              <p
                className={`text-sm leading-relaxed flex-1 mb-5 ${
                  s.highlight ? 'text-stone-400' : 'text-stone-500'
                }`}
              >
                {s.description}
              </p>
              <div className="flex items-end justify-between mt-auto">
                <p
                  className={`font-playfair text-2xl font-bold ${
                    s.highlight ? 'text-amber-400' : 'text-stone-900'
                  }`}
                >
                  {s.price}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    s.highlight ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Agendar pelo WhatsApp
          </a>
          <p className="text-stone-400 text-sm mt-3">
            Segunda a Sábado, 9h às 20h • Domingo, 9h às 14h
          </p>
        </div>
      </div>
    </section>
  );
}
