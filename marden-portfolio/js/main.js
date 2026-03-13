/* ═══════════════════════════════════════════
   main.js — Misc Init & Utilities
   ═══════════════════════════════════════════ */

(function () {

  // ── Smooth scroll for anchor links ───────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Parallax on hero orbs ─────────────────
  const orbs = document.querySelectorAll('.hero-orb');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    orbs.forEach((orb, i) => {
      const speed = 0.1 + i * 0.05;
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });

  // ── Number counter animation ──────────────
  const stats = document.querySelectorAll('.stat strong');
  let statsDone = false;

  function animateCounters() {
    if (statsDone) return;
    const heroSection = document.getElementById('home');
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      statsDone = true;
      stats.forEach(el => {
        const target = parseInt(el.textContent);
        if (isNaN(target)) return;
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + (el.textContent.includes('+') ? '+' : '');
        }, 30);
      });
    }
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  // ── Year in footer ────────────────────────
  const yearEl = document.querySelector('.footer-bottom p');
  if (yearEl) {
    yearEl.textContent = yearEl.textContent.replace('2025', new Date().getFullYear());
  }

  // ── Preload performance log ───────────────
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const t = performance.getEntriesByType('navigation')[0];
      if (t) console.log(`%c⚡ Page loaded in ${Math.round(t.loadEventEnd)}ms`, 'color:#00ff88;font-weight:bold;');
    });
  }

})();
