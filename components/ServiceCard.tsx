
import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, Scale, Wrench, Printer, Zap, Settings, Search, Database, ChevronLeft, ChevronRight, Layers, CheckCircle, Cpu, RefreshCw, Briefcase, Droplet, Gauge, Shield, Radio, Thermometer, Image as ImageIcon } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  'Activity': <Activity size={24} aria-hidden="true" />,
  'Scale': <Scale size={24} aria-hidden="true" />,
  'Wrench': <Wrench size={24} aria-hidden="true" />,
  'Printer': <Printer size={24} aria-hidden="true" />,
  'Zap': <Zap size={24} aria-hidden="true" />,
  'Settings': <Settings size={24} aria-hidden="true" />,
  'Search': <Search size={24} aria-hidden="true" />,
  'Database': <Database size={24} aria-hidden="true" />,
  'Layers': <Layers size={24} aria-hidden="true" />,
  'Cpu': <Cpu size={24} aria-hidden="true" />,
  'RefreshCw': <RefreshCw size={24} aria-hidden="true" />,
  'Briefcase': <Briefcase size={24} aria-hidden="true" />,
  'Droplet': <Droplet size={24} aria-hidden="true" />,
  'Gauge': <Gauge size={24} aria-hidden="true" />,
  'Shield': <Shield size={24} aria-hidden="true" />,
  'Radio': <Radio size={24} aria-hidden="true" />,
  'Thermometer': <Thermometer size={24} aria-hidden="true" />
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const images = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : (service.image ? [service.image] : []);

  const hasGallery = images.length > 1;

  useEffect(() => {
    setLoadedImages({});
    setCurrentSlide(0);
  }, [service.id]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getOptimizedUrl = (url: string, width: number) => {
     if (url.includes('unsplash.com')) {
         const baseUrl = url.split('?')[0];
         return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}`;
     }
     return url;
  };

  return (
    <div 
      className="group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl hover:border-primary dark:hover:border-blue-400 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700/50"
      itemScope 
      itemType="https://schema.org/Service"
      aria-label="ARIA label text"
    >
      <meta itemProp="serviceType" content={service.title} />
      
      {/* Image Area */}
      <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {images.length > 0 ? (
            <>
              {!loadedImages[currentSlide] && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse">
                      <ImageIcon className="text-gray-400 opacity-50" size={48} />
                  </div>
              )}

              {images.map((img, index) => (
                  <img 
                    key={index}
                    src={getOptimizedUrl(img, 600)}
                    alt={`${service.title} - View ${index + 1}`} 
                    onLoad={() => handleImageLoad(index)}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 
                        ${index === currentSlide ? 'z-20 opacity-100' : 'z-0 opacity-0'}
                    `}
                  />
              ))}
              
              {hasGallery && (
                  <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                    <button onClick={prevSlide} className="p-1.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"><ChevronLeft size={18} /></button>
                    <button onClick={nextSlide} className="p-1.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"><ChevronRight size={18} /></button>
                  </div>
              )}
            </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-800">
             <Settings size={40} strokeWidth={1.5} />
          </div>
        )}
        
        {/* Floating Icon Badge */}
        <div className="absolute top-4 right-4 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg text-primary dark:text-blue-400 shadow-sm border border-white/20">
          {iconMap[service.iconName] || <Settings size={20} aria-hidden="true" />}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 itemProp="name" className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
          {service.title}
        </h3>
        
        <p itemProp="description" className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
            {service.description}
        </p>
        
        {/* Features / Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
            {(service.features ? service.features : service.tags || []).slice(0, 2).map((feat, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase tracking-wide group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">
                    {feat}
                </span>
            ))}
        </div>

        {/* Footer Link */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto flex items-center text-primary dark:text-blue-400 font-bold text-sm">
            <span>View Details</span>
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
