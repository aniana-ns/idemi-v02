
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, FileText, ExternalLink, User, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const MassVolumeCalibration: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Mass and Volume Calibration Services - E1 Class Weights & Glassware | IDEMI', 
          description: 'Calibration of E1, E2, F1, M1 Class Weights, Electronic Balances, and Volumetric Glassware (Pipettes, Burettes). NABL accredited services for Pharma and Chemical industries.',
          keywords: ['mass calibration', 'volume calibration', 'weights calibration', 'pipettes', 'burettes', 'weighing balance', 'E1 class weights', 'mass comparator', 'volumetric glassware'],
          schemaType: 'Service'
        }} 
        path="/services/calibration/mass-volume" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services/calibration" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Calibration
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mass and Volume Calibration</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-4">Precision Weighing & Volumetric Standards</p>
                
                <img src="https://images.unsplash.com/photo-1616168868661-e070c7324c0f?auto=format&fit=crop&q=80" alt="Mass Calibration" className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />

                <p className="lead text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Mass & Volume calibration laboratory is equipped with state of the master standards like E1 Class weights(1mg to 20kg), E2 Class weights(1mg to 20kg), Digital Balance, Micro Balance, Mass Comparator etc.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Services Undertaken</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>E2 Class Weights ( 1mg to 20 kg )</li>
                        <li>F1 Class Weights ( 1mg to 20 kg )</li>
                        <li>F2 Class Weights ( 1mg to 20 kg )</li>
                        <li>M1 Class Weights ( 1mg to 20 kg )</li>
                        <li>M2 Class Weights ( 1mg to 20 kg )</li>
                        <li>Analytical/Industrial Weights ( 1mg to 20 kg )</li>
                        <li>Micropipettes / Syringes ( 5µl Onwards )</li>
                        <li>Glassware Pipette / Burette Measuring Cylinder / Volumetric Flask / Graduated Jar / Can etc (1ml to 20000ml)</li>
                        <li>Digital Balance ( 1mg to 5000 kg)</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4">NABL Accredited Scope</h3>
                    
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
                                <tr>
                                    <th className="p-3 border dark:border-gray-600">Instruments</th>
                                    <th className="p-3 border dark:border-gray-600">Range</th>
                                    <th className="p-3 border dark:border-gray-600">CMC</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                {/* Weights */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600" rowSpan={11}>Weights</td><td className="p-2 border dark:border-gray-600">1 mg to 100 mg</td><td className="p-2 border dark:border-gray-600">0.003 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">200 mg</td><td className="p-2 border dark:border-gray-600">0.004 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">500 mg</td><td className="p-2 border dark:border-gray-600">0.005 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">1 g</td><td className="p-2 border dark:border-gray-600">0.006 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">2 g</td><td className="p-2 border dark:border-gray-600">0.008 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">5 g</td><td className="p-2 border dark:border-gray-600">0.009 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">10 g - 100 g</td><td className="p-2 border dark:border-gray-600">0.02 mg - 0.04 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">200 g</td><td className="p-2 border dark:border-gray-600">0.07 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">500 g</td><td className="p-2 border dark:border-gray-600">0.2 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">1 Kg - 5 Kg</td><td className="p-2 border dark:border-gray-600">0.5 mg - 1.5 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">10 Kg - 20 Kg</td><td className="p-2 border dark:border-gray-600">4 mg - 9 mg</td></tr>
                                
                                {/* Weighing Balance */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600" rowSpan={7}>Weighing Balance</td><td className="p-2 border dark:border-gray-600">0 to 5 g (d: 0.001 mg)</td><td className="p-2 border dark:border-gray-600">0.005 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">0 to 220 g (d: 0.01 mg)</td><td className="p-2 border dark:border-gray-600">0.06 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">0 to 10kg (d: 1 mg - 10 mg)</td><td className="p-2 border dark:border-gray-600">3 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">0 to 34kg (d: 100 mg)</td><td className="p-2 border dark:border-gray-600">220 mg</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">0 to 100kg (d: 1 g)</td><td className="p-2 border dark:border-gray-600">2 g</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">0 to 200kg (d: 10 g - 20 g)</td><td className="p-2 border dark:border-gray-600">15 g - 30 g</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">500g to 5000kg (d: 0.1 kg)</td><td className="p-2 border dark:border-gray-600">0.35 kg</td></tr>

                                {/* Volumetric */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600" rowSpan={2}>Micropipettes / Piston Operated</td><td className="p-2 border dark:border-gray-600">5 µl to 100 µl</td><td className="p-2 border dark:border-gray-600">0.4 µl</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">&gt;100 µl to 1000 µl</td><td className="p-2 border dark:border-gray-600">0.4 µl</td></tr>
                                
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600" rowSpan={4}>Glassware Pipette / Burette / Cylinder / Flask</td><td className="p-2 border dark:border-gray-600">1 ml to 10ml</td><td className="p-2 border dark:border-gray-600">12 µl</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">&gt;10 ml to 100 ml</td><td className="p-2 border dark:border-gray-600">0.07 ml</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">&gt;100 ml to 2000 ml</td><td className="p-2 border dark:border-gray-600">0.62 ml</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600">&gt;2000 ml to 20000 ml</td><td className="p-2 border dark:border-gray-600">4 ml</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Weights</h4>
                            <div className="text-xs space-y-2">
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">1 mg - 100 mg</span> <span className="font-medium">0.003 mg</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">10 g - 100 g</span> <span className="font-medium">0.02 - 0.04 mg</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">1 kg - 5 kg</span> <span className="font-medium">0.5 - 1.5 mg</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">10 kg - 20 kg</span> <span className="font-medium">4 - 9 mg</span></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Weighing Balance</h4>
                            <div className="text-xs space-y-2">
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">0 to 220 g (d: 0.01 mg)</span> <span className="font-medium">0.06 mg</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">0 to 10kg (d: 1 mg)</span> <span className="font-medium">3 mg</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">500g to 5000kg (d: 0.1 kg)</span> <span className="font-medium">0.35 kg</span></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Volumetric</h4>
                            <div className="text-xs space-y-2">
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">Micropipettes (5-100 µl)</span> <span className="font-medium">0.4 µl</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">Glassware (1-10 ml)</span> <span className="font-medium">12 µl</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">Glassware (100-2000 ml)</span> <span className="font-medium">0.62 ml</span></div>
                            </div>
                        </div>
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
                        <p className="font-bold text-gray-900 dark:text-white text-lg">Mr. Nishant Pawaskar</p>
                        <p className="text-xs font-bold text-secondary dark:text-amber-500 uppercase tracking-wider mb-3">Joint Director (ECL)</p>
                        
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 pt-2 border-t border-blue-200 dark:border-gray-600">
                            <a href="mailto:mv@idemi.org" className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition group">
                                <Mail size={16} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400" /> mv@idemi.org
                            </a>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-400" /> 
                                <span>022-24050301 ext 240</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-400" /> 
                                <span>+91 8104293678</span>
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

export default MassVolumeCalibration;
