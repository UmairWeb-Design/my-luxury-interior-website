import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MessageSquare, PencilRuler, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    description: 'We begin with an in-depth discussion to understand your vision, lifestyle, and goals.',
  },
  {
    icon: PencilRuler,
    step: '02',
    title: 'Design Concept',
    description: 'Our team creates detailed design concepts with 3D visualizations for your approval.',
  },
  {
    icon: HardHat,
    step: '03',
    title: 'Execution',
    description: 'Expert craftsmen bring the design to life with premium materials and meticulous attention.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Reveal',
    description: 'The final walkthrough unveils your transformed space, exceeding every expectation.',
  },
];

export default function Process() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Subtle diagonal lines background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-gold text-xs tracking-[0.4em] uppercase mb-4">
            How We Work
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our <span className="italic text-gradient-gold">Process</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-gold/20 to-transparent" />
                )}

                {/* Step number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto border border-white/10 group-hover:border-gold/30 flex items-center justify-center transition-all duration-500 group-hover:bg-gold/5">
                    <Icon size={28} className="text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 font-playfair text-xs text-gold/40 font-bold">
                    {item.step}
                  </span>
                </div>

                <h4 className="font-playfair text-lg text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="font-poppins text-white/40 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
