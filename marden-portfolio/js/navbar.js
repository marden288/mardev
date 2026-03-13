/* ═══════════════════════════════════════════
   navbar.js — Sticky Navbar + Mobile Toggle + Active Links
   ═══════════════════════════════════════════ */

(function () {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links    = navLinks ? navLinks.querySelectorAll('a') : [];

  // ── Scroll: add .scrolled class ──────────
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  });

  // ── Mobile toggle ─────────────────────────
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('open');
      if (toggle) toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Active link highlight ─────────────────
  function updateActiveLink() {
    const scrollPos = window.scrollY + 100;
    const sections  = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const top    = el.offsetTop;
      const bottom = top + el.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        links.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  updateActiveLink();
})();
