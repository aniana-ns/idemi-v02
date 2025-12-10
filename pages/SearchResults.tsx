
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, ArrowRight, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { SEARCH_INDEX } from '../constants';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const SearchResults: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  
  // Simple case-insensitive filter
  const results = query ? SEARCH_INDEX.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.desc.toLowerCase().includes(query.toLowerCase())
  ) : [];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
            title: `Search Results for "${query}" | IDEMI`, 
            description: 'Search results page',
            keywords: ['search', query, 'IDEMI search results'],
            schemaType: 'SearchResultsPage'
        }} 
        path={location.pathname} 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <Search className="text-primary dark:text-blue-400" size={32} />
                Search Results
             </h1>
             <p className="text-gray-600 dark:text-gray-400 mt-2">
                Showing results for <span className="font-bold text-gray-900 dark:text-white">"{query}"</span>
             </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
         <div className="max-w-4xl">
            {query.trim() === '' ? (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                    <p className="text-gray-500">Please enter a keyword to search.</p>
                </div>
            ) : results.length > 0 ? (
                <div className="space-y-6">
                    {results.map((result, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition group reveal-on-scroll">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                            {result.type}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-primary dark:text-blue-400 group-hover:underline decoration-2 underline-offset-2">
                                        <Link to={result.path}>{result.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                                        {result.desc}
                                    </p>
                                </div>
                                <Link to={result.path} className="shrink-0 ml-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-full group-hover:bg-primary group-hover:text-white transition text-gray-400 dark:text-gray-500">
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                    <div className="inline-block p-4 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 text-gray-400">
                        <FileText size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        We couldn't find any matches for "{query}". Please try searching with different keywords or browse our services from the menu.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link to="/" className="text-primary hover:underline">Return Home</Link>
                        <Link to="/services" className="text-primary hover:underline">Browse Services</Link>
                    </div>
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default SearchResults;
