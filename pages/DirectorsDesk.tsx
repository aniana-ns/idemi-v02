
import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DirectorsDesk: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: "Director's Desk | IDEMI", description: 'Message from the Principal Director' }} path={location.pathname} />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Director's Desk</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Message from the Principal Director</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/3">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 w-full flex items-center justify-center">
                            {/* Placeholder for Director's Image */}
                            <span className="text-gray-500 dark:text-gray-400">Director's Photo</span>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="lead text-xl font-medium text-primary dark:text-blue-400 mb-6">
                            "Welcome to IDEMI."
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            Since its inception in 1968, IDEMI has been a torchbearer in the field of Instrumentation. We are committed to supporting the Indian industry, particularly MSMEs, through our quality services in Calibration, Testing, and Training.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Our goal is to become a world-class technology centre that fosters innovation and skill development. We continuously upgrade our infrastructure and technical capabilities to meet the evolving needs of the industry.
                        </p>
                        <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-4">
                            <p className="font-bold text-gray-900 dark:text-white text-lg">Shri. Sanjeevkumar</p>
                            <p className="text-sm text-secondary dark:text-amber-500 font-bold uppercase">Principal Director, IDEMI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsDesk;
