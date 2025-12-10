
import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import InfoSidebar from '../components/InfoSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';
import { 
  Calendar, Building2, Award, MapPin, Zap, Cpu, Settings, Monitor, 
  CheckCircle, ShieldCheck, Globe, Users 
} from 'lucide-react';

const AtGlance: React.FC = () => {
  useScrollAnimation();
  const location = useLocation();

  const KEY_STATS = [
    { 
      label: 'Established In', 
      value: '1968', 
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      desc: 'Over 5 decades of service'
    },
    { 
      label: 'Parent Ministry', 
      value: 'Ministry of MSME', 
      icon: <Building2 className="w-8 h-8 text-amber-500" />,
      desc: 'Government of India'
    },
    { 
      label: 'Organization Status', 
      value: 'Govt. Society', 
      icon: <Users className="w-8 h-8 text-green-500" />,
      desc: 'Autonomous Body'
    },
    { 
      label: 'Presence', 
      value: 'Mumbai & Bangalore', 
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      desc: '+ Extension Centres'
    },
  ];

  const CORE_AREAS = [
    { name: 'Electrical', icon: <Zap size={20} /> },
    { name: 'Electronics', icon: <Cpu size={20} /> },
    { name: 'Mechanical', icon: <Settings size={20} /> },
    { name: 'Information Tech', icon: <Monitor size={20} /> },
  ];

  const SERVICES = [
    'Calibration (NABL Accredited)',
    'Testing (Electrical/Electronics)',
    'Tool Design & Manufacturing',
    'Technical Training (Skill Dev)',
    'Design & Development (R&D)'
  ];

  const ACCREDITATIONS = [
    { name: 'NABL (ISO/IEC 17025:2017)', desc: 'Calibration & Testing Competence' },
    { name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { name: 'AS 9100 Rev D', desc: 'Aerospace Quality Management' }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'IDEMI At a Glance | IDEMI', 
          description: 'Key facts, figures, and overview of IDEMI Mumbai capabilities and infrastructure.' 
        }} 
        path={location.pathname} 
      />
      
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">IDEMI At a Glance</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">A quick overview of our legacy, capabilities, and reach.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4">
            <InfoSidebar />
        </aside>
        
        <div className="lg:w-3/4 space-y-8">
            
            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal-on-scroll">
                {KEY_STATS.map((stat, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition text-center group">
                        <div className="bg-gray-50 dark:bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            {stat.icon}
                        </div>
                        <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</h3>
                        <p className="text-gray-900 dark:text-white font-bold text-lg leading-tight mb-1">{stat.value}</p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs">{stat.desc}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 reveal-on-scroll">
                {/* Core Areas */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-3">
                        <Globe className="text-secondary" size={24} /> Core Areas
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {CORE_AREAS.map((area, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition">
                                <div className="text-primary dark:text-blue-400 mb-2">{area.icon}</div>
                                <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{area.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Services */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-3">
                        <Settings className="text-secondary" size={24} /> Key Services
                    </h3>
                    <ul className="space-y-4">
                        {SERVICES.map((service, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <CheckCircle size={18} className="text-green-500 shrink-0" />
                                <span className="text-sm font-medium">{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Accreditations */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-8 rounded-xl shadow-lg text-white reveal-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                    <Award className="text-amber-400" size={32} />
                    <h2 className="text-2xl font-bold">Accreditations & Certifications</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {ACCREDITATIONS.map((acc, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/20 transition">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-green-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white mb-1">{acc.name}</h4>
                                    <p className="text-blue-100 text-xs opacity-80">{acc.desc}</p>
                                </div>
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

export default AtGlance;
