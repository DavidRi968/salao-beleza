import { Award, Clock, Users, Star } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Anos de Experiência', value: '14+' },
  { icon: Users, label: 'Clientes Atendidos', value: '8.000+' },
  { icon: Star, label: 'Avaliação Média', value: '4.9' },
  { icon: Clock, label: 'Horas de Operação/Semana', value: '60h' },
];

const differentials = [
  {
    title: 'Profissionais Certificados',
    description:
      'Nossa equipe é formada por barbeiros certificados com cursos nacionais e internacionais.',
  },
  {
    title: 'Produtos Premium',
    description:
      'Utilizamos apenas produtos de alta qualidade para garantir o melhor resultado para seu cabelo e barba.',
  },
  {
    title: 'Ambiente Exclusivo',
    description:
      'Um espaço pensado nos mínimos detalhes para proporcionar conforto, estilo e uma experiência única.',
  },
  {
    title: 'Atendimento Personalizado',
    description:
      'Cada cliente é único. Estudamos seu perfil e sugerimos o corte e estilo perfeito para você.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Barbeiro trabalhando"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 rounded-xl shadow-xl max-w-[200px]">
              <p className="font-playfair text-3xl font-bold text-amber-400">14+</p>
              <p className="text-stone-300 text-sm mt-1 leading-tight">
                Anos de tradição e excelência
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Sobre Nós
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Tradição que se transforma em arte
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              A Barbearia Alex Corte nasceu da paixão pelo ofício de barbeiro. Localizada no coração
              de São Paulo, somos referência em cortes masculinos clássicos e modernos, atendendo
              com atenção, respeito e um toque de sofisticação.
            </p>
            <p className="text-stone-600 leading-relaxed mb-10">
              Aqui, o tempo desacelera. Cada visita é uma experiência completa — do atendimento
              personalizado ao resultado impecável. Venha descobrir por que somos a escolha de
              milhares de homens que valorizam estilo e bem-estar.
            </p>

            {/* Differentials grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {differentials.map((d) => (
                <div key={d.title} className="flex gap-3">
                  <div className="w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-stone-900 mb-1">{d.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 bg-stone-900 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Icon size={20} className="text-amber-400" />
                </div>
              </div>
              <p className="font-playfair text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-stone-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
