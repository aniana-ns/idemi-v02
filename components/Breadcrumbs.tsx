
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// Custom mappings for specific slugs to proper titles
const ROUTE_LABELS: Record<string, string> = {
  'aicte': 'AICTE Courses',
  'day-nulm': 'DAY-NULM Scheme',
  'ddugky': 'DDU-GKY Scheme',
  'pmkvky': 'PMKVY Scheme',
  'emi_emc': 'EMI / EMC Testing',
  'eos-formiga': '3D Printing (EOS)',
  'loca-test-facility': 'LOCA Test Facility',
  'sc_st_beneficiaries': 'SC/ST Beneficiaries',
  'nsqf': 'NSQF Compliant',
  'meity': 'MeitY Schemes',
  'rti': 'RTI Act',
  'arvr': 'AR / VR',
  'uxui': 'UX / UI Design',
  'led': 'LED Testing',
  'techtransfer': 'Technology Transfer',
  'smt-assembly': 'SMT Assembly',
  'extension-centre': 'Extension Centres'
};

// Map segments to redirect paths if the segment itself isn't a valid page
const PATH_REDIRECTS: Record<string, string> = {
  'extension-centre': '/extensions'
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Do not show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 py-3 sticky top-[115px] xl:top-[125px] z-30 transition-all duration-200 shadow-sm">
      <div className="container mx-auto px-4">
        <ol className="flex items-center text-sm text-gray-600 dark:text-gray-400 overflow-x-auto whitespace-nowrap no-scrollbar pb-1 sm:pb-0">
          <li className="flex items-center shrink-0">
            <Link to="/" className="hover:text-primary dark:hover:text-blue-400 transition-colors flex items-center font-medium group">
              <div className="p-1 rounded-md group-hover:bg-primary/10 dark:group-hover:bg-blue-400/10 transition-colors">
                 <Home size={16} className="mr-1.5" />
              </div>
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const isLast = index === pathnames.length - 1;
            
            // Strip file extension if present (e.g., .php, .html)
            const cleanName = name.replace(/\.[^/.]+$/, "");

            // Resolve display name: Use map if available, otherwise format string
            const displayName = ROUTE_LABELS[cleanName.toLowerCase()] || 
                                cleanName.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

            // Construct path, checking for redirects
            let routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            if (PATH_REDIRECTS[cleanName.toLowerCase()]) {
                routeTo = PATH_REDIRECTS[cleanName.toLowerCase()];
            }

            return (
              <li key={name} className="flex items-center">
                <ChevronRight size={14} className="mx-2 text-gray-400 shrink-0" />
                {isLast ? (
                  <span className="font-bold text-secondary dark:text-amber-500 bg-secondary/5 dark:bg-amber-500/10 px-2 py-0.5 rounded" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-primary dark:hover:text-blue-400 transition-colors font-medium hover:underline underline-offset-4 decoration-primary/30"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
