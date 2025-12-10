
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const Hostel: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Hostel Facilities | IDEMI', description: 'Student accommodation services.', schemaType: 'Service' }} path="/services/hostel" />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Services
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Hostel Facilities</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>
          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Student Accommodation</p>
                <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80" alt="Hostel" className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">IDEMI provides safe and comfortable hostel accommodation for outstation students enrolled in our long-term training programs.</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Amenities</h3>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Separate wings for Boys and Girls.</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> 24/7 Security and CCTV surveillance.</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Mess facility providing hygienic meals.</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Recreation room with TV and indoor games.</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Wi-Fi connectivity for study purposes.</li>
                </ul>
             </div>
          </div>
      </div>
    </div>
  );
};
export default Hostel;
