
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Download, Calendar, Eye, X } from 'lucide-react';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const REFERENCE_PDF = "https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf";

const JOBS = [
  {
    id: 1,
    title: "Engagement of Trade Apprentices of Various Trades",
    publishedDate: "26/11/2025",
    lastDate: "06/12/2025",
    link: REFERENCE_PDF
  }
];

const Careers: React.FC = () => {
  useScrollAnimation();
  const [viewingId, setViewingId] = useState<number | null>(null);

  const toggleView = (id: number) => {
    setViewingId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Careers | IDEMI', 
          description: 'Current job openings and recruitment notices at IDEMI Mumbai.' 
        }} 
        path="/careers" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Active Careers/Recruitment</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <InfoSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                    <Briefcase size={24} className="text-secondary" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recruitment Notices</h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Applications are invited for the following positions. Please download the detailed advertisement for eligibility criteria and application process.
                </p>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="p-4 border-b dark:border-gray-600 text-center w-16">Sr.No</th>
                                <th className="p-4 border-b dark:border-gray-600">Title</th>
                                <th className="p-4 border-b dark:border-gray-600 w-32 whitespace-nowrap">Published Date</th>
                                <th className="p-4 border-b dark:border-gray-600 w-32 whitespace-nowrap">Last Date</th>
                                <th className="p-4 border-b dark:border-gray-600 w-32 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                            {JOBS.length > 0 ? JOBS.map((job) => (
                                <React.Fragment key={job.id}>
                                    <tr className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition ${viewingId === job.id ? 'bg-blue-50 dark:bg-gray-700' : ''}`}>
                                        <td className="p-4 text-center font-mono text-gray-500 dark:text-gray-400">{job.id}</td>
                                        <td className="p-4 font-medium text-gray-900 dark:text-white">{job.title}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                                            {job.publishedDate}
                                        </td>
                                        <td className="p-4 text-red-600 dark:text-red-400 font-bold whitespace-nowrap">{job.lastDate}</td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button 
                                                    onClick={() => toggleView(job.id)}
                                                    className="p-1.5 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors rounded hover:bg-gray-100 dark:hover:bg-gray-600" 
                                                    title={viewingId === job.id ? "Close View" : "View Document"}
                                                >
                                                    {viewingId === job.id ? <X size={18} className="text-red-500" /> : <Eye size={18} />}
                                                </button>
                                                <a 
                                                    href={job.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="p-1.5 text-primary dark:text-blue-400 hover:text-blue-600 transition font-bold rounded hover:bg-gray-100 dark:hover:bg-gray-600" 
                                                    title="Download Advertisement"
                                                >
                                                    <Download size={18} />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    {viewingId === job.id && (
                                        <tr>
                                            <td colSpan={5} className="p-4 border-b dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                                                <div className="w-full h-[600px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden shadow-inner">
                                                    <iframe 
                                                        src={job.link} 
                                                        className="w-full h-full" 
                                                        title={`PDF Viewer - ${job.title}`}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-gray-500 dark:text-gray-400">No active recruitment at this time.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4">
                    {JOBS.length > 0 ? JOBS.map((job) => (
                        <div key={job.id} className={`rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all ${viewingId === job.id ? 'bg-blue-50 dark:bg-gray-800 shadow-md ring-1 ring-blue-100 dark:ring-gray-600' : 'bg-white dark:bg-gray-800 hover:shadow-md'}`}>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">#{job.id}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm leading-snug">{job.title}</h3>
                                
                                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                                    <div className="flex flex-col">
                                        <span className="text-gray-500 dark:text-gray-400 mb-0.5">Published</span>
                                        <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 font-medium">
                                            <Calendar size={14} className="text-gray-400" />
                                            <span>{job.publishedDate}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-500 dark:text-gray-400 mb-0.5">Deadline</span>
                                        <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-bold">
                                            <Calendar size={14} className="text-red-400" />
                                            <span>{job.lastDate}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => toggleView(job.id)}
                                        className="flex-1 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                                    >
                                        {viewingId === job.id ? <><X size={14} /> Close</> : <><Eye size={14} /> View Doc</>}
                                    </button>
                                    <a 
                                        href={job.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex-1 py-2.5 bg-primary text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition shadow-sm"
                                    >
                                        <Download size={14} /> Download
                                    </a>
                                </div>
                            </div>
                            {/* PDF Viewer for Mobile */}
                            {viewingId === job.id && (
                                <div className="border-t border-gray-200 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-900">
                                     <div className="w-full h-[450px] bg-white rounded border border-gray-200 dark:border-gray-600 overflow-hidden shadow-inner">
                                        <iframe 
                                            src={job.link} 
                                            className="w-full h-full" 
                                            title={`PDF Viewer - ${job.title}`}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )) : (
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            No active recruitment at this time.
                        </div>
                    )}
                </div>

             </div>
          </div>
      </div>
    </div>
  );
};

export default Careers;
