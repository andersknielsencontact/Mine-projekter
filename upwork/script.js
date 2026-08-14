document.documentElement.classList.add('js-enabled');

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
		'contribution-ux-title': 'Struktur &amp; UX',
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
		'lightbox-dialog-label': 'Forstørret screenshot',
		'lightbox-close': 'Luk',
		'lightbox-close-aria': 'Luk stor visning',
	},
	en: {
		'document-title': 'Anders Nielsen | Portfolio',
		'meta-description': 'Frontend portfolio focused on modern websites, performance, and conversion-driven solutions.',
		'lang-toggle-label': 'Change language',
		'lang-option-da-label': 'Choose Danish',
		'lang-option-en-label': 'Choose English',
		'menu-open-label': 'Open menu',
		'menu-close-label': 'Close menu',
		'nav-home': 'Home',
		'nav-cases': 'Cases <span class="nav-dropdown-chevron" aria-hidden="true">▾</span>',
		'nav-cases-menu-label': 'Cases menu',
		'nav-case-salon': 'Case 01 - Salon Heidi',
		'nav-concept': 'Concept projects (not client work)',
		'nav-contact': 'Contact',
		'hero-kicker': 'Freelance Frontend Developer',
		'hero-title': '<span class="hero-building">I build</span> <span class="hero-modern">modern</span><br />websites',
		'hero-lead': 'Modern websites that strengthen your company\'s first impression and make it easy for customers to get in touch',
		'hero-scroll-label': 'Scroll to cases',
		'case-salon-label': 'Salon Heidi case',
		'case-number': 'Case 01',
		'case-hero-image-alt': 'Large hero image of the Salon Heidi website',
		'case-post-intro-title': 'From an older website <br>To a modern experience',
		'case-start-kicker': 'The starting point',
		'case-start-copy': 'Salon Heidi wanted a more modern digital presence that worked well on mobile and desktop. The goal was also to make information and booking easier to access for both new and existing customers.',
		'compare-kicker': 'Before / after',
		'compare-lead': 'Drag the slider to see the difference between the old and new experience.',
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
		'case-solution-6': 'Mobile friendly',
		'gallery-kicker': 'Gallery',
		'gallery-title': 'A look at the finished solution',
		'gallery-lead': 'A selection of the most important pages and the visual direction across the website.',
		'gallery-image-home-alt': 'The homepage of Salon Heidi\'s new website',
		'gallery-home-title': 'Homepage',
		'gallery-home-copy': 'Hero · CTA · presentation',
		'gallery-image-prices-alt': 'The pricing and product page on Salon Heidi\'s website',
		'gallery-prices-title': 'Prices',
		'gallery-prices-copy': 'Products · overview',
		'gallery-image-team-alt': 'The team page on Salon Heidi\'s website',
		'gallery-team-title': 'Team',
		'gallery-team-copy': 'Team · presentation',
		'gallery-image-contact-alt': 'The contact page on Salon Heidi\'s website',
		'gallery-contact-title': 'Contact',
		'gallery-contact-copy': 'Find us · contact',
		'gallery-image-privacy-alt': 'The privacy policy on Salon Heidi\'s website',
		'gallery-privacy-title': 'Privacy policy',
		'gallery-privacy-copy': 'Information · structure',
		'contribution-kicker': 'My contribution',
		'contribution-lead': 'A short overview of my role in the project and the concrete areas I owned.',
		'contribution-design-title': 'Design',
		'contribution-design-copy': 'Creating a new visual design with a focus on a modern look and feel.',
		'contribution-dev-title': 'Frontend development',
		'contribution-dev-copy': 'Building the new website in HTML, CSS, and JavaScript.',
		'contribution-ux-title': 'Structure &amp; UX',
		'contribution-ux-copy': 'New information architecture and an optimized user experience across devices.',
		'contribution-coordination-title': 'Project coordination',
		'contribution-coordination-copy': 'Client communication and coordination with the web agency through implementation.',
		'final-cta-kicker': 'See the finished result',
		'final-cta-title': '<span class="case-final-line">Salon Heidi is live</span><span class="case-final-line">and can be visited here</span>',
		'final-cta-link': 'Visit the website ↗',
		'concept-kicker': 'Concept projects',
		'concept-title': 'Self-built pages',
		'concept-lead': 'These pages are my own concept projects, built alongside client work. They were not delivered to clients, but they show my style and the types of websites I can also create.',
		'concept-northnote-copy': 'Music school concept focused on a calm atmosphere and an inspiring learning environment. The structure makes it easy to get an overview and get in touch.',
		'concept-haircut-copy': 'Design concept for a modern hair salon. The layout is easy to use and visually sharp, with a focus on showcasing services, creating a welcoming atmosphere, and building trust.',
		'concept-link': 'View concept',
		'lightbox-dialog-label': 'Enlarged screenshot',
		'lightbox-close': 'Close',
		'lightbox-close-aria': 'Close enlarged view',
	},
};

