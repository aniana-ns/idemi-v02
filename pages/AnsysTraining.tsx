
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const AnsysTraining: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'ANSYS Training | IDEMI', description: 'Finite Element Analysis (FEA) Course' }} path="/courses/mechanical-courses/ansys" />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ANSYS Training</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Finite Element Analysis (FEA)</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} className="mr-1" /> Back to Training
        </Link>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Master the art of engineering simulation with our ANSYS training course. Learn to analyze strength, toughness, elasticity, temperature distribution, electromagnetism, fluid flow, and other attributes.</p>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Course Highlights</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                <li>Static Structural Analysis</li>
                <li>Thermal Analysis (Steady state & Transient)</li>
                <li>CFD (Computational Fluid Dynamics) basics</li>
                <li>Dynamic Analysis (Modal, Harmonic)</li>
                <li>Project-based learning</li>
            </ul>

            <Link to="/student-registration?course=ANSYS" className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition">
                Register Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AnsysTraining;
