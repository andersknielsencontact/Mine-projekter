/* ==================================================
   FAE LLES NAVIGATION (ALLE SIDER)
   ================================================== */

(function () {
  const schemaExists = document.querySelector('script[type="application/ld+json"][data-schema="salon-heidi"]');
  if (!schemaExists) {
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-schema", "salon-heidi");
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "Salon Heidi",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Skibhusvej 99",
        addressLocality: "Odense",
        postalCode: "5000",
        addressCountry: "DK"
      },
      telephone: "+4566149098"
    });
    document.head.appendChild(schemaScript);
  }

  const burgerBtn = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");

  if (!burgerBtn || !navLinks) {
    return;
  }

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  const closeMenu = () => {
    navLinks.classList.remove("open");
    burgerBtn.classList.remove("open");
    document.body.classList.remove("menu-open");
    burgerBtn.setAttribute("aria-expanded", "false");
  };

  let closeTimeout;
  const clearCloseTimeout = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = undefined;
    }
  };

  const syncMenuScrollLock = () => {
    const shouldLock = window.matchMedia("(max-width: 700px)").matches && navLinks.classList.contains("open");
    document.body.classList.toggle("menu-open", shouldLock);
  };

  // Prevent stale locked-scroll state when returning via history/bfcache.
  closeMenu();

  burgerBtn.addEventListener("click", function () {
    clearCloseTimeout();
    navLinks.classList.toggle("open");
    burgerBtn.classList.toggle("open");
    syncMenuScrollLock();
    const expanded = burgerBtn.getAttribute("aria-expanded") === "true";
    burgerBtn.setAttribute("aria-expanded", String(!expanded));
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
      closeMenu();
      return;
    }
    clearCloseTimeout();
    syncMenuScrollLock();
  });

  window.addEventListener("pageshow", function () {
    closeMenu();
  });

  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  if (isTouchDevice()) {
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".burger-menu-wrap") && navLinks.classList.contains("open")) {
        closeMenu();
      }
    });
  } else {
    const burgerMenuWrap = document.querySelector(".burger-menu-wrap");

    if (burgerMenuWrap) {
      burgerMenuWrap.addEventListener("mouseleave", function () {
        if (window.matchMedia("(max-width: 700px)").matches) {
          return;
        }

        clearCloseTimeout();
        closeTimeout = setTimeout(function () {
          if (!window.matchMedia("(max-width: 700px)").matches) {
            closeMenu();
          }
        }, 1200);
      });

      burgerMenuWrap.addEventListener("mouseenter", function () {
        clearCloseTimeout();
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  // Hidden easter egg: type KROG to show a subtle creator signature.
  const easterSequence = "KROG";
  let easterBuffer = "";
  let easterHideTimer;

  const showEasterNotice = () => {
    let notice = document.querySelector(".easter-egg-notice");

    if (!notice) {
      notice = document.createElement("div");
      notice.className = "easter-egg-notice";
      notice.setAttribute("role", "status");
      notice.setAttribute("aria-live", "polite");
      notice.textContent = "Crafted by Krog Frontend";
      Object.assign(notice.style, {
        position: "fixed",
        right: "14px",
        bottom: "14px",
        zIndex: "9999",
        padding: "0.35rem 0.55rem",
        borderRadius: "999px",
        border: "1px solid rgba(255, 255, 255, 0.34)",
        background: "rgba(17, 17, 17, 0.84)",
        color: "#f5f5f5",
        fontSize: "0.68rem",
        letterSpacing: "0.02em",
        backdropFilter: "blur(2px)",
        opacity: "0",
        transform: "translateY(6px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        pointerEvents: "none"
      });
      document.body.appendChild(notice);
    }

    requestAnimationFrame(() => {
      notice.style.opacity = "1";
      notice.style.transform = "translateY(0)";
    });

    if (easterHideTimer) {
      clearTimeout(easterHideTimer);
    }

    easterHideTimer = setTimeout(() => {
      notice.style.opacity = "0";
      notice.style.transform = "translateY(6px)";
    }, 2200);
  };

  document.addEventListener("keydown", function (event) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const target = event.target;
    if (
      target &&
      (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable
      )
    ) {
      return;
    }

    if (!event.key || event.key.length !== 1) {
      return;
    }

    easterBuffer = (easterBuffer + event.key.toUpperCase()).slice(-easterSequence.length);
    if (easterBuffer === easterSequence) {
      easterBuffer = "";
      showEasterNotice();
    }
  });

  /* ==================================================
     INDEX.HTML
     ================================================== */

  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  if (document.body.classList.contains("index-page")) {
    if (isTouchDevice()) {
      header.classList.add("scrolled");
    } else {
      const updateHeaderOnScroll = () => {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      };

      updateHeaderOnScroll();
      window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
    }
  }

  /* ==================================================
     PRISER.HTML / KONTAKT.HTML / PERSONALE.HTML
     ================================================== */

  if (
    document.body.classList.contains("priser-minimal") ||
    document.body.classList.contains("kontakt-minimal") ||
    document.body.classList.contains("personale-minimal")
  ) {
    header.classList.add("scrolled");
  }
})();
