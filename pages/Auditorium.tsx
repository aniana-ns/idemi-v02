
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mic2, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const Auditorium: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Auditorium | IDEMI', description: 'Conference and Event Facilities.', schemaType: 'Service' }} path="/services/auditorium" />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Services
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Auditorium</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>
          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Conference & Event Facilities</p>
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80" alt="Auditorium" className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Our campus features a fully air-conditioned auditorium and seminar halls for conducting workshops, conferences, and training sessions.</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Facilities</h3>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary"/> <strong>Main Auditorium:</strong> Seating capacity of 200+. High-quality audio-visual system.</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary"/> <strong>Seminar Halls:</strong> Smaller halls for technical presentations and meetings.</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-secondary"/> <strong>Video Conferencing:</strong> Facility for remote lectures and meetings.</li>
                </ul>
             </div>
          </div>
      </div>
    </div>
  );
};
export default Auditorium;
