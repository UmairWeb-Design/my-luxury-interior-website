import { Phone, MapPin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/constants';

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={scrollToTop} className="group mb-4">
              <span className="font-playfair text-2xl text-white tracking-wider">
                <span className="text-gradient-gold">B</span>ernini
              </span>
              <span className="ml-2 font-poppins text-gold text-[10px] tracking-[0.3em] uppercase">
                Design
              </span>
            </button>
            <p className="font-poppins text-white/40 text-sm leading-relaxed mt-4 max-w-xs">
              Transforming spaces into extraordinary environments. Premium interior design &
              architecture in Los Angeles.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={BUSINESS.social.houzz}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-poppins text-white/40 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold/40 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Interior Design',
                'Architecture Planning',
                'Structural Design',
                'Residential Projects',
                'Commercial Projects',
                'Full-Service Design',
              ].map((service) => (
                <li key={service}>
                  <span className="font-poppins text-white/40 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/40 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-start gap-3 text-white/40 hover:text-gold transition-colors group"
                >
                  <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-poppins text-sm">{BUSINESS.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/40">
                <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-poppins text-sm">{BUSINESS.email}</span>
              </li>
              <li className="flex items-start gap-3 text-white/40">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-poppins text-sm">{BUSINESS.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-white/30 text-xs tracking-wider">
            © 2026 Bernini Design. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/30 hover:text-gold transition-colors"
          >
            <span className="font-poppins text-xs tracking-wider">Back to Top</span>
            <div className="w-8 h-8 border border-white/10 group-hover:border-gold flex items-center justify-center transition-all duration-300">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
