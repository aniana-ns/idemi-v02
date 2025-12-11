
import React, { useState } from 'react';
import { Link } from '../lib/cms';
import { Mail, Bell, FileText, Calendar, CheckCircle, AlertCircle, Send, Loader2, ArrowLeft, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const Newsletter: React.FC = () => {
  useScrollAnimation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setStatus('error');
        setMessage('Please enter a valid email address.');
        return;
    }

    setStatus('submitting');
    setMessage('');

    const TARGET_EMAIL = 'anians.890@gmail.com';
    const ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `New Newsletter Subscriber: ${email}`,
                _template: 'table',
                _captcha: 'false',
                'Subscriber Email': email,
                'Subscription Date': new Date().toLocaleDateString(),
                'Source': 'Newsletter Page'
            })
        });

        if (response.ok) {
            setStatus('success');
            setEmail('');
        } else {
            setStatus('error');
            setMessage('Failed to subscribe. Please try again later.');
        }
    } catch (error) {
        setStatus('error');
        setMessage('Network error. Please check your connection.');
    }
  };

  const BENEFITS = [
      {
          title: "Training Admissions",
          desc: "Get notified immediately when new batches for AICTE Diploma and Short-term courses are announced.",
          icon: <Calendar size={24} className="text-blue-500" />,
          bg: "bg-blue-50 dark:bg-blue-900/20"
      },
      {
          title: "Tender Notices",
          desc: "Stay updated with active procurement notices, GeM bids, and auction announcements.",
          icon: <FileText size={24} className="text-amber-500" />,
          bg: "bg-amber-50 dark:bg-amber-900/20"
      },
      {
          title: "Events & Workshops",
          desc: "Receive invitations to free webinars, tech seminars, and the annual Job Fair.",
          icon: <Bell size={24} className="text-red-500" />,
          bg: "bg-red-50 dark:bg-red-900/20"
      }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Subscribe to Newsletter | IDEMI', 
          description: 'Subscribe to IDEMI Newsletter to receive updates on Training Admissions, Tenders, Events, and Recruitment.',
          keywords: ['Newsletter', 'Subscribe', 'IDEMI Updates', 'Email Alerts', 'Notifications'],
          schemaType: 'WebSite'
        }} 
        path="/newsletter" 
      />

      {/* Hero Section */}
      <div className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Mail size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Stay Connected</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Join our mailing list to receive the latest updates directly in your inbox. No spam, just important notifications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
        
        {/* Subscription Card */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden reveal-on-scroll">
            <div className="p-8 md:p-12">
                {status === 'success' ? (
                    <div className="text-center py-8 animate-scale-up">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Subscribed Successfully!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Thank you for subscribing. You will now receive updates from IDEMI.
                        </p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="text-primary dark:text-blue-400 font-bold hover:underline"
                        >
                            Subscribe another email
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Subscribe to Updates</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                            Enter your email address to join our community.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input 
                                    type="email" 
                                    placeholder="your.email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition text-lg"
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            {status === 'error' && (
                                <div className="text-red-500 text-sm flex items-center gap-2 justify-center bg-red-50 dark:bg-red-900/10 p-2 rounded">
                                    <AlertCircle size={16} /> {message}
                                </div>
                            )}

                            <button 
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-secondary hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <>Subscribing <Loader2 className="animate-spin" size={20} /></>
                                ) : (
                                    <>Subscribe Now <Send size={20} /></>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6 flex items-center justify-center gap-1">
                            <Shield size={12} /> We respect your privacy. Unsubscribe at any time.
                        </p>
                    </>
                )}
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {BENEFITS.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition reveal-on-scroll stagger-1">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.bg}`}>
                        {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>

        <div className="text-center mt-12">
            <Link to="/" className="inline-flex items-center text-primary dark:text-blue-400 font-bold hover:underline">
                <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
