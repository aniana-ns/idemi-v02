
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Clock, CheckCircle, AlertCircle, Download, FileText, Eye, X, Phone, IndianRupee, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const REFERENCE_PDF = "https://idemi.org/assets/downloads/EC%20Blr%20Newspaper%20Ad%20A5%20Size.pdf";
const getLink = (type: string) => REFERENCE_PDF;

const NOTIFICATIONS = [
    { id: 'n1', title: 'Notification | AICTE Spot Admission Round - 1', date: 'New', link: getLink('spot') }
];

const MERIT_LISTS = [
    {
        round: 'Third Merit List - 2025',
        status: 'Published',
        items: [
            { id: 'ml3-1', course: 'DIPLOMA IN ROBOTICS AND MECHATRONICS', link: getLink('m3') },
            { id: 'ml3-2', course: 'DIPLOMA IN 3D ANIMATIONS & GRAPHICS', link: getLink('a3') },
            { id: 'ml3-3', course: 'DIPLOMA IN TOOL & DIE MAKING', link: getLink('t3') }
        ]
    },
    {
        round: 'Second Merit List - 2025',
        status: 'Closed',
        items: [
            { id: 'ml2-1', course: 'DIPLOMA IN ROBOTICS AND MECHATRONICS', link: getLink('m2') },
            { id: 'ml2-2', course: 'DIPLOMA IN 3D ANIMATIONS & GRAPHICS', link: getLink('a2') },
            { id: 'ml2-3', course: 'DIPLOMA IN TOOL & DIE MAKING', link: getLink('t2') }
        ]
    },
    {
        round: 'First Merit List - 2025',
        status: 'Closed',
        items: [
            { id: 'ml1-1', course: 'DIPLOMA IN ROBOTICS AND MECHATRONICS', link: getLink('m1') },
            { id: 'ml1-2', course: 'DIPLOMA IN 3D ANIMATIONS & GRAPHICS', link: getLink('a1') },
            { id: 'ml1-3', course: 'DIPLOMA IN TOOL & DIE MAKING', link: getLink('t1') }
        ]
    }
];

const IMPORTANT_DATES = [
    { event: 'Commencement of Online Application Form', date: '29-03-2025' },
    { event: 'Last date for Online Application Form / Offline', date: '10-07-2025' },
    { event: 'Publishing of First Merit List', date: '19-06-2025' },
    { event: 'Admission Starting From', date: '17-06-2025' },
    { event: 'Admission Deadline for First Merit List', date: '30-06-2025' },
    { event: 'Publishing of Second Merit List', date: '01-07-2025' },
    { event: 'Admission Starting From', date: '01-07-2025' },
    { event: 'Admission Deadline for Second Merit List', date: '11-07-2025' },
    { event: 'Publishing of Third Merit List', date: '14-07-2025' },
    { event: 'Admission Starting From', date: '15-07-2025' },
    { event: 'Admission Deadline for Third Merit List', date: '21-07-2025' },
    { event: 'Commencement of Course', date: '28-07-2025' }
];

const COURSES = [
    { name: 'DIPLOMA IN TOOL & DIE MAKING', fee: '20,000' },
    { name: 'DIPLOMA IN ROBOTICS & MECHATRONICS', fee: '20,000' },
    { name: 'DIPLOMA IN 3D ANIMATION & GRAPHICS', fee: '20,000' }
];

const GENERAL_DOCUMENTS = [
    { id: 'd1', title: 'AICTE Diploma Prospectus 2025-26', link: REFERENCE_PDF },
    { id: 'd2', title: 'AICTE Diploma Admission Notice 2025-26', link: REFERENCE_PDF },
    { id: 'd3', title: 'AICTE Diploma Admission Advertisement 2025-26', link: REFERENCE_PDF },
    { id: 'd4', title: 'EOA Report 2025-26', link: getLink('eoa') },
    { id: 'd5', title: 'Certificate of Establishment', link: getLink('est') },
    { id: 'd6', title: 'Equivalence Certificate as per MSBTE', link: getLink('msbte') }
];

const CONTACTS = [
    { name: 'Mr. Sagar Nevage', role: 'Tool & Die Making', phone: '7021221498' },
    { name: 'Mr. Kapil Chourasiya', role: 'Robotics & Mechatronics', phone: '9819495547' },
    { name: 'Mr. Nilesh Sharma', role: '3D Animation & Graphics', phone: '9821473895' }
];

