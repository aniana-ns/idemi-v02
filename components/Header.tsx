
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { Link, useLocation, useNavigate } from '../lib/cms';
import { Menu, X, Moon, Sun, ChevronDown, ChevronRight, Search, Globe } from 'lucide-react';
import { useAccessibility } from '../lib/AccessibilityContext';
import { SEARCH_INDEX } from '../constants';
import { SearchItem } from '../types';

interface MenuItem {
  label: string;
  path?: string;
  external?: boolean;
  children?: MenuItem[];
  isMega?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    children: [
      { label: 'About IDEMI', path: '/about' },
      { label: 'IDEMI At a Glance', path: '/at-glance' },
      { label: 'Vision & Mission', path: '/vision-mission' },
      { label: "Director's Desk", path: '/directors-desk' },
      { label: 'Aerospace (AS9100 Rev.D)', path: '/ISO-AS9100-2016' },
      { label: 'ISO 9001:2015', path: '/ISO-9001-2015-Certificate' },
      { label: 'NABL Certificate', path: '/NABL-Certificate' },
      { label: 'Quality Policy (ISO 17025)', path: '/ISO-IEC' },
      { label: 'Quality Policy (ISO 9001)', path: '/ISO-AS9100' },
      { label: "Who's Who", path: '/whos-who' },
      { label: 'Committee', path: '/committee' },
      { label: 'CVO & Vigilance', path: '/vigilance' },
      { label: 'RTI Act', path: '/rti' },
      { label: 'Holidays in 2025', path: '/holidays' },
      { label: 'Past Performance', path: '/past_performance' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'International Associations', path: '/international-associations' },
      { label: 'National Associations', path: '/national-associations' },
      { label: 'How to Reach Us', path: '/how-to-reach' },
    ]
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Tool Room Services',
        children: [
          { label: 'Tool Design', path: '/services/tool-design' },
          { label: 'Product Design & Development', path: '/services/product-design-development' },
          { label: 'Precision Machining', path: '/services/precision-machining' },
          { label: 'Tool Room Services', path: '/services/tool-room' },
          { label: 'Inspection Services', path: '/services/inspection' },
          { label: 'Rapid Prototyping in Plastic', path: '/services/rapid-prototyping-in-plastic' },
          { label: 'Tool Room Infrastructure', path: '/services/tool-room-infrastructure' },
          { label: 'Steam Boiler / LOCA Test Facility', path: '/services/testing/loca-test-facility' },
          { label: '3D PRINTING FACILITY', path: '/services/eos-formiga' },
        ]
      },
      {
        label: 'Calibration Services',
        children: [
          { label: 'Calibration Laboratories', path: '/services/calibration' },
          { label: 'Electro-Technical Calibration', path: '/services/calibration/electro-technical' },
          { label: 'Thermal Calibration', path: '/services/calibration/thermal' },
          { label: 'Pressure Calibration', path: '/services/calibration/pressure' },
          { label: 'Mass and Volume Calibration', path: '/services/calibration/mass-volume' },
          { label: 'Dimensional Metrology', path: '/services/calibration/dimensional-metrology' },
          { label: 'Fluid Flow Calibration', path: '/services/calibration/fluid-flow' },
          { label: 'Laboratory Excellence Award', path: '/services/calibration/laboratory-excellence-award' },
        ]
      },
      {
        label: 'Testing Services',
        children: [
          { label: 'Safety Testing', path: '/services/testing/safety' },
          { label: 'EMI-EMC Testing', path: '/services/testing/emi_emc' },
          { label: 'Environmental Testing', path: '/services/testing/environmental' },
          { label: 'Type Testing', path: '/services/testing/type' },
          { label: 'LED Testing', path: '/services/testing/led' },
          { label: 'Monoblock Pumpset Testing', path: '/services/testing/monoblock_pumpset' },
          { label: 'Centrifugal Pump Testing', path: '/services/testing/centrifugal_pump' },
          { label: 'Steam Boiler / LOCA Test Facility', path: '/services/testing/loca-test-facility' },
          { label: 'TEC - Accreditation', path: `/view-document?url=https://idemi.org/assets/uploads/TEC%20accreditation.pdf&title=TEC Accreditation` },
          { label: 'TEC - Test Fees Schedule', path: `/view-document?url=https://idemi.org/assets/uploads/TEC%20-%20Test%20Fee%20Schedule.pdf&title=TEC Test Fees Schedule` },
        ]
      },
      {
        label: 'Training Services',
        children: [
          { label: 'Introduction', path: '/training/introduction' },
          { label: 'Online Training Courses', path: '/training/online-training' },
          { label: 'Long Term Courses', path: '/training/post-graduate-post-diploma' },
          { label: 'AICTE Approved Diploma Courses', path: '/training/aicte' },
          { label: 'Admission Schedule 2025', path: '/training/aicte/schedule' },
          { label: 'Short / Medium Term Courses', path: '/training/short-term-courses' },
          { label: 'Professional Courses', path: '/training/professional-courses' },
          { label: 'Sponsored Programmes', path: '/training/schemes/day-nulm' },
          { label: 'Job Fair', path: '/jobfair' },
          { label: 'Alumni Registration Form', path: '/alumni-registration' },
          { label: 'Enquiry Form', path: '/training/enquiry' },
          { label: 'Student Registration', path: '/student-registration' },
          { label: 'SC-ST Beneficiaries', path: '/training/sc_st_beneficiaries' },
          { label: 'AICTE Mandatory Disclosure', path: `/view-document?url=https://idemi.org/assets/uploads/Mandatory_Disclosure.pdf&title=AICTE Mandatory Disclosure` },
        ]
      },
      {
        label: 'Design & Development Services',
        children: [
          { label: 'R&D Projects', path: '/services/design-development' },
          { label: 'SMT Assembly', path: '/design-development/smt-assembly' },
          { label: 'Professional Training', path: '/training/professional-courses#dnd' },
          { label: "Tech X'fer", path: '/services/design-development/techtransfer' },
        ]
      },
      {
        label: 'Other Services',
        children: [
          { label: 'Library', path: '/services/library' },
          { label: 'Hostel Facilities', path: '/services/hostel' },
          { label: 'Auditorium', path: '/services/auditorium' },
          { label: 'Consultancy', path: '/services/consultancy' },
        ]
      }
    ]
  },
  {
    label: 'Training / Courses',
    children: [
      { 
          label: 'Training Programs',
          children: [
            { label: 'Introduction', path: '/training/introduction' },
            { label: 'Online Training Courses', path: '/training/online-training' },
            { label: 'Long Term Courses', path: '/training/post-graduate-post-diploma' },
            { label: 'AICTE Approved Diploma Courses', path: '/training/aicte' },
            { label: 'Admission Schedule 2025', path: '/training/aicte/schedule' },
            { label: 'Short / Medium Term Courses', path: '/training/short-term-courses' },
            { label: 'Professional Courses', path: '/training/professional-courses' },
            { label: 'Sponsored Programmes', path: '/training/schemes/day-nulm' },
            { label: 'Job Fair', path: '/jobfair' },
          ]
      },
      {
          label: 'Admissions & Forms',
          children: [
            { label: 'Alumni Registration Form', path: '/alumni-registration' },
            { label: 'Enquiry Form', path: '/training/enquiry' },
            { label: 'Student Registration', path: '/student-registration' },
            { label: 'SC-ST Beneficiaries', path: '/training/sc_st_beneficiaries' },
          ]
      },
      {
          label: 'Information',
          children: [
            { label: 'AICTE Mandatory Disclosure', path: `/view-document?url=https://idemi.org/assets/uploads/Mandatory_Disclosure.pdf&title=AICTE Mandatory Disclosure` },
          ]
      }
    ]
  },
  { label: 'Extension Centres', path: '/extensions' },
  { label: 'Careers', path: '/careers' },
  {
    label: 'Downloads',
    children: [
      { label: 'Active Tenders', path: '/downloads/active-tenders' },
      { label: 'Archived Tenders', path: '/downloads/archive-tenders' },
      { label: 'News & Notifications', path: '/downloads/notifications' },
      { label: 'Prospectus', path: '/downloads/prospectus' },
      { label: 'Annual Reports', path: '/downloads/annual-reports' },
      { label: 'Procurement Policy', path: '/downloads/procurement-policy' },
      { label: 'Procurement Rules', path: '/downloads/procurement-rules' },
    ]
  },
  {
    label: 'Useful Links',
    children: [
      { label: 'CPGRAMS', path: 'https://www.pgportal.gov.in/', external: true },
      { label: 'DC - MSME', path: 'http://dcmsme.gov.in/', external: true },
      { label: 'Central Vigilance Commission', path: 'https://cvc.gov.in/', external: true },
      { label: 'National Portal of India', path: 'https://www.india.gov.in/', external: true },
      { label: 'Swacch Bharat Mission', path: 'https://swachhbharat.mygov.in/', external: true },
      {
        label: 'NABL Scope of Accreditation',
        children: [
           { label: 'Calibration', path: 'https://nablwp.qci.org.in/CertificateScopenew?x=yXVyaj7QFLkbCMh+XmlfUQ==&p=1&src=P&LS=balhcraes', external: true },
           { label: 'Testing', path: 'http://www.nabl-india.org/nabl/index.php?c=search&m=searchlabcertificate&cno=149', external: true }
        ]
      }
    ]
  }
];

