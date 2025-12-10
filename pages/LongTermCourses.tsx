
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Award, Search, Filter, Building2, GraduationCap, Briefcase, FileText, CheckCircle, AlertCircle, IndianRupee, Phone, User, Monitor, Settings } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'Post Graduate / Post Diploma Courses',
  description: 'Specialized advanced training programs designed for Engineering graduates and Diploma holders. These NSQF compliant courses bridge the gap between academic curriculum and high-end industry requirements.',
  image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
  notifications: [
    '10% Discount on course Fees to OBC / NT / Women Candidates.',
    '15% discount to Post Graduate Diploma & Post Diploma courses (applicable as per current policy).'
  ],
  pgCourses: [
    { 
        title: 'PG Diploma in Advanced Animation & Film Making', 
        level: 'NSQF Level-8',
        icon: <Monitor size={24} />,
        duration: '1 Year', 
        eligibility: 'Degree in Any Discipline'
    },
    { 
        title: 'PG Diploma in Mechatronics', 
        level: 'NSQF Level-8',
        icon: <Settings size={24} />,
        duration: '1 Year', 
        eligibility: 'BE / B.Tech (Mech/Elec/Instr/E&TC)'
    },
    { 
        title: 'PG Diploma in Tool Design & CAD/CAM', 
        level: 'NSQF Level-8',
        icon: <Settings size={24} />,
        duration: '1 Year', 
        eligibility: 'BE / B.Tech (Mech/Prod)'
    },
    { 
        title: 'PG Diploma in Mechanical Product Design', 
        level: 'NSQF Level-8',
        icon: <Settings size={24} />,
        duration: '1 Year', 
        eligibility: 'BE / B.Tech (Mech/Prod)'
    }
  ],
  pdCourses: [
    { 
        title: 'Post Diploma in Advanced Animation & Film Making', 
        level: 'NSQF Level-6',
        icon: <Monitor size={24} />,
        duration: '1 Year', 
        eligibility: 'Diploma in Any Discipline'
    },
    { 
        title: 'Post Diploma in Tool Design & CAD/CAM', 
        level: 'NSQF Level-6',
        icon: <Settings size={24} />,
        duration: '1 Year', 
        eligibility: 'Diploma in Mech/Prod Engineering'
    },
    { 
        title: 'Post Diploma in CAD / CAM', 
        level: 'NSQF Level-6',
        icon: <Settings size={24} />,
        duration: '1 Year', 
        eligibility: 'Diploma in Mech/Prod Engineering'
    }
  ],
  documents: [
      { id: 1, name: '10th Marksheet', format: 'JPG/JPEG', size: '1 MB' },
      { id: 2, name: '12th Marksheet', format: 'PDF/JPG/JPEG', size: '1 MB' },
      { id: 3, name: 'Graduation Marksheet', format: 'JPG/JPEG', size: '1 MB' },
      { id: 4, name: 'Eligible Qualification Certificate', format: 'PDF/JPG/JPEG', size: '1 MB' },
      { id: 5, name: 'Caste & Validity Certificate (if Applicable)', format: 'JPG/JPEG', size: '1 MB' },
      { id: 6, name: 'Passport Size Photographs', format: 'JPG/JPEG', size: '1 MB' }
  ],
  contacts: [
      { area: 'Animation Courses', name: 'Mr. Vishal Angre', phone: '8928129202' },
      { area: 'Mechatronics Courses', name: 'Mr. Kapil Chourasiya', phone: '9819495547' },
      { area: 'Mechanical Courses', name: 'Mr. Sagar Nevage', phone: '7021221498' }
  ]
};

