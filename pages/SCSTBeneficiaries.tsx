
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Search, FileText, Eye, X } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

// Placeholder link for the reports
const REF_LINK = "https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf";

const REPORTS = [
  { title: "SC-Students Enrolled 1st Qtr. 2025-26", link: REF_LINK },
  { title: "ST-Students Enrolled 1st Qtr. 2025-26", link: REF_LINK },
  { title: "SC-Students Enrolled 4th Qtr. 2024-25", link: REF_LINK },
  { title: "ST-Students Enrolled 4th Qtr. 2024-25", link: REF_LINK },
  { title: "SC-Students Enrolled 3rd Qtr. 2024-25", link: REF_LINK },
  { title: "ST-Students Enrolled 3rd Qtr. 2024-25", link: REF_LINK },
  { title: "SC-Students Enrolled 2nd Qtr. 2024-25", link: REF_LINK },
  { title: "ST-Students Enrolled 2nd Qtr. 2024-25", link: REF_LINK },
  { title: "SC-Students Enrolled 1st Qtr. 2024-25", link: REF_LINK },
  { title: "ST-Students Enrolled 1st Qtr. 2024-25", link: REF_LINK },
  { title: "SC-Students Enrolled 4th Qtr. 2023-24", link: REF_LINK },
  { title: "ST-Students Enrolled 4th Qtr. 2023-24", link: REF_LINK },
  { title: "SC-Students Enrolled 3rd Qtr. 2023-24", link: REF_LINK },
  { title: "ST-Students Enrolled 3rd Qtr. 2023-24", link: REF_LINK },
  { title: "SC-Students Enrolled 2nd Qtr. 2023-24", link: REF_LINK },
  { title: "ST-Students Enrolled 2nd Qtr. 2023-24", link: REF_LINK },
  { title: "SC-Students Enrolled 1st Qtr. 2023-24", link: REF_LINK },
  { title: "ST-Students Enrolled 1st Qtr. 2023-24", link: REF_LINK },
  { title: "SC-Students Enrolled 4th Qtr. 2022-23", link: REF_LINK },
  { title: "ST-Students Enrolled 4th Qtr. 2022-23", link: REF_LINK },
  { title: "ST - Students Enrolled in 3rd Qtr 2022-23", link: REF_LINK },
  { title: "SC - Students Enrolled in 3rd Qtr 2022-23", link: REF_LINK },
  { title: "SC-Students Enrolled in 2nd QTR 2022-23", link: REF_LINK },
  { title: "ST-Students Enrolled in 2nd QTR 2022-23", link: REF_LINK },
  { title: "SC-Students Enrolled in 1st QTR 2022-23", link: REF_LINK },
  { title: "ST-Students Enrolled in 1st QTR 2022-23", link: REF_LINK },
  { title: "SC-Students Enrolled in 4th QTR 2021-22", link: REF_LINK },
  { title: "ST-Students Enrolled in 4th QTR 2021-22", link: REF_LINK },
  { title: "Students Enrolled in 3rd QTR 2021-22", link: REF_LINK },
  { title: "Students Enrolled in 2nd QTR 2021-22", link: REF_LINK },
  { title: "Students Enrolled in 1st QTR 2021-22", link: REF_LINK },
  { title: "Students Enrolled in 4th QTR 2020-21 (March 2021)", link: REF_LINK },
  { title: "Students Enrolled in 4th QTR 2020-21 (Jan-Feb 2021)", link: REF_LINK },
  { title: "Students Enrolled in 3rd QTR 2020-21", link: REF_LINK },
  { title: "Students Enrolled in 2nd QTR 2020-21", link: REF_LINK },
  { title: "Students Enrolled in 1st QTR 2020-21", link: REF_LINK }
];

