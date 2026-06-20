import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../data/constants';

export default function Testimonials() {
  const { ref, isInView } = useInView(0.1);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/6207940/pexels-photo-6207940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000)',
        }}
      />
      <div className="absolute inset-0 bg-dark/93" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Client Stories
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What Our <span className="italic text-gradient-gold">Clients</span> Say
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
            <Quote size={48} className="text-gold/20" />
          </div>

          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-playfair text-lg sm:text-xl md:text-2xl text-white/80 italic leading-relaxed mb-8 max-w-2xl">
                  "{TESTIMONIALS[current].text}"
                </p>

                {/* Divider */}
                <div className="w-12 h-[1px] bg-gold/40 mb-4" />

                {/* Author */}
                <div>
                  <p className="font-poppins text-gold text-sm font-medium tracking-wider">
                    {TESTIMONIALS[current].name}
                  </p>
                  <p className="font-poppins text-white/40 text-xs mt-1">Verified Client</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
