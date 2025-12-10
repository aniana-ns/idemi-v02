
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Map, FileText, Wrench, GraduationCap, Download, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const SITEMAP_DATA = [
  {
    category: 'General',
    icon: <Map className="text-secondary" size={20} />,
    links: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Careers', path: '/careers' },
      { label: 'Extension Centres', path: '/extensions' },
      { label: 'Extension - Bangalore', path: '/extension-centre/bangalore' },
      { label: 'Extension - Nagpur', path: '/extension-centre/nagpur' },
      { label: 'Sub-Centre - Sakinaka', path: '/extension-centre/sakinaka' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Use', path: '/terms' },
    ]
  },
  {
    category: 'Services',
    icon: <Wrench className="text-secondary" size={20} />,
    links: [
      { label: 'Services Overview', path: '/services' },
      { label: 'Tool Room Services', path: '/services/tool-room' },
      { label: 'Tool Design', path: '/services/tool-design' },
      { label: 'Precision Machining', path: '/services/precision-machining' },
      { label: '3D Printing (EOS Formiga)', path: '/services/eos-formiga' },
      { label: 'Rapid Prototyping', path: '/services/rapid-prototyping-in-plastic' },
      { label: 'Inspection Services', path: '/services/inspection' },
      { label: 'Design & Development', path: '/services/design-development' },
      { label: 'Product Design', path: '/services/product-design-development' },
      { label: 'SMT Assembly', path: '/services/design-development/smt-assembly' },
      { label: 'Technology Transfer', path: '/services/design-development/techtransfer' },
      { label: 'Tool Room Infrastructure', path: '/services/tool-room-infrastructure' },
      { label: 'Consultancy Services', path: '/services/consultancy' },
    ]
  },
  {
    category: 'Calibration & Testing',
    icon: <FileText className="text-secondary" size={20} />,
    links: [
      { label: 'Calibration Overview', path: '/services/calibration' },
      { label: 'Electro-Technical Calibration', path: '/services/calibration/electro-technical' },
      { label: 'Thermal Calibration', path: '/services/calibration/thermal' },
      { label: 'Pressure Calibration', path: '/services/calibration/pressure' },
      { label: 'Mass & Volume', path: '/services/calibration/mass-volume' },
      { label: 'Dimensional Metrology', path: '/services/calibration/dimensional-metrology' },
      { label: 'Fluid Flow', path: '/services/calibration/fluid-flow' },
      { label: 'Laboratory Excellence Award', path: '/services/calibration/laboratory-excellence-award' },
      { label: 'Testing Overview', path: '/services/testing' },
      { label: 'Safety Testing', path: '/services/testing/safety' },
      { label: 'EMI-EMC Testing', path: '/services/testing/emi_emc' },
      { label: 'Environmental Testing', path: '/services/testing/environmental' },
      { label: 'LED Testing', path: '/services/testing/led' },
      { label: 'Type Testing', path: '/services/testing/type' },
      { label: 'Pump Testing', path: '/services/testing/centrifugal_pump' },
      { label: 'LOCA Test Facility', path: '/services/testing/loca-test-facility' },
      { label: 'TEC - Accreditation', path: `/view-document?url=https://idemi.org/assets/uploads/TEC%20accreditation.pdf&title=TEC Accreditation` },
      { label: 'TEC - Test Fees Schedule', path: `/view-document?url=https://idemi.org/assets/uploads/TEC%20-%20Test%20Fee%20Schedule.pdf&title=TEC Test Fees Schedule` },
    ]
  },
  {
    category: 'Training & Courses',
    icon: <GraduationCap className="text-secondary" size={20} />,
    links: [
      { label: 'Training Introduction', path: '/training/introduction' },
      { label: 'Training Overview', path: '/training' },
      { label: 'AICTE Diploma Courses', path: '/training/aicte' },
      { label: 'Admission Schedule 2025', path: '/training/aicte/schedule' },
      { label: 'Short Term Courses', path: '/training/short-term-courses' },
      { label: 'Professional Courses', path: '/training/professional-courses' },
      { label: 'Online Training', path: '/training/online-training' },
      { label: 'Long Term Courses', path: '/training/post-graduate-post-diploma' },
      { label: 'Sponsored Schemes', path: '/training/schemes/day-nulm' },
      { label: 'Job Fair', path: '/jobfair' },
      { label: 'Student Registration', path: '/student-registration' },
      { label: 'SC-ST Beneficiaries', path: '/training/sc_st_beneficiaries' },
      { label: 'Training Enquiry', path: '/training/enquiry' },
    ]
  },
  {
    category: 'Government Schemes',
    icon: <Building2 className="text-secondary" size={20} />,
    links: [
      { label: 'PMKVY Scheme', path: '/schemes/pmkvy' },
      { label: 'National SC-ST Hub', path: '/schemes/sc-st-hub' },
      { label: 'ESDP-ATI Scheme', path: '/schemes/esdpati' },
      { label: 'NSQF Compliant Courses', path: '/schemes/nsqf' },
      { label: 'Kiman Kaushalya Yojana', path: '/schemes/kiman-kaushalya' },
      { label: 'NBCFDC Schemes', path: '/schemes/nbcfdc' },
      { label: 'BMC Sponsored Training', path: '/schemes/bmc' },
      { label: 'MeitY Dashboard', path: '/meity/dashboard' },
      { label: 'COVID-19 Products', path: '/covid19_products' },
    ]
  },
  {
    category: 'Downloads',
    icon: <Download className="text-secondary" size={20} />,
    links: [
      { label: 'Active Tenders', path: '/downloads/active-tenders' },
      { label: 'Archived Tenders', path: '/downloads/archive-tenders' },
      { label: 'News & Notifications', path: '/downloads/notifications' },
      { label: 'Prospectus', path: '/downloads/prospectus' },
      { label: 'Annual Reports', path: '/downloads/annual-reports' },
      { label: 'Procurement Policy', path: '/downloads/procurement-policy' },
      { label: 'Procurement Rules', path: '/downloads/procurement-rules' },
    ]
  }
];

const Sitemap: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Sitemap | IDEMI', 
          description: 'Overview of website structure and links.',
          keywords: ['Sitemap', 'IDEMI Links', 'Website Map', 'Navigation'],
          schemaType: 'WebSite'
        }} 
        path="/sitemap" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Sitemap</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
         <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SITEMAP_DATA.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border border-gray-100 dark:border-gray-600">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-500 pb-2">
                            {section.icon} {section.category}
                        </h3>
                        <ul className="space-y-2">
                            {section.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <Link 
                                        to={link.path} 
                                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:underline flex items-start gap-2"
                                    >
                                        <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Sitemap;