const defaultLanguage = 'en';
let currentLanguage = defaultLanguage;

const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('site-nav-links');
const langSwitcher = document.querySelector('.lang-switcher');
const langToggle = document.querySelector('.lang-toggle');
const langMenu = document.querySelector('.lang-menu');
const langButtons = document.querySelectorAll('[data-lang-option]');
const metaDescription = document.querySelector('meta[name="description"]');

function getTranslation(language, key) {
	const dictionary = translations[language] || translations[defaultLanguage];
	return dictionary[key];
}

function setMobileNavOpen(isOpen) {
	body.classList.toggle('mobile-nav-open', isOpen);
	if (navToggle) {
		navToggle.setAttribute('aria-expanded', String(isOpen));
		navToggle.setAttribute(
			'aria-label',
			isOpen ? getTranslation(currentLanguage, 'menu-close-label') : getTranslation(currentLanguage, 'menu-open-label')
		);
	}
}

function setLanguageMenuOpen(isOpen) {
	if (langSwitcher) {
		langSwitcher.classList.toggle('is-open', isOpen);
	}
	if (langMenu) {
		langMenu.hidden = !isOpen;
	}
	if (langToggle) {
		langToggle.setAttribute('aria-expanded', String(isOpen));
	}
}

function updateLanguage(language) {
	currentLanguage = translations[language] ? language : defaultLanguage;
	const dictionary = translations[currentLanguage];

	document.documentElement.lang = currentLanguage;
	body.dataset.lang = currentLanguage;

	const documentTitle = dictionary['document-title'];
	if (documentTitle) {
		document.title = documentTitle;
	}

	const translatedDescription = dictionary['meta-description'];
	if (metaDescription && translatedDescription) {
		metaDescription.setAttribute('content', translatedDescription);
	}

	document.querySelectorAll('[data-i18n-html]').forEach((element) => {
		const key = element.getAttribute('data-i18n-html');
		const translation = dictionary[key];
		if (translation !== undefined) {
			element.innerHTML = translation;
		}
	});

	document.querySelectorAll('[data-i18n]').forEach((element) => {
		if (element.hasAttribute('data-i18n-html')) {
			return;
		}

		const key = element.getAttribute('data-i18n');
		const translation = dictionary[key];
		if (translation !== undefined) {
			element.textContent = translation;
		}
	});

	document.querySelectorAll('[data-i18n-content]').forEach((element) => {
		const key = element.getAttribute('data-i18n-content');
		const translation = dictionary[key];
		if (translation !== undefined) {
			element.setAttribute('content', translation);
		}
	});

	document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
		const key = element.getAttribute('data-i18n-alt');
		const translation = dictionary[key];
		if (translation !== undefined) {
			element.setAttribute('alt', translation);
		}
	});

	document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
		const key = element.getAttribute('data-i18n-aria-label');
		const translation = dictionary[key];
		if (translation !== undefined) {
			element.setAttribute('aria-label', translation);
		}
	});

	setMobileNavOpen(body.classList.contains('mobile-nav-open'));
	if (langToggle) {
		langToggle.setAttribute('aria-label', getTranslation(currentLanguage, 'lang-toggle-label'));
	}
}

function closeAllMenus() {
	setMobileNavOpen(false);
	setLanguageMenuOpen(false);
}

if (navToggle) {
	navToggle.addEventListener('click', () => {
		setMobileNavOpen(!body.classList.contains('mobile-nav-open'));
	});
}

if (navLinks) {
	navLinks.addEventListener('click', (event) => {
		if (event.target instanceof Element && event.target.closest('a')) {
			setMobileNavOpen(false);
		}
	});
}

if (langToggle) {
	langToggle.addEventListener('click', () => {
		setLanguageMenuOpen(!(langMenu && !langMenu.hidden));
	});
}

langButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const selectedLanguage = button.getAttribute('data-lang-option');
		if (selectedLanguage) {
			updateLanguage(selectedLanguage);
		}
		setLanguageMenuOpen(false);
	});
});

document.addEventListener('click', (event) => {	
	if (!(event.target instanceof Node)) {
		return;
	}

	if (langSwitcher && !langSwitcher.contains(event.target)) {
		setLanguageMenuOpen(false);
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeAllMenus();
	}
});

updateLanguage(defaultLanguage);
setMobileNavOpen(false);
setLanguageMenuOpen(false);
