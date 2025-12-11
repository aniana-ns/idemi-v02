
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';

const UnigraphicsTraining: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Unigraphics (NX) Training | IDEMI', description: 'CAD/CAM/CAE Solution Course' }} path="/courses/mechanical-courses/unigraphics" />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Unigraphics (NX) Training</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Advanced CAD/CAM/CAE Solution</p>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Overview</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Comprehensive training on Siemens NX (Unigraphics) for product design and manufacturing. Ideal for mechanical engineers and designers.</p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Syllabus</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                    <li>Sketcher & Part Modeling</li>
                    <li>Assembly Design</li>
                    <li>Drafting & Detailing</li>
                    <li>Surface Modeling</li>
                    <li>Manufacturing (CAM) operations</li>
                </ul>

                <Link to="/student-registration?course=Unigraphics" className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition">
                    Register Now
                </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default UnigraphicsTraining;
