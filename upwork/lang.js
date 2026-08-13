// Simple language switcher for portfolio
const da = {
  'hero-subtitle': 'Frontend Udvikler & Designer',
  'hero-h1': 'Jeg bygger moderne hjemmesider til virksomheder.',
  'hero-p': 'Jeg laver responsive og moderne landingssider med fokus på rent design, brugeroplevelse og stærke førstehåndsindtryk.',
  'btn-projects': 'Se projekter',
  'btn-contact': 'Kontakt mig',
  'projects-section-subtitle': 'Portfolio',
  'projects-section-title': 'Udvalgte projekter',
  'project1-title': 'Musikskole Koncept',
  'project1-desc': 'Moderne landing page-koncept for en fiktiv musikskole med fokus på atmosfære og responsivt design.',
  'project2-title': 'Barber Studio',
  'project2-desc': 'Premium barber landing page med fokus på branding og booking.',
  'project3-title': 'Fitness Coach',
  'project3-desc': 'Mobil-først fitness landing page bygget til konvertering og moderne branding.',
  'services-section-subtitle': 'Ydelser',
  'services-section-title': 'Hvad jeg tilbyder',
  'service1': 'Landingssider',
  'service2': 'Responsive hjemmesider',
  'service3': 'UI Redesigns',
  'service4': 'Frontend udvikling',
  'about-section-subtitle': 'Om',
  'about-section-title': 'Moderne digitale oplevelser.',
  'about-p': 'Jeg fokuserer på at skabe visuelt stærke og responsive hjemmesider med en ren brugeroplevelse. Mit arbejde kombinerer moderne frontend design med performance-fokuseret udvikling.',
  'contact-section-subtitle': 'Kontakt',
  'contact-section-title': 'Lad os arbejde sammen.',
  'contact-p': 'Interesseret i en moderne hjemmeside eller landingsside? Skriv endelig!',
  'btn-mail': 'din@email.dk',
  'btn-github': 'GitHub',
  'footer': '© 2026 Anders Nielsen. Alle rettigheder forbeholdes.',
  'lang-switch': 'English'
};
const en = {
  'hero-subtitle': 'Frontend Developer & Designer',
  'hero-h1': 'I build modern websites for businesses.',
  'hero-p': 'I create responsive and modern landing pages focused on clean design, user experience, and strong first impressions.',
  'btn-projects': 'View Projects',
  'btn-contact': 'Contact Me',
  'projects-section-subtitle': 'Portfolio',
  'projects-section-title': 'Selected Projects',
  'project1-title': 'Music School Concept',
  'project1-desc': 'Modern landing page concept for a fictional music academy focused on atmosphere and responsive design.',
  'project2-title': 'Barber Studio',
  'project2-desc': 'Premium barber landing page focused on branding and booking experience.',
  'project3-title': 'Fitness Coach',
  'project3-desc': 'Mobile-first fitness landing page built for conversions and modern branding.',
  'services-section-subtitle': 'Services',
  'services-section-title': 'What I Offer',
  'service1': 'Landing Pages',
  'service2': 'Responsive Websites',
  'service3': 'UI Redesigns',
  'service4': 'Frontend Development',
  'about-section-subtitle': 'About',
  'about-section-title': 'Building modern digital experiences.',
  'about-p': 'I focus on creating visually strong and responsive websites with a clean user experience. My work combines modern frontend design with performance-focused development.',
  'contact-section-subtitle': 'Contact',
  'contact-section-title': "Let's work together.",
  'contact-p': 'Interested in a modern website or landing page? Feel free to reach out.',
  'btn-mail': 'yourmail@email.com',
  'btn-github': 'GitHub',
  'footer': '© 2026 Anders Nielsen. All rights reserved.',
  'lang-switch': 'Dansk'
};

let currentLang = 'da';

function setLang(lang) {
  const dict = lang === 'en' ? en : da;
  document.querySelector('.hero-subtitle').textContent = dict['hero-subtitle'];
  document.querySelector('.hero h1').textContent = dict['hero-h1'];
  document.querySelector('.hero p').textContent = dict['hero-p'];
  document.querySelectorAll('.hero-buttons a')[0].textContent = dict['btn-projects'];
  document.querySelectorAll('.hero-buttons a')[1].textContent = dict['btn-contact'];
  document.querySelector('#projects .section-subtitle').textContent = dict['projects-section-subtitle'];
  document.querySelector('#projects .section-title').textContent = dict['projects-section-title'];
  document.querySelectorAll('.project-card h3')[0].textContent = dict['project1-title'];
  document.querySelectorAll('.project-card p')[0].textContent = dict['project1-desc'];
  document.querySelectorAll('.project-card h3')[1].textContent = dict['project2-title'];
  document.querySelectorAll('.project-card p')[1].textContent = dict['project2-desc'];
  document.querySelectorAll('.project-card h3')[2].textContent = dict['project3-title'];
  document.querySelectorAll('.project-card p')[2].textContent = dict['project3-desc'];
  document.querySelector('#services .section-subtitle').textContent = dict['services-section-subtitle'];
  document.querySelector('#services .section-title').textContent = dict['services-section-title'];
  document.querySelectorAll('.service-card h3')[0].textContent = dict['service1'];
  document.querySelectorAll('.service-card h3')[1].textContent = dict['service2'];
  document.querySelectorAll('.service-card h3')[2].textContent = dict['service3'];
  document.querySelectorAll('.service-card h3')[3].textContent = dict['service4'];
  document.querySelector('.about .section-subtitle').textContent = dict['about-section-subtitle'];
  document.querySelector('.about .section-title').textContent = dict['about-section-title'];
  document.querySelector('.about p').textContent = dict['about-p'];
  document.querySelector('#contact .section-subtitle').textContent = dict['contact-section-subtitle'];
  document.querySelector('#contact .section-title').textContent = dict['contact-section-title'];
  document.querySelector('#contact p').textContent = dict['contact-p'];
  document.querySelectorAll('.contact-links a')[0].textContent = dict['btn-mail'];
  document.querySelectorAll('.contact-links a')[1].textContent = dict['btn-github'];
  document.querySelector('footer').textContent = dict['footer'];
  document.getElementById('lang-switch').textContent = dict['lang-switch'];
}

document.getElementById('lang-switch').addEventListener('click', function() {
  currentLang = currentLang === 'da' ? 'en' : 'da';
  setLang(currentLang);
});

// Initialize
setLang('da');
