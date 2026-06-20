import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-charcoal border border-white/10 p-8 md:p-10 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/40 hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 mx-auto mb-4 border border-gold/30 flex items-center justify-center">
                <Calendar size={20} className="text-gold" />
              </div>
              <h3 className="font-playfair text-2xl text-white mb-2">
                Book a <span className="text-gradient-gold italic">Consultation</span>
              </h3>
              <p className="font-poppins text-white/40 text-sm">
                Let's discuss your project vision
              </p>
              <div className="section-divider mx-auto mt-4" />
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-gold rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-playfair text-xl text-white mb-2">Thank You!</h4>
                <p className="font-poppins text-white/50 text-sm">
                  We'll contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder-white/20"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder-white/20"
                    placeholder="Email *"
                  />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder-white/20"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-charcoal">Select Project Type</option>
                    <option value="interior" className="bg-charcoal">Interior Design</option>
                    <option value="architecture" className="bg-charcoal">Architecture Planning</option>
                    <option value="structural" className="bg-charcoal">Structural Design</option>
                    <option value="residential" className="bg-charcoal">Residential Project</option>
                    <option value="commercial" className="bg-charcoal">Commercial Project</option>
                    <option value="fullservice" className="bg-charcoal">Full-Service Design</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white font-poppins text-sm focus:border-gold/50 focus:outline-none transition-colors resize-none placeholder-white/20"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group relative overflow-hidden w-full px-8 py-3.5 bg-gold text-dark font-poppins text-sm tracking-wider uppercase transition-all duration-500 hover:bg-gold-light flex items-center justify-center gap-3"
                >
                  <span className="relative z-10">Book Consultation</span>
                  <Send size={14} className="relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
