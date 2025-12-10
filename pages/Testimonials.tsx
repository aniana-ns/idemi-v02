
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Quote, Star, User, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Alumni, Diploma in Tool & Die Making',
    content: 'The practical exposure at IDEMI is unmatched. The training on 5-Axis CNC machines helped me secure a job at a leading automotive company immediately after graduation. The faculty is extremely supportive and knowledgeable.',
    category: 'Training'
  },
  {
    id: 2,
    name: 'Mr. R. K. Gupta',
    role: 'Quality Manager, Precision Engineering Ltd.',
    content: 'We rely on IDEMI for our instrument calibration needs. Their NABL accredited lab ensures high precision standards and their turnaround time is excellent. Highly recommended for industrial calibration.',
    category: 'Services'
  },
  {
    id: 3,
    name: 'Sneha Patil',
    role: 'Entrepreneur',
    content: 'The ESDP training program gave me the confidence and technical know-how to start my own manufacturing unit. The mentorship provided during the course was invaluable for my business setup.',
    category: 'Training'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Project Lead, Defence Sector',
    content: 'IDEMI\'s contribution to indigenization of critical components has been outstanding. Their R&D team is highly capable and innovative. We are proud to be associated with such a premier institute.',
    category: 'R&D'
  },
  {
    id: 5,
    name: 'Anjali Desai',
    role: 'Student, 3D Animation',
    content: 'The 3D Animation course covers everything from modeling to rigging. The labs are equipped with high-end workstations which makes learning software like Maya and Blender very smooth.',
    category: 'Training'
  },
  {
    id: 6,
    name: 'TechFlow Solutions',
    role: 'Corporate Client',
    content: 'We engaged IDEMI for Type Testing of our electrical panels. The testing process was rigorous and transparent. The detailed reports helped us improve our product quality significantly.',
    category: 'Services'
  },
  {
    id: 7,
    name: 'Amit Kumar',
    role: 'Alumni, CNC Programming',
    content: 'I did a short-term course in CNC programming. The hands-on training on actual machines gave me the practical skills that employers look for. I got placed within a month of course completion.',
    category: 'Training'
  },
  {
    id: 8,
    name: 'Priya Wagh',
    role: 'Research Scholar',
    content: 'The library facilities and the helpful staff at IDEMI made my research work much easier. Access to international standards and technical journals is a great asset for students.',
    category: 'Facilities'
  }
];

const Testimonials: React.FC = () => {
  useScrollAnimation();
  
  // Helper to generate initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Helper to generate color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-amber-500', 'bg-red-500', 'bg-teal-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Testimonials | IDEMI', 
          description: 'Read success stories from our alumni and feedback from our industrial clients.',
          keywords: ['IDEMI Reviews', 'Student Testimonials', 'Client Feedback', 'Success Stories'],
          schemaType: 'AboutPage'
        }} 
        path="/testimonials" 
      />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">What people say about IDEMI</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        
        <div className="lg:w-3/4">
            <div className="mb-8 reveal-on-scroll">
                <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-4">
                    <ArrowLeft size={16} className="mr-1" /> Back to Home
                </Link>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    At IDEMI, we take pride in the success of our students and the satisfaction of our clients. Here is what they have to say about their experience with our training programs and technical services.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {TESTIMONIALS.map((item, idx) => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col h-full reveal-on-scroll">
                        <div className="mb-4 text-primary dark:text-blue-400 opacity-30">
                            <Quote size={32} />
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow text-sm leading-relaxed">
                            "{item.content}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto border-t border-gray-100 dark:border-gray-700 pt-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(item.name)}`}>
                                {getInitials(item.name)}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{item.name}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                            </div>
                            <div className="ml-auto flex gap-0.5 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                        <div className="mt-3 text-right">
                             <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] uppercase font-bold rounded">
                                {item.category}
                             </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800 text-center reveal-on-scroll">
                <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary dark:text-blue-400">
                    <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Have an experience to share?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
                    We value your feedback. If you are an alumni or a client, we would love to hear from you.
                </p>
                <Link 
                    to="/contact" 
                    className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg hover:-translate-y-0.5"
                >
                    Write to Us
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
