import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const info = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Rua das Palmeiras, 247 – Sala 01', 'Bairro Centro, São Paulo – SP', 'CEP: 01234-567'],
  },
  {
    icon: Phone,
    title: 'Telefone & WhatsApp',
    lines: ['(11) 99999-9999', '(11) 3456-7890'],
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    lines: [
      'Segunda a Sexta: 9h às 20h',
      'Sábado: 9h às 18h',
      'Domingo: 9h às 14h',
    ],
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['contato@domcorte.com.br'],
  },
];

export default function Map() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Localização
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Onde nos Encontrar
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Estamos localizados no centro de São Paulo, de fácil acesso a pé ou de transporte público.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-stone-100 h-80 md:h-96 lg:h-full min-h-[380px]">
            <iframe
              title="Localização Barbearia Alex Corte"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750!2d-42.8949!3d-20.4056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI0JzIwLjEiUyA0MsKwNTMnNDEuNiJX!5e0!3m2!1spt-BR!2sbr!4v1778280816253"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {info.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="flex gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-amber-500" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm mb-1">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-stone-500 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
