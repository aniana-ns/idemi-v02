
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, HelpCircle } from 'lucide-react';

const QuickAccessBar: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 items-end hidden md:flex">
      <Link
        to="/contact"
        className="flex items-center gap-3 bg-secondary text-white pl-3 pr-4 py-3 rounded-l-lg shadow-xl hover:bg-amber-700 transition-transform transform translate-x-[calc(100%-48px)] hover:translate-x-0 duration-300 group border-l-2 border-white/20"
        aria-label="Contact Us"
      >
        <Mail size={24} className="shrink-0" />
        <span className="font-bold whitespace-nowrap text-sm tracking-wide">Contact Us</span>
      </Link>
      
      <Link
        to="/training/enquiry"
        className="flex items-center gap-3 bg-primary text-white pl-3 pr-4 py-3 rounded-l-lg shadow-xl hover:bg-blue-800 transition-transform transform translate-x-[calc(100%-48px)] hover:translate-x-0 duration-300 group border-l-2 border-white/20"
        aria-label="Enquiry Form"
      >
        <HelpCircle size={24} className="shrink-0" />
        <span className="font-bold whitespace-nowrap text-sm tracking-wide">Enquiry</span>
      </Link>
    </div>
  );
};

export default QuickAccessBar;
