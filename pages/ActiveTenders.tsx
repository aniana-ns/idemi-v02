
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, X, FileText, ArrowLeft, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import DownloadsSidebar from '../components/DownloadsSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const REFERENCE_PDF = "https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf";

const INITIAL_DATA = [
    { id: 't1', title: 'GeM Tender Notice - Custom Student Computers & Accessories', refNumber: 'GeM Bid', publishDate: '-', closingDate: '18-12-2025', category: 'Goods', link: REFERENCE_PDF, isNew: true },
    { id: 't2', title: 'GeM Tender Notice - Cylindrical Grinding Machine', refNumber: 'GeM Bid', publishDate: '-', closingDate: '12-12-2025', category: 'Goods', link: REFERENCE_PDF, isNew: true },
    { id: 't3', title: 'GeM Tender Notice - Unigraphics NX (Academic)', refNumber: 'GeM Bid', publishDate: '-', closingDate: '12-12-2025', category: 'Software', link: REFERENCE_PDF, isNew: true },
    { id: 't17', title: 'Inviting proposals from Private Players for establishment of 13 Technology Centres on PPP mode', refNumber: 'MSME/PPP', publishDate: '-', closingDate: '26-12-2024', category: 'Services', link: REFERENCE_PDF, isNew: true }
];

const ActiveTenders: React.FC = () => {
  useScrollAnimation();
  const [viewingId, setViewingId] = useState<string | null>(null);
  
  const tenders = INITIAL_DATA;

  const toggleView = (id: string) => {
    setViewingId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Active Tenders | IDEMI', 
          description: 'Current procurement notices, bid documents, and tender announcements from IDEMI.',
          keywords: ['Active Tenders', 'Government Procurement', 'IDEMI Bids', 'Tender Notices', 'Goods and Services'],
          schemaType: 'WebSite'
        }} 
        path="/downloads/active-tenders" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Active Tenders</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
         <aside className="lg:w-1/4">
            <DownloadsSidebar />
         </aside>

         <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden reveal-on-scroll">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/20">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <FileText size={24} className="text-primary dark:text-blue-400"/>
                        Current Opportunities
                    </h2>
                </div>

                {tenders.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">No active tenders found.</div>
                ) : (
                    <>
                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm uppercase">
                                    <tr>
                                        <th className="p-4 border-b dark:border-gray-600 w-1/2">Title</th>
                                        <th className="p-4 border-b dark:border-gray-600">Category</th>
                                        <th className="p-4 border-b dark:border-gray-600">Closing Date</th>
                                        <th className="p-4 border-b dark:border-gray-600 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {tenders.map((tender: any) => (
                                    <React.Fragment key={tender.id}>
                                        <tr className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition ${viewingId === tender.id ? 'bg-blue-50 dark:bg-gray-700' : ''}`}>
                                            <td className="p-4 font-medium text-gray-800 dark:text-white">
                                                {tender.title}
                                                {tender.isNew && (
                                                    <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-600 border border-red-200 uppercase animate-pulse">
                                                        New
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                    tender.category === 'Goods' ? 'bg-green-100 text-green-800' : 
                                                    tender.category === 'Services' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                                                }`}>
                                                    {tender.category}
                                                </span>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-bold bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/50">
                                                    <Calendar size={12} /> {tender.closingDate}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-3">
                                                    <button 
                                                        onClick={() => toggleView(tender.id)}
                                                        className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors focus:outline-none" 
                                                        title={viewingId === tender.id ? "Close View" : "View Document"}
                                                    >
                                                        {viewingId === tender.id ? <X size={18} className="text-red-500" /> : <Eye size={18} />}
                                                    </button>
                                                    <a 
                                                        href={tender.link} 
                                                        download 
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-bold text-primary dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200 whitespace-nowrap"
                                                    >
                                                        <Download size={16} /> Download
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        {viewingId === tender.id && (
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <td colSpan={4} className="p-4 border-b dark:border-gray-600">
                                                    <div className="w-full h-[600px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden shadow-inner">
                                                        <iframe 
                                                            src={tender.link} 
                                                            className="w-full h-full" 
                                                            title={`PDF Viewer - ${tender.title}`}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-700">
                            {tenders.map((tender: any) => (
                                <div key={tender.id} className={`p-4 ${viewingId === tender.id ? 'bg-blue-50 dark:bg-gray-800' : ''}`}>
                                    <div className="flex justify-between items-start gap-3 mb-3">
                                        <h3 className="font-bold text-gray-800 dark:text-white text-sm leading-snug">
                                            {tender.title}
                                            {tender.isNew && (
                                                <span className="ml-2 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-600 border border-red-200 uppercase">New</span>
                                            )}
                                        </h3>
                                        <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                            tender.category === 'Goods' ? 'bg-green-100 text-green-800' : 
                                            tender.category === 'Services' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                                        }`}>
                                            {tender.category}
                                        </span>
                                    </div>
                                    
                                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-gray-600 dark:text-gray-400">
                                        <span className="flex items-center gap-1 font-medium bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 px-2 py-1 rounded">
                                            <Calendar size={12} /> Closes: {tender.closingDate}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => toggleView(tender.id)}
                                            className="flex-1 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-bold flex items-center justify-center gap-2"
                                        >
                                            {viewingId === tender.id ? <><X size={14} /> Close</> : <><Eye size={14} /> View</>}
                                        </button>
                                        <a 
                                            href={tender.link} 
                                            download 
                                            className="flex-1 py-2 bg-primary text-white rounded text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-800"
                                        >
                                            <Download size={14} /> Download
                                        </a>
                                    </div>

                                    {viewingId === tender.id && (
                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 animate-slide-up">
                                            <div className="w-full h-[400px] bg-white rounded border border-gray-200 dark:border-gray-600 overflow-hidden shadow-inner">
                                                <iframe 
                                                    src={tender.link} 
                                                    className="w-full h-full" 
                                                    title={`PDF Viewer - ${tender.title}`}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ActiveTenders;
