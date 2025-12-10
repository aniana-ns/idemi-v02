
import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { Flag } from 'lucide-react';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const NationalAssociations: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'National Associations | IDEMI', description: 'Partnerships with Indian organizations' }} path={location.pathname} />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">National Associations</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Working together for national development.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <div className="flex items-center gap-4 mb-6">
                    <Flag size={32} className="text-secondary" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">National Partners</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    We work closely with various national bodies to support the domestic industry and ensure quality assurance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h3 className="font-bold text-lg text-primary dark:text-blue-400 mb-2">Standardization Bodies</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                            <li>BIS (Bureau of Indian Standards)</li>
                            <li>NABL (National Accreditation Board for Testing and Calibration Laboratories)</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h3 className="font-bold text-lg text-primary dark:text-blue-400 mb-2">Industry Associations</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                            <li>IEEMA (Indian Electrical & Electronics Manufacturers' Association)</li>
                            <li>CSI (Computer Society of India)</li>
                            <li>MCCIA (Mahratta Chamber of Commerce, Industries and Agriculture)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NationalAssociations;
