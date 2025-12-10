
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';

const NBCFDCScheme: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'NBCFDC Schemes | IDEMI', 
          description: 'Skill development training programs sponsored by National Backward Classes Finance & Development Corporation.',
          keywords: ['NBCFDC', 'Backward Classes Training', 'Skill Development', 'Government Sponsored', 'Free Training', 'Self Employment'],
          schemaType: 'Service'
        }} 
        path="/schemes/nbcfdc" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">NBCFDC Schemes</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>
          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">Skill Development for Backward Classes</p>
                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8">
                    Skill development training programs sponsored by National Backward Classes Finance & Development Corporation (NBCFDC) for the target group of Backward Classes to enhance their competency and employability.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Objectives</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Provide vocational training</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Encourage self-employment</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Upgradation of technical skills</li>
                    </ul>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};
export default NBCFDCScheme;
