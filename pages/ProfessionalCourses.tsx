
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Clock, CheckCircle, Search, Filter, Building2, GraduationCap, Target, Scale, ShieldCheck, Zap, Sun, Ruler } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'Professional Courses',
  description: 'Specialized workshops and Government Certificate courses designed for industry professionals, lab technicians, and engineers. These programs focus on Calibration practices, ISO/IEC 17025 compliance, and emerging manufacturing technologies.',
  image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80',
  categories: [
    {
        name: "Calibration & Testing Practices",
        icon: <Scale className="text-blue-500" size={24} />,
        courses: [
            {
                title: 'Workshop on Dimensional Metrology',
                duration: '3 - 5 Days',
                type: 'Workshop',
                features: ['Linear & Angular Measurement', 'Use of CMM', 'GD&T Basics'],
                outcomes: 'Proficiency in precision measurement and inspection techniques.'
            },
            {
                title: 'Workshop on Calibration of Pressure, Temperature & Flow',
                duration: '3 - 5 Days',
                type: 'Workshop',
                features: ['Dead Weight Testers', 'Thermal Mapping', 'Flow Meter Calibration'],
                outcomes: 'Hands-on experience with primary and secondary standards.'
            },
            {
                title: 'Workshop on Calibration of Electrical & Electronics Instruments',
                duration: '3 - 5 Days',
                type: 'Workshop',
                features: ['Multimeter Calibration', 'Energy Meter Testing', 'Uncertainty Calculation'],
                outcomes: 'Skill upgradation for Electro-Technical lab personnel.'
            }
        ]
    },
    {
        name: "Quality Related (ISO/IEC 17025:2017)",
        icon: <ShieldCheck className="text-green-600" size={24} />,
        courses: [
            {
                title: 'General Requirements for Competence of Testing & Calibration Labs',
                subtitle: '& Internal Audit as per ISO/IEC 17025:2017',
                duration: '4 Days',
                type: 'Certification',
                features: ['Clause-by-clause explanation', 'Internal Audit Process', 'QMS Documentation'],
                outcomes: 'Qualify as an Internal Auditor for NABL accredited labs.'
            },
            {
                title: 'Workshop on Estimation & Expression of Total Uncertainty',
                subtitle: 'in Measurement as per NABL 141',
                duration: '2 Days',
                type: 'Workshop',
                features: ['Statistical Analysis', 'Type A & Type B Evaluation', 'Reporting Results'],
                outcomes: 'Master the calculation of Measurement Uncertainty for audits.'
            }
        ]
    },
    {
        name: "Electrical & Electronics Courses",
        icon: <Zap className="text-amber-500" size={24} />,
        courses: [
            {
                title: 'Government Certificate Course on LED Light Manufacturing',
                duration: '1 Month',
                type: 'Govt. Certificate',
                features: ['LED Driver Circuit Design', 'Assembly & Testing', 'Photometry Basics'],
                outcomes: 'Start your own LED lighting manufacturing business.'
            },
            {
                title: 'Government Certificate Course on Solar Energy Technology',
                duration: '1 Month',
                type: 'Govt. Certificate',
                features: ['PV Panel Installation', 'Inverter Systems', 'Maintenance & Safety'],
                outcomes: 'Technician roles in the booming Solar Energy sector.'
            }
        ]
    }
  ]
};

const ProfessionalCourses: React.FC = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten courses for search, but keep structure for display if no search
  const filterCourses = (categoryCourses: any[]) => {
      if (!searchTerm) return categoryCourses;
      return categoryCourses.filter(course => 
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (course.subtitle && course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Professional Courses & Workshops | IDEMI', 
          description: 'Training programs on Calibration, ISO/IEC 17025 Internal Audit, Measurement Uncertainty, LED Manufacturing, and Solar Energy.',
          keywords: ['Professional Courses', 'Calibration Workshop', 'ISO 17025 Training', 'Internal Audit Course', 'Measurement Uncertainty', 'LED Manufacturing', 'Solar Energy Course'],
          schemaType: 'Course'
        }} 
        path="/training/professional-courses" 
      />
      
      {/* Uniform Header Strip */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{DATA.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">{DATA.description}</p>
                
                <img src={DATA.image} alt="Professional Training" className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow-md" />

                {/* Search Bar */}
                <div className="mb-10 relative bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                    <Search className="absolute left-7 top-7 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search for workshops or courses..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                    />
                </div>

                <div className="space-y-12">
                    {DATA.categories.map((cat, idx) => {
                        const visibleCourses = filterCourses(cat.courses);
                        if (visibleCourses.length === 0) return null;

                        return (
                            <div key={idx} className="animate-fade-in">
                                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        {cat.icon}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{cat.name}</h2>
                                </div>

                                <div className="grid gap-6">
                                    {visibleCourses.map((course: any, cIdx: number) => (
                                        <div key={cIdx} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition group">
                                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                                                        {course.title}
                                                    </h3>
                                                    {course.subtitle && (
                                                        <p className="text-sm font-medium text-secondary dark:text-amber-500 mt-1">{course.subtitle}</p>
                                                    )}
                                                </div>
                                                <div className="shrink-0 flex gap-2">
                                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-xs font-bold uppercase text-gray-600 dark:text-gray-300">
                                                        {course.type}
                                                    </span>
                                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800 text-xs font-bold text-primary dark:text-blue-300 flex items-center gap-1">
                                                        <Clock size={12} /> {course.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="mb-6">
                                                <ul className="grid md:grid-cols-2 gap-2">
                                                    {course.features.map((feat: string, fIdx: number) => (
                                                        <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                            <CheckCircle size={14} className="text-green-500 shrink-0" /> {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {course.outcomes && (
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600 flex-wrap gap-4">
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                        <Target size={14} /> {course.outcomes}
                                                    </p>
                                                    <Link 
                                                        to={`/student-registration?course=${encodeURIComponent(course.title)}`} 
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-primary dark:text-blue-400 hover:underline"
                                                    >
                                                        Register Now <ArrowLeft size={16} className="rotate-180" />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                 {/* Affiliations Section */}
                <div className="mt-16 border-t border-gray-100 dark:border-gray-700 pt-8">
                    <h3 className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Course Certification By</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <Building2 size={40} />
                            <span className="font-bold text-xs">IDEMI</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <GraduationCap size={40} />
                            <span className="font-bold text-xs">Govt. of India</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default ProfessionalCourses;
