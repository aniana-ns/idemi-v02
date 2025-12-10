
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, X, BarChart2, ArrowLeft, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import DownloadsSidebar from '../components/DownloadsSidebar';

const REFERENCE_PDF = "https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf";

const INITIAL_DATA = [
    { id: '1', title: 'ANNUAL REPORT 2023-24', date: '2023-2024', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '2', title: 'ANNUAL REPORT 2022-23', date: '2022-2023', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '3', title: 'ANNUAL REPORT 2021-22', date: '2021-2022', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '4', title: 'ANNUAL REPORT 2020-2021', date: '2020-2021', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '5', title: 'ANNUAL REPORT 2019-2020', date: '2019-2020', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '6', title: 'ANNUAL REPORT 2018-2019', date: '2018-2019', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '7', title: 'ANNUAL REPORT 2017-2018', date: '2017-2018', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '8', title: 'ANNUAL REPORT 2016-2017', date: '2016-2017', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '9', title: 'ANNUAL REPORT 2015-2016', date: '2015-2016', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '10', title: 'ANNUAL REPORT 2014-2015', date: '2014-2015', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '11', title: 'ANNUAL REPORT 2013-2014', date: '2013-2014', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '12', title: 'ANNUAL REPORT 2012-2013', date: '2012-2013', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '13', title: 'ANNUAL REPORT 2011-2012', date: '2011-2012', size: '-', link: REFERENCE_PDF, type: 'PDF' },
    { id: '14', title: 'ANNUAL REPORT 2010-2011', date: '2010-2011', size: '-', link: REFERENCE_PDF, type: 'PDF' },
];

const AnnualReports: React.FC = () => {
  const [viewingId, setViewingId] = useState<string | null>(null);

  const data = INITIAL_DATA;

  const toggleView = (id: string) => {
    setViewingId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Annual Reports | IDEMI', 
          description: 'Financial and operational performance reports of IDEMI.',
          keywords: ['Annual Reports', 'Financial Statements', 'Performance Reports', 'IDEMI Audit', 'Yearly Review'],
          schemaType: 'WebSite'
        }} 
        path="/downloads/annual-reports" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Annual Reports</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
         <aside className="lg:w-1/4">
            <DownloadsSidebar />
         </aside>

         <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/20">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <BarChart2 size={24} className="text-primary dark:text-blue-400"/>
                        Performance Reports
                    </h2>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    {data.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">No reports available.</div>
                    ) : (
                        data.map((item) => (
                            <div key={item.id} className={`transition group ${viewingId === item.id ? 'bg-blue-50 dark:bg-gray-800/80' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}>
                                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition">
                                            <BarChart2 size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                            <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                <span className="flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400"><Calendar size={12} /> {item.date}</span>
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

export default AnnualReports;
