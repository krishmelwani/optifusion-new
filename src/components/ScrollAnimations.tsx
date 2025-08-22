import { useEffect } from "react";

export const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    );

    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};