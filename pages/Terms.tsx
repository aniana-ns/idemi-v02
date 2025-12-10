import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <SEO seo={{ title: 'Terms of Use | IDEMI', description: 'Terms and Conditions' }} path={location.pathname} />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Use</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations.</p>
            
            <h3>Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on IDEMI's web site for personal, non-commercial transitory viewing only.</p>
            
            <h3>Disclaimer</h3>
            <p>The materials on IDEMI's web site are provided "as is". IDEMI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
            
            <h3>Limitations</h3>
            <p>In no event shall IDEMI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IDEMI's Internet site.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;