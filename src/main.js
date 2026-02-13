// Import CSS
import "./style.css";
import Aos from "aos";

// Import AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

// DOME elements

// Navigation

let brandBtn;
let hamburger;
let navMobile;
let navMobileLinks;
let navDesk;
let navDeskLinks;

// Header

let headBtn;
let aboutSection;

// Offers

let cardWrapp;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

// Load DOME content

const prepareDOMElements = () => {
	// Navigation

	brandBtn = document.querySelector(".nav-brand");
	hamburger = document.querySelector(".hamburger");
	navMobile = document.querySelector(".nav-mobile");
	navMobileLinks = document.querySelectorAll(".mobile-item");
	navDesk = document.querySelector(".nav-desktop");
	navDeskLinks = document.querySelectorAll(".desktop-items");

	// Header

	headBtn = document.querySelector(".header-button");
	aboutSection = document.querySelector("#about");

	// Offers

	cardWrapp = document.querySelectorAll(".card-wrapp");
};

// Load all events

const prepareDOMEvents = () => {
	// Navigation

	brandBtn.addEventListener("click", () => {});

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("is-active");
		navMobile.classList.toggle("top-0");
	});

	navMobileLinks.forEach((item) => {
		item.addEventListener("click", () => {
			setTimeout(() => {
				hamburger.classList.remove("is-active");
				navMobile.classList.toggle("top-0");
			}, 500);
		});
	});

	// Header

	headBtn.addEventListener("click", () => {
		if (aboutSection) {
			aboutSection.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			console.log("work");
		}
	});

	// Offers

	cardWrapp.forEach((card) => {
		card.addEventListener("click", (e) => {
			if (e.targer.closest("a")) return;

			if (!window.matchMedia("(hover: hover").matches) {
				card.classList.toggle("flipped");
			}
		});
	});
};

// Load main function on Web load

document.addEventListener("DOMContentLoaded", () => {
	(main(),
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "aos-animate", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		}));
});
