import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Map from './components/Map';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um horário na Barbearia Alex Corte.';

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Cta />
      <Map />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
