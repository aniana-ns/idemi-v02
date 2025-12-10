
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';

const PMKVYScheme: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'PMKVY Scheme | IDEMI', 
          description: 'Pradhan Mantri Kaushal Vikas Yojana - Flagship skill certification scheme.',
          keywords: ['PMKVY', 'Pradhan Mantri Kaushal Vikas Yojana', 'Skill Certification', 'RPL', 'Skill India', 'Short Term Training'],
          schemaType: 'Service'
        }} 
        path="/schemes/pmkvky" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PMKVY Scheme</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">Pradhan Mantri Kaushal Vikas Yojana</p>
                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    The flagship scheme of the Ministry of Skill Development & Entrepreneurship (MSDE). The objective of this Skill Certification Scheme is to enable a large number of Indian youth to take up industry-relevant skill training that will help them in securing a better livelihood.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {[
                            'Short Term Training for School Dropouts',
                            'Recognition of Prior Learning (RPL)',
                            'Kaushal and Rozgar Mela',
                            'Placement Assistance'
                        ].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <CheckCircle size={20} className="text-secondary shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default PMKVYScheme;
