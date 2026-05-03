// ─── EXTRA EXPERIENCE TOGGLE ───
function toggleExtra() {
  const list = document.getElementById('extraExp');
  const btn  = document.getElementById('expToggleBtn');
  const label = btn.querySelector('.exp-toggle-label');
  const isOpen = list.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
 
  const enText = isOpen ? 'Hide earlier experience' : 'Show earlier experience';
  const frText = isOpen ? 'Masquer l\'expérience antérieure' : 'Voir l\'expérience antérieure';
  label.setAttribute('data-en', enText);
  label.setAttribute('data-fr', frText);
  label.textContent = lang === 'fr' ? frText : enText;
 
  if (isOpen) {
    setTimeout(() => {
      list.querySelectorAll('.exp-extra-item').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 90);
      });
    }, 50);
  } else {
    list.querySelectorAll('.exp-extra-item').forEach(el => el.classList.remove('visible'));
  }
}
 
document.getElementById('expToggleBtn').addEventListener('click', toggleExtra);
 
// ─── EXTRA PROJECTS TOGGLE ───
document.getElementById('projToggleBtn').addEventListener('click', function() {
  const list  = document.getElementById('extraProjects');
  const btn   = document.getElementById('projToggleBtn');
  const label = btn.querySelector('.proj-toggle-label');
  const isOpen = list.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
 
  const enText = isOpen ? 'Show fewer projects' : 'Show more projects';
  const frText = isOpen ? 'Voir moins de projets' : 'Voir plus de projets';
  label.setAttribute('data-en', enText);
  label.setAttribute('data-fr', frText);
  label.textContent = lang === 'fr' ? frText : enText;
 
  if (isOpen) {
    setTimeout(() => {
      list.querySelectorAll('.proj-extra-item').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 90);
      });
    }, 50);
  } else {
    list.querySelectorAll('.proj-extra-item').forEach(el => el.classList.remove('visible'));
  }
});
 
// ─── LANG TOGGLE ───
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