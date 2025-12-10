
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { BarChart, Users, Award, BookOpen, Quote, ArrowLeft, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const MeitySchemes: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');
  const isTestimonials = location.pathname.includes('testimonials');

  const title = isDashboard ? 'MeitY Dashboard' : 'Success Stories & Testimonials';
  const subtitle = isDashboard ? 'ESDM Skill Development Performance Metrics' : 'Impact of MeitY Sponsored Training';

  const COURSE_STATS = [
      { name: "Embedded Systems Design", enrolled: 450, certified: 410 },
      { name: "PCB Design & Fabrication", enrolled: 380, certified: 355 },
      { name: "Industrial Automation", enrolled: 520, certified: 480 }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: `${title} | IDEMI`, description: subtitle }} path={location.pathname} />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">{subtitle}</p>

                {isDashboard && (
                    <div className="space-y-8">
                        <p className="text-gray-600 dark:text-gray-300">
                            Detailed performance report of the "Scheme for Financial Assistance to Select States/UTs for Skill Development in ESDM Sector" implemented by IDEMI.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-center">
                                <Users size={32} className="text-primary dark:text-blue-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2,500+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Candidates Trained</div>
                            </div>
                            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 text-center">
                                <Award size={32} className="text-green-600 dark:text-green-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2,100+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Certified</div>
                            </div>
                            <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800 text-center">
                                <Briefcase size={32} className="text-secondary dark:text-amber-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1,200+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Placed in Industry</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Course-wise Breakdown</h3>
                            
                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
                                        <tr>
                                            <th className="p-3 border border-gray-200 dark:border-gray-600">Course Name</th>
                                            <th className="p-3 border border-gray-200 dark:border-gray-600 text-center">Enrolled</th>
                                            <th className="p-3 border border-gray-200 dark:border-gray-600 text-center">Certified</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 dark:text-gray-300">
                                        {COURSE_STATS.map((course, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="p-3 border border-gray-200 dark:border-gray-600">{course.name}</td>
                                                <td className="p-3 border border-gray-200 dark:border-gray-600 text-center">{course.enrolled}</td>
                                                <td className="p-3 border border-gray-200 dark:border-gray-600 text-center">{course.certified}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-4">
                                {COURSE_STATS.map((course, idx) => (
                                    <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3">{course.name}</h4>
                                        <div className="flex justify-between text-sm">
                                            <div className="text-center">
                                                <span className="block text-gray-500 dark:text-gray-400 text-xs uppercase">Enrolled</span>
                                                <span className="font-bold text-gray-800 dark:text-white">{course.enrolled}</span>
                                            </div>
                                            <div className="text-center">
                                                <span className="block text-gray-500 dark:text-gray-400 text-xs uppercase">Certified</span>
                                                <span className="font-bold text-green-600 dark:text-green-400">{course.certified}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {isTestimonials && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-200 dark:border-gray-600 relative">
                                <Quote size={40} className="text-gray-200 dark:text-gray-600 absolute top-4 right-4" />
                                <p className="text-gray-600 dark:text-gray-300 mb-6 italic relative z-10">
                                    "The training at IDEMI under the MeitY scheme helped me gain practical skills in PLC programming. I got placed immediately after the course."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                        S{i}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">Student Name {i}</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Placed at: Tata Motors</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

             </div>
          </div>
      </div>
    </div>
  );
};

export default MeitySchemes;
