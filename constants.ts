
import { NavLink, ServiceItem, NewsItem, SearchItem } from './types';

export const CONTACT_INFO = {
  address: "Swatantryaveer Tatya Tope Marg, Chunabhatti, Sion, Mumbai - 400 022, India",
  phone: "+91-22-2405 0301 / 02 / 03 / 04",
  email: "info@idemi.org",
  workingHours: "Monday - Friday: 9:30 AM - 5:30 PM"
};

export const DEPARTMENT_CONTACTS = {
  training: {
    email: "training@idemi.org",
    phone: "022-24050301 ext 238",
    mobile: "+91 22354 05456"
  },
  toolRoom: {
    email: "toolroom@idemi.org",
    phone: "022-24050301 ext 244",
    mobile: "9604956644"
  },
  calibration: {
    eclEmail: "ecl@idemi.org",
    thermalEmail: "thermal@idemi.org",
    phone: "022-24050301 ext 240"
  },
  testing: {
    email: "etl@idemi.org",
    phone: "022-24050301 ext 235",
    mobile: "9324350952"
  },
  design: {
    email: "tooldesign@idemi.org",
    phone: "022-24050301 ext 254",
    mobile: "9987538603"
  },
  inspection: {
    email: "dml@idemi.org",
    phone: "022-24050301 ext 248",
    mobile: "9987538603"
  },
  threeDPrinting: {
    email: "toolroom@idemi.org",
    phone: "022-24050301 ext 244",
    mobile: "9869507626"
  },
  rapidPrototyping: {
    email: "toolroom@idemi.org",
    phone: "022-24050301 ext 254",
    mobile: "9869507626"
  }
};

export const SEARCH_INDEX: SearchItem[] = [
  { title: 'Calibration Services', path: '/services/calibration', type: 'Service', desc: 'NABL accredited calibration services for Electrical, Thermal, and Mechanical parameters.' },
  { title: 'Electro-Technical Calibration', path: '/services/calibration/electro-technical', type: 'Service', desc: 'Calibration of multimeters, oscilloscopes, and energy meters.' },
  { title: 'Thermal Calibration', path: '/services/calibration/thermal', type: 'Service', desc: 'Temperature calibration for furnaces, ovens, and thermocouples.' },
  { title: 'Testing Services', path: '/services/testing', type: 'Service', desc: 'Electrical safety, EMI/EMC, and environmental testing for industrial products.' },
  { title: 'Tool Room Services', path: '/services/tool-room', type: 'Service', desc: 'Design and manufacturing of Press Tools, Moulds, Dies, Jigs & Fixtures.' },
  { title: 'Tool Design', path: '/services/tool-design', type: 'Service', desc: 'CAD/CAM design services for moulds and dies using NX and CATIA.' },
  { title: '3D Printing', path: '/services/eos-formiga', type: 'Service', desc: 'Rapid prototyping service using EOS Formiga P110 SLS technology.' },
  { title: 'Training Programs', path: '/training', type: 'Training', desc: 'AICTE approved diploma and short-term skill development courses.' },
  { title: 'AICTE Courses', path: '/training/aicte', type: 'Training', desc: 'Diploma in Tool & Die Making, Mechatronics.' },
  { title: 'Short Term Courses', path: '/training/short-term-courses', type: 'Training', desc: 'PLC, SCADA, CNC, and Embedded Systems training.' },
  { title: 'Contact Us', path: '/contact', type: 'Page', desc: 'Address, phone numbers, and location map of IDEMI Mumbai.' },
  { title: 'About IDEMI', path: '/about', type: 'Page', desc: 'History, Mission, Vision and genesis of the institute.' },
  { title: 'Tenders', path: '/downloads/active-tenders', type: 'Download', desc: 'Active procurement notices and bid documents.' },
  { title: 'Design & Development', path: '/services/design-development', type: 'Service', desc: 'R&D projects, import substitution, and product innovation.' },
  { title: 'Careers', path: '/careers', type: 'Page', desc: 'Job openings and recruitment notices.' },
  { title: 'Extension Centres', path: '/extensions', type: 'Page', desc: 'Details about Bangalore and Sakinaka extension centres.' },
  { title: 'RTI', path: '/about/rti', type: 'Page', desc: 'Right to Information Act details and officers.' },
  { title: 'Student Registration', path: '/student-registration', type: 'Page', desc: 'Online admission and enquiry form for training courses.' },
];
