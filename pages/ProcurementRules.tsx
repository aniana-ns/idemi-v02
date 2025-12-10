
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, X, FileText, ArrowLeft, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import DownloadsSidebar from '../components/DownloadsSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = [
    { id: 'r1', title: 'Standard Operating Procedures', date: '2023-03-10', size: '800 KB', link: 'https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf', type: 'PDF' }
];

const ProcurementRules: React.FC = () => {
  useScrollAnimation();
  const [viewingId, setViewingId] = useState<string | null>(null);

  const filteredData = DATA;

  const toggleView = (id: string) => {
    setViewingId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Procurement Rules | IDEMI', 
          description: 'Rules and regulations governing procurement activities.',
          keywords: ['Procurement Rules', 'SOP', 'Standard Operating Procedures', 'Financial Regulations', 'Public Tender Rules'],
          schemaType: 'WebSite'
        }} 
        path="/downloads/procurement-rules" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Procurement Rules</h1>
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
                        Rules & Regulations
                    </h2>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    {filteredData.length === 0 ? (
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400">No documents found.</div>
                    ) : (
                        filteredData.map((item) => (
                            <div key={item.id} className={`transition group ${viewingId === item.id ? 'bg-blue-50 dark:bg-gray-800/80' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}>
                                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                            <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                                                <span className="uppercase font-semibold bg-gray-100 dark:bg-gray-700 px-1.5 rounded text-[10px]">{item.type}</span>
                                                <span>{item.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => toggleView(item.id)}
                                            className={`px-3 py-2 border rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                                                viewingId === item.id 
                                                ? 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200' 
                                                : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                            }`}
                                        >
                                            {viewingId === item.id ? <><X size={16} /> Close</> : <><Eye size={16} /> View</>}
                                        </button>
                                        <a 
                                            href={item.link} 
                                            download
                                            className="px-4 py-2 bg-primary text-white border border-primary rounded-lg text-sm font-bold hover:bg-blue-800 transition shadow-sm flex items-center gap-2 whitespace-nowrap hover:scale-105 active:scale-95"
                                        >
                                            <Download size={16} /> Download
                                        </a>
                                    </div>
                                </div>
                                {viewingId === item.id && (
                                    <div className="px-6 pb-6 pt-2 animate-slide-up">
                                        <div className="w-full h-[600px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden shadow-md">
                                            <iframe 
                                                src={item.link} 
                                                className="w-full h-full" 
                                                title={`PDF Viewer - ${item.title}`}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProcurementRules;
