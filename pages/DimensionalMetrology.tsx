
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ruler, Target, CheckCircle, Settings, FileText, ExternalLink, User, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const DimensionalMetrology: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Dimensional Metrology Services - CMM & Linear Calibration | IDEMI', 
          description: 'NABL accredited Dimensional Metrology Lab (CC-2287) offering calibration of CMM, Vernier Calipers, Micrometers, Gauges, and Length Standards.',
          keywords: ['Dimensional Calibration', 'CMM Calibration', 'Metrology Lab', 'Vernier Caliper', 'Micrometer', 'NABL', 'Length Standard'],
          schemaType: 'Service'
        }} 
        path="/services/calibration/dimensional-metrology" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services/calibration" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Calibration
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dimensional Metrology</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Precision Linear & Angular Measurements</p>
                
                <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80" alt="Dimensional Metrology" className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />

                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Our Dimensional Metrology Laboratory is one of the best in the country, equipped with high-precision masters like Universal Length Measuring Machine (ULM), Coordinate Measuring Machine (CMM), Gauge Block Comparator, and Laser Interferometer.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Instruments Calibrated</h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Vernier Calipers / Height Gauges</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Micrometers (External/Internal)</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Dial Indicators / Bore Gauges</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Plug / Ring / Thread Gauges</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Gauge Blocks / Slip Gauges</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Surface Plates / Squares</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Profile Projectors / Microscopes</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Facilities</h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                                <Settings size={16} className="text-secondary shrink-0 mt-0.5" />
                                <span><strong>ULM:</strong> For high precision calibration of gauges.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Settings size={16} className="text-secondary shrink-0 mt-0.5" />
                                <span><strong>CMM:</strong> 3D inspection and calibration of complex parts.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Settings size={16} className="text-secondary shrink-0 mt-0.5" />
                                <span><strong>Laser Interferometer:</strong> For calibration of CNC machine axes.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Settings size={16} className="text-secondary shrink-0 mt-0.5" />
                                <span><strong>Slip Gauge Comparator:</strong> Sub-micron accuracy.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <a 
                        href="https://nablwp.qci.org.in/CertificateScopenew?x=yXVyaj7QFLkbCMh+XmlfUQ==&p=1&src=P&LS=balhcraes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition shadow-md"
                    >
                        <FileText size={20} /> Click here for Scope of Accreditation (CC-2287) <ExternalLink size={16} />
                    </a>
                </div>

                {/* Contact Card */}
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 h-fit">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <User className="text-primary dark:text-blue-400" size={20} /> Contact Person
                    </h3>
                    <div className="space-y-1">
                        <p className="font-bold text-gray-900 dark:text-white text-lg">Mr. Mangesh Kamat</p>
                        <p className="text-xs font-bold text-secondary dark:text-amber-500 uppercase tracking-wider mb-3">Assistant Director (TDC)</p>
                        
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 pt-2 border-t border-blue-200 dark:border-gray-600">
                            <a href="mailto:dml@idemi.org" className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition group">
                                <Mail size={16} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400" /> dml@idemi.org
                            </a>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-400" /> 
                                <span>022-24050301 ext 248</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-400" /> 
                                <span>+91 9987538603</span>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
          </div>
      </div>
    </div>
  );
};

export default DimensionalMetrology;
