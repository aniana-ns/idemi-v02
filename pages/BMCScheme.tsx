
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';

const BMCScheme: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'BMC Sponsored Training | IDEMI', 
          description: 'Skill training programs sponsored by Brihanmumbai Municipal Corporation (BMC) for Mumbai youth.',
          keywords: ['BMC Training', 'Mumbai Municipal Corporation', 'Urban Skill Development', 'Free Courses Mumbai', 'Vocational Training'],
          schemaType: 'Service'
        }} 
        path="/schemes/bmc" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">BMC Sponsored Training</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>
          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">Municipal Corporation Initiatives</p>
                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8">
                    Skill training programs sponsored by the Brihanmumbai Municipal Corporation (BMC) for the youth of Mumbai, focusing on creating local employment opportunities.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Program Highlights</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-secondary"/> Free for eligible candidates</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-secondary"/> Focused on urban trades</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-secondary"/> Practical oriented training</li>
                    </ul>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};
export default BMCScheme;
