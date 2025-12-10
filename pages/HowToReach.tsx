
import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { MapPin, Train, Bus } from 'lucide-react';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const HowToReach: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'How to Reach Us | IDEMI', description: 'Directions to IDEMI Mumbai Campus' }} path={location.pathname} />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">How to Reach Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Directions to our Mumbai Campus</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-8">
                    IDEMI is located at Chunabhatti, Sion, Mumbai. It is strategically situated off the Eastern Express Highway, making it easily accessible by both road and rail.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="flex gap-4">
                        <Train size={32} className="text-primary dark:text-blue-400 shrink-0" />
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">By Train</h3>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                                <li><strong>Harbour Line:</strong> Nearest station is Chunabhatti (5 mins walk) or Kurla (15 mins).</li>
                                <li><strong>Central Line:</strong> Nearest station is Sion or Kurla.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Bus size={32} className="text-secondary shrink-0" />
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">By Road</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Located off the Eastern Express Highway near Priyadarshini Circle. Easily accessible via BEST buses and taxis from Sion, Kurla, and Dadar.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 h-80 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1089.293192280143!2d72.8728851828562!3d19.050881515940684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c7c4ab3bb3%3A0x6ca0402353cee38c!2sInstitute%20for%20Design%20Of%20Electrical%20Measuring%20Instruments!5e0!3m2!1sen!2sin!4v1765002584773!5m2!1sen!2sin"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        title="IDEMI Location Map"
                        className="transition-all duration-300 dark:invert-[0.9] dark:hue-rotate-180"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HowToReach;
