
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials, autoPlayInterval = 6000 }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [current, isPaused, autoPlayInterval]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 300); // Wait for exit animation
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAnimating(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const activeItem = testimonials[current];

  // Helper to generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Helper to generate a consistent color for avatar based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-emerald-500 to-teal-500',
      'from-orange-500 to-amber-500',
      'from-purple-500 to-pink-500',
      'from-indigo-500 to-blue-600'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden relative border-t border-gray-200 dark:border-gray-800">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Student & Client Voices</h2>
           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
             Hear from our alumni and industry partners about their transformative journey and experience with IDEMI.
           </p>
        </div>

        <div 
            className="max-w-5xl mx-auto relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Main Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 md:p-12 relative min-h-[320px] flex items-center transition-all duration-300 hover:shadow-blue-900/5 dark:hover:shadow-black/40">
                {/* Large Quote Icon */}
                <Quote className="absolute top-8 left-8 text-blue-100 dark:text-gray-700 w-24 h-24 -z-0 opacity-50 transform -scale-x-100" />
                
                <div className={`relative z-10 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-opacity duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                    
                    {/* Avatar / Profile Side */}
                    <div className="shrink-0 flex flex-col items-center">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getAvatarColor(activeItem.name)} flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4 ring-4 ring-white dark:ring-gray-700`}>
                            {getInitials(activeItem.name)}
                        </div>
                        <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                            {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />)}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="text-center md:text-left flex-grow">
                        <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6 italic">
                            "{activeItem.content}"
                        </blockquote>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{activeItem.name}</h4>
                            <p className="text-primary dark:text-blue-400 font-semibold text-sm uppercase tracking-wide mt-1">{activeItem.role}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons - Floating */}
            <button 
                onClick={handlePrev}
                className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-gray-700 z-20 border border-gray-100 dark:border-gray-700 group-hover:scale-100 md:scale-90"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={handleNext}
                className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-gray-700 z-20 border border-gray-100 dark:border-gray-700 group-hover:scale-100 md:scale-90"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`transition-all duration-300 rounded-full h-2.5 ${
                            idx === current 
                            ? 'w-10 bg-primary dark:bg-blue-400' 
                            : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                        aria-current={idx === current}
                    />
                ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-12 animate-fade-in">
              <Link 
                to="/testimonials" 
                className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:text-secondary dark:hover:text-amber-500 transition-colors uppercase tracking-wider text-sm group"
              >
                View All Success Stories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
