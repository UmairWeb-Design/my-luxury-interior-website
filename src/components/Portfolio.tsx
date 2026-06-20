import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { PORTFOLIO } from '../data/constants';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'architecture', label: 'Architecture' },
];

export default function Portfolio() {
  const { ref, isInView } = useInView(0.05);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const filteredItems =
    activeCategory === 'all'
      ? PORTFOLIO
      : PORTFOLIO.filter((item) => item.category === activeCategory);

  const openLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-poppins text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Featured <span className="italic text-gradient-gold">Portfolio</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-poppins text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            Explore our curated collection of luxury residential, commercial, and architectural
            projects.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-poppins text-sm tracking-wider px-6 py-2.5 border transition-all duration-400 uppercase ${
                activeCategory === cat.id
                  ? 'border-gold bg-gold text-dark'
                  : 'border-white/15 text-white/60 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden cursor-pointer ${
                  index === 0 || index === 5 ? 'sm:row-span-2' : ''
                }`}
                onClick={() => openLightbox(item.image, item.title)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 || index === 5 ? 'h-[400px] sm:h-full' : 'h-[280px] sm:h-[300px]'
                  }`}
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center mb-3 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn size={18} className="text-gold" />
                  </div>
                  <h4 className="font-playfair text-lg text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                  <p className="font-poppins text-gold/70 text-xs tracking-wider uppercase mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.category}
                  </p>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-2 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center lightbox-overlay bg-dark/90"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt={lightboxTitle}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
                <h4 className="font-playfair text-xl text-white">{lightboxTitle}</h4>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-gold text-dark flex items-center justify-center hover:bg-gold-light transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
