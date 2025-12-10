
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gauge, CheckCircle, FileText, ExternalLink, Star, User, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const PressureCalibration: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Pressure & Vacuum Calibration Services - Dead Weight Testers | IDEMI', 
          description: 'NABL accredited calibration for Pressure & Vacuum. Equipped with Fluke PG7202 Nitrogen Operated Piston Gauge and Dead Weight Testers up to 2500 bar. High precision measurements.',
          keywords: ['pressure calibration', 'vacuum calibration', 'dead weight tester', 'fluke pg7202', 'piston gauge', 'magnehelic gauge', 'manometer', 'NABL'],
          schemaType: 'Service'
        }} 
        path="/services/calibration/pressure" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/services/calibration" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Calibration
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pressure & Vacuum Calibration</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                
                {/* New Upgrade Announcement */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary text-white rounded-lg shrink-0">
                            <Star size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">New Upgrade: Fluke PG7202 Gauge & 8370A Controller</h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                We are pleased to announce that IDEMI Mumbai has successfully upgraded its pressure laboratory with a cutting-edge reference standard, a first in India for commercial use. The newly installed <strong>Nitrogen Operated Piston Gauge</strong>, equipped with an automatic pressure controller, boasts an impressive range of <strong>1000 bar</strong> and an uncertainty of better than <strong>35 ppm</strong>. This state-of-the-art system sets a new benchmark for precision and accuracy in pneumatic pressure measurement.
                            </p>
                        </div>
                    </div>
                </div>
                
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80" alt="Pressure Calibration Lab" className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md" />

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Dead Weight Tester Calibration</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    The primary calibration standards for pressure at IDEMI are the Dead Weight Testers (DWT) which use the measurements of force and area to produce a pressure to calibrate instruments with great accuracy. The Calibration of Dead Weight Tester is done by using the <strong>Cross-Float System</strong>. Two separate systems cover a <strong>Pneumatic Range (0.1 to 35 bar)</strong> and <strong>Hydraulic Range (2 to 2500 bar)</strong>.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Low Pressure Calibration</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    We have commissioned very low-pressure controller/calibrators (Make: Fluke DHI):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                    <li><strong>Model 7250LP:</strong> Range ± 75mbar with uncertainty ± 0.01% of reading.</li>
                    <li><strong>Model 7250i:</strong> Range ± 350 mbar with uncertainty ± 0.01% of reading.</li>
                    <li>Suitable for calibration of Magnehelic Gauges, low pressure Gauges, Manometers, and instruments for pharmaceutical industries.</li>
                </ul>

                {/* Table 1: Primary Standards */}
                <div className="mb-10">
                    <h3 className="text-lg font-bold text-primary dark:text-blue-400 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Primary Standards & DWT List</h3>
                    
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
                                <tr>
                                    <th className="p-3 border dark:border-gray-600 w-12">No.</th>
                                    <th className="p-3 border dark:border-gray-600">DWT / Piston Gauges</th>
                                    <th className="p-3 border dark:border-gray-600">Range</th>
                                    <th className="p-3 border dark:border-gray-600">CMC (±)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600 text-center">1</td><td className="p-2 border dark:border-gray-600">Fluke DHI Model PG7601 (Pneumatic)</td><td className="p-2 border dark:border-gray-600">0.1 to 35 bar</td><td className="p-2 border dark:border-gray-600">0.005% of reading</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600 text-center">2</td><td className="p-2 border dark:border-gray-600">Fluke DHI Model PG7302 (Hydraulic)</td><td className="p-2 border dark:border-gray-600">2 to 2800 bar</td><td className="p-2 border dark:border-gray-600">0.007% of reading</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600 text-center">3</td><td className="p-2 border dark:border-gray-600">Low Pressure Controller (Ruska 7250LP)</td><td className="p-2 border dark:border-gray-600">±75 mbar</td><td className="p-2 border dark:border-gray-600">0.02% of reading</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600 text-center">4</td><td className="p-2 border dark:border-gray-600">Low Pressure Controller (DHI 7250i)</td><td className="p-2 border dark:border-gray-600">±350 mbar</td><td className="p-2 border dark:border-gray-600">0.02% of reading</td></tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="p-2 border dark:border-gray-600 text-center">5</td><td className="p-2 border dark:border-gray-600">Precision Digital Pressure Indicator (Paroscientific)</td><td className="p-2 border dark:border-gray-600">0 to -0.9750 bar</td><td className="p-2 border dark:border-gray-600">0.01% of reading</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {[
                            { name: "Fluke DHI Model PG7601 (Pneumatic)", range: "0.1 to 35 bar", cmc: "0.005% of reading" },
                            { name: "Fluke DHI Model PG7302 (Hydraulic)", range: "2 to 2800 bar", cmc: "0.007% of reading" },
                            { name: "Low Pressure Controller (Ruska 7250LP)", range: "±75 mbar", cmc: "0.02% of reading" },
                            { name: "Low Pressure Controller (DHI 7250i)", range: "±350 mbar", cmc: "0.02% of reading" },
                            { name: "Precision Digital Pressure Indicator", range: "0 to -0.9750 bar", cmc: "0.01% of reading" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{item.name}</h4>
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400 uppercase">Range</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{item.range}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-500 dark:text-gray-400 uppercase">CMC</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200">{item.cmc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Table 2: CMC */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-primary dark:text-blue-400 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Calibration Measurement Capability</h3>
                    
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
                                <tr>
                                    <th className="p-3 border dark:border-gray-600 w-12">No.</th>
                                    <th className="p-3 border dark:border-gray-600">Parameter</th>
                                    <th className="p-3 border dark:border-gray-600">Range</th>
                                    <th className="p-3 border dark:border-gray-600">CMC (±)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                                    <td className="p-2 border dark:border-gray-600 text-center">1</td>
                                    <td className="p-2 border dark:border-gray-600">Pneumatic Pressure</td>
                                    <td className="p-2 border dark:border-gray-600">
                                        ±75 mbar(g)<br/>
                                        ±350 mbar(g)<br/>
                                        0.1 to 35 bar(g & abs)<br/>
                                        1 to 200 bar(g)
                                    </td>
                                    <td className="p-2 border dark:border-gray-600">
                                        0.02% of reading<br/>
                                        0.02% of reading<br/>
                                        0.005% of reading<br/>
                                        0.005% of reading
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                                    <td className="p-2 border dark:border-gray-600 text-center">2</td>
                                    <td className="p-2 border dark:border-gray-600">Hydraulic Pressure<br/><span className="text-xs text-gray-500">(DWT Calibration & Indicating Devices)</span></td>
                                    <td className="p-2 border dark:border-gray-600">
                                        2 to 2500 bar(g & abs)<br/>
                                        2 to 2800 bar(g & abs)
                                    </td>
                                    <td className="p-2 border dark:border-gray-600">
                                        0.007% of reading<br/>
                                        0.007% of reading
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                                    <td className="p-2 border dark:border-gray-600 text-center">3</td>
                                    <td className="p-2 border dark:border-gray-600">Negative Pressure</td>
                                    <td className="p-2 border dark:border-gray-600">0 to -0.9750 bar(g)</td>
                                    <td className="p-2 border dark:border-gray-600">0.01% of reading</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Pneumatic Pressure</h4>
                            <div className="text-xs space-y-2">
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">±75 mbar</span> <span className="font-medium">0.02%</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">±350 mbar</span> <span className="font-medium">0.02%</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">0.1 - 35 bar</span> <span className="font-medium">0.005%</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">1 - 200 bar</span> <span className="font-medium">0.005%</span></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Hydraulic Pressure</h4>
                            <div className="text-xs space-y-2">
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">2 - 2500 bar</span> <span className="font-medium">0.007%</span></div>
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">2 - 2800 bar</span> <span className="font-medium">0.007%</span></div>
                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Negative Pressure</h4>
                            <div className="text-xs space-y-2">
                                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-300">0 to -0.9750 bar</span> <span className="font-medium">0.01%</span></div>
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
                        <p className="font-bold text-gray-900 dark:text-white text-lg">Mr. Kundan Khandare</p>
                        <p className="text-xs font-bold text-secondary dark:text-amber-500 uppercase tracking-wider mb-3">Senior Technical Assistant</p>
                        
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 pt-2 border-t border-blue-200 dark:border-gray-600">
                            <a href="mailto:pressure@idemi.org" className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition group">
                                <Mail size={16} className="text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400" /> pressure@idemi.org
                            </a>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-400" /> 
                                <span>022-24050301 ext 225</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-400" /> 
                                <span>+91 9819795465</span>
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

export default PressureCalibration;
