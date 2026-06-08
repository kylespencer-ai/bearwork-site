// ============================================================
//  BEARWORK — main.js
// ============================================================

// -- Nav scroll state --
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// -- Scroll-triggered reveals with sibling stagger --
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const siblings = Array.from(
      el.closest('section, .offer-card, .timeline')?.querySelectorAll('.reveal') || [el]
    );
    const index = siblings.indexOf(el);
    const delay = index * 90;

    setTimeout(() => {
      el.classList.add('visible');
    }, delay);

    observer.unobserve(el);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

reveals.forEach(el => observer.observe(el));