const CONDITIONS = [
    "Incomplete registrations are liable to be rejected. Interim enquiries will not be entertained.",
    "Candidates belonging to the reserved categories should substantiate their claim by enclosing a Caste Certificate issued by competent authority. In case of OBC category, candidate must produce the certificate from competent authority certifying that he/she does not belong to creamy layer.",
    "The numbers of seats advertised are provisional and the IDEMI reserves the rights to alter the number of seats.",
    "IDEMI is not responsible for any technical problems occurring during the Registration Process.",
    "The rules made by the IDEMI regarding the selection and the closure of admissions shall be final and binding. Candidates are advised to refer the prospectus for further details.",
    "For any help, please forward your enquiries on training@idemi.org"
];

const AICTESchedule: React.FC = () => {
  useScrollAnimation();
  const [viewingId, setViewingId] = useState<string | null>(null);

  const toggleView = (id: string) => {
    setViewingId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO
        seo={{
          title: 'AICTE Diploma Admission Schedule 2025 | IDEMI',
          description: 'Merit Lists, Important Dates, Fees, and Admission Process for AICTE Approved Diploma Courses at IDEMI Mumbai.',
          keywords: ['AICTE Admission 2025', 'IDEMI Merit List', 'Diploma Admission Dates', 'Tool & Die Making Admission'],
          schemaType: 'Article'
        }}
        path="/training/aicte/schedule"
      />

      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training/aicte" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to AICTE Courses
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AICTE Diploma Admission 2025</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4 space-y-12 reveal-on-scroll">
             
             {/* 1. Notifications & Spot Admission */}
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="text-red-500" /> Latest Notifications
                </h2>
                <div className="space-y-4">
                    {NOTIFICATIONS.map((note) => (
                        <div key={note.id} className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg overflow-hidden">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
                                <div>
                                    <h3 className="font-bold text-gray-800 dark:text-white">{note.title}</h3>
                                    <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-white dark:bg-gray-800 px-2 py-0.5 rounded mt-1 inline-block border border-red-100 dark:border-red-900">
                                        {note.date}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button 
                                        onClick={() => toggleView(note.id)}
                                        className="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-gray-800 border border-red-200 dark:border-red-800 rounded text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                                    >
                                        {viewingId === note.id ? <><X size={14} /> Close</> : <><Eye size={14} /> View</>}
                                    </button>
                                    <a 
                                        href={note.link} 
                                        download 
                                        className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded text-sm font-bold hover:bg-red-700 transition"
                                    >
                                        <Download size={14} />
                                    </a>
                                </div>
                            </div>
                            {viewingId === note.id && (
                                <div className="p-4 border-t border-red-200 dark:border-red-900/30 bg-white dark:bg-gray-800">
                                    <iframe src={note.link} className="w-full h-[500px] border-0 rounded" title={note.title} />
                                </div>
                            )}
                        </div>
                    ))}
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Enquiry for AICTE Diploma Courses</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Enquiry cum Registration Form is now available.</p>
                        </div>
                        <Link to="/student-registration?course=AICTE%20Diploma" className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-800 transition whitespace-nowrap shadow-md">
                            Enquire / Register Now
                        </Link>
                    </div>
                </div>
             </div>

             {/* 2. Merit Lists */}
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <FileText className="text-secondary" /> Merit Lists - 2025
                </h2>
                <div className="space-y-8">
                    {MERIT_LISTS.map((list, idx) => (
                        <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                <h3 className="font-bold text-gray-800 dark:text-gray-200">{list.round}</h3>
                                <span className={`text-xs px-2 py-1 rounded font-bold uppercase ${list.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}`}>
                                    {list.status}
                                </span>
                            </div>
                            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                {list.items.map((item) => (
                                    <div key={item.id} className={`group ${viewingId === item.id ? 'bg-blue-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'} transition`}>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-3">
                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item.course}</span>
                                            <div className="flex items-center gap-3 shrink-0">
                                                <button 
                                                    onClick={() => toggleView(item.id)}
                                                    className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition"
                                                >
                                                    {viewingId === item.id ? <><X size={16} /> Close</> : <><Eye size={16} /> View</>}
                                                </button>
                                                <a 
                                                    href={item.link} 
                                                    download 
                                                    className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-blue-400 hover:underline"
                                                >
                                                    <Download size={16} /> Download
                                                </a>
                                            </div>
                                        </div>
                                        {viewingId === item.id && (
                                            <div className="px-4 pb-4 animate-fade-in">
                                                <div className="w-full h-[500px] border border-gray-200 dark:border-gray-600 rounded bg-white overflow-hidden shadow-inner">
                                                    <iframe src={item.link} className="w-full h-full" title={item.course} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* 3. Important Dates - Responsive */}
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Calendar className="text-primary" /> Important Dates (Tentative)
                </h2>
                
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wider">
                            <tr>
                                <th className="p-4 border-b dark:border-gray-600">Event Description</th>
                                <th className="p-4 border-b dark:border-gray-600 font-bold text-right w-40">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
                            {IMPORTANT_DATES.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                                    <td className="p-4 font-medium text-gray-900 dark:text-white">{item.event}</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-300 font-mono text-right whitespace-nowrap">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {IMPORTANT_DATES.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="font-medium text-gray-900 dark:text-white text-sm">{item.event}</h3>
                                <span className="shrink-0 bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-mono font-bold text-primary dark:text-blue-400">
                                    {item.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* 4. Courses & Fees */}
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Courses & Fees</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {COURSES.map((course, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-600 shadow-sm text-center flex flex-col justify-between">
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-4">{course.name}</h3>
                            <div>
                                <div className="text-2xl font-bold text-primary dark:text-blue-400 flex items-center justify-center gap-1">
                                    <IndianRupee size={20} /> {course.fee}
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Per Semester</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded border border-gray-100 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300">
                    <p><strong>Note:</strong> Reservation in seats to SC/ST/OBC/PH/EWS are applicable as per rules, subject to production of authentic Certificates. Tuition Fee of the SC/ST candidates will be reimbursed after the successful completion of the Academic Year, however other fees as applicable will be charged.</p>
                </div>
             </div>

             {/* 5. Process & Info */}
             <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Mode of Selection</h3>
                     <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Selection will be based on <strong>Merit</strong>. The list of successful candidates of First Merit list in the order of merit, will be declared on the IDEMI website and displayed at IDEMI Notice Board on a scheduled date as mentioned. The candidate, who meets the eligibility is based on the upcoming notification/guidelines of AICTE/MSBTE.
                     </p>
                 </div>
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">How to Apply</h3>
                     <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                        Candidate willing to register for any of the courses mentioned above will have to register his / her candidature through the Offline/On-line Registration process through the link available on the website www.idemi.org.
                     </p>
                     <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
                         <li>Registration Fee: <strong>₹ 200/-</strong> (Non-refundable).</li>
                         <li>Candidates are given the choice to register for multiple courses (additional payment required).</li>
                         <li>Candidates will be applied for the courses after successful submission of online /offline Registration.</li>
                     </ul>
                 </div>
             </div>

             {/* 6. Documents & Contact */}
             <div className="grid md:grid-cols-2 gap-8">
                {/* Documents */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">AICTE Approved Documents</h3>
                    <div className="space-y-4">
                        {GENERAL_DOCUMENTS.map((doc) => (
                            <div key={doc.id} className={`group ${viewingId === doc.id ? 'bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2' : ''} transition`}>
                                <div className="flex justify-between items-center text-sm pb-1">
                                    <span className="text-gray-700 dark:text-gray-300">{doc.title}</span>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => toggleView(doc.id)} className="text-gray-500 hover:text-primary dark:hover:text-blue-400 transition" title="View">
                                            {viewingId === doc.id ? <X size={16} className="text-red-500"/> : <Eye size={16}/>}
                                        </button>
                                        <a href={doc.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 dark:text-blue-400">
                                            <Download size={16} />
                                        </a>
                                    </div>
                                </div>
                                {viewingId === doc.id && (
                                    <div className="mt-2 animate-fade-in">
                                        <div className="w-full h-[400px] bg-white border border-gray-200 dark:border-gray-600 rounded overflow-hidden shadow-inner">
                                            <iframe src={doc.link} className="w-full h-full" title={doc.title} />
                                        </div>
                                    </div>
                                )}
                                {viewingId !== doc.id && <div className="border-b border-gray-100 dark:border-gray-700"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Phone size={20} className="text-secondary" /> Contact Details
                    </h3>
                    <div className="space-y-6">
                        {CONTACTS.map((contact, idx) => (
                            <div key={idx} className="flex flex-col p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">{contact.role}</span>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-800 dark:text-white">{contact.name}</span>
                                    <a href={`tel:${contact.phone}`} className="text-primary dark:text-blue-400 font-mono text-sm font-bold hover:underline">{contact.phone}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>

             {/* 7. General Conditions */}
             <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800">
                <h3 className="text-lg font-bold text-amber-800 dark:text-amber-400 mb-4">General Conditions</h3>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    {CONDITIONS.map((cond, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="font-bold text-amber-600 dark:text-amber-500 shrink-0 bg-amber-100 dark:bg-amber-900 rounded-full w-6 h-6 flex items-center justify-center text-xs">{idx + 1}</span>
                            <span className="pt-0.5">{cond}</span>
                        </li>
                    ))}
                </ul>
             </div>

          </div>
      </div>
    </div>
  );
};

export default AICTESchedule;
