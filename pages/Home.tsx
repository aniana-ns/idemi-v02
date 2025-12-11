
import React, { useEffect, useState } from 'react';
import { Link } from '../lib/cms';
import { ArrowRight, CheckCircle, BookOpen, FileText, Calendar, Briefcase, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ImageSlider from '../components/ImageSlider';
import NewsTicker from '../components/NewsTicker';
import SEO from '../components/SEO';
import QuickAccessBar from '../components/QuickAccessBar';
import HomePopup from '../components/HomePopup';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useScrollAnimation } from '../lib/useScrollAnimation';
import { SkeletonServiceCard } from '../components/SkeletonLoaders';
import { ServiceItem, SlideItem, NewsItem, Testimonial } from '../types';

const INITIAL_SLIDES: SlideItem[] = [
  { 
    id: 's1', 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", 
    title: 'Excellence in Calibration & Testing', 
    subtitle: 'Empowering Indian Industry with world-class technical services.', 
    ctaText: 'Explore Services', 
    ctaLink: '/services' 
  },
  { 
    id: 's2', 
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80", 
    title: 'Advanced Manufacturing Hub', 
    subtitle: 'State-of-the-art Tool Room and 3D Printing facilities.', 
    ctaText: 'View Capabilities', 
    ctaLink: '/services/tool-room' 
  },
  { 
    id: 's3', 
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80", 
    title: 'Skill Development Programs', 
    subtitle: 'Job-oriented training in Automation, CAD/CAM, and ESDM.', 
    ctaText: 'Find Courses', 
    ctaLink: '/training' 
  }
];

const INITIAL_NEWS: NewsItem[] = [
  { 
    id: 'n1', 
    date: 'New', 
    title: 'BARC RT2- 97th Batch Announcement', 
    summary: '', 
    link: '/downloads/notifications' 
  },
  { 
    id: 'n2', 
    date: 'Oct 2024', 
    title: 'AICTE 2025 - Third Merit List - Tool & Die Making', 
    summary: '', 
    link: `/view-document?url=https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf&title=AICTE 2025 - Third Merit List` 
  },
  { 
    id: 'n3', 
    date: 'Oct 2024', 
    title: 'AICTE 2025 - Third Merit List - 3D Animation & Graphics', 
    summary: '', 
    link: `/view-document?url=https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf&title=AICTE 2025 - Third Merit List` 
  },
  { 
    id: 'n4', 
    date: 'Oct 2024', 
    title: 'AICTE 2025 - Third Merit List - Robotics & Mechatronics', 
    summary: '', 
    link: `/view-document?url=https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf&title=AICTE 2025 - Third Merit List` 
  }
];

const INITIAL_STATS = [
  { value: "56+", label: "Years of Excellence" },
  { value: "15k+", label: "Students Trained/Yr" },
  { value: "25k+", label: "Instruments Calibrated" },
  { value: "50+", label: "R&D Projects" }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul Sharma',
    role: 'Alumni, Diploma in Tool & Die Making',
    content: 'The practical exposure at IDEMI is unmatched. The training on 5-Axis CNC machines helped me secure a job at a leading automotive company immediately after graduation.'
  },
  {
    id: 't2',
    name: 'Mr. R. K. Gupta',
    role: 'Quality Manager, Precision Engineering Ltd.',
    content: 'We rely on IDEMI for our instrument calibration needs. Their NABL accredited lab ensures high precision standards and their turnaround time is excellent.'
  },
  {
    id: 't3',
    name: 'Sneha Patil',
    role: 'Entrepreneur',
    content: 'The ESDP training program gave me the confidence and technical know-how to start my own manufacturing unit. The mentorship provided was invaluable.'
  },
  {
    id: 't4',
    name: 'Vikram Singh',
    role: 'Project Lead, Defence Sector',
    content: 'IDEMI\'s contribution to indigenization of critical components has been outstanding. Their R&D team is highly capable and innovative.'
  }
];

const FEATURE_SECTION = {
  subtitle: "National Significance",
  title: "Contributions to National Projects",
  description: "IDEMI plays a key role in India's strategic missions. We have developed advanced manufacturing capabilities for cryogenic engine parts—crucial for ISRO’s launch vehicles used in lunar missions.",
  image: "https://images.unsplash.com/photo-1581092334651-ddf26f9a09d0?auto=format&fit=crop&q=80",
  list: [
    "Chandrayaan Missions: Vital components for CE20 cryogenic engine (GSLV Mk III).",
    "ISRO Partnership: Precision design and prototyping for aerospace needs.",
    "BARC Collaboration: Radiography Testing (RT L2) training (91st-97th batches).",
    "Defence Support: Calibration for Indian Navy, BHEL & GAIL.",
    "Policy Influence: Collaborating with IEEMA to shape Indian standards."
  ]
};

