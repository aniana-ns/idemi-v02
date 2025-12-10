
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Monitor, Video, Calendar, Search, Filter, GraduationCap, Building2, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'Online Training Courses',
  description: 'Virtual classroom sessions designed for students and professionals to learn from anywhere. Our online programs maintain the same rigor and quality as our offline courses, featuring live interactions with faculty.',
  image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80',
  features: [
    'Live Interactive Sessions via Zoom/Google Meet',
    'Digital Course Material & Recordings',
    'E-Certificate upon completion',
    'Flexible Evening Batches for Professionals'
  ],
  courses: [
    { title: 'Data Science with Python', duration: '6 Weeks', eligibility: 'Any Graduate', outcomes: 'Entry into Data Analytics and Machine Learning roles.' },
    { title: 'Digital Marketing', duration: '4 Weeks', eligibility: 'Any Graduate', outcomes: 'Skills for Social Media Management, SEO, and Content Marketing.' },
    { title: 'IOT Fundamentals', duration: '4 Weeks', eligibility: 'Engg Students', outcomes: 'Understanding of connected devices for Smart City and Industry 4.0 applications.' },
    { title: 'Industrial Automation (Virtual)', duration: '4 Weeks', eligibility: 'Diploma/Degree', outcomes: 'Foundational knowledge for automation careers.' },
    { title: 'AutoCAD (Online)', duration: '1 Month', eligibility: 'ITI/Diploma', outcomes: 'Remote learning of drafting essentials for design jobs.' }
  ]
};

const OnlineTraining: React.FC = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const durations = ['All', ...Array.from(new Set(DATA.courses.map(c => c.duration)))];

  const filteredCourses = DATA.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = selectedDuration === 'All' || course.duration === selectedDuration;
    return matchesSearch && matchesDuration;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Online Technical Training Courses - Virtual Classrooms | IDEMI', 
          description: 'Live interactive online training courses for Data Science, IoT, Digital Marketing, and CAD/CAM software. Learn from industry experts from the comfort of your home.',
          keywords: ['Online Training', 'Virtual Classroom', 'E-Learning', 'Data Science Course', 'Digital Marketing Course', 'IoT Training'],
          schemaType: 'Course'
        }} 
        path="/training/online-training" 
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
                
                <img src={DATA.image} alt="Online Training" className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow-md" />

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Why Online Training?</h3>
                        <ul className="space-y-3">
                            {DATA.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                                    <Wifi size={18} className="text-primary dark:text-blue-400 shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                            <Monitor className="text-secondary" size={32} />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Remote Access</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Access labs via remote desktop</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                            <Video className="text-green-600" size={32} />
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Recorded Lectures</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Revisit concepts anytime</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-secondary pl-4">Available Courses</h2>
                
                {/* Uniform Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search online courses..." 
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredCourses.map((course, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition group hover:-translate-y-1 duration-300 flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{course.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={14} className="text-secondary" /> {course.duration}</span>
                                    <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-600 rounded text-xs">{course.eligibility}</span>
                                </div>
                                
                                {course.outcomes && (
                                    <div className="mb-6 p-3 bg-white dark:bg-gray-800 rounded border border-blue-50 dark:border-gray-700 flex-grow">
                                        <p className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                            <Briefcase size={12} /> Future Prospects
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{course.outcomes}</p>
                                    </div>
                                )}

                                <Link 
                                    to={`/student-registration?course=${encodeURIComponent(course.title)}`} 
                                    className="block w-full py-2 border border-primary text-primary dark:border-blue-400 dark:text-blue-400 rounded-lg font-bold hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition text-center uppercase text-xs tracking-wider mt-auto"
                                >
                                    Register Now
                                </Link>
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
             </div>
          </div>
      </div>
    </div>
  );
};

export default OnlineTraining;
