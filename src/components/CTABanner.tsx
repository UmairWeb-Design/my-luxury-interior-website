import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface Props {
  onBookConsultation: () => void;
}

export default function CTABanner({ onBookConsultation }: Props) {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8146212/pexels-photo-8146212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=2000)',
        }}
      />
      <div className="absolute inset-0 bg-dark/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/50" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-divider mx-auto mb-8" />

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Ready to Transform Your{' '}
            <span className="italic text-gradient-gold">Space?</span>
          </h2>

          <p className="font-poppins text-white/50 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Let our award-winning team create a space that reflects your unique style and
            exceeds your expectations. Schedule your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookConsultation}
              className="group relative overflow-hidden px-10 py-4 bg-gold text-dark font-poppins text-sm tracking-wider uppercase transition-all duration-500 hover:bg-gold-light"
            >
              <span className="relative z-10">Schedule Free Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <a
              href="tel:+13232395024"
              className="px-10 py-4 border border-white/20 text-white font-poppins text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-500"
            >
              Call Us Now
            </a>
          </div>

          <div className="section-divider mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
