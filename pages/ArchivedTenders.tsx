
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, X, Archive, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import DownloadsSidebar from '../components/DownloadsSidebar';

const REFERENCE_PDF = "https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf";

const RAW_DATA = [
    "GeM Tender Notice - Digital Balance",
    "GeM Tender Notice - S S Weight Box",
    "GeM Tender Notice - Digital Pressure Indicator (Medium Air/Nitrogen)",
    "GeM Tender Notice - Three years subscription of Autodesk Powermill Ultimate, Powermill Standard & Powershape",
    "Corrigendum 1 - Bid Extension - Line Impedance Stabilising Network",
    "Corrigendum 1 - Bid Extension - Oscilloscope",
    "GeM Tender Notice - Gas Primary Piston Gauge with Manual Controller",
    "Corrigendum 2 - Bid Extension - Conducted, Common Mode Disturbance",
    "Corrigendum 2 - Bid Extension - EMI Receiver",
    "Corrigendum 2 - Bid Extension - Harmonic & Flicker Generator",
    "Corrigendum 2 - Bid Extension - Relay Test Set",
    "Corrigendum 1 - Bid Extension - Conducted, Common Mode Disturbance",
    "Corrigendum 1 - Bid Extension - EMI Receiver",
    "Corrigendum 1 - Bid Extension - Harmonic & Flicker Generator",
    "Corrigendum 1 - Bid Extension - Relay Test Set",
    "GeM Tender Notice - AC/DC Power Source",
    "GeM Tender Notice - Conducted, Common Mode Disturbance 0Hz to 150kHz",
    "GeM Tender Notice - EMI Receiver",
    "GeM Tender Notice - Environmental Chamber",
    "GeM Tender Notice - Harmonic & Flicker Generator",
    "GeM Tender Notice - Relay Test Kit",
    "GeM Tender Notice - Relay Test Set",
    "GeM Tender Notice - Salt Spray Chamber",
    "GeM Tender Notice - Thermal Shock Chamber",
    "GeM Tender Notice - AR VR System & Accessories @ 108 nos",
    "Corrigendum 1 - Bid Extension - CNC Turnmill Centre with Y Axis",
    "Corrigendum 1 - Bid Extension - Cylindrical Grinding Machine",
    "GeM Tender Notice - CNC Turnmill Centre with Y Axis",
    "GeM Tender Notice - Cylindrical Grinding Machine",
    "GeM Tender Notice - Electronic Load",
    "GeM Tender Notice - Electrical safety analyser",
    "CORRIGENDUM 1 - Bid Extension - Portable 3 phase power source",
    "GeM Tender Notice - Portable 3 Phase Power Source",
    "GeM Tender Notice - Black Body source (IR Calibrator) with IR Thermometer",
    "Corrigendum 3 - Time Interval Meter",
    "Corrigendum 2 - Mass Comparator",
    "Corrigendum 2 - Standard Potential Transformer",
    "Corrigendum 2 - Time Interval Meter",
    "Corrigendum 1 - Mass Comparator",
    "Corrigendum 1 - Std Potential Transformer",
    "GeM Tender Notice - Standard Potential Transformer",
    "GeM Tender Notice - Mass Comparator",
    "Corrigendum 1 - Bid Extension - Time Interval Meter",
    "GeM Tender Notice - Thermocouple Calibration Furnace",
    "GeM Tender Notice - Time Interval Meter",
    "Corrigendum 1 - Bid Extension - Line Impedance Stabilisation Network",
    "GeM Tender Notice - Line Impedance Stabilising Network",
    "GeM Tender Notice - Glow Wire Test System",
    "CORRIGENDUM 1 - Bid Extension - High Resistance Bridge",
    "GeM Tender Notice - Desktop PC @ 25 nos",
    "GeM Tender Notice - High Resistance Bridge",
    "Corrigendum 3 - Standard Potential Transformer",
    "Corrigendum 1 - Bid Extension - Gas Primary Piston Gauge with Manual Controller",
    "GeM Tender Notice - Proteus Software perpetual license",
    "Bid Corrigendum of Proteus Software",
    "GeM Tender Notice - Desktop Computers @ 50 nos",
    "GeM Tender Notice - Solidworks Standard 2024 Standalone Perpetual License for 4 Years Subscription + Cloud Services",
    "Corrigendum 1 - Bid Extension - Electrical Safety Analyser",
    "GeM Tender Notice - Gas Primary Piston Gauge with Manual Controller",
    "Corrigendum 1 - Digital Weighing Balance",
    "GeM Tender Notice - Digital Weighing Balance",
    "Corrigendum 1 - Bid Extension - Dry block calibrator",
    "Corrigendum 1 - Bid Extension - Tachometer Calibration System",
    "Corrigendum 2 - Bid Extension - 300kV High Voltage Divider",
    "GeM Tender Notice - Tachometer Calibration System",
    "GeM Tender Notice - Temperature Source (Dry Block Calibrator)",
    "Corrigendum 1 - Air Compressor",
    "Corrigendum 1 - Digital Pressure Controller",
    "Corrigendum 1 - Digital Pressure Indicator",
    "GeM Tender Notice - Digital Pressure Controller",
    "GeM Tender Notice - Digital Pressure Indicator",
    "GeM Tender Notice - Screw Type Air Compressor",
    "GeM Tender Notice - Computer Hardware and Networking",
    "GeM Tender Notice - Hostel Furniture",
    "GeM Tender Notice - Office Furniture",
    "GeM Tender Notice - Classroom Furniture",
    "GeM Tender Notice - SOLIDWORKS Education License",
    "GeM Tender Notice - CATIA V5 ED2 ACADEMIC LEARN PACKAGE",
    "GeM Tender Notice - Desktop Computers",
    "GeM Tender Notice - Desktop Computers & Peripherals",
    "GeM Tender Notice - 300KV High Voltage Divider with KV Meter",
    "GeM Tender Notice - 100KV High Voltage Source",
    "GeM Tender Notice - Energy Meter Test System",
    "GeM Tender Notice - Harmonic Flicker test system",
    "GeM Tender Notice - Air Nitrogen PG base pressure balance with controller",
    "E-Procurement Notice for Tan Delta Dissipation Box",
    "E-Procurement Notice for Time Interval Meter",
    "E-Procurement Notice for High ACCURACY MASS FLOW METER",
    "E-Procurement Notice for CONDUCTED RF IMMUNITY SIMULATOR",
    "E-Procurement Notice for CYLINDRICAL GRINDING MACHINE",
    "E-Procurement Notice for E-Procurement Notice for CNC TURN MILL CENTRE",
    "E-Procurement Notice for 200 kV AC/DC HIGH VOLTAGE DIVIDER",
    "E-Procurement Notice for EXTERNAL PRESSURE SENSOR COMPATIBLE TO BEAMAX MODEL MC6 WITH T-HOSE",
    "E-Procurement Notice for TAN DELTA AND RESISTIVITY METER CALIBRATOR BAUR MAKE",
    "E-Procurement Notice for TIME INTERVAL METER",
    "E-Procurement Notice for HIGH ACCURACY MASS FLOW METER",
    "Tender Cancellation Corrigendum for HIGH ACCURACY MASS FLOW METER",
    "E-Procurement Notice for CNC PCB Manufacturing Prototype Hardware and Software for Mechatronics and PCB Development Lab",
    "E-Procurement Notice for ESD CALIBRATION SYSTEM",
    "E-Procurement Notice for MASS COMPARATOR",
    "E-Procurement Notice for SOUND LEVEL CALIBRATOR",
    "E-Procurement Notice for LASER WELDING MACHINE",
    "E-Procurement Notice for MEGAOHM DECADE BOX",
    "Date Extension Corrigendum for HIGH ACCURACY MASS FLOW METER",
    "E-Procurement Notice for HIGH ACCURACY MASS FLOW METER",
    "E-Procurement Notice for Ingress of Water Test System",
    "E-Procurement Notice for Hot and Cold Chamber",
    "E-Procurement Notice for SMT Line Fully Automatic Comprising Machine/Sub Assembly",
    "SUPPLY AND INSTALLATION OF ANSYS AT NEW TECHNOLOGY CENTERS (Package - 34)",
    "SUPPLY AND INSTALLATION OF SolidWorks AT NEW TECHNOLOGY CENTERS (Package - 33)",
    "SUPPLY AND INSTALLATION OF CREO AT NEW TECHNOLOGY CENTERS (Package - 32)",
    "SUPPLY AND INSTALLATION OF CATIA AT NEW TECHNOLOGY CENTERS (Package - 31)",
    "SUPPLY AND INSTALLATION OF UGNX AT NEW TECHNOLOGY CENTERS (Package - 30)",
    "SUPPLY AND INSTALLATION OF AUTODESK AT NEW TECHNOLOGY CENTERS(Package - 29)",
    "SUPPLY AND INSTALLATION OF MASTERCAM AT NEW TECHNOLOGY CENTERS (Package - 28)",
    "SUPPLY OF MEASUREMENT INSTRUMENTS REQUIRED AT NEW TECHNOLOGY CENTERS (Package - 24)",
    "SUPPLY OF OFFICE FURNITURE REQUIRED AT NEW AND EXISTING TECHNOLOGY CENTERS (Package - 21)",
    "Corrigendum-2 For Date Extension (Package-18)",
    "Minutes Of Pre-bid Meeting (Package-18)",
    "Corrigendum-1 (Package-18)",
    "TENDER FOR SUPPLY and installation OF CAD, CAM, CAE Server, Computer Workstations, Firewall & Related Network INFRASTRUCTURE REQUIRED AT New TECHNOLOGY CENTERS (package-18)",
    "E tender notice for development of smasung lab, Mobile,Refrigeration, Air conditioning,LCD/LED TV repair and training system",
    "E tender notice for sound level calibrator,Harmonic & Flicker Generator and Comparison Noise Emitter,Rotary Screw compressor",
    "Corrigendum-1 Package 15 Minutes of Prebid Meeting,Response To Queries Etc.",
    "SUPPLY OF DESKTOP FURNITURE REQUIRED AT NEW TECHNOLOGY CENTERS (Package - 17)",
    "SUPPLY OF OFFICE FURNITURE REQUIRED AT NEW AND EXISTING TECHNOLOGY CENTERS (Package - 15)",
    "Advertisement NIT0011819 5 Axis CNC Machine under Buy-Back",
    "e-Tender notice for 0141718 Voltage, Telecom surge simulator,3ph power supply, flame chamber",
    "Corrigendum-3 package-13 Response To Queries and Revised Delivery Schedule",
    "CORRIGENDUM-2-DATE EXTENSION (Package - 13)",
    "CORRIGENDUM-1-SUPPLY OF DESKTOP COMPUTERS AND WORKSTATION (Package - 13)",
    "Supply and installation of Desktop and workstation required for training at new Technology Centers",
    "e-Tender notice for DC reference std & upgradation of zera test bench",
    "e-Tender notice for Civil Works",
    "e-Tender notice for CNC Machines & Desktop Computers"
];

