
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const AutoCADTraining: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'AutoCAD Mechanical Training | IDEMI', description: '2D Drafting & Design Course' }} path="/courses/mechanical-courses/autocad" />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AutoCAD Mechanical</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">2D Drafting & Design</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} className="mr-1" /> Back to Training
        </Link>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Industry standard training for 2D drafting and detailing. Learn to create precise technical drawings.</p>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Course Content</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                <li>Drawing commands & Modify tools</li>
                <li>Layers, Blocks & Attributes</li>
                <li>Isometric Drawing</li>
                <li>Dimensioning & Tolerancing</li>
                <li>Plotting & Printing</li>
            </ul>

            <Link to="/student-registration?course=AutoCAD" className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition">
                Register Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AutoCADTraining;
