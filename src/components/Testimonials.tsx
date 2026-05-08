import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Eduardo',
    role: 'Cliente há 5 anos',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Melhor barbearia da cidade, sem dúvida. O Rodrigo é um artista! Nunca fui tão bem atendido. Ambiente impecável, produto de qualidade. Recomendo demais.',
  },
  {
    name: 'Marcos Oliveira',
    role: 'Cliente há 3 anos',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Fui por indicação de um amigo e nunca mais fui em outro lugar. O atendimento é personalizado, o espaço é confortável e o resultado sempre supera as expectativas.',
  },
  {
    name: 'Felipe Santos',
    role: 'Cliente há 1 ano',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Excelente experiência do início ao fim. Me senti em um spa masculino. O corte foi perfeito, a barba ficou impecável e o preço é muito justo pelo serviço prestado.',
  },
  {
    name: 'André Lima',
    role: 'Cliente há 2 anos',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'A Alex Corte é o meu ritual de cuidado pessoal semanal. Profissionais incríveis, produtos premium e um ambiente que convida a relaxar. Não troco por nada.',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior prêmio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote size={28} className="text-amber-400 mb-4 flex-shrink-0" />
              <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-stone-100 rounded-2xl px-8 py-4 shadow-sm">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-playfair text-2xl font-bold text-stone-900">4.9</span>
            <span className="text-stone-400 text-sm">baseado em +300 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}
