import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/constants';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`tel:${BUSINESS.phoneRaw}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          <div className="relative">
            {/* Pulse ring */}
            <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-25" />
            {/* Button */}
            <div className="relative w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30">
              <Phone size={22} className="text-dark" />
            </div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
