import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onBookConsultation }: { onBookConsultation: () => void }) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 2 }}
          className="h-[1px] bg-gold mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="font-poppins text-gold text-xs sm:text-sm tracking-[0.4em] uppercase mb-4"
        >
          Bernini Design — Los Angeles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight max-w-5xl"
        >
          Designing{' '}
          <span className="text-gradient-gold italic">Timeless</span>
          <br />
          Luxury Spaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="font-poppins text-white/60 text-sm sm:text-base md:text-lg mt-6 tracking-wider max-w-xl"
        >
          Architecture · Structure · Interior Design
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative overflow-hidden px-8 py-3.5 bg-gold text-dark font-poppins text-sm tracking-wider uppercase transition-all duration-500 hover:bg-gold-light"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
          <button
            onClick={onBookConsultation}
            className="group px-8 py-3.5 border border-white/30 text-white font-poppins text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-500"
          >
            Book Consultation
          </button>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="h-[1px] bg-gold/30 mt-12"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 text-[10px] font-poppins tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} className="text-gold/60" />
        </motion.div>
      </motion.div>

      {/* Side decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-gold/40" />
        <span className="text-white/30 text-[10px] font-poppins tracking-widest [writing-mode:vertical-lr]">
          EST. 2010
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
}
