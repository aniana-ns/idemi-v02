
import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { Globe } from 'lucide-react';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const InternationalAssociations: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'International Associations | IDEMI', description: 'Global collaborations and memberships' }} path={location.pathname} />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">International Associations</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Collaborating with global bodies for excellence.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <div className="flex items-center gap-4 mb-6">
                    <Globe size={32} className="text-primary dark:text-blue-400" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Global Partners</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    IDEMI maintains technical collaborations with international bodies to stay updated with the latest global standards and technologies. This helps us bring world-class practices to the Indian industry.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300">
                    <li><strong>UNIDO (United Nations Industrial Development Organization):</strong> Collaboration for technology upgradation and capacity building.</li>
                    <li><strong>ISTE (International Society for Technology in Education):</strong> Partnership for modernizing technical training curriculum.</li>
                    <li><strong>ISO (International Organization for Standardization):</strong> Active participation in technical committees for standard formulation.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalAssociations;