interface NavItemProps {
  item: MenuItem;
  depth?: number;
}

// Desktop Navigation Item
const NavItem: React.FC<NavItemProps> = ({ item, depth = 0 }) => {
    const location = useLocation();
    const isActive = (path?: string) => path ? location.pathname === path : false;
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.path);
    const isMega = item.isMega && depth === 0;

    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const uniqueId = `nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}-${depth}`;

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 200); 
    };

    const handleFocus = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };

    const handleBlur = (e: React.FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (hasChildren) {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };
    
    const topLevelBaseClass = `group relative flex items-center gap-0.5 font-medium text-sm tracking-wide pb-1 whitespace-nowrap transition-colors duration-300 rounded px-2 outline-none ${active ? 'text-primary dark:text-blue-400 font-bold' : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400'}`;
    
    if (depth === 0) {
      return (
        <li 
            className={`px-1 xl:px-2 py-2 ${isMega ? 'static' : 'relative'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
          {item.path && !hasChildren ? (
            <Link to={item.path} className={topLevelBaseClass} aria-current={active ? 'page' : undefined}>
              {item.label}
              <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-primary dark:bg-blue-400 transition-all duration-300 ease-out ${active ? 'w-[calc(100%-16px)]' : 'w-0 group-hover:w-[calc(100%-16px)]'}`}></span>
            </Link>
          ) : (
            <button 
                type="button" 
                className={`${topLevelBaseClass} bg-transparent border-0 cursor-pointer`} 
                aria-haspopup="true" 
                aria-expanded={isOpen}
                aria-controls={uniqueId}
                onKeyDown={handleKeyDown}
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
              {item.label}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-primary dark:bg-blue-400 transition-all duration-300 ease-out ${isOpen || active ? 'w-[calc(100%-16px)]' : 'w-0 group-hover:w-[calc(100%-16px)]'}`}></span>
            </button>
          )}

          {hasChildren && isOpen && (
            isMega ? (
                 <div id={uniqueId} className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 animate-fade-in z-50">
                    <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-4 gap-8">
                            {item.children!.map((col, idx) => (
                                <div key={idx}>
                                    <h4 className="font-bold text-primary dark:text-blue-400 border-b border-gray-100 dark:border-gray-800 pb-2 mb-3 text-sm uppercase tracking-wider">
                                        {col.label}
                                    </h4>
                                    <ul className="space-y-1">
                                        {col.children?.map((child, cIdx) => (
                                            <li key={cIdx}>
                                                <NavItem item={child} depth={depth + 1} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
            ) : (
                <div id={uniqueId} className="absolute top-full left-0 w-72 bg-white dark:bg-gray-800 shadow-xl rounded-md py-2 animate-fade-in z-50 border border-gray-100 dark:border-gray-700 text-left">
                    {item.children!.map((child, idx) => (
                        <NavItem key={idx} item={child} depth={depth + 1} />
                    ))}
                </div>
            )
          )}
        </li>
      );
    }

    const dropdownItemClass = "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-blue-400 transition-all border-l-2 border-transparent hover:border-primary w-full text-left outline-none focus:bg-blue-50 dark:focus:bg-gray-700 focus:border-primary";

    return (
      <div 
        className="relative group/sub"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {item.path && !hasChildren ? (
          item.external ? (
            <a href={item.path} target="_blank" rel="noopener noreferrer" className={dropdownItemClass} onClick={() => setIsOpen(false)}>
               {item.label}
            </a>
          ) : (
            <Link to={item.path} className={dropdownItemClass} aria-current={active ? 'page' : undefined} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          )
        ) : (
           <button 
            type="button" 
            className={`flex items-center justify-between ${dropdownItemClass} bg-transparent border-0 cursor-pointer`} 
            aria-haspopup="true" 
            aria-expanded={isOpen}
            aria-controls={uniqueId}
            onKeyDown={handleKeyDown}
           >
              <span className="text-left flex-1">{item.label}</span>
              <ChevronRight size={14} className="shrink-0 ml-2" aria-hidden="true" />
           </button>
        )}

        {hasChildren && isOpen && (
           <div id={uniqueId} className="absolute top-0 left-full w-72 bg-white dark:bg-gray-800 shadow-xl rounded-md py-2 animate-fade-in z-50 border border-gray-100 dark:border-gray-700 -ml-1 text-left">
             {item.children!.map((child, idx) => (
               <NavItem key={idx} item={child} depth={depth + 1} />
             ))}
           </div>
        )}
      </div>
    );
};

interface MobileNavItemProps {
  item: MenuItem;
  level?: number;
  closeMenu: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ item, level = 0, closeMenu }) => {
     const hasChildren = item.children && item.children.length > 0;
     const [isOpen, setIsOpen] = useState(false);
     const location = useLocation();
     const active = item.path ? location.pathname === item.path : false;
     const uniqueId = `mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}-${level}`;

     if (hasChildren) {
        return (
            <div className="w-full">
                <button 
                   type="button"
                   className={`flex justify-between items-center w-full text-left py-3 border-b border-gray-100 dark:border-gray-800 ${level > 0 ? 'pl-4 border-none py-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded'} outline-none`}
                   onClick={() => setIsOpen(!isOpen)}
                   aria-expanded={isOpen}
                   aria-controls={uniqueId}
                >
                    <span className={`flex-grow ${level===0 ? 'text-base font-medium text-gray-800 dark:text-gray-100' : 'text-sm text-gray-700 dark:text-gray-300'} hover:text-primary dark:hover:text-blue-400`}>{item.label}</span>
                    <ChevronDown size={level === 0 ? 18 : 16} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
    
                <div id={uniqueId} className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
                    <div className={`${level === 0 ? 'bg-gray-50 dark:bg-gray-800 pl-4 py-2 rounded-lg mt-1' : 'pl-4 border-l border-gray-200 dark:border-gray-700 ml-2'}`}>
                        {item.children!.map((child, idx) => (
                            <MobileNavItem key={idx} item={child} level={level + 1} closeMenu={closeMenu} />
                        ))}
                    </div>
                </div>
            </div>
        );
     }

     return (
        <div className="w-full">
            {item.external ? (
                <a 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center w-full text-left py-3 border-b border-gray-100 dark:border-gray-800 ${level > 0 ? 'pl-4 border-none py-2' : ''} text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded outline-none ${level===0 ? 'text-base font-medium' : 'text-sm'}`}
                    onClick={closeMenu}
                >
                    {item.label}
                </a>
            ) : (
                <Link 
                    to={item.path!} 
                    className={`flex items-center w-full text-left py-3 border-b border-gray-100 dark:border-gray-800 ${level > 0 ? 'pl-4 border-none py-2' : ''} ${active ? 'text-primary dark:text-blue-400 font-bold' : 'text-gray-700 dark:text-gray-300'} hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded outline-none ${level===0 ? 'text-base font-medium' : 'text-sm'}`}
                    onClick={closeMenu}
                    aria-current={active ? 'page' : undefined}
                >
                    {item.label}
                </Link>
            )}
        </div>
     );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const [isCertInfoOpen, setIsCertInfoOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme, setFontSize, fontSize } = useAccessibility();
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const desktopTranslateRef = useRef<HTMLDivElement>(null);
  const mobileTranslateRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate
  useEffect(() => {
    // Define the global callback
    (window as any).googleTranslateElementInit = () => {
      try {
        if ((window as any).google && (window as any).google.translate) {
             const el = document.getElementById('google_translate_element');
             // Only initialize if empty to avoid duplicates
             if (el && el.childElementCount === 0) {
                 new (window as any).google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,hi,mr,gu,bn,kn,ta,te,ml,pa', 
                  autoDisplay: false,
                  // layout: removed to ensure native dropdown (more robust)
                }, 'google_translate_element');
             }
        }
      } catch (e) {
        console.error("Translate init error", e);
      }
    };

    // Inject script if missing
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Widget Placement Logic - Runs on every render to combat React unmounting
  useEffect(() => {
      const widgetId = 'google_translate_element';
      let widget = document.getElementById(widgetId);

      // Create persistent container if missing (e.g. initial load)
      if (!widget) {
          widget = document.createElement('div');
          widget.id = widgetId;
          widget.style.display = 'none'; // Hidden until moved
          document.body.appendChild(widget);
      }

      // Determine where the widget should be
      const target = isMenuOpen ? mobileTranslateRef.current : desktopTranslateRef.current;

      // Ensure widget is in the correct target
      if (widget && target && !target.contains(widget)) {
          target.appendChild(widget);
          widget.style.display = 'inline-block';
      }
  }); 

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
        const firstFocusable = mobileMenuRef.current.querySelector('input, button, a[href]') as HTMLElement;
        if (firstFocusable) {
             setTimeout(() => {
                firstFocusable.focus();
             }, 100);
        }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (path: string) => {
    navigate(path);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    setSearchQuery('');
    setSuggestions([]);
  };

  const fontBtnClass = (isSelected: boolean) => `
    w-auto h-auto px-2 py-1 rounded flex items-center justify-center font-bold text-sm transition-all border min-w-[32px] outline-none
    ${isSelected 
      ? 'bg-primary text-white border-primary shadow-sm' 
      : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
  `;

  return (
    <header className="w-full z-[1000] font-sans sticky top-0">
      <div className="w-full shadow-md bg-white dark:bg-gray-900 transition-colors duration-200">
        
        <div className="bg-[#1b3270] text-white py-1.5 text-[10px] sm:text-xs relative z-[102]">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                    alt="Emblem of India" 
                    className="h-5 w-auto object-contain brightness-0 invert" 
                    />
                    <span className="font-medium">भारत सरकार | Government of India</span>
                </div>
                <div className="hidden sm:block opacity-90 font-medium">
                    सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय | Ministry of MSME
                </div>
            </div>
        </div>

        <div className="bg-white dark:bg-gray-900 z-[101] relative border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 py-2 sm:py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 sm:gap-5 group focus:outline-none rounded p-1 flex-1 min-w-0 mr-2 sm:mr-4" aria-label="IDEMI Home">
                    <img src="https://idemi.org/assets/images/LOGO-27042023.png" alt="IDEMI Logo" className="h-10 sm:h-20 w-auto object-contain shrink-0" />
                    <div className="leading-tight text-gray-800 dark:text-white min-w-0 flex flex-col justify-center">
                        <div className="sm:hidden">
                            <h1 className="font-bold text-sm leading-tight text-[#1e3a8a] dark:text-white">
                                IDEMI
                            </h1>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Institute for Design of Electrical Measuring Instruments</span>
                        </div>

                        <div className="hidden sm:block">
                            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl uppercase leading-tight text-[#1e3a8a] dark:text-white mb-1">
                                Institute for Design of Electrical Measuring Instruments
                            </h1>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wide leading-tight">
                                    सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय
                                </span>
                                <span className="text-xs font-semibold text-[#1e3a8a] dark:text-blue-300 uppercase tracking-wide leading-tight mt-0.5">
                                    Ministry of Micro, Small and Medium Enterprises
                                </span>
                                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider leading-tight mt-0.5">
                                    MSME Technology Centre, Government of India Society
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-2 xl:hidden shrink-0">
                    <button 
                    type="button"
                    className="text-gray-700 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition focus:outline-none" 
                    onClick={toggleMenu} 
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </div>

        <div className="hidden xl:block border-b border-gray-100 dark:border-gray-800 bg-slate-50 dark:bg-gray-900 z-[100] relative shadow-sm">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center" role="navigation" aria-label="Main Navigation">
                    <ul className="flex flex-wrap gap-2 xl:gap-4 items-center" role="menubar">
                        {MENU_ITEMS.map((item, index) => (
                            <NavItem key={index} item={item} />
                        ))}
                    </ul>
                    
                    <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-1" aria-label="Language Selector">
                             <Globe size={16} className="text-gray-500 dark:text-gray-400" aria-hidden="true" />
                             {/* Container for Translate Widget */}
                             <div 
                                ref={desktopTranslateRef} 
                                className="min-w-[120px] h-[30px] flex items-center justify-end"
                                suppressHydrationWarning={true}
                             >
                             </div>
                        </div>

                        <div className="flex items-center gap-1" role="group" aria-label="Font Size Controls">
                            <button 
                                onClick={() => setFontSize('normal')} 
                                className={fontBtnClass(fontSize === 'normal')}
                                aria-label="Set font size to normal"
                                title="Normal"
                            >
                                A
                            </button>
                            <button 
                                onClick={() => setFontSize('large')} 
                                className={fontBtnClass(fontSize === 'large')}
                                aria-label="Set font size to large"
                                title="Large"
                            >
                                A+
                            </button>
                            <button 
                                onClick={() => setFontSize('extra-large')} 
                                className={fontBtnClass(fontSize === 'extra-large')}
                                aria-label="Set font size to extra large"
                                title="Extra Large"
                            >
                                A++
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none shrink-0"
                            aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none shrink-0"
                            aria-label="Search website"
                            aria-expanded={isSearchOpen}
                            title="Search"
                        >
                            <Search size={18} />
                        </button>
                    </div>
                </nav>
            </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200 relative z-[98]">
            <button 
            onClick={() => setIsCertInfoOpen(!isCertInfoOpen)}
            className="md:hidden w-full flex justify-center items-center gap-1 py-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b border-gray-200 dark:border-gray-700 uppercase tracking-wide focus:outline-none"
            aria-expanded={isCertInfoOpen}
            aria-label="Toggle Certifications and IDs information"
            >
            <span>View Certifications & IDs</span>
            <ChevronDown size={12} className={`transition-transform duration-300 ${isCertInfoOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            <div className={`${isCertInfoOpen ? 'flex py-1.5 opacity-100 visible' : 'hidden'} md:flex container mx-auto px-4 flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium py-1.5 transition-all duration-300`}>
            <span className="hover:text-primary dark:hover:text-blue-400 cursor-default transition-colors">ISO 9001:2015</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600" aria-hidden="true">•</span>
            <span className="hover:text-primary dark:hover:text-blue-400 cursor-default transition-colors">ISO/IEC 17025:2017 (NABL)</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600" aria-hidden="true">•</span>
            <span className="hover:text-primary dark:hover:text-blue-400 cursor-default transition-colors">AS 9100 Rev.D</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600" aria-hidden="true">•</span>
            <span className="hover:text-primary dark:hover:text-blue-400 cursor-default transition-colors">GeM Seller ID: 511687</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600" aria-hidden="true">•</span>
            <span className="hover:text-primary dark:hover:text-blue-400 cursor-default transition-colors">Udyam Reg: UDYAM-MH-19-0002660</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600" aria-hidden="true">•</span>
            <span className="hover:text-primary dark:hover:text-blue-400 cursor-default transition-colors">GSTIN: 27AAATI0090J1Z4</span>
            </div>
        </div>

        <div className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 transition-all duration-300 origin-top ${isSearchOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'} z-[99]`}>
            <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
                <div className="relative flex items-center">
                    <Search className="absolute left-4 text-gray-400" size={20} aria-hidden="true" />
                    <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for services, training, documents..."
                    className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                    autoComplete="off"
                    aria-label="Search Query"
                    />
                    <button 
                    type="button" 
                    onClick={() => { setIsSearchOpen(false); setSuggestions([]); }}
                    className="absolute right-4 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Close search"
                    >
                    <X size={20} />
                    </button>
                </div>

                {suggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                    <ul role="listbox">
                    {suggestions.map((item, index) => (
                        <li key={index} role="option" aria-selected={false}>
                        <button
                            type="button"
                            onClick={() => handleSuggestionClick(item.path)}
                            className="w-full text-left px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-50 dark:border-gray-700/50 last:border-none flex justify-between items-center group"
                        >
                            <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-primary dark:group-hover:text-blue-400">{item.title}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate max-w-md">{item.desc}</p>
                            </div>
                            <span className="text-xs font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase">{item.type}</span>
                        </button>
                        </li>
                    ))}
                    <li className="bg-gray-50 dark:bg-gray-900/50 p-2 text-center">
                        <button type="submit" className="text-xs text-primary dark:text-blue-400 font-bold hover:underline">View all results</button>
                    </li>
                    </ul>
                </div>
                )}
            </form>
            </div>
        </div>

        <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={`xl:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 shadow-2xl py-4 px-4 flex flex-col gap-2 z-[9999] max-h-[85vh] overflow-y-auto overscroll-contain transition-all duration-300 ease-in-out ${
            isMenuOpen 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible -translate-y-2 pointer-events-none'
            }`}
        >
            <div className="px-2 mb-2">
            <form onSubmit={handleSearch} className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                    aria-label="Mobile Search"
                />
                <Search className="absolute left-3 top-3 text-gray-400" size={18} aria-hidden="true" />
            </form>
            </div>

            <div className="flex items-center justify-between px-2 py-3 border-b border-gray-100 dark:border-gray-800 mb-2">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Theme</span>
            <button 
                onClick={toggleTheme} 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span className="text-xs font-bold uppercase">{theme} Mode</span>
            </button>
            </div>

            <div className="flex items-center justify-between px-2 py-3 border-b border-gray-100 dark:border-gray-800 mb-2">
              <div className="flex items-center gap-2">
                  <Globe size={18} className="text-gray-500 dark:text-gray-400" aria-hidden="true" />
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Language</span>
              </div>
              <div 
                ref={mobileTranslateRef} 
                style={{ minWidth: '140px', minHeight: '30px' }}
                suppressHydrationWarning={true}
              >
              </div>
            </div>

            {MENU_ITEMS.map((item, index) => (
            <MobileNavItem key={index} item={item} closeMenu={() => setIsMenuOpen(false)} />
            ))}
            <div className="pt-6 pb-20">
            <button onClick={() => { setIsMenuOpen(false); navigate('/contact'); }} className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all">Contact Us</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
