const photos = [
  {
    src: 'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corte degradê moderno',
    label: 'Degradê Skin Fade',
  },
  {
    src: 'https://images.pexels.com/photos/3998422/pexels-photo-3998422.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Barba modelada com navalha',
    label: 'Barba com Navalha',
  },
  {
    src: 'https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior da barbearia',
    label: 'Nosso Espaço',
  },
  {
    src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corte social clássico',
    label: 'Corte Social',
  },
  {
    src: 'https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Barbeiro aplicando produto',
    label: 'Tratamento Premium',
  },
  {
    src: 'https://images.pexels.com/photos/3998403/pexels-photo-3998403.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Combo corte e barba no cliente',
    label: 'Combo Corte + Barba',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Galeria
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Cada corte é uma obra. Confira alguns dos nossos trabalhos e inspire-se.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.alt}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? 'h-64 md:h-full' : 'h-48 md:h-56'
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