const LongTermCourses: React.FC = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');

  const filterCourses = (courses: any[]) => {
      return courses.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Post Graduate & Post Diploma Courses | IDEMI', 
          description: 'NSQF Level 8 and Level 6 courses in Tool Design, Mechatronics, CAD/CAM, and Animation. 100% Placement assistance.',
          keywords: ['PG Diploma', 'Post Diploma', 'Tool Design', 'Mechatronics', 'Animation Course', 'NSQF Level 8', 'IDEMI Training'],
          schemaType: 'Course'
        }} 
        path="/training/post-graduate-post-diploma" 
      />
      
      {/* Header Strip */}
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
                
                {/* Hero Image */}
                <img src={DATA.image} alt="Long Term Courses" className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow-md" />

                {/* Notifications */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
                    <h3 className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-400 mb-2">
                        <AlertCircle size={20} /> Special Admission Offers
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-amber-900 dark:text-amber-200">
                        {DATA.notifications.map((note, idx) => (
                            <li key={idx}>{note}</li>
                        ))}
                    </ul>
                </div>

                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8">
                    {DATA.description}
                </p>

                {/* Search Bar */}
                <div className="mb-8 relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search courses..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/30 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                    />
                </div>

                {/* PG Courses Section */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                        <GraduationCap className="text-primary dark:text-blue-400" /> Post Graduate Diploma Courses
                    </h2>
                    <div className="grid gap-4">
                        {filterCourses(DATA.pgCourses).map((course, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5 border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-blue-400 transition group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-400">
                                            {course.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                                                {course.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                <span className="bg-white dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 font-medium text-secondary">{course.level}</span>
                                                <span className="flex items-center gap-1"><Clock size={14}/> {course.duration}</span>
                                                <span className="flex items-center gap-1"><Award size={14}/> {course.eligibility}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link 
                                        to={`/student-registration?course=${encodeURIComponent(course.title)}`}
                                        className="shrink-0 px-4 py-2 bg-white dark:bg-gray-800 border border-primary text-primary dark:border-blue-400 dark:text-blue-400 rounded hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition font-bold text-sm text-center"
                                    >
                                        Apply
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PD Courses Section */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                        <Award className="text-secondary dark:text-amber-500" /> Post Diploma Courses
                    </h2>
                    <div className="grid gap-4">
                        {filterCourses(DATA.pdCourses).map((course, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5 border border-gray-200 dark:border-gray-600 hover:border-secondary dark:hover:border-amber-500 transition group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-secondary dark:text-amber-500">
                                            {course.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-secondary dark:group-hover:text-amber-400 transition-colors">
                                                {course.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                <span className="bg-white dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 font-medium text-primary dark:text-blue-300">{course.level}</span>
                                                <span className="flex items-center gap-1"><Clock size={14}/> {course.duration}</span>
                                                <span className="flex items-center gap-1"><Award size={14}/> {course.eligibility}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link 
                                        to={`/student-registration?course=${encodeURIComponent(course.title)}`}
                                        className="shrink-0 px-4 py-2 bg-white dark:bg-gray-800 border border-secondary text-secondary dark:border-amber-500 dark:text-amber-500 rounded hover:bg-secondary hover:text-white dark:hover:bg-amber-500 dark:hover:text-gray-900 transition font-bold text-sm text-center"
                                    >
                                        Apply
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Admission Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <IndianRupee size={20} className="text-primary" /> Fees & Deposits
                        </h3>
                        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                            <div className="flex justify-between items-center border-b border-blue-200 dark:border-blue-800 pb-2">
                                <span>Registration Fee (Non-Refundable)</span>
                                <span className="font-bold text-lg">₹ 1,100/-</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Includes ₹850 Exam Fee + ₹250 Application Fee</p>
                            
                            <div className="flex justify-between items-center border-b border-blue-200 dark:border-blue-800 pb-2 pt-2">
                                <span>Security Deposit (SC/ST Only)</span>
                                <span className="font-bold text-lg">₹ 5,000/-</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Briefcase size={20} className="text-green-600" /> Placement & Process
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                                <strong>100% Placement Assistance</strong> for successful candidates.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                                Admission on <strong>First-Cum-First-Serve</strong> basis.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                                No tuition fee for SC/ST candidates (subject to valid certificate).
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Document Checklist */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <FileText size={24} className="text-secondary" /> Required Documents
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Please keep the following documents ready for upload/verification. Max file size: <strong>1 MB</strong> per document.
                    </p>
                    
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3">Sr.No</th>
                                    <th className="px-4 py-3">Document Name</th>
                                    <th className="px-4 py-3">Accepted Format</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                                {DATA.documents.map((doc) => (
                                    <tr key={doc.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                                        <td className="px-4 py-3 font-mono">{doc.id}</td>
                                        <td className="px-4 py-3 font-medium">{doc.name}</td>
                                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{doc.format}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-3">
                        {DATA.documents.map((doc) => (
                            <div key={doc.id} className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600 flex justify-between items-center">
                                <div>
                                    <span className="text-xs font-mono text-gray-400 block mb-1">#{doc.id}</span>
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">{doc.name}</h4>
                                </div>
                                <span className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                                    {doc.format}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Phone size={20} className="text-primary dark:text-blue-400" /> Course Queries Contacts
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {DATA.contacts.map((contact, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-700/50 p-4 rounded-lg shadow-sm">
                                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{contact.area}</p>
                                <p className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-1">
                                    <User size={16} /> {contact.name}
                                </p>
                                <a href={`tel:${contact.phone}`} className="text-primary dark:text-blue-400 font-mono text-sm hover:underline flex items-center gap-2">
                                    <Phone size={14} /> {contact.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                        Note: The above schedule / procedure for selection may change subject to situations & directives from appropriate authorities.
                    </div>
                </div>

             </div>
          </div>
      </div>
    </div>
  );
};

export default LongTermCourses;
