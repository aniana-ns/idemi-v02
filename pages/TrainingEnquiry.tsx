
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, HelpCircle, User, Mail, Phone, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../lib/useScrollAnimation';

const TrainingEnquiry: React.FC = () => {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
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
                _subject: `Training Enquiry: ${formData.category} - ${formData.name}`,
                _template: 'table',
                _captcha: 'false',
                'Full Name': formData.name,
                'Email': formData.email,
                'Phone': formData.phone,
                'Category': formData.category,
                'Message': formData.message
            })
        });

        const result = await response.json();

        if (response.ok) {
            setStatus('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setStatus('error');
            setErrorMessage(result.message || 'Failed to submit enquiry. Please try again.');
        }
    } catch (error: any) {
        console.error("Submission error:", error);
        setStatus('error');
        setErrorMessage('Unable to connect to the mail server. Please check your internet connection.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', phone: '', category: 'General Inquiry', message: '' });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        seo={{ 
          title: 'Training Enquiry & Admission Support | IDEMI', 
          description: 'Get in touch with IDEMI Training Division for information on AICTE Diploma courses, Short term workshops, and Corporate training programs.',
          keywords: ['Training Enquiry', 'Admission Support', 'Course Inquiry', 'IDEMI Training Contact', 'Skill Development Help'],
          schemaType: 'ContactPage'
        }} 
        path="/training/enquiry" 
      />
      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
             <Link to="/training" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Training
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Training Enquiry</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
             <ServiceSidebar />
          </aside>

          <div className="lg:w-3/4">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 reveal-on-scroll">
                
                {status === 'success' ? (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-12 text-center animate-fade-in" role="status" aria-live="polite">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-200 mx-auto mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enquiry Sent Successfully!</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Thank you for contacting IDEMI Training Division. We have received your query and our team will get back to you shortly.
                        </p>
                        <button 
                            onClick={handleReset}
                            className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition"
                        >
                            Send Another Query
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-2">Get in Touch</p>
                            <p className="text-gray-600 dark:text-gray-300">
                                Have questions about our courses, eligibility, or admission process? Fill out the form below. 
                            </p>
                            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 p-4 bg-gray-50 dark:bg-gray-700/30 rounded border border-gray-100 dark:border-gray-600">
                               You can also reach us directly at: <br/>
                               <strong>Email:</strong> training@idemi.org <br/>
                               <strong>Phone:</strong> 022-24050301 ext 238
                            </div>
                        </div>

                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                                <AlertCircle size={18} />
                                {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Mobile Number *</label>
                                    <div className="relative">
                                        <Phone size={18} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="category" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Enquiry Type</label>
                                    <div className="relative">
                                        <HelpCircle size={18} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                                        <select
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition appearance-none"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Course Details</option>
                                            <option>Fee Structure</option>
                                            <option>Admission Process</option>
                                            <option>Corporate Training</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Message / Query *</label>
                                <div className="relative">
                                    <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full md:w-auto px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-amber-700 transition shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <><Send size={18} /> Send Enquiry</>
                                )}
                            </button>
                        </form>
                    </>
                )}
             </div>
          </div>
      </div>
    </div>
  );
};

export default TrainingEnquiry;
