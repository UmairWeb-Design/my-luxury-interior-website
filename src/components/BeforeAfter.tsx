import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function BeforeAfter() {
  const { ref, isInView } = useInView(0.1);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-poppins text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Transformation
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Before & <span className="italic text-gradient-gold">After</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-poppins text-white/50 text-sm max-w-xl mx-auto">
            Drag the slider to reveal our stunning transformations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative overflow-hidden cursor-col-resize select-none h-[300px] sm:h-[400px] md:h-[500px]"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After image (full width background) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200)',
              }}
            />

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/6538939/pexels-photo-6538939.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200)',
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            />

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-gold z-10"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-dark"
                >
                  <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-dark/70 backdrop-blur-sm px-3 py-1 z-20">
              <span className="font-poppins text-white text-xs tracking-wider uppercase">Before</span>
            </div>
            <div className="absolute top-4 right-4 bg-dark/70 backdrop-blur-sm px-3 py-1 z-20">
              <span className="font-poppins text-white text-xs tracking-wider uppercase">After</span>
            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
