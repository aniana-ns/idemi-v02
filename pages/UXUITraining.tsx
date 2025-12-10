
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PenTool, Layers, Monitor, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';

const UXUITraining: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'UX/UI Design Training | IDEMI', 
          description: 'Comprehensive course in User Experience (UX) and User Interface (UI) design. Learn wireframing, prototyping, and visual design tools like Figma.',
          keywords: ['UX Design', 'UI Design', 'User Experience', 'Figma Training', 'Web Design Course', 'Adobe XD'],
          schemaType: 'Course'
        }} 
        path="/uxui" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">UX/UI Design</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Design the Future</p>
                
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80" alt="UX UI Design" className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow-md" />

                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                    <p>
                        The UX/UI Design course at IDEMI is designed to transform beginners into professional digital product designers. 
                        You will learn the entire design process from user research and information architecture to visual design and prototyping.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <PenTool size={20} className="text-primary dark:text-blue-400" /> What You'll Learn
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5"/> User Research & Personas</li>
                            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5"/> Wireframing & Prototyping</li>
                            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5"/> Visual Design Principles</li>
                            <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5"/> Usability Testing</li>
                        </ul>
                    </div>
                    
                    <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-200 dark:border-gray-600">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Monitor size={20} className="text-secondary" /> Tools Covered
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InVision'].map((tool, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to start your design career?</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Join our next batch and build your portfolio.</p>
                    <Link 
                        to="/student-registration?course=UX%2FUI%20Design" 
                        className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg hover:scale-105"
                    >
                        Register for Course
                    </Link>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default UXUITraining;