const INITIAL_DATA = RAW_DATA.map((title, idx) => ({
    id: `a${idx + 1}`,
    title: title,
    refNumber: '-',
    publishDate: '-',
    closingDate: '-',
    category: 'Archive',
    link: REFERENCE_PDF
}));

const ArchivedTenders: React.FC = () => {
  const [viewingId, setViewingId] = useState<string | null>(null);

  const data = INITIAL_DATA;

  const toggleView = (id: string) => {
    setViewingId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Archived Tenders | IDEMI', 
          description: 'Past tender notices and closed procurement archives.',
          keywords: ['Archived Tenders', 'Past Procurement', 'Closed Bids', 'Tender History'],
          schemaType: 'WebSite'
        }} 
        path="/downloads/archive-tenders" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Archived Tenders</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
         <aside className="lg:w-1/4">
            <DownloadsSidebar />
         </aside>

         <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/20">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Archive size={24} className="text-secondary"/>
                        Past Tender Archive
                    </h2>
                </div>

                {data.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">No archived tenders available.</div>
                ) : (
                    <>
                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm uppercase">
                                    <tr>
                                        <th className="p-4 border-b dark:border-gray-600 w-12">#</th>
                                        <th className="p-4 border-b dark:border-gray-600">Title</th>
                                        <th className="p-4 border-b dark:border-gray-600 w-24">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {data.map((tender, index) => (
                                    <React.Fragment key={tender.id}>
                                        <tr className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition ${viewingId === tender.id ? 'bg-blue-50 dark:bg-gray-700' : ''}`}>
                                            <td className="p-4 text-sm font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">{index + 1}</td>
                                            <td className="p-4 font-medium text-gray-800 dark:text-white">{tender.title}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <button 
                                                        onClick={() => toggleView(tender.id)}
                                                        className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors focus:outline-none" 
                                                        title={viewingId === tender.id ? "Close View" : "View Document"}
                                                    >
                                                        {viewingId === tender.id ? <X size={18} className="text-red-500" /> : <Eye size={18} />}
                                                    </button>
                                                    <a 
                                                        href={tender.link} 
                                                        download 
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-bold text-primary dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200 whitespace-nowrap"
                                                    >
                                                        <Download size={16} />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        {viewingId === tender.id && (
                                            <tr className="bg-gray-50 dark:bg-gray-800">
                                                <td colSpan={3} className="p-4 border-b dark:border-gray-600">
                                                    <div className="w-full h-[600px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden shadow-inner">
                                                        <iframe 
                                                            src={tender.link} 
                                                            className="w-full h-full" 
                                                            title={`PDF Viewer - ${tender.title}`}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-700">
                            {data.map((tender, index) => (
                                <div key={tender.id} className={`p-4 ${viewingId === tender.id ? 'bg-blue-50 dark:bg-gray-800' : ''}`}>
                                    <div className="flex justify-between items-start gap-3 mb-2">
                                        <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                                            #{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 dark:text-white text-sm mb-4 leading-snug">
                                        {tender.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => toggleView(tender.id)}
                                            className="flex-1 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-bold flex items-center justify-center gap-2"
                                        >
                                            {viewingId === tender.id ? <><X size={14} /> Close</> : <><Eye size={14} /> View</>}
                                        </button>
                                        <a 
                                            href={tender.link} 
                                            download 
                                            className="flex-1 py-2 bg-primary text-white rounded text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-800"
                                        >
                                            <Download size={14} /> Download
                                        </a>
                                    </div>
                                    {viewingId === tender.id && (
                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 animate-slide-up">
                                            <div className="w-full h-[400px] bg-white rounded border border-gray-200 dark:border-gray-600 overflow-hidden shadow-inner">
                                                <iframe 
                                                    src={tender.link} 
                                                    className="w-full h-full" 
                                                    title={`PDF Viewer - ${tender.title}`}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ArchivedTenders;
