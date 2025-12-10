
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

interface DownloadsToolbarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const CATEGORIES = [
  { label: 'Active Tenders', path: '/downloads/active-tenders' },
  { label: 'Notifications', path: '/downloads/notifications' },
  { label: 'Annual Reports', path: '/downloads/annual-reports' },
  { label: 'Prospectus', path: '/downloads/prospectus' },
  { label: 'Archived Tenders', path: '/downloads/archive-tenders' },
  { label: 'Procurement Policy', path: '/downloads/procurement-policy' },
  { label: 'Rules', path: '/downloads/procurement-rules' },
];

const DownloadsToolbar: React.FC<DownloadsToolbarProps> = ({ searchTerm, onSearch }) => {
  const location = useLocation();

  return (
    <div className="mb-6 space-y-4 reveal-on-scroll">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Filter documents by title or keyword..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none shadow-sm transition"
        />
      </div>

      {/* Category Tabs (Scrollable) */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar touch-pan-x">
        {CATEGORIES.map((cat) => {
          const isActive = location.pathname === cat.path;
          return (
            <Link
              key={cat.path}
              to={cat.path}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                isActive
                  ? 'bg-primary text-white border-primary shadow-md transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300'
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadsToolbar;
