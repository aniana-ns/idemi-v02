
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, ArrowLeft, Search, Filter, Building2, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'AICTE Approved Diploma Courses',
  description: 'Full-time diploma courses approved by All India Council for Technical Education (AICTE), New Delhi. These courses are designed to provide in-depth theoretical knowledge backed by extensive practical training in our state-of-the-art workshops.',
  image: 'https://images.unsplash.com/photo-1581093458791-9f30398bfda6?auto=format&fit=crop&q=80',
  courses: [
    { 
      title: 'Diploma in Tool & Die Making', 
      duration: '4 Years', 
      eligibility: 'SSC (10th) Pass with 60%', 
      desc: 'A specialized course focusing on the design and manufacturing of Press Tools, Moulds, Jigs & Fixtures. The curriculum includes 3 years of institutional training and 1 year of industrial internship.',
      outcomes: 'Graduates are highly sought after as Tool Designers, Mould Makers, and CNC Programmers in Automotive and Manufacturing sectors.'
    },
    { 
      title: 'Diploma in Mechatronics', 
      duration: '3 Years', 
      eligibility: 'SSC (10th) Pass', 
      desc: 'An integrated curriculum combining Mechanical, Electronics, Computer, and Control Systems. Students learn about Robotics, PLC, SCADA, and Industrial Automation.',
      outcomes: 'Prepares students for careers in Industrial Automation, Robotics Maintenance, Control Systems Engineering, and Smart Manufacturing.'
    },
    { 
      title: 'Diploma in 3D Animation & Graphics', 
      duration: '3 Years', 
      eligibility: 'SSC (10th) Pass', 
      desc: 'Comprehensive training in 3D Modeling, Texturing, Lighting, Animation, and VFX using industry-standard software like Maya, 3ds Max, and Adobe Suite.',
      outcomes: 'Opens doors to the Media & Entertainment industry as 3D Modelers, Animators, VFX Artists, and Motion Graphics Designers.'
    }
  ]
};

const AICTECourses: React.FC = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('All');

  // Extract unique durations for filter
  const durations = ['All', ...Array.from(new Set(DATA.courses.map(c => c.duration)))];

  const filteredCourses = DATA.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = selectedDuration === 'All' || course.duration === selectedDuration;
    return matchesSearch && matchesDuration;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'AICTE Approved Diploma Courses | IDEMI Training', 
          description: 'Government certified 3 & 4 year Diploma courses in Tool & Die Making, Mechatronics, and 3D Animation approved by AICTE for 10th pass students.',
          keywords: ['AICTE Diploma', 'Tool & Die Making', 'Mechatronics', '3D Animation', 'Technical Education', 'Skill Development'],
          schemaType: 'Course'
        }} 
        path="/training/aicte" 
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
          {/* Sidebar */}
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">{DATA.description}</p>
                
                {/* Schedule Notification Banner */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full text-primary dark:text-blue-200">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">Admission Schedule 2025-26</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Check important dates for merit lists and counseling.</p>
                        </div>
                    </div>
                    <Link to="/training/aicte/schedule" className="text-sm font-bold bg-white dark:bg-gray-800 text-primary dark:text-blue-400 px-4 py-2 rounded-md shadow-sm hover:shadow transition border border-gray-200 dark:border-gray-700 whitespace-nowrap">
                        View Schedule &rarr;
                    </Link>
                </div>

                <img src={DATA.image} alt="AICTE Courses" className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow-md" />

                {/* Uniform Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search courses..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                        />
                    </div>
                    <div className="relative min-w-[180px]">
                        <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
                        <select 
                            value={selectedDuration}
                            onChange={(e) => setSelectedDuration(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition appearance-none cursor-pointer"
                        >
                            {durations.map(d => <option key={d} value={d}>{d === 'All' ? 'All Durations' : d}</option>)}
                        </select>
                    </div>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                        {filteredCourses.map((course, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-6 group hover:-translate-y-1 duration-300">
                                <div className="md:w-2/3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <BookOpen size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{course.title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                        {course.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-200 mb-4">
                                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded border border-gray-200 dark:border-gray-700">
                                            <Clock size={16} className="text-secondary" /> 
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded border border-gray-200 dark:border-gray-700">
                                            <Award size={16} className="text-secondary" /> 
                                            <span>{course.eligibility}</span>
                                        </div>
                                    </div>
                                    {course.outcomes && (
                                        <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-600">
                                            <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                <Briefcase size={14} className="text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                                                <span><strong>Career Outcome:</strong> {course.outcomes}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-1/3 flex items-center">
                                    <Link 
                                        to={`/student-registration?course=${encodeURIComponent(course.title)}`} 
                                        className="w-full py-3 bg-primary text-white rounded-lg font-bold text-center hover:bg-blue-800 transition shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400">No courses found matching your criteria.</p>
                        <button 
                            onClick={() => { setSearchTerm(''); setSelectedDuration('All'); }}
                            className="mt-2 text-primary hover:underline font-medium"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Uniform Affiliations Section */}
                <div className="mt-16 border-t border-gray-100 dark:border-gray-700 pt-8">
                    <h3 className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Recognized & Accredited By</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <Building2 size={40} />
                            <span className="font-bold text-xs">AICTE</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <GraduationCap size={40} />
                            <span className="font-bold text-xs">Govt. of India</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <Building2 size={40} />
                            <span className="font-bold text-xs">MSME</span>
                        </div>
                    </div>
                </div>

             </div>
          </div>
      </div>
    </div>
  );
};

export default AICTECourses;
