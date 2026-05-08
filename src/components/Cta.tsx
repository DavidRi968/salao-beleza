import { whatsappLink } from '../App';

export default function Cta() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3998409/pexels-photo-3998409.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-stone-950/85" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Reserve Agora
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Está pronto para o seu melhor visual?
        </h2>
        <p className="text-stone-300 text-lg leading-relaxed mb-10">
          Não espere mais. Agende seu horário agora mesmo pelo WhatsApp e garanta sua
          experiência na Alex Corte. É rápido, fácil e sem complicação.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.565 4.14 1.548 5.876L0 24l6.356-1.524A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.923 0-3.726-.512-5.281-1.406L2 22l1.435-4.614A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Agendar pelo WhatsApp
        </a>
        <p className="text-stone-500 text-sm mt-4">
          Respondemos rapidamente! Seg–Sáb 9h–20h • Dom 9h–14h
        </p>
      </div>
    </section>
  );
}
