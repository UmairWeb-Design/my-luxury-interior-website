import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ExternalLink,
} from 'lucide-react';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { useInView } from '../hooks/useInView';
import { BUSINESS } from '../data/constants';

export default function Contact() {
  const { ref, isInView } = useInView(0.05);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Contact <span className="italic text-gradient-gold">Us</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="font-poppins text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            Ready to transform your space? Let's discuss your project and bring your vision to
            life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-poppins text-white/50 text-xs tracking-wider uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder-white/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-poppins text-white/50 text-xs tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder-white/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-poppins text-white/50 text-xs tracking-wider uppercase mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder-white/20"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block font-poppins text-white/50 text-xs tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 resize-none placeholder-white/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="group relative overflow-hidden w-full sm:w-auto px-10 py-4 bg-gold text-dark font-poppins text-sm tracking-wider uppercase transition-all duration-500 hover:bg-gold-light disabled:opacity-50 flex items-center justify-center gap-3"
              >
                <span className="relative z-10">
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </span>
                <Send
                  size={16}
                  className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info cards */}
            <div className="space-y-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="group flex items-start gap-4 p-4 border border-white/[0.06] hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 group-hover:bg-gold/10 transition-all duration-300 flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-poppins text-white/40 text-xs tracking-wider uppercase mb-1">
                    Phone (Click to call)
                  </p>
                  <p className="font-poppins text-white text-sm group-hover:text-gold transition-colors">
                    {BUSINESS.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 border border-white/[0.06]">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-poppins text-white/40 text-xs tracking-wider uppercase mb-1">
                    Address
                  </p>
                  <p className="font-poppins text-white text-sm">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-white/[0.06]">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-poppins text-white/40 text-xs tracking-wider uppercase mb-1">
                    Hours
                  </p>
                  <p className="font-poppins text-white text-sm">{BUSINESS.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-white/[0.06]">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-poppins text-white/40 text-xs tracking-wider uppercase mb-1">
                    Email
                  </p>
                  <p className="font-poppins text-white text-sm">{BUSINESS.email}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-poppins text-white/40 text-xs tracking-wider uppercase mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={BUSINESS.social.houzz}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="map-container overflow-hidden border border-white/[0.06]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584!2d-118.3040!3d34.0563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8d3b4a8f3b1%3A0x1234567890abcdef!2s823%20S%20Oxford%20Ave%20%2310%2C%20Los%20Angeles%2C%20CA%2090005!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bernini Design Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
