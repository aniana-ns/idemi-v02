
import React, { useEffect, useState } from 'react';
import { useParams } from '../lib/cms';
import SEO from '../components/SEO';
import { SkeletonPage } from '../components/SkeletonLoaders';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const GALLERIES: Record<string, {src: string, caption: string}[]> = {
  'main': [
    { src: "https://images.unsplash.com/photo-1581093458791-9f30398bfda6?auto=format&fit=crop&q=80", caption: 'Calibration Lab' },
    { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80", caption: 'Testing Facility' },
    { src: "https://images.unsplash.com/photo-1565514020176-7822bd9b5311?auto=format&fit=crop&q=80", caption: 'CNC Machine Shop' },
    { src: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80", caption: '3D Printing Lab' },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80", caption: 'Training Classroom' },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80", caption: 'Student Workshop' },
  ],
  'bangalore': [
    { src: "https://images.unsplash.com/photo-1596162954151-cd97f5835269?auto=format&fit=crop&q=80", caption: 'Bangalore Centre Exterior' },
    { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80", caption: 'Calibration Setup' },
    { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80", caption: 'Seminar Hall' },
  ],
  'sakinaka': [
    { src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80", caption: 'Sakinaka Sub-Centre' },
    { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80", caption: 'Pump Testing Setup' },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80", caption: 'Training Area' },
  ]
};

const Gallery: React.FC = () => {
  const { refreshObserver } = useScrollAnimation();
  const { slug } = useParams();
  const [images, setImages] = useState<{src: string, caption: string}[] | null>(null);
  
  const galleryKey = slug === 'ecblrgallery' || slug === 'bangalore' ? 'bangalore' : 
                     slug === 'sakinakagallery' || slug === 'sakinaka' ? 'sakinaka' : 'main';
  
  const title = galleryKey === 'main' ? 'Photo Gallery' : 
                galleryKey === 'bangalore' ? 'Bangalore Extension Centre Gallery' : 
                'Sakinaka Sub-Centre Gallery';

  useEffect(() => {
    setTimeout(() => {
        setImages(GALLERIES[galleryKey] || GALLERIES['main']);
        setTimeout(refreshObserver, 100);
    }, 500);
  }, [galleryKey, refreshObserver]);

  const getThumbUrl = (url: string) => {
     if (url.includes('unsplash.com')) {
         const baseUrl = url.split('?')[0];
         return `${baseUrl}?auto=format&fit=crop&w=400&q=60`;
     }
     return url;
  };

  if (!images) return <SkeletonPage />;

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: `${title} | IDEMI`, description: `View photos of ${title}` }} path={`/gallery${slug ? '/' + slug : ''}`} />
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-blue-100">Glimpses of our facilities and events.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer bg-gray-200 dark:bg-gray-800 h-64 reveal-on-scroll">
                    <img 
                        src={getThumbUrl(img.src)} 
                        alt={img.caption} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                        <p className="text-white font-medium text-sm">{img.caption}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
