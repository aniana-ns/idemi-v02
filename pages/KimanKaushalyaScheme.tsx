
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';

const KimanKaushalyaScheme: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Kiman Kaushalya Yojana | IDEMI', 
          description: 'Agricultural Skill Development Initiative for repairing and maintenance of farm machinery.',
          keywords: ['Kiman Kaushalya', 'Agricultural Training', 'Farm Machinery Repair', 'Pump Maintenance', 'Rural Skill Development', 'Farmers Training'],
          schemaType: 'Service'
        }} 
        path="/schemes/kiman-kaushalya" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kiman Kaushalya Yojana</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>
          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">Skill Development for Agriculture</p>
                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8">
                    A skill development initiative aimed at the agricultural sector, providing training in repairing and maintenance of agricultural pumps and machinery.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Training Areas</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600"/> Repair of Agricultural Pumps</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600"/> Maintenance of Farm Machinery</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600"/> Electrical Safety in Farms</li>
                    </ul>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};
export default KimanKaushalyaScheme;
