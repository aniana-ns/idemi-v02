
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, CheckCircle, Search, Building2, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'Sponsored Programmes',
  subtitle: 'DAY-NULM & Government Initiatives',
  description: 'IDEMI actively participates in various government-sponsored schemes to provide free or subsidized skill development training to the underprivileged sections of society, aiming to enhance their employability and livelihood.',
  image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80',
  schemes: [
    {
        id: 'day-nulm',
        title: 'DAY-NULM (National Urban Livelihoods Mission)',
        desc: 'A government sponsored scheme aiming to reduce poverty and vulnerability of urban poor households by enabling them to access gainful self-employment and skilled wage employment opportunities. IDEMI conducts free skill development training under this scheme in sectors like Electronics, IT, and Capital Goods.',
        benefits: [
            'Free Cost Training for Urban Poor',
            'Uniform and Training Kit provided',
            'Placement Assistance after completion',
            'Certification by Government of India'
        ],
        courses: [
            { title: 'Field Technician - Home Appliances', duration: '350 Hrs', eligibility: '8th Pass' },
            { title: 'Mobile Phone Hardware Repair', duration: '300 Hrs', eligibility: '10th Pass' },
            { title: 'Assistant Electrician', duration: '400 Hrs', eligibility: '10th Pass' }
        ]
    },
    {
        id: 'ddugky',
        title: 'DDU-GKY (Grameen Kaushalya Yojana)',
        desc: 'Focused on rural youth, this scheme aims to transform rural poor youth into an economically independent and globally relevant workforce. IDEMI partners with state missions to deliver high-impact training.',
        benefits: [
            'Residential Training Program',
            'Soft Skills and IT Literacy included',
            'Post-placement support and tracking',
            'Industry-aligned curriculum'
        ],
        courses: [
            { title: 'CNC Operator - Turning', duration: '450 Hrs', eligibility: '10th Pass' },
            { title: 'Draughtsman Mechanical', duration: '500 Hrs', eligibility: '10th Pass' }
        ]
    },
    {
        id: 'pmkvy',
        title: 'PMKVY (Pradhan Mantri Kaushal Vikas Yojana)',
        desc: 'The flagship scheme of MSDE to enable Indian youth to take up industry-relevant skill training that will help them in securing a better livelihood. IDEMI is a training partner for various technical job roles.',
        benefits: [
            'Short Term Training',
            'Recognition of Prior Learning (RPL)',
            'Kaushal and Rozgar Mela',
            'Reward based certification'
        ],
        courses: [
            { title: 'Solar PV Installer (Suryamitra)', duration: '300 Hrs', eligibility: '10th + ITI' },
            { title: 'LED Light Repair Technician', duration: '200 Hrs', eligibility: '10th Pass' }
        ]
    }
  ]
};

const SponsoredSchemes: React.FC = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSchemes = DATA.schemes.filter(scheme => 
    scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    scheme.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Free Govt Sponsored Training Schemes - DAY-NULM, DDU-GKY, PMKVY | IDEMI', 
          description: 'Government sponsored free skill development training under DAY-NULM, DDU-GKY and PMKVY schemes for urban and rural youth to enhance employability.',
          keywords: ['Sponsored Training', 'Free Courses', 'DAY-NULM', 'DDU-GKY', 'PMKVY', 'Skill India', 'Government Schemes'],
          schemaType: 'Service'
        }} 
        path="/training/schemes/day-nulm" 
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
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">{DATA.subtitle}</p>
                
                <img src={DATA.image} alt="Skill Development" className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow-md" />

                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {DATA.description}
                </p>

                {/* Uniform Filter Bar (Search Only) */}
                <div className="mb-8 relative bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                    <label htmlFor="scheme-search" className="sr-only">Search Schemes</label>
                    <Search className="absolute left-6 top-7 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        id="scheme-search"
                        placeholder="Search schemes..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                    />
                </div>

                <div className="space-y-8">
                    {filteredSchemes.length > 0 ? (
                        filteredSchemes.map((scheme, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition group" id={scheme.id}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-full flex items-center justify-center text-secondary dark:text-amber-500 shrink-0 group-hover:scale-110 transition-transform">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{scheme.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{scheme.desc}</p>
                                    </div>
                                </div>
                                
                                <div className="ml-0 md:ml-16 mt-4 md:mt-0">
                                    <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Benefits & Features</h4>
                                    <ul className="space-y-2 mb-6">
                                        {scheme.benefits.map((benefit: string, bIdx: number) => (
                                            <li key={bIdx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <CheckCircle size={14} className="text-green-500 shrink-0" /> {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Course List */}
                                    {scheme.courses && scheme.courses.length > 0 && (
                                        <div className="mt-4">
                                            <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Courses Offered</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {scheme.courses.map((course: any, cIdx: number) => (
                                                    <div key={cIdx} className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 flex flex-col">
                                                        <h5 className="font-bold text-sm text-gray-800 dark:text-gray-200">{course.title}</h5>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex justify-between">
                                                            <span>{course.duration}</span>
                                                            <span>{course.eligibility}</span>
                                                        </div>
                                                        <Link 
                                                            to={`/student-registration?course=${encodeURIComponent(course.title)}`} 
                                                            className="mt-2 text-xs font-bold text-primary dark:text-blue-400 hover:underline text-right"
                                                        >
                                                            Apply Now &rarr;
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                            <p className="text-gray-500 dark:text-gray-400">No schemes found matching "{searchTerm}".</p>
                        </div>
                    )}
                </div>

                {/* Uniform Affiliations Section */}
                <div className="mt-16 border-t border-gray-100 dark:border-gray-700 pt-8">
                    <h3 className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Affiliated With</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <Building2 size={40} />
                            <span className="font-bold text-xs">MSME</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition">
                            <GraduationCap size={40} />
                            <span className="font-bold text-xs">Skill India</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default SponsoredSchemes;
