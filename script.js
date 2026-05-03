let lang = 'en';
const btn = document.getElementById('langBtn');

btn.addEventListener('click', () => {
  lang = lang === 'en' ? 'fr' : 'en';
  btn.textContent = lang === 'en' ? 'FR' : 'EN';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
});

// ─── NAV SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── INTERSECTION OBSERVER ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const siblings = [...el.parentElement.children];
      const idx = siblings.indexOf(el);
      setTimeout(() => {
        el.classList.add('visible');
      }, idx * 80);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.exp-item, .project-card, .rep-item, .award-item, .gallery-item'
).forEach(el => observer.observe(el));