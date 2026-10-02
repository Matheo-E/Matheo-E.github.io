/**
 * Scroll-triggered reveal animations using IntersectionObserver.
 * Elements with the .reveal class fade in and slide up when they
 * enter the viewport (12% visibility threshold).
 */

(function () {
  'use strict';

  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
})();
