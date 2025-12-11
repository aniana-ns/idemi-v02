
import React from 'react';
import { Link } from '../lib/cms';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Users, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const socialLinkClass = "p-2 bg-slate-800 rounded hover:bg-secondary transition focus:outline-none text-white";
  const footerLinkClass = "hover:text-secondary transition flex items-center gap-2 focus:outline-none rounded px-1 -ml-1";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-secondary" role="contentinfo" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer Information</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">About IDEMI</h3>
            <p className="text-sm leading-relaxed mb-6">
              A Government of India Society under Ministry of MSME. We provide services in Calibration, Testing, Training, and Tool Manufacturing to support the growth of Indian Industry.
            </p>
            <div className="flex gap-4" role="list" aria-label="Social media links">
              <a href="https://www.facebook.com/IDEMIMumbai/" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="Visit our Facebook page">
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a href="https://twitter.com/idemimumbai" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="Visit our Twitter profile">
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/idemi-mumbai" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="Visit our LinkedIn page">
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/idemi_mumbai/" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="Visit our Instagram profile">
                <Instagram size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <nav aria-label="Footer Quick Links">
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className={footerLinkClass}>Home</Link></li>
                <li><Link to="/about" className={footerLinkClass}>About Us</Link></li>
                <li><Link to="/services" className={footerLinkClass}>Our Services</Link></li>
                <li><Link to="/training" className={footerLinkClass}>Training Programs</Link></li>
                <li><Link to="/contact" className={footerLinkClass}>Contact Us</Link></li>
                <li><Link to="/newsletter" className={footerLinkClass}>Newsletter</Link></li>
                <li><Link to="/sitemap" className={footerLinkClass}>Sitemap</Link></li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Our Core Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><span aria-hidden="true">•</span> Electrical Calibration</li>
              <li className="flex items-center gap-2"><span aria-hidden="true">•</span> Mechanical Testing</li>
              <li className="flex items-center gap-2"><span aria-hidden="true">•</span> Product Design (CAD)</li>
              <li className="flex items-center gap-2"><span aria-hidden="true">•</span> 3D Prototyping</li>
              <li className="flex items-center gap-2"><span aria-hidden="true">•</span> Skill Development</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0" size={20} aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={20} aria-hidden="true" />
                <a href={`tel:${CONTACT_INFO.phone.split('/')[0].trim()}`} className={footerLinkClass}>{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={20} aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`} className={footerLinkClass}>{CONTACT_INFO.email}</a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-center md:text-left">© {new Date().getFullYear()} IDEMI Mumbai. All Rights Reserved.</p>
          
          {/* Visitor Counter */}
          <div 
            className="flex items-center gap-2 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700 overflow-hidden"
            role="status"
            aria-label="Website Visitor Counter"
          >
            <Users size={14} className="text-secondary shrink-0" aria-hidden="true" />
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider shrink-0">Visitors:</span>
            
            <div className="flex items-center justify-center">
                <img 
                    src="https://counter1.optistats.ovh/private/freecounterstat.php?c=cy2r1zlh28p18am8jxn2xy4fe2zdsayg" 
                    alt="Number of visitors" 
                    style={{ border: 0 }}
                />
            </div>
          </div>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition focus:outline-none rounded px-1">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition focus:outline-none rounded px-1">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
