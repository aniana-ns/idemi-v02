import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '../types';
import { CONTACT_INFO } from '../constants';

interface SEOProps {
  seo: SEOData;
  path: string;
}

const SEO: React.FC<SEOProps> = ({ seo, path }) => {
  const siteName = "IDEMI Mumbai";
  const baseUrl = "https://idemi.org";
  const currentUrl = `${baseUrl}${path}`;
  const defaultImage = "https://idemi.org/assets/images/LOGO-27042023.png";
  const ogImage = seo.image || defaultImage;

  // Generate Breadcrumbs Schema
  const generateBreadcrumbs = () => {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs = segments.map((segment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      "item": `${baseUrl}/${segments.slice(0, index + 1).join('/')}`
    }));

    // Add Home
    breadcrumbs.unshift({
      "@type": "ListItem",
      "position": 0,
      "name": "Home",
      "item": baseUrl
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  };

  // Generate Main Schema based on Type
  const generateMainSchema = () => {
    const baseContext = { "@context": "https://schema.org" };

    // Organization / LocalBusiness Schema (Always relevant for IDEMI)
    const organizationSchema = {
      "@type": "GovernmentOrganization",
      "name": "Institute for Design of Electrical Measuring Instruments (IDEMI)",
      "alternateName": "IDEMI Mumbai",
      "url": baseUrl,
      "logo": defaultImage,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": CONTACT_INFO.phone,
        "contactType": "customer service",
        "email": CONTACT_INFO.email,
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address,
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400022",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/idemimumbai",
        "https://twitter.com/idemimumbai",
        "https://www.linkedin.com/company/idemi-mumbai"
      ]
    };

    if (seo.schemaType === 'Organization' || path === '/') {
      return { ...baseContext, ...organizationSchema };
    }

    if (seo.schemaType === 'Service') {
      return {
        ...baseContext,
        "@type": "Service",
        "name": seo.title,
        "description": seo.description,
        "provider": organizationSchema,
        "areaServed": "IN",
        "url": currentUrl
      };
    }

    if (seo.schemaType === 'Course') {
      return {
        ...baseContext,
        "@type": "Course",
        "name": seo.title,
        "description": seo.description,
        "provider": organizationSchema,
        "url": currentUrl
      };
    }

    if (seo.schemaType === 'Article') {
        return {
            ...baseContext,
            "@type": "Article",
            "headline": seo.title,
            "image": [ogImage],
            "author": {
                "@type": "Organization",
                "name": siteName
            },
            "publisher": organizationSchema,
            "datePublished": new Date().toISOString(), // Ideally pass this in prop
            "description": seo.description
        };
    }

    // Default WebPage
    return {
      ...baseContext,
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": currentUrl,
      "publisher": organizationSchema
    };
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords.join(", ")} />}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={seo.schemaType === 'Article' ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@idemimumbai" />
      <meta name="twitter:creator" content="@idemimumbai" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={seo.title} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateMainSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateBreadcrumbs())}
      </script>
    </Helmet>
  );
};

export default SEO;