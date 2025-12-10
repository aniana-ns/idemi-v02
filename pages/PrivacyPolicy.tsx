import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Privacy Policy | IDEMI', description: 'IDEMI Privacy Policy' }} path={location.pathname} />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>IDEMI respects your privacy. We do not share your personal information with third parties without your consent. This website uses cookies to improve user experience.</p>
            
            <h3>Information Collection</h3>
            <p>We collect information when you register on our site, place an order, subscribe to our newsletter or fill out a form.</p>
            
            <h3>Use of Information</h3>
            <p>Any of the information we collect from you may be used in one of the following ways:</p>
            <ul>
                <li>To personalize your experience</li>
                <li>To improve our website</li>
                <li>To improve customer service</li>
                <li>To process transactions</li>
            </ul>
            
            <h3>Data Protection</h3>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;