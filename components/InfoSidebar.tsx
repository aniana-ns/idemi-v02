
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Info } from 'lucide-react';

const INFO_MENU = [
  { label: 'About IDEMI', path: '/about' },
  { label: 'IDEMI At a Glance', path: '/at-glance' },
  { label: 'Vision & Mission', path: '/vision-mission' },
  { label: "Director's Desk", path: '/directors-desk' },
  { label: 'Aerospace Standard (AS9100 Rev.D)', path: '/ISO-AS9100-2016' },
  { label: 'ISO 9001:2015 Certificate', path: '/ISO-9001-2015-Certificate' },
  { label: 'NABL Certificate', path: '/NABL-Certificate' },
  { label: 'Quality Policy (ISO 17025)', path: '/ISO-IEC' },
  { label: 'Quality Policy (ISO 9001)', path: '/ISO-AS9100' },
  { label: "Who's Who", path: '/whos-who' },
  { label: 'Committee', path: '/committee' },
  { label: 'CVO & Vigilance', path: '/vigilance' },
  { label: 'Extension Centres', path: '/extensions' },
  { label: 'Careers', path: '/careers' },
  { label: 'Holidays', path: '/holidays' },
  { label: 'Past Performance', path: '/past_performance' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'RTI Act', path: '/rti' },
  { label: 'International Associations', path: '/international-associations' },
  { label: 'National Associations', path: '/national-associations' },
  { label: 'How to Reach', path: '/how-to-reach' },
  { label: 'Sitemap', path: '/sitemap' },
];

const InfoSidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sticky top-24">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-primary dark:text-blue-400">
                <Info size={20} />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Information</h3>
        </div>
        
        <div className="space-y-1">
          {INFO_MENU.map((item, idx) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={idx}
                to={item.path}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-white shadow-md translate-x-1'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:translate-x-1'
                }`}
              >
                <span className="text-sm">{item.label}</span>
                {!isActive && <ChevronRight size={16} className="text-gray-400" />}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700">
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Contact Us</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Have questions? Reach out to our administration department.
        </p>
        <Link to="/contact" className="text-sm font-bold text-primary dark:text-blue-400 hover:underline">
            Get in Touch &rarr;
        </Link>
      </div>
    </div>
  );
};

export default InfoSidebar;
