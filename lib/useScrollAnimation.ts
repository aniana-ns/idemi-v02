import { useEffect, useRef } from 'react';

/**
 * A hook that adds an IntersectionObserver to elements with the class 'reveal-on-scroll'.
 * When the element enters the viewport, it adds the 'is-visible' class.
 */
export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Stop observing once visible to run animation only once
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Run once on mount

  // Return a function to re-trigger observation (useful if content loads dynamically)
  const refreshObserver = () => {
    if (!observerRef.current) return;
    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
    elements.forEach((el) => observerRef.current?.observe(el));
  };

  return { refreshObserver };
};