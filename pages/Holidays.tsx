
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const Holidays: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  const HOLIDAYS_LIST = [
    { no: 1, name: "Republic Day", date: "26th January, 2025", day: "Sunday" },
    { no: 2, name: "Maha Shivratri", date: "26th February, 2025", day: "Wednesday" },
    { no: 3, name: "Holi", date: "14th March, 2025", day: "Friday" },
    { no: 4, name: "Eid-ul-Fitr", date: "31st March, 2025", day: "Monday" },
    { no: 5, name: "Mahavir Jayanti", date: "10th April, 2025", day: "Thursday" },
    { no: 6, name: "Good Friday", date: "18th April, 2025", day: "Friday" },
    { no: 7, name: "Buddha Purnima", date: "12th May, 2025", day: "Monday" },
    { no: 8, name: "Eid-ul-Zuha (Bakrid)", date: "7th June, 2025", day: "Saturday" },
    { no: 9, name: "Independence Day", date: "15th August, 2025", day: "Friday" },
    { no: 10, name: "Ganesh Chaturthi", date: "27th August, 2025", day: "Wednesday" },
    { no: 11, name: "Milad-un-Nabi (Birthday of Prophet Mohammad)", date: "5th September, 2025", day: "Friday" },
    { no: 12, name: "Mahatma Gandhi's Birthday", date: "2nd October, 2025", day: "Thursday" },
    { no: 13, name: "Dussehra (Vijayadashami)", date: "2nd October, 2025", day: "Thursday" },
    { no: 14, name: "Diwali (Deepavali)", date: "20th October, 2025", day: "Monday" },
    { no: 15, name: "Diwali Amavasya (Laxmi Pujan)", date: "21st October, 2025", day: "Tuesday" },
    { no: 16, name: "Guru Nanak's Birthday", date: "05th November, 2025", day: "Wednesday" },
    { no: 17, name: "Christmas Day", date: "25th December, 2025", day: "Thursday" }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Holidays List 2025 | IDEMI', description: 'Gazetted Holidays for the Year 2025' }} path={location.pathname} />
      
      {/* Standard Page Header (Matches Careers) */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Holidays List 2025</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        
        <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                    <Calendar size={28} className="text-secondary" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gazetted Holidays</h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    The Institute observes the following Gazetted Holidays during the year 2025 in accordance with the Government of India directives.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mb-8">
                    <p className="text-sm text-gray-700 dark:text-gray-200 flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary dark:text-blue-400 mt-0.5 shrink-0" />
                        <strong>Note:</strong> In addition to the closed holidays, each employee is permitted to avail of any two Restricted Holidays to be chosen by him/her from the list of Restricted Holidays.
                    </p>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="p-4 border-b dark:border-gray-600 w-20 text-center">Sr. No.</th>
                                <th className="p-4 border-b dark:border-gray-600">Holiday Name</th>
                                <th className="p-4 border-b dark:border-gray-600 w-48">Date</th>
                                <th className="p-4 border-b dark:border-gray-600 w-40">Day</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                            {HOLIDAYS_LIST.map((holiday, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 text-center font-mono text-gray-500 dark:text-gray-400">{holiday.no}</td>
                                    <td className="p-4 font-medium text-gray-900 dark:text-white">{holiday.name}</td>
                                    <td className="p-4 font-medium text-primary dark:text-blue-400">{holiday.date}</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">{holiday.day}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-3">
                    {HOLIDAYS_LIST.map((holiday, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm">{holiday.name}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{holiday.day}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-primary dark:text-blue-400">{holiday.date}</p>
                                <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded mt-1 inline-block">#{holiday.no}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
