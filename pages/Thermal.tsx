import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Thermometer, FileText, ExternalLink, User, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const Thermal: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Thermal Calibration Services - Temperature & Humidity | IDEMI', 
          description: 'NABL Accredited Thermal Calibration laboratory equipped with Fixed Point Cells, SPRT, Black Body Sources, and High Temperature Furnaces. Ranges from -196°C to 1500°C.',
          keywords: ['thermal calibration', 'temperature calibration', 'SPRT', 'RTD', 'fixed point', 'NABL', 'black body source', 'humidity calibration'],
          schemaType: 'Service'
        }} 
        path="/services/calibration/thermal" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services/calibration" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Calibration
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Thermal Calibration</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Temperature & Humidity Standards</p>
                
                <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80" alt="Thermal Calibration" className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Thermal calibration laboratory is equipped with state of the master standards like Fixed point cells, SPRT sensors, Sec.PRT sensors, S Type Thermocouple, Low temperature bath and dry wells, High temperature furnaces, black body source, thermometry bridge, thermometer readouts etc.
                </p>

                <div className="space-y-12">
                    <section>
                        <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4">Calibration Services</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-sm text-gray-700 dark:text-gray-300">
                            <li>SPRT / PRT sensors in the temp. Range -196°C to 660 °C by fixed point method.</li>
                            <li>RTD(PRT) sensors in the temp. range -80°C to 660 °C by comparison method.</li>
                            <li>Infrared (IR) Thermometers in the temp. range 0°C to 500 °C</li>
                            <li>Thermocouples of various types in the temp. range Ambient to 1000 °C</li>
                            <li>Glass Thermometers -50°C to 250 °C</li>
                            <li>Digital temp. indicators / Data Logger with sensors etc.</li>
                            <li>Dry Block Calibrator, Furnace -80°C to 1000°C</li>
                            <li>On site calibration of IR thermometers, Deep Freezers, cold storage, humidity chambers, generators, ovens, environmental chambers etc.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4">NABL Accredited Scope (Fixed Point)</h3>
                        
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold">
                                    <tr>
                                        <th className="p-3 border dark:border-gray-600">SPRT Sensors using fixed point method</th>
                                        <th className="p-3 border dark:border-gray-600">Range</th>
                                        <th className="p-3 border dark:border-gray-600">CMC</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 dark:text-gray-300">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">TPW Cell</td><td className="p-2 border dark:border-gray-600">0.01 °C</td><td className="p-2 border dark:border-gray-600">1.3 mK</td></tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">Gallium Cell</td><td className="p-2 border dark:border-gray-600">29.7646 °C</td><td className="p-2 border dark:border-gray-600">1.6 mK</td></tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">Tin Cell</td><td className="p-2 border dark:border-gray-600">231.928 °C</td><td className="p-2 border dark:border-gray-600">4.5 mK</td></tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">Zinc Cell</td><td className="p-2 border dark:border-gray-600">419.527 °C</td><td className="p-2 border dark:border-gray-600">6.6 mK</td></tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">Aluminum Cell</td><td className="p-2 border dark:border-gray-600">660.323 °C</td><td className="p-2 border dark:border-gray-600">12 mK</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Contact Card */}
                    <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700 h-fit">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <User className="text-primary dark:text-blue-400" size={20} /> Contact Person
                        </h3>
                        <div className="space-y-1">
                            <p className="font-bold text-gray-900 dark:text-white text-lg">Mr. Nishant Pawaskar</p>
                            <p className="text-xs font-bold text-secondary dark:text-amber-500 uppercase tracking-wider mb-3">Joint Director (ECL)</p>
                            
                            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 pt-2 border-t border-blue-200 dark:border-gray-600">
                                <a href="mailto:thermal@idemi.org" className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition group">
                                    <Mail size={16} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400" /> thermal@idemi.org
                                </a>
                                <div className="flex items-center gap-2">
                                    <Phone size={16} className="text-gray-400" /> 
                                    <span>022-24050301 ext 240</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={16} className="text-gray-400" /> 
                                    <span>+91 81042 93678</span>
                                </div>
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

export default Thermal;