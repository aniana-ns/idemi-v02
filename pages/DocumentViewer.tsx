
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const DocumentViewer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  const url = searchParams.get('url');
  const title = searchParams.get('title') || 'Document Viewer';

  if (!url) {
    return (
        <div className="bg-gray-50 dark:bg-gray-950 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">No Document Specified</h1>
                <button onClick={() => navigate(-1)} className="text-primary hover:underline">Go Back</button>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200 flex flex-col">
      <SEO seo={{ title: `${title} | IDEMI`, description: `View document: ${title}` }} path="/view-document" />
      
      {/* Viewer Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-24 z-40">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
             <div className="flex items-center gap-4">
                <button 
                    onClick={() => navigate(-1)} 
                    className="inline-flex items-center text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft size={18} className="mr-1" /> Back
                </button>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 truncate max-w-md">
                    <FileText size={20} className="text-secondary shrink-0" />
                    <span className="truncate">{title}</span>
                </h1>
             </div>

             <a 
                href={url} 
                download 
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-800 transition flex items-center gap-2 shadow-sm"
             >
                <Download size={16} /> <span className="hidden sm:inline">Download Document</span>
             </a>
        </div>
      </div>

      {/* Viewer Content */}
      <div className="flex-grow container mx-auto px-4 py-6">
         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-[80vh]">
            <iframe 
                src={url} 
                className="w-full h-full" 
                title={`PDF Viewer - ${title}`}
                style={{ border: 'none' }}
            />
         </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
