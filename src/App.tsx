import { useState } from 'react';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingCallButton from './components/FloatingCallButton';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero onBookConsultation={openConsultation} />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <BeforeAfter />
        <Testimonials />
        <CTABanner onBookConsultation={openConsultation} />
        <Contact />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      <FloatingCallButton />
    </>
  );
}
