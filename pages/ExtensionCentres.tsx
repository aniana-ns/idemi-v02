
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const CENTRES = [
  {
    slug: 'bangalore',
    name: "Extension Centre - Bangalore",
    image: "https://images.unsplash.com/photo-1596162954151-cd97f5835269?auto=format&fit=crop&q=80",
    desc: "Established in 2007-08, strategically located in the electronic hub of India. It caters to the Defense, Aerospace, and Electronics industries.",
    address: "KSIC Building, Industrial Estate, Rajajinagar, Bangalore - 560044",
    phone: "080-23350200"
  },
  {
    slug: 'sakinaka',
    name: "Sub-Centre - Sakinaka (Mumbai)",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80",
    desc: "Located in the industrial heart of Andheri, focusing on supporting local manufacturing units with quick-turnaround testing.",
    address: "Andheri-Kurla Road, Sakinaka, Mumbai - 400072",
    phone: "022-28520301"
  },
  {
    slug: 'nagpur',
    name: "Extension Centre - Nagpur",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    desc: "Providing technical support, training, and consultancy to industries in the Vidarbha region.",
    address: "MIDC Industrial Area, Nagpur",
    phone: "0712-2222222"
  }
];

const ExtensionCentres: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Extension Centres | IDEMI', 
          description: 'IDEMI Extension Centres in Bangalore, Sakinaka, and Nagpur providing local testing and training services.' 
        }} 
        path="/extensions" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Extension Centres</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <InfoSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-6">Expanding Our Footprint</p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    In order to reach out to the industries in other regions and provide services at their doorsteps, IDEMI has established Extension Centres. These centres play a pivotal role in supporting MSMEs through Testing, Calibration, and Skill Development activities.
                </p>

                <div className="space-y-8">
                    {CENTRES.map((centre, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl border border-gray-100 dark:border-gray-600 hover:shadow-md transition group overflow-hidden">
                            <div className="md:w-1/3 w-full shrink-0 overflow-hidden rounded-lg h-48 md:h-auto relative bg-gray-200 dark:bg-gray-800">
                                <img 
                                    src={centre.image} 
                                    alt={centre.name} 
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col flex-grow py-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{centre.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{centre.desc}</p>
                                
                                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-start gap-2">
                                        <MapPin size={16} className="mt-0.5 text-secondary shrink-0" />
                                        <span>{centre.address}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={16} className="text-secondary shrink-0" />
                                        <span>{centre.phone}</span>
                                    </div>
                                </div>

                                <Link 
                                    to={`/extension-centre/${centre.slug}`} 
                                    className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold text-sm hover:underline mt-auto self-start"
                                >
                                    View Full Details <ExternalLink size={14} />
                                </Link>
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

export default ExtensionCentres;
