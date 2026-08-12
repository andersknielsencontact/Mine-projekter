document.documentElement.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', () => {
  let rafPending = false;
  const SCROLL_ENTER = 72;
  const SCROLL_EXIT = 36;
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('site-nav-links');
  const heroSection = document.querySelector('.hero');

  const closeMobileNav = () => {
    document.body.classList.remove('mobile-nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Åbn menu');
    }
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('mobile-nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Luk menu' : 'Åbn menu');
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

  const initGalleryScrollHints = () => {
    const galleryFrames = document.querySelectorAll('.portfolio-gallery-image');

    const updateFrameState = (frame) => {
      const canScroll = frame.scrollHeight > frame.clientHeight + 4;

      frame.classList.toggle('is-scrollable', canScroll);
      frame.classList.toggle('is-scrolled', canScroll && frame.scrollTop > 12);
    };

    galleryFrames.forEach((frame) => {
      if (frame.dataset.scrollHintBound === 'true') {
        return;
      }

      frame.dataset.scrollHintBound = 'true';
      updateFrameState(frame);

      frame.addEventListener('scroll', () => {
        updateFrameState(frame);
      }, { passive: true });
    });

    const refreshGalleryFrames = () => {
      galleryFrames.forEach((frame) => updateFrameState(frame));
    };

    window.addEventListener('resize', refreshGalleryFrames);
    window.addEventListener('load', refreshGalleryFrames, { once: true });
  };

  initGalleryScrollHints();

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
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
});

