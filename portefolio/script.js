document.documentElement.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('site-nav-links');
  const heroSection = document.querySelector('.hero');

  const translations = {
    da: {
      'document-title': 'Anders Nielsen | Portfolio',
      'meta-description': 'Frontend portfolio med fokus på moderne websites, performance og conversion-fokuserede løsninger.',
      'lang-toggle-label': 'Skift sprog',
      'lang-option-da-label': 'Vælg dansk',
      'lang-option-en-label': 'Vælg engelsk',
      'menu-open-label': 'Åbn menu',
      'menu-close-label': 'Luk menu',
      'nav-home': 'Forside',
      'nav-cases': 'Cases <span class="nav-dropdown-chevron" aria-hidden="true">▾</span>',
      'nav-cases-menu-label': 'Cases menu',
      'nav-case-salon': 'Case 01 - Salon Heidi',
      'nav-concept': 'Konceptprojekter (ikke kundecase)',
      'nav-contact': 'Kontakt',
      'hero-kicker': 'Freelance Frontend-udvikler',
      'hero-title': '<span class="hero-building">Jeg bygger</span> <span class="hero-modern">moderne</span><br />hjemmesider',
      'hero-lead': 'Moderne hjemmesider, der styrker din virksomheds førstehåndsindtryk og gør det nemt for kunder at tage kontakt',
      'hero-scroll-label': 'Scroll til cases',
      'case-salon-label': 'Salon Heidi case',
      'case-number': 'Case 01',
      'case-hero-image-alt': 'Stort hero-billede af Salon Heidi hjemmesiden',
      'case-post-intro-title': 'Fra et ældre website <br>Til en moderne oplevelse',
      'case-start-kicker': 'Udgangspunktet',
      'case-start-copy': 'Salon Heidi ønskede et mere moderne digitalt udtryk, der fungerede godt på både mobil og desktop. Samtidig var målet at gøre information og booking lettere tilgængelig for både nye og eksisterende kunder.',
      'compare-kicker': 'Før / efter',
      'compare-lead': 'Træk i slideren for at se forskellen mellem den gamle og den nye oplevelse.',
      'compare-after-alt': 'Ny version af Salon Heidi hjemmeside',
      'compare-after-tag': 'Efter',
      'compare-before-alt': 'Gammel version af Salon Heidi hjemmeside',
      'compare-before-tag': 'Før',
      'compare-input-label': 'Sammenlign gammel og ny hjemmeside',
      'compare-range-aria': 'Før og efter slider',
      'case-improved-kicker': 'Hvad blev forbedret?',
      'case-solution-1': 'Moderne design',
      'case-solution-2': 'Responsivt layout',
      'case-solution-3': 'Tydelig navigation',
      'case-solution-4': 'Fokus på booking',
      'case-solution-5': 'Klar til implementering',
      'case-solution-6': 'Mobilvenlig',
      'gallery-kicker': 'Galleri',
      'gallery-title': 'Et kig på den færdige løsning',
      'gallery-lead': 'Et udvalg af de vigtigste sider og den visuelle retning på tværs af hjemmesiden.',
      'gallery-image-home-alt': 'Forsiden på Salon Heidis nye hjemmeside',
      'gallery-home-title': 'Forside',
      'gallery-home-copy': 'Hero · CTA · præsentation',
      'gallery-image-prices-alt': 'Pris- og produktsiden på Salon Heidis hjemmeside',
      'gallery-prices-title': 'Priser',
      'gallery-prices-copy': 'Produkter · overblik',
      'gallery-image-team-alt': 'Personalesiden på Salon Heidis hjemmeside',
      'gallery-team-title': 'Personale',
      'gallery-team-copy': 'Team · præsentation',
      'gallery-image-contact-alt': 'Kontaktsiden på Salon Heidis hjemmeside',
      'gallery-contact-title': 'Kontakt',
      'gallery-contact-copy': 'Find os · kontakt',
      'gallery-image-privacy-alt': 'Privatlivspolitikken på Salon Heidis hjemmeside',
      'gallery-privacy-title': 'Privatlivspolitik',
      'gallery-privacy-copy': 'Information · struktur',
      'contribution-kicker': 'Mit bidrag',
      'contribution-lead': 'Et kort overblik over min rolle i projektet og de konkrete områder, jeg stod for.',
      'contribution-design-title': 'Design',
      'contribution-design-copy': 'Udarbejdelse af nyt visuelt design med fokus på et moderne udtryk.',
      'contribution-dev-title': 'Frontend-udvikling',
      'contribution-dev-copy': 'Opbygning af den nye hjemmeside i HTML, CSS og JavaScript.',
      'contribution-ux-title': 'Struktur & UX',
      'contribution-ux-copy': 'Ny informationsstruktur og optimeret brugeroplevelse på tværs af enheder.',
      'contribution-coordination-title': 'Projektkoordinering',
      'contribution-coordination-copy': 'Dialog med kunden og koordinering med webbureau frem til implementering.',
      'final-cta-kicker': 'Se det færdige resultat',
      'final-cta-title': '<span class="case-final-line">Salon Heidi er implementeret</span><span class="case-final-line">og kan besøges her</span>',
      'final-cta-link': 'Besøg hjemmesiden ↗',
      'concept-kicker': 'Konceptprojekter',
      'concept-title': 'Egenudviklede sider',
      'concept-lead': 'De her sider er egne konceptprojekter, som jeg bygger ved siden af kundeopgaver. De er ikke leveret til kunder, men viser min stil og hvilke typer websites, jeg også kan lave.',
      'concept-northnote-copy': 'Musikskole-koncept med fokus på en rolig stemning og et inspirerende læringsmiljø. Strukturen gør det nemt at få overblik og tage kontakt.',
      'concept-haircut-copy': 'Designkoncept til en moderne frisørsalon. Layoutet er brugervenligt og visuelt skarpt med fokus på at fremhæve ydelser, skabe en indbydende atmosfære og opbygge tillid.',
      'concept-link': 'Se koncept',
      'contact-kicker': 'Kontakt',
      'contact-title-html': '<span class="contact-title-line">Har du en hjemmeside, der trænger til et moderne løft?</span><span class="contact-title-line contact-title-line-secondary">Lad os tage en uforpligtende snak.</span>',
      'contact-lead': 'Jeg hjælper med moderne websites, der ser skarpe ud, fungerer på mobil og gør det nemt for kunder at tage kontakt.',
      'contact-label': 'Skriv direkte til mig',
      'contact-send-mail': 'Send mail',
      'lightbox-dialog-label': 'Forstørret screenshot',
      'lightbox-close': 'Luk',
      'lightbox-close-aria': 'Luk stor visning',
    },
    en: {
      'document-title': 'Anders Nielsen | Portfolio',
      'meta-description': 'Frontend portfolio focused on modern websites, performance, and conversion-oriented solutions.',
      'lang-toggle-label': 'Switch language',
      'lang-option-da-label': 'Choose Danish',
      'lang-option-en-label': 'Choose English',
      'menu-open-label': 'Open menu',
      'menu-close-label': 'Close menu',
      'nav-home': 'Home',
      'nav-cases': 'Cases <span class="nav-dropdown-chevron" aria-hidden="true">▾</span>',
      'nav-cases-menu-label': 'Cases menu',
      'nav-case-salon': 'Case 01 - Salon Heidi',
      'nav-concept': 'Concept projects (not a client case)',
      'nav-contact': 'Contact',
      'hero-kicker': 'Freelance Frontend Developer',
      'hero-title': '<span class="hero-building">I build</span> <span class="hero-modern">modern</span><br />websites',
      'hero-lead': 'Modern websites that strengthen your company\'s first impression and make it easy for customers to get in touch.',
      'hero-scroll-label': 'Scroll to cases',
      'case-salon-label': 'Salon Heidi case',
      'case-number': 'Case 01',
      'case-hero-image-alt': 'Large hero image of the Salon Heidi website',
      'case-post-intro-title': 'From an older website <br>to a modern experience',
      'case-start-kicker': 'Starting point',
      'case-start-copy': 'Salon Heidi wanted a more modern digital presence that worked well on both mobile and desktop. At the same time, the goal was to make information and booking easier to access for both new and existing customers.',
      'compare-kicker': 'Before / after',
      'compare-lead': 'Drag the slider to see the difference between the old and the new experience.',
      'compare-after-alt': 'New version of the Salon Heidi website',
      'compare-after-tag': 'After',
      'compare-before-alt': 'Old version of the Salon Heidi website',
      'compare-before-tag': 'Before',
      'compare-input-label': 'Compare the old and new website',
      'compare-range-aria': 'Before and after slider',
      'case-improved-kicker': 'What was improved?',
      'case-solution-1': 'Modern design',
      'case-solution-2': 'Responsive layout',
      'case-solution-3': 'Clear navigation',
      'case-solution-4': 'Focus on booking',
      'case-solution-5': 'Ready for implementation',
      'case-solution-6': 'Mobile-friendly',
      'gallery-kicker': 'Gallery',
      'gallery-title': 'A look at the finished solution',
      'gallery-lead': 'A selection of the most important pages and the visual direction across the website.',
      'gallery-image-home-alt': 'Homepage of Salon Heidi\'s new website',
      'gallery-home-title': 'Home',
      'gallery-home-copy': 'Hero · CTA · presentation',
      'gallery-image-prices-alt': 'Pricing and product page on Salon Heidi\'s website',
      'gallery-prices-title': 'Prices',
      'gallery-prices-copy': 'Products · overview',
      'gallery-image-team-alt': 'Team page on Salon Heidi\'s website',
      'gallery-team-title': 'Team',
      'gallery-team-copy': 'Team · presentation',
      'gallery-image-contact-alt': 'Contact page on Salon Heidi\'s website',
      'gallery-contact-title': 'Contact',
      'gallery-contact-copy': 'Find us · contact',
      'gallery-image-privacy-alt': 'Privacy policy page on Salon Heidi\'s website',
      'gallery-privacy-title': 'Privacy Policy',
      'gallery-privacy-copy': 'Information · structure',
      'contribution-kicker': 'My contribution',
      'contribution-lead': 'A brief overview of my role in the project and the specific areas I was responsible for.',
      'contribution-design-title': 'Design',
      'contribution-design-copy': 'Creation of a new visual design with a focus on a modern expression.',
      'contribution-dev-title': 'Frontend development',
      'contribution-dev-copy': 'Building the new website in HTML, CSS, and JavaScript.',
      'contribution-ux-title': 'Structure & UX',
      'contribution-ux-copy': 'New information structure and an optimized user experience across devices.',
      'contribution-coordination-title': 'Project coordination',
      'contribution-coordination-copy': 'Dialogue with the client and coordination with the web agency through implementation.',
      'final-cta-kicker': 'See the final results',
      'final-cta-title': '<span class="case-final-line">Salon Heidi is implemented</span><span class="case-final-line">Click to view the page</span>',
      'final-cta-link': 'Visit the website ↗',
      'concept-kicker': 'Concept projects',
      'concept-title': 'Self-initiated websites',
      'concept-lead': 'These pages are my own concept projects that I build alongside client work. They were not delivered to clients, but they show my style and the kinds of websites I can also create.',
      'concept-northnote-copy': 'A music school concept focused on a calm atmosphere and an inspiring learning environment. The structure makes it easy to get an overview and get in touch.',
      'concept-haircut-copy': 'A design concept for a modern hair salon. The layout is user-friendly and visually sharp, with a focus on highlighting services, creating a welcoming atmosphere, and building trust.',
      'concept-link': 'View concept',
      'contact-kicker': 'Contact',
      'contact-title-html': '<span class="contact-title-line">Do you have a website that needs</span><span class="contact-title-line contact-title-line-secondary">a modern refresh?</span>',
      'contact-lead': 'I help create modern websites that look sharp, work on mobile, and make it easy for customers to get in touch.',
      'contact-label': 'Contact me on mail',
      'contact-send-mail': 'Send email',
      'lightbox-dialog-label': 'Enlarged screenshot',
      'lightbox-close': 'Close',
      'lightbox-close-aria': 'Close large view',
    },
  };

  const translationTargets = document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-aria-label], [data-i18n-alt], [data-i18n-content]');
  const langToggle = document.querySelector('.lang-toggle');
  const langSwitcher = document.querySelector('.lang-switcher');
  const langMenu = document.querySelector('.lang-menu');
  const langOptions = document.querySelectorAll('[data-lang-option]');
  let currentLang = 'da';

  const getMenuToggleLabel = (isOpen) => {
    const dictionary = translations[currentLang] || translations.da;
    return isOpen ? dictionary['menu-close-label'] : dictionary['menu-open-label'];
  };

  const applyTranslations = (lang) => {
    const dictionary = translations[lang] || translations.da;

    translationTargets.forEach((element) => {
      const textKey = element.dataset.i18n;
      const htmlKey = element.dataset.i18nHtml;
      const ariaKey = element.dataset.i18nAriaLabel;
      const altKey = element.dataset.i18nAlt;
      const contentKey = element.dataset.i18nContent;

      if (textKey && dictionary[textKey]) {
        element.textContent = dictionary[textKey];
      }

      if (htmlKey && dictionary[htmlKey]) {
        element.innerHTML = dictionary[htmlKey];
      }

      if (ariaKey && dictionary[ariaKey]) {
        element.setAttribute('aria-label', dictionary[ariaKey]);
      }

      if (altKey && dictionary[altKey]) {
        element.setAttribute('alt', dictionary[altKey]);
      }

      if (contentKey && dictionary[contentKey]) {
        element.setAttribute('content', dictionary[contentKey]);
      }
    });

    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;

    if (langToggle) {
      langToggle.setAttribute('aria-expanded', String(langSwitcher?.classList.contains('is-open') || false));
      langToggle.setAttribute('title', lang === 'en' ? 'Switch to Danish' : 'Skift til engelsk');
    }

    if (navToggle) {
      navToggle.setAttribute('aria-label', getMenuToggleLabel(document.body.classList.contains('mobile-nav-open')));
    }
  };

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const isOpen = langSwitcher?.classList.toggle('is-open');
      if (langMenu) {
        langMenu.hidden = !isOpen;
      }
      langToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  langOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const nextLang = option.dataset.langOption;
      if (!nextLang || nextLang === currentLang) {
        return;
      }

      currentLang = nextLang;
      applyTranslations(currentLang);

      if (langSwitcher) {
        langSwitcher.classList.remove('is-open');
      }

      if (langMenu) {
        langMenu.hidden = true;
      }

      if (langToggle) {
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!langSwitcher || !langToggle || !langMenu) {
      return;
    }

    if (langSwitcher.contains(event.target)) {
      return;
    }

    langSwitcher.classList.remove('is-open');
    langMenu.hidden = true;
    langToggle.setAttribute('aria-expanded', 'false');
  });

  applyTranslations(currentLang);

  let rafPending = false;
  const SCROLL_ENTER = 72;
  const SCROLL_EXIT = 36;

  const closeMobileNav = () => {
    document.body.classList.remove('mobile-nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', getMenuToggleLabel(false));
    }
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('mobile-nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', getMenuToggleLabel(isOpen));
    });

    navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        closeMobileNav();
      }
    });
  }

  const updateScrolledState = () => {
    const isScrolled = document.body.classList.contains('scrolled');
    const y = window.scrollY;

    if (!isScrolled && y > SCROLL_ENTER) {
      document.body.classList.add('scrolled');
    } else if (isScrolled && y < SCROLL_EXIT) {
      document.body.classList.remove('scrolled');
    }
  };

  const requestScrollUpdate = () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      updateScrolledState();
      rafPending = false;
    });
  };

  updateScrolledState();
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate);

  const updateHeroLogoState = () => {
    if (!heroSection) {
      return;
    }

    if (window.innerWidth <= 640) {
      document.body.classList.remove('hero-logo-hidden');
      return;
    }

    const heroRect = heroSection.getBoundingClientRect();
    const headerHeight = document.querySelector('.hero-header')?.offsetHeight || 0;
    const heroIsActive = heroRect.bottom > headerHeight + 24;

    document.body.classList.toggle('hero-logo-hidden', !heroIsActive);
  };

  updateHeroLogoState();
  window.addEventListener('scroll', updateHeroLogoState, { passive: true });
  window.addEventListener('resize', updateHeroLogoState);

  const initCompareBlocks = (scope = document) => {
    const compareBlocks = scope.querySelectorAll('.image-compare');

    compareBlocks.forEach((block) => {
      const range = block.querySelector('.image-compare-range');
      if (!range || range.dataset.bound === 'true') {
        return;
      }

      const updateSlider = (value) => {
        block.style.setProperty('--compare-pos', `${value}%`);
      };

      updateSlider(range.value);
      range.dataset.bound = 'true';

      range.addEventListener('input', (event) => {
        updateSlider(event.target.value);
      });
    });
  };

  initCompareBlocks();

  const revealTargets = document.querySelectorAll(
    '.case-showcase img, .case-story-image img, .case-gallery-thumb, .image-compare-after, .image-compare-before'
  );

  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');

    if (element.classList.contains('case-gallery-thumb')) {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 90, 360)}ms`);
    }
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealTargets.forEach((element) => {
      element.classList.add('is-visible');
    });
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    });

    revealTargets.forEach((element) => revealObserver.observe(element));
  }

  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxStage = document.getElementById('gallery-lightbox-stage');

  if (!lightbox || !lightboxStage) {
    return;
  }

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('gallery-lightbox-open');
    lightboxStage.innerHTML = '';
  };

  const openLightboxFromImage = (sourceImage) => {
    if (!sourceImage) {
      return;
    }

    lightboxStage.innerHTML = `
      <img class="gallery-lightbox-image" src="${sourceImage.getAttribute('src')}" alt="${sourceImage.getAttribute('alt') || ''}" />
    `;

    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('gallery-lightbox-open');
    lightboxStage.scrollTop = 0;
  };

  const galleryCards = document.querySelectorAll('.case-gallery-item[data-lightbox-open]');
  galleryCards.forEach((card) => {
    const openCard = () => {
      const sourceImage = card.querySelector('.case-gallery-thumb');
      if (sourceImage) {
        openLightboxFromImage(sourceImage);
      }
    };

    card.addEventListener('click', openCard);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCard();
      }
    });
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target.closest('[data-lightbox-close]')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && langSwitcher?.classList.contains('is-open')) {
      langSwitcher.classList.remove('is-open');
      if (langMenu) {
        langMenu.hidden = true;
      }
      if (langToggle) {
        langToggle.setAttribute('aria-expanded', 'false');
        langToggle.focus();
      }
    }

    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
});

