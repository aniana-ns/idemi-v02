
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Award, Target, Monitor, CheckCircle, Clock, Briefcase, Mail, Phone, User } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'Training Introduction',
  subtitle: 'Skill Development, Employment & Entrepreneurship',
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  description: `
    <p class="lead text-lg text-gray-700 dark:text-gray-300 mb-6">
      IDEMI Training Division conducts various skill development training programmes for <strong>Skill Development, Employment & Entrepreneurship</strong> in the field of Mechanical, Electrical, Electronics, Animation & Multimedia ranging from <strong>1 week to 18 Months</strong> duration.
    </p>
    <p class="text-gray-600 dark:text-gray-400 mb-6">
      In addition to fresh graduates, IDEMI also conducts professional courses for <strong>Employees of Industries & Professionals</strong> for skill upgradation, ensuring the workforce stays relevant with changing technologies.
    </p>
    <p class="text-gray-600 dark:text-gray-400">
      We conduct various <strong>NSQF approved courses</strong> & other certified courses tailored to meet industry standards.
    </p>
  `,
  courseStructure: [
    { title: 'Short Term Courses', duration: '2 Months to 3 Months', desc: 'Focused skill enhancement modules.' },
    { title: 'Medium Term Courses', duration: '4 Months to 6 Months', desc: 'Specialized certification programs.' },
    { title: 'Long Term Courses', duration: '12 Months to 18 Months', desc: 'Comprehensive diploma courses.' }
  ],
  stats: [
    { label: 'Students Trained', value: '15,000+', icon: <Users size={24} className="text-primary dark:text-blue-400" /> },
    { label: 'Placement Ratio', value: '95%', icon: <Target size={24} className="text-green-600" /> },
    { label: 'Years of Excellence', value: '54+', icon: <Award size={24} className="text-secondary" /> },
    { label: 'Certified Courses', value: '50+', icon: <BookOpen size={24} className="text-purple-600" /> }
  ],
  infrastructure: [
    'IDEMI training Infrastructure includes latest Technology training Kits for Hands on training & better Skilling.',
    'Training Classrooms with Projector Screens.',
    'Training Laboratories with High end PCs & latest software.',
    'Qualified Trainers with adequate Experience in relevant field.',
    'Student Placement Cell.'
  ],
  contact: {
    name: 'Mr. Shripankh Patil',
    designation: 'Assistant Director (TRG)',
    email: 'training@idemi.org',
    phone: '022-24050301/02/03/04 ext 249'
  }
};

const TrainingIntroduction: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Training Introduction | IDEMI', 
          description: 'IDEMI Training Division overview: Skill development in Mechanical, Electrical, Electronics, Animation & Multimedia. NSQF approved courses from 1 week to 18 months.' 
        }} 
        path="/training/introduction" 
      />
      
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
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">{DATA.subtitle}</p>
                
                <img src={DATA.image} alt={DATA.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />

                <div 
                    className="prose prose-lg dark:prose-invert max-w-none mb-12"
                    dangerouslySetInnerHTML={{ __html: DATA.description }}
                />

                {/* Course Duration Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {DATA.courseStructure.map((course, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl border border-gray-200 dark:border-gray-600 text-center hover:shadow-md transition">
                            <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center text-primary dark:text-blue-400 mb-4">
                                <Clock size={24} />
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">{course.title}</h3>
                            <p className="text-sm font-bold text-secondary dark:text-amber-500 mb-2">{course.duration}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{course.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Grid - Significant Achievements */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-secondary pl-4">Significant Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {DATA.stats.map((stat, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-600 text-center">
                            <div className="flex justify-center mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Infrastructure */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800 mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Monitor size={24} className="text-primary dark:text-blue-400" /> Training Infrastructure
                    </h3>
                    <ul className="space-y-4">
                        {DATA.infrastructure.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <CheckCircle size={20} className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Card */}
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 h-fit">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <User className="text-primary dark:text-blue-400" size={20} /> Contact for Training
                    </h3>
                    <div className="space-y-1">
                        <p className="font-bold text-gray-900 dark:text-white text-lg">{DATA.contact.name}</p>
                        <p className="text-xs font-bold text-secondary dark:text-amber-500 uppercase tracking-wider mb-3">{DATA.contact.designation}</p>
                        
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 pt-2 border-t border-blue-200 dark:border-gray-600">
                            <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition group">
                                <Mail size={16} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400" /> {DATA.contact.email}
                            </a>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-400" /> 
                                <span>{DATA.contact.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
          </div>
      </div>
    </div>
  );
};

export default TrainingIntroduction;
