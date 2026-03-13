/* ═══════════════════════════════════════════
   animations.js — Intersection Observer Scroll Reveal
   ═══════════════════════════════════════════ */

(function () {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (!revealEls.length) return;

  // Apply stagger delay from data-delay attribute
  revealEls.forEach(el => {
    const delay = el.dataset.delay || 0;
    if (delay > 0) {
      el.style.transitionDelay = delay + 'ms';
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once revealed, unobserve for performance
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  revealEls.forEach(el => observer.observe(el));
})();
