
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';

const ESDPATIScheme: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'ESDP-ATI Scheme | IDEMI', 
          description: 'Entrepreneurship Skill Development Programme for self-employment.',
          keywords: ['ESDP', 'Entrepreneurship Development', 'Skill Training', 'Business Plan', 'Startups', 'Self Employment'],
          schemaType: 'Service'
        }} 
        path="/schemes/esdpati" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">ESDP-ATI Scheme</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">Entrepreneurship Skill Development</p>
                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    A comprehensive program aimed at nurturing talent for self-employment. The scheme covers various aspects of starting a business, including technical skills, financial management, and marketing strategies.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Program Components</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {[
                            'Motivation Camps',
                            'Technical Skill Training',
                            'Management Development',
                            'Business Plan Preparation'
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

export default ESDPATIScheme;
