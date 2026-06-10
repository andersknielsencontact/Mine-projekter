/* ==================================================
   FAE LLES NAVIGATION (ALLE SIDER)
   ================================================== */

(function () {
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

  burgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    burgerBtn.classList.toggle("open");
    document.body.classList.toggle("menu-open", navLinks.classList.contains("open"));
    const expanded = burgerBtn.getAttribute("aria-expanded") === "true";
    burgerBtn.setAttribute("aria-expanded", String(!expanded));
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
    let closeTimeout;

    if (burgerMenuWrap) {
      burgerMenuWrap.addEventListener("mouseleave", function () {
        closeTimeout = setTimeout(closeMenu, 1200);
      });

      burgerMenuWrap.addEventListener("mouseenter", function () {
        if (closeTimeout) {
          clearTimeout(closeTimeout);
        }
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

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
