import { motion } from 'framer-motion';
import { useInView, useCounter } from '../hooks/useInView';
import { STATS } from '../data/constants';

function StatItem({ stat }: { stat: { label: string; value: number; suffix: string } }) {
  const { ref, isInView } = useInView(0.3);
  const count = useCounter(stat.value, 2500, isInView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-playfair text-4xl md:text-5xl text-gold mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="font-poppins text-white/50 text-xs tracking-[0.2em] uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-gold text-xs tracking-[0.4em] uppercase mb-4">
            About Us
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Crafting <span className="italic text-gradient-gold">Excellence</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
                alt="Bernini Design luxury interior"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-6 bg-gold px-6 py-4 shadow-2xl"
            >
              <p className="font-playfair text-3xl text-dark font-bold">15+</p>
              <p className="font-poppins text-dark/70 text-xs tracking-wider uppercase">
                Years of Excellence
              </p>
            </motion.div>

            {/* Decorative frame */}
            <div className="absolute top-4 left-4 w-20 h-20 border-t border-l border-gold/30" />
            <div className="absolute bottom-4 right-4 w-20 h-20 border-b border-r border-gold/30 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-6">
              A Premier Design Firm in <span className="text-gold">Los Angeles</span>
            </h3>
            <p className="font-poppins text-white/60 text-sm md:text-base leading-relaxed mb-6">
              Bernini Design is a distinguished interior and architectural design firm based in
              Los Angeles, dedicated to transforming spaces into extraordinary environments. With
              over 15 years of expertise, we blend luxury aesthetics with innovative design
              solutions to create spaces that are both timeless and functional.
            </p>
            <p className="font-poppins text-white/60 text-sm md:text-base leading-relaxed mb-8">
              Our team of world-class designers and architects brings together creativity,
              precision, and cost-efficiency to deliver projects that exceed expectations. From
              intimate residential spaces to grand commercial venues, every project receives our
              unwavering commitment to excellence and attention to detail.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Luxury Aesthetics', 'Innovation', 'Cost-Efficient', 'Award-Winning'].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gold rotate-45 flex-shrink-0" />
                    <span className="font-poppins text-white/80 text-sm">{item}</span>
                  </motion.div>
                )
              )}
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block font-poppins text-sm text-gold border-b border-gold/40 pb-1 hover:border-gold transition-all duration-300 tracking-wider uppercase"
            >
              Explore Our Services →
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