const SCSTBeneficiaries: React.FC = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingId, setViewingId] = useState<string | null>(null);

  const filteredReports = REPORTS.filter(report => 
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleView = (title: string) => {
    setViewingId(prev => prev === title ? null : title);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'SC/ST Beneficiaries - Student Enrollment Reports | IDEMI', 
          description: 'Quarterly enrollment reports for SC/ST students in IDEMI training programs. Transparency and beneficiary data.',
          keywords: ['SC ST Beneficiaries', 'Student Enrollment', 'Quarterly Reports', 'IDEMI Training Statistics', 'Social Welfare'],
          schemaType: 'Article'
        }} 
        path="/training/sc_st_beneficiaries" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">SC/ST Beneficiaries</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">Student Enrollment Reports</p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    IDEMI maintains transparency regarding the enrollment of candidates from Scheduled Castes (SC) and Scheduled Tribes (ST). Below are the quarterly reports of student beneficiaries.
                </p>

                {/* Search Bar */}
                <div className="mb-8 relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search by year (e.g. 2024) or quarter..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/30 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                    />
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="p-4 border-b dark:border-gray-600">Report Title</th>
                                    <th className="p-4 border-b dark:border-gray-600 w-48 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                                {filteredReports.length > 0 ? (
                                    filteredReports.map((report, idx) => (
                                        <React.Fragment key={idx}>
                                            <tr className={`hover:bg-gray-50 dark:hover:bg-gray-800/50 transition ${viewingId === report.title ? 'bg-blue-50 dark:bg-gray-800' : ''}`}>
                                                <td className="p-4 font-medium text-gray-800 dark:text-gray-200 flex items-center gap-3">
                                                    <FileText size={18} className="text-gray-400 shrink-0" />
                                                    {report.title}
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center justify-center gap-3">
                                                        <button 
                                                            onClick={() => toggleView(report.title)}
                                                            className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition"
                                                        >
                                                            {viewingId === report.title ? <><X size={16} /> Close</> : <><Eye size={16} /> View</>}
                                                        </button>
                                                        <a 
                                                            href={report.link} 
                                                            download
                                                            className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-blue-400 hover:underline"
                                                        >
                                                            <Download size={16} /> Download
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            {viewingId === report.title && (
                                                <tr>
                                                    <td colSpan={2} className="p-4 border-b dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50">
                                                        <div className="w-full h-[600px] border border-gray-200 dark:border-gray-600 rounded bg-white overflow-hidden shadow-inner animate-fade-in">
                                                            <iframe src={report.link} className="w-full h-full" title={report.title} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={2} className="p-8 text-center text-gray-500 dark:text-gray-400">
                                            No reports found matching your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4">
                    {filteredReports.length > 0 ? (
                        filteredReports.map((report, idx) => (
                            <div key={idx} className={`p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all ${viewingId === report.title ? 'bg-blue-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700/30'}`}>
                                <div className="flex items-start gap-3 mb-3">
                                    <FileText size={20} className="text-gray-400 shrink-0 mt-0.5" />
                                    <h3 className="font-bold text-gray-800 dark:text-white text-sm leading-snug">{report.title}</h3>
                                </div>
                                <div className="flex items-center gap-2 mt-4">
                                    <button 
                                        onClick={() => toggleView(report.title)}
                                        className="flex-1 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                                    >
                                        {viewingId === report.title ? <><X size={14} /> Close</> : <><Eye size={14} /> View</>}
                                    </button>
                                    <a 
                                        href={report.link} 
                                        download
                                        className="flex-1 py-2 bg-primary text-white rounded text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-800"
                                    >
                                        <Download size={14} /> Download
                                    </a>
                                </div>
                                {viewingId === report.title && (
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 animate-slide-up">
                                        <div className="w-full h-[400px] bg-white rounded border border-gray-200 dark:border-gray-600 overflow-hidden shadow-inner">
                                            <iframe src={report.link} className="w-full h-full" title={report.title} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                            No reports found matching your search.
                        </div>
                    )}
                </div>

             </div>
          </div>
      </div>
    </div>
  );
};

export default SCSTBeneficiaries;
