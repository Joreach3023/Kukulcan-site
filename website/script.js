const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

const syncHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle?.focus();
  }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' });

  revealItems.forEach((item) => observer.observe(item));
}