const SERVICES_PREVIEW: ServiceItem[] = [
  { 
    id: '1', 
    title: 'Calibration Services', 
    slug: 'calibration', 
    description: 'NABL accredited calibration services for Electrical, Thermal, Pressure, Mass, and Dimensional parameters.', 
    iconName: 'Scale',
    image: "https://images.unsplash.com/photo-1581093458791-9f30398bfda6?auto=format&fit=crop&q=80",
    tags: ['NABL Accredited', 'ISO/IEC 17025', 'On-site Service']
  },
  { 
    id: '2', 
    title: 'Testing Services', 
    slug: 'testing', 
    description: 'High-quality testing for electrical, mechanical, and electronic instruments as per IEC, IS, and EN standards.', 
    iconName: 'Activity',
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    tags: ['EMI/EMC', 'Safety Testing', 'IP Rating']
  },
  { 
    id: '3', 
    title: 'Tool Room Services', 
    slug: 'tool-room', 
    description: 'Design and manufacturing of Press Tools, Moulds, Die Casting Dies, Jigs & Fixtures using CNC technology.', 
    iconName: 'Wrench',
    image: "https://images.unsplash.com/photo-1565514020176-7822bd9b5311?auto=format&fit=crop&q=80",
    tags: ['5-Axis CNC', 'Wire Cut EDM', 'Precision Moulds']
  },
  { 
    id: '4', 
    title: '3D Printing (Additive Mfg)', 
    slug: 'eos-formiga', 
    description: 'Rapid prototyping and batch production using advanced Selective Laser Sintering (SLS) technology.', 
    iconName: 'Printer',
    image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80",
    tags: ['SLS Tech', 'Rapid Prototyping', 'Nylon PA12']
  }
];

const TRAINING_PREVIEW = [
  { title: "Diploma in Tool & Die Making", type: "AICTE Approved", duration: "4 Years", description: "Comprehensive course covering design and manufacturing of tools, dies, moulds, and jigs." },
  { title: "Post Graduate Diploma in Industrial Automation", type: "Long Term", duration: "1 Year", description: "Advanced training in PLC, SCADA, DCS, and Industrial Robotics." },
  { title: "Radiography Testing (RT Level-2)", type: "Specialized", duration: "BARC Certified", description: "Joint training program with BARC for radiological safety and testing." }
];

const QUICK_LINKS = [
  {
    title: 'Tenders',
    description: 'Explore current procurement notices, bid documents, and tender announcements.',
    icon: <FileText size={32} className="text-blue-600 dark:text-blue-400" />,
    link: '/downloads/active-tenders',
    items: ['Supply of CNC Machine', 'AMC for IT Infrastructure', 'Procurement of 3D Printer Material']
  },
  {
    title: 'Upcoming Training Batches',
    description: 'Admissions open for long-term and short-term technical courses.',
    icon: <Calendar size={32} className="text-green-600 dark:text-green-400" />,
    link: '/training/aicte/schedule',
    items: ['Diploma in Tool & Die Making', 'Mechatronics (PG Diploma)', 'AutoCAD & CNC Programming']
  },
  {
    title: 'Notifications / Careers',
    description: 'Join our team. View latest job openings and recruitment notices.',
    icon: <Briefcase size={32} className="text-amber-600 dark:text-amber-400" />,
    link: '/careers',
    items: ['Engagement of Trade Apprentices', 'Technical Assistant Recruitment', 'Faculty Positions']
  }
];

const Home: React.FC = () => {
  const { refreshObserver } = useScrollAnimation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
        setIsLoading(false);
        // Refresh observer after content renders
        setTimeout(refreshObserver, 100);
    }, 800);
    return () => clearTimeout(timer);
  }, [refreshObserver]);

  return (
    <>
      <SEO 
        seo={{ 
          title: 'IDEMI - Institute for Design of Electrical Measuring Instruments', 
          description: 'IDEMI Mumbai - A Government of India Society under Ministry of MSME offering Calibration, Testing, Tool Design, Manufacturing, and Technical Training services.',
          keywords: ['IDEMI', 'MSME', 'Calibration', 'Testing', 'Tool Room', 'Training', 'NABL', 'Mumbai', 'Electrical', 'Measuring Instruments', 'Government of India'],
          schemaType: 'Organization'
        }} 
        path="/" 
      />
      
      {/* Image Slider */}
      <ImageSlider slides={INITIAL_SLIDES} />

      {/* News Ticker */}
      <NewsTicker news={INITIAL_NEWS} />
      
      {/* Quick Access Side Bar */}
      <QuickAccessBar />
      
      {/* Popup with Updates */}
      <HomePopup />

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" aria-label="Key Statistics">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            {INITIAL_STATS.map((stat, index) => (
              <div key={index} className={`p-4 ${index !== 0 ? 'md:border-l md:border-gray-200 dark:md:border-gray-700' : ''}`}>
                <div className="text-4xl font-bold text-primary dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of technical services tailored to meet the rigorous demands of modern industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="h-full">
                        <SkeletonServiceCard />
                    </div>
                ))
            ) : (
                SERVICES_PREVIEW.map((service, index) => (
                  <div key={service.id} className={`reveal-on-scroll stagger-${(index % 4) + 1}`}>
                    <Link to={service.id === '4' ? '/services/eos-formiga' : `/services/${service.slug}`}>
                        <ServiceCard service={service} />
                    </Link>
                  </div>
                ))
            )}
          </div>

          <div className="text-center mt-12 reveal-on-scroll">
            <Link 
              to="/services" 
              className="text-primary dark:text-blue-400 font-bold hover:text-secondary dark:hover:text-amber-500 transition underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Split */}
      <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 reveal-on-scroll">
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300"></div>
              <img 
                src={getOptimizedUrl(FEATURE_SECTION.image, 800)} 
                srcSet={`${getOptimizedUrl(FEATURE_SECTION.image, 600)} 600w, ${getOptimizedUrl(FEATURE_SECTION.image, 1000)} 1000w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Lab Technician working on instruments" 
                loading="lazy"
                className="relative rounded-2xl shadow-2xl object-cover h-96 w-full transform -rotate-3 group-hover:-rotate-2 transition-transform duration-300 border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
          <div className="md:w-1/2 reveal-on-scroll stagger-2">
            <h3 className="text-secondary dark:text-amber-500 font-bold uppercase tracking-wide text-sm mb-2">{FEATURE_SECTION.subtitle}</h3>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{FEATURE_SECTION.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {FEATURE_SECTION.description}
            </p>
            <ul className="space-y-4">
              {FEATURE_SECTION.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 dark:text-green-500 shrink-0 mt-1" size={18} aria-hidden="true" />
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h3 className="text-secondary dark:text-amber-500 font-bold uppercase tracking-wide text-sm mb-2">Skill Development</h3>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Training & Education</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Empowering the youth with technical skills through Government-Certified courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINING_PREVIEW.map((course, index) => (
                <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 reveal-on-scroll stagger-${(index % 3) + 1} hover:shadow-xl transition-all group hover:-translate-y-1`}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-2.5 rounded-lg text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <BookOpen size={24} />
                        </div>
                        <div className="text-xs font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            {course.type}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                        {course.title}
                    </h3>
                    <p className="text-sm text-secondary dark:text-amber-500 font-semibold mb-3">Duration: {course.duration}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2 text-sm leading-relaxed">{course.description}</p>
                    
                    <Link to="/training" className="inline-flex items-center text-primary dark:text-blue-400 font-bold text-sm hover:text-secondary dark:hover:text-amber-400 transition-all gap-1 group-hover:gap-2">
                        View Course Details <ArrowRight size={14} />
                    </Link>
                </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal-on-scroll">
                <Link 
                  to="/training" 
                  className="text-primary dark:text-blue-400 font-bold hover:text-secondary dark:hover:text-amber-500 transition underline underline-offset-4"
                >
                  Explore All Courses
                </Link>
          </div>
        </div>
      </section>

      {/* Quick Links / Updates Section */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Updates & Opportunities</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed about our latest tenders, training schedules, and career openings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {QUICK_LINKS.map((item, index) => (
              <div key={index} className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group reveal-on-scroll stagger-${index + 1}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 min-h-[40px]">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <ChevronRight size={16} className="text-secondary dark:text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{subItem}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={item.link} 
                  className="inline-flex items-center justify-center w-full py-3 bg-white dark:bg-gray-700 text-primary dark:text-blue-400 font-bold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm group-hover:shadow-md"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialCarousel testimonials={TESTIMONIALS} />

      {/* News Section */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 reveal-on-scroll">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Press Releases</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Recent announcements and events.</p>
            </div>
            <Link to="/downloads/notifications" className="hidden md:block text-primary dark:text-blue-400 font-semibold hover:text-secondary dark:hover:text-amber-500">View Archive</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_NEWS.slice(0, 3).map((item, index) => (
                <article key={item.id} className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full reveal-on-scroll stagger-${(index % 3) + 1} transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] active:shadow-sm cursor-pointer`}>
                {item.date && <div className="text-secondary dark:text-amber-500 text-sm font-bold mb-2">{item.date}</div>}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 hover:text-primary dark:hover:text-blue-400 transition-colors">
                    {item.link ? (
                        item.link.startsWith('/') ? (
                            <Link to={item.link}>{item.title}</Link>
                        ) : (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        )
                    ) : (
                        item.title
                    )}
                </h3>
                {item.summary && <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-grow">{item.summary}</p>}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link to={item.link?.startsWith('/') ? item.link : '#'} className="text-xs text-gray-400 font-medium hover:text-primary dark:hover:text-blue-400 transition-colors uppercase tracking-wider">Read More</Link>
                </div>
                </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Helper for Unsplash optimization logic to be reused
const getOptimizedUrl = (url: string, width: number) => {
    if (url.includes('unsplash.com')) {
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}`;
    }
    return url;
 };

export default Home;
