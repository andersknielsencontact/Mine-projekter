const header = document.querySelector('[data-site-header]');
const toggleButton = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('#mobile-main-menu');

if (header) {
  const updateHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}

if (toggleButton && mobileNav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.alert('Tak! Vi kontakter dig hurtigst muligt.');
    form.reset();
  });
}
