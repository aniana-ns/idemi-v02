import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { ShieldCheck, Zap } from 'lucide-react';

const CovidProducts: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'COVID-19 Products | IDEMI', description: 'Indigenous products developed to fight pandemic' }} path={location.pathname} />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">COVID-19 Innovative Products</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Supporting the nation's fight against the pandemic</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                During the pandemic, IDEMI developed several indigenous products to fight COVID-19, leveraging our design and manufacturing capabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                        <Zap size={24} className="text-secondary" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">UVC Sanitizer Box</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        For disinfecting wallets, keys, mobiles, and masks using UV-C light.
                    </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck size={24} className="text-green-600" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Automatic Dispenser</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Touch-free automatic sanitizer dispenser for public places and offices.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CovidProducts;