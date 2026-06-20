import { motion } from 'framer-motion';
import {
  Palette,
  Building2,
  Ruler,
  Home,
  Building,
  Gem,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../data/constants';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Building2,
  Ruler,
  Home,
  Building,
  Gem,
};

export default function Services() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000)',
        }}
      />
      <div className="absolute inset-0 bg-dark/92" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-gold text-xs tracking-[0.4em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our <span className="italic text-gradient-gold">Services</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-poppins text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            From concept to completion, we deliver comprehensive design solutions that transform
            your vision into reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-white/[0.03] border border-white/[0.06] hover:border-gold/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-all duration-500 group-hover:bg-gold/10">
                      {Icon && (
                        <Icon
                          size={24}
                          className="text-gold transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-gold/50 group-hover:text-gold transition-all duration-300">
                    <span className="font-poppins text-xs tracking-wider uppercase">
                      Learn More
                    </span>
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/10 group-hover:border-gold/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
