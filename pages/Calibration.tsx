
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, ExternalLink, Award, Zap, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DATA = {
  title: 'Calibration Laboratories',
  subtitle: 'Premier Calibration Laboratory in Asia (NABL Accredited CC-2287)',
  image: 'https://images.unsplash.com/photo-1581093458791-9f30398bfda6?auto=format&fit=crop&q=80',
  description: `
    <p class="lead text-lg text-gray-700 dark:text-gray-300 mb-6">
      IDEMI is established in 1969 and having more than 50 years of its existence in the field of calibration, serving all types of industries for calibration of Electrical, Electronics and Process Control Measuring Instruments used in the field of Pressure, Thermal, Flow, Mass, Volume and Dimensional Metrology. Today IDEMI is a Premier Calibration Laboratory in Asia with dedicated qualified & experienced metrologist having more than 4 decades of experience, primary calibration standards with state-of-art technology and data bank.
    </p>
    <p class="text-gray-600 dark:text-gray-400 mb-6">
      IDEMI laboratories were first accredited by Department of Science and Technology, Govt. of India earlier by NCTCF from 1989 and now by National Accreditation Board for Testing and Calibration Laboratories (NABL) which is constituent body of Quality Council of India as per ISO/IEC 17025:2017 from past 30 years. Our NABL Accreditation No. is <strong>CC-2287</strong>.
    </p>
    <p class="text-gray-600 dark:text-gray-400 mb-6">
      IDEMI is regularly calibrating various measuring instruments required by various industries, but today we are also specialized for calibration of Calibrators, Precision Reference Standards specially used in calibration and testing laboratories and manufacturers of test and measuring instruments.
    </p>
    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800 mb-6">
        <h4 class="font-bold text-primary dark:text-blue-400 mb-3 flex items-center gap-2">
            <Zap size={20} /> High Precision Capabilities
        </h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
            For example, our CMC in Power / Energy calibration is <strong>20 ppm</strong> by using Precision Power Calibration System (PPCS).
        </p>
        <p class="text-sm text-gray-700 dark:text-gray-300">
            Similarly in SPRT and Thermocouple calibration, it is <strong>1.3 mK</strong> by using Fixed Point Method as per ITS - 1990.
        </p>
    </div>
    <p class="text-gray-600 dark:text-gray-400">
        IDEMI is using primary standards which are normally used in various National Metrological Institutes of various countries and maintaining the highest traceability with SI system of units through NIST USA, PTB Germany, NPL India, NRCC Canada, LNE France, METAS Switzerland etc.
    </p>
  `,
  industries: [
    'Heavy Electrical Manufacturing Industries like Steel, Transformer, Oil, Motor, Switchgear, Alternator, Generator, Cable manufacturers etc.',
    'Continuous process plants like Cement, Steel, Petro-chemical, Sugar, Textile, Chemical, Pharmaceuticals, Dairy and Automobiles etc.',
    'Specific calibration requirements of Aviation, Naval, Space and Defense industries.',
    'Clinical Pathology, Bio-Medical testing and Agriculture laboratories, Food and Drug Testing Laboratories, Chemical Testing Laboratories and Material Testing Laboratories etc.',
    'Calibration and Testing Laboratories & Test and Measuring Equipments.'
  ],
  capabilities: [
    {
      title: 'Electro-Technical',
      desc: 'Calibration of Multimeters, Oscilloscopes, Energy Meters, Clamp Meters, and Power Analyzers up to 100 kV / 4000 A.'
    },
    {
      title: 'Thermal',
      desc: 'Temperature calibration from -196°C to 1500°C for Thermocouples, RTDs, Pyrometers, and Environmental Chambers.'
    },
    {
      title: 'Mechanical (Pressure & Mass)',
      desc: 'Pressure Gauges (Hydraulic/Pneumatic), Dead Weight Testers, Weights (E1 to M1 class), and Weighing Balances.'
    },
    {
      title: 'Fluid Flow',
      desc: 'Water Flow Meters, Rotameters, Anemometers, and Air Flow Sensors using gravimetric and master meter methods.'
    },
    {
      title: 'Dimensional Metrology',
      desc: 'Calipers, Micrometers, Height Gauges, Slip Gauges, and specialized CMM inspection.'
    }
  ],
  links: [
      { 
          label: 'Scope of Accreditation (CC-2287)', 
          url: 'https://nablwp.qci.org.in/CertificateScopenew?x=yXVyaj7QFLkbCMh+XmlfUQ==&p=1&src=P&LS=balhcraes',
          icon: <Award size={18} />
      },
      { 
          label: 'Calibration Charges', 
          url: 'https://idemi.org/assets/uploads/TEC%20-%20Test%20Fee%20Schedule.pdf',
          icon: <FileText size={18} />
      }
  ]
};

const Calibration: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'NABL Accredited Calibration Services - Electrical, Thermal & Mechanical | IDEMI', 
          description: 'Premier Calibration Laboratory in Asia accredited by NABL (CC-2287). High precision calibration for Electro-Technical, Thermal, Pressure, Mass, Flow, and Dimensional parameters using Primary Standards.',
          keywords: [
            'NABL Calibration Services',
            'ISO/IEC 17025:2017', 
            'Electro-Technical Calibration', 
            'Thermal Calibration', 
            'Mechanical Calibration', 
            'Dimensional Metrology',
            'Flow Meter Calibration',
            'Precision Standards',
            'IDEMI Mumbai Calibration'
          ],
          schemaType: 'Service'
        }} 
        path="/services/calibration" 
      />
      
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Services
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{DATA.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">{DATA.subtitle}</p>
                
                <img src={DATA.image} alt={DATA.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />

                <div 
                    className="prose prose-lg dark:prose-invert max-w-none mb-12"
                    dangerouslySetInnerHTML={{ __html: DATA.description }}
                />

                {/* Industries Served */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-secondary pl-4">Industries Served</h3>
                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                        <ul className="space-y-4">
                            {DATA.industries.map((ind, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                    <Globe size={18} className="text-secondary shrink-0 mt-0.5" />
                                    <span>{ind}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Important Links */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    {DATA.links.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-800 transition shadow-md hover:shadow-lg"
                        >
                            {link.icon} {link.label} <ExternalLink size={14} />
                        </a>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-secondary pl-4">Our Capabilities</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {DATA.capabilities.map((cap, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
                            <h3 className="font-bold text-lg text-primary dark:text-blue-400 mb-3">{cap.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cap.desc}</p>
                            <Link 
                                to={`/services/calibration/${cap.title.toLowerCase().split(' ')[0]}`}
                                className="inline-flex items-center text-xs font-bold text-secondary mt-4 uppercase tracking-wider hover:underline"
                            >
                                View Details <CheckCircle size={12} className="ml-1"/>
                            </Link>
                        </div>
                    ))}
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Calibration;
