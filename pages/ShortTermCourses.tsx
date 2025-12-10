
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Clock, Award, Search, Filter, Building2, GraduationCap, Briefcase, IndianRupee, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'Short Term Courses',
  description: 'Skill enhancement programs designed for students, working professionals, and industry personnel. These courses focus on specific technologies to upgrade skills in a short duration, enhancing employability and productivity.',
  image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
  nsqfCourses: [
    { 
        title: 'Master Certificate Course in Mechatronics', 
        level: 'NSQF Level-6', 
        fee: '40,000', 
        image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Advanced Embedded Technology', 
        level: 'NSQF Level-6', 
        fee: '30,000', 
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
    },
    { 
        title: '3D Animation (Maya)', 
        level: 'NSQF Level-5', 
        fee: '30,000', 
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80'
    },
    { 
        title: '3D Animation & Special Effects', 
        level: 'NSQF Level-6', 
        fee: '60,000', 
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Graphics & Web Designing', 
        level: 'NSQF Level-5', 
        fee: '25,000', 
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Animation & Multimedia Technology', 
        level: 'NSQF Level-6', 
        fee: '60,000', 
        image: 'https://images.unsplash.com/photo-1626785774573-4b7993125651?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Film Making, Compositing & Editing', 
        level: 'NSQF Level-5', 
        fee: '25,000', 
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Advance Web Designer & Animator', 
        level: 'NSQF Level-6', 
        fee: '60,000', 
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Mobile Repairing - HHP (Handheld Products)', 
        level: 'NSQF Level-5', 
        fee: '16,000', 
        image: 'https://images.unsplash.com/photo-1591196153041-d402912678f9?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Room Air Conditioning & Home Appliances (RACHA)', 
        level: 'NSQF Level-5', 
        fee: '21,000', 
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
    },
    { 
        title: 'LED, LCD, Plasma TV, Home Theatre Repairing', 
        level: 'Audio-Video', 
        fee: '16,000', 
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80'
    },
    { 
        title: 'Advance Diploma in Computer Hardware & Network Management', 
        level: 'ADCHNM', 
        fee: '37,500', 
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80'
    }
  ],
  exemptedCourses: [
    { title: 'AUTOCAD', fee: '4,000', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80' },
    { title: 'CATIA', fee: '10,000', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80' },
    { title: 'CNC Programming', fee: '10,000', image: 'https://images.unsplash.com/photo-1565514020176-7822bd9b5311?auto=format&fit=crop&q=80' },
    { title: 'CREO Parametric (PRO-E)', fee: '10,000', image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80' },
    { title: 'Solidworks', fee: '10,000', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80' },
    { title: 'Unigraphics (NX)', fee: '10,000', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80' },
    { title: 'Master CAM', fee: '10,000', image: 'https://images.unsplash.com/photo-1622325373809-54d764726245?auto=format&fit=crop&q=80' },
    { title: 'Delcam', fee: '10,000', image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80' },
    { title: 'Advance Creo Parametric', fee: '10,000', image: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&q=80' },
    { title: 'Ansys', fee: '12,000', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80' }
  ]
};

const ShortTermCourses: React.FC = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');

  const filterList = (list: any[]) => {
      return list.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  const filteredNSQF = filterList(DATA.nsqfCourses);
  const filteredExempted = filterList(DATA.exemptedCourses);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Short Term Technical Courses - NSQF & CAD/CAM | IDEMI', 
          description: 'Short term skill development courses in Mechatronics, Animation, CNC, and CAD/CAM software. NSQF compliant and exempted courses to enhance employability.',
          keywords: ['Short Term Courses', 'NSQF Courses', 'AutoCAD', 'CNC Programming', 'Mechatronics', 'Animation Course', 'Skill Development', 'Mobile Repairing'],
          schemaType: 'Course'
        }} 
        path="/training/short-term-courses" 
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

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">{DATA.description}</p>

                <img src={DATA.image} alt="Short Term Courses" className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow-md" />
                
                {/* Search Bar */}
                <div className="mb-10 relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search courses..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/30 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition shadow-sm"
                    />
                </div>

                {/* Section 1: NSQF Courses */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                        <Award className="text-secondary dark:text-amber-500" /> NSQF Compliant Courses
                    </h2>
                    
                    {filteredNSQF.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredNSQF.map((course, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition group duration-300 flex flex-col">
                                    <div className="h-40 overflow-hidden relative">
                                        <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                                        <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                                            {course.level}
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {course.title}
                                        </h3>
                                        <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
                                            <div className="text-primary dark:text-blue-400 font-bold flex items-center gap-1">
                                                <IndianRupee size={16} /> {course.fee}
                                            </div>
                                            <Link 
                                                to={`/student-registration?course=${encodeURIComponent(course.title)}`}
                                                className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-secondary dark:hover:text-amber-500 transition"
                                            >
                                                Apply Now &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No NSQF courses found.</p>
                    )}
                </div>

                {/* Section 2: Exempted Courses */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                        <Zap className="text-blue-600 dark:text-blue-400" /> NSQF Exempted Courses
                    </h2>
                    
                    {filteredExempted.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {filteredExempted.map((course, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-500 transition p-4 group text-center hover:shadow-md">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-600 group-hover:border-primary dark:group-hover:border-blue-400 transition">
                                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">{course.title}</h3>
                                    <p className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center justify-center gap-0.5 mb-3">
                                        <IndianRupee size={14} /> {course.fee}
                                    </p>
                                    <Link 
                                        to={`/student-registration?course=${encodeURIComponent(course.title)}`}
                                        className="block w-full py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition"
                                    >
                                        Register
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No exempted courses found.</p>
                    )}
                </div>
                
                {/* Uniform Affiliations Section */}
                <div className="mt-16 border-t border-gray-100 dark:border-gray-700 pt-8">
                    <h3 className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Certifications</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <Building2 size={40} />
                            <span className="font-bold text-xs">MSME</span>
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

export default ShortTermCourses;
