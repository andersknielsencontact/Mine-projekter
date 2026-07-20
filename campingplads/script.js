"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector(".main-navigation");
    const navigationLinks = navigation?.querySelectorAll("a");
    const yearElement = document.querySelector("#current-year");
    const heroVideo = document.querySelector(".hero-video");

    /**
     * Opdater årstallet i footeren.
     */
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
    }

    /**
     * Mobilmenu.
     */
    const setMenuState = (isOpen) => {
        if (!navToggle || !navigation || !header) {
            return;
        }

        navToggle.setAttribute("aria-expanded", isOpen.toString());
        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Luk menu" : "Åbn menu"
        );

        navigation.classList.toggle("is-open", isOpen);
        header.classList.toggle("menu-active", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
    };

    navToggle?.addEventListener("click", () => {
        const isOpen =
            navToggle.getAttribute("aria-expanded") === "true";

        setMenuState(!isOpen);
    });

    navigationLinks?.forEach((link) => {
        link.addEventListener("click", () => {
            setMenuState(false);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuState(false);
        }
    });

    /**
     * Luk mobilmenuen, hvis vinduet gøres større.
     */
    const desktopMediaQuery = window.matchMedia("(min-width: 1051px)");

    const handleDesktopChange = (event) => {
        if (event.matches) {
            setMenuState(false);
        }
    };

    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    /**
     * Giv headeren en hvid baggrund efter lidt scroll.
     */
    const updateHeader = () => {
        if (!header) {
            return;
        }

        header.classList.toggle("is-scrolled", window.scrollY > 40);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    /**
     * Marker billeder, der endnu ikke findes.
     *
     * Det betyder, at du kan arbejde videre med layoutet,
     * selvom billederne ikke er lagt i images-mappen endnu.
     */
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
        const markImageAsMissing = () => {
            image.classList.add("is-missing");
        };

        image.addEventListener("error", markImageAsMissing);

        if (image.complete && image.naturalWidth === 0) {
            markImageAsMissing();
        }
    });

    /**
     * Stop autoplay-video for brugere, der ønsker mindre bevægelse.
     */
    const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (heroVideo && reducedMotionQuery.matches) {
        heroVideo.pause();
        heroVideo.removeAttribute("autoplay");
    }
});
