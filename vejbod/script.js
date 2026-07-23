const menuButton = document.querySelector(".menu-button");
const mainNavigation = document.querySelector(".main-nav");
const navigationLinks = document.querySelectorAll(".main-nav a");

const galleryButtons = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCloseButton = document.querySelector(".lightbox-close");

const currentYearElement = document.querySelector("#current-year");

const sign = document.querySelector(".hanging-sign");
const signToggle = document.querySelector(".sign-toggle");
const signBoard = document.querySelector("#signBoard");

/*
 * Mobilmenu (klassisk menu-knap, hvis siden bruger den)
 */

if (menuButton && mainNavigation) {
    function closeMenu() {
        mainNavigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Åbn menu");
    }

    function toggleMenu() {
        const menuIsOpen = mainNavigation.classList.toggle("is-open");

        document.body.classList.toggle("menu-open", menuIsOpen);

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen.toString()
        );

        menuButton.setAttribute(
            "aria-label",
            menuIsOpen ? "Luk menu" : "Åbn menu"
        );
    }

    menuButton.addEventListener("click", toggleMenu);

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}

/*
 * Mobilmenu (foldbart skilt i Vejbod)
 */

if (sign && signToggle && signBoard) {
    function closeSignMenu() {
        sign.classList.remove("is-open");
        signToggle.setAttribute("aria-expanded", "false");
        signToggle.setAttribute("aria-label", "Åbn menu");
    }

    function toggleSignMenu() {
        const isOpen = sign.classList.toggle("is-open");
        signToggle.setAttribute("aria-expanded", String(isOpen));
        signToggle.setAttribute("aria-label", isOpen ? "Luk menu" : "Åbn menu");
    }

    signToggle.addEventListener("click", toggleSignMenu);

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeSignMenu);
    });

    document.addEventListener("click", (event) => {
        if (!sign.contains(event.target)) {
            closeSignMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeSignMenu();
        }
    });
}

/*
 * Galleri og billedvisning
 */

if (lightbox && lightboxImage && lightboxCaption && lightboxCloseButton && galleryButtons.length > 0) {
    function openLightbox(button) {
        const imageSource = button.dataset.image;
        const imageCaption = button.dataset.caption;

        lightboxImage.src = imageSource;
        lightboxImage.alt = imageCaption;
        lightboxCaption.textContent = imageCaption;

        document.body.classList.add("lightbox-open");

        lightbox.showModal();
    }

    function closeLightbox() {
        lightbox.close();

        document.body.classList.remove("lightbox-open");

        lightboxImage.src = "";
        lightboxCaption.textContent = "";
    }

    galleryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            openLightbox(button);
        });
    });

    lightboxCloseButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        /*
         * Lukker kun vinduet, hvis der klikkes på den mørke
         * baggrund og ikke direkte på billedet.
         */
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}

/*
 * Aktuelt årstal i footeren
 */

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}
