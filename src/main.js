// Import CSS
import "./style.css";
import Aos from "aos";

// Import AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

// DOMElements

let sections;

// Navigation

let brandBtn;
let hamburger;
let navMobile;
let navMobileLinks;
let navDesk;
let navDeskLinks;

// Watcher

let about;
let offers;
let gallery;
let contact;

// Header

let headBtn;
let aboutSection;

// Offers

let cardWrapp;

// Gallery

let images;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

// Load DOME content

const prepareDOMElements = () => {
	// DOMElements

	sections = document.querySelectorAll("section[id]");

	// Navigation

	brandBtn = document.querySelector(".nav-brand");
	hamburger = document.querySelector(".hamburger");
	navMobile = document.querySelector(".nav-mobile");
	navMobileLinks = document.querySelectorAll(".mobile-item");
	navDesk = document.querySelector(".nav-desktop");
	navDeskLinks = document.querySelectorAll(".desk-item");

	// Watcher

	about = document.querySelector("#about");
	offers = document.querySelector("#offers");
	gallery = document.querySelector("#gallery");
	contact = document.querySelector("#contact");

	// Header

	headBtn = document.querySelector(".header-button");
	aboutSection = document.querySelector("#about");

	// Offers

	cardWrapp = document.querySelectorAll(".card-wrapp");

	// Gallery

	images = document.querySelectorAll(".grid img");
};

// Load all events

const prepareDOMEvents = () => {
	// Navigation

	brandBtn.addEventListener("click", () => {});

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("is-active");
		navMobile.classList.toggle("top-0");
		navMobileLinks.forEach((item) => {
			item.classList.toggle("animate-slide-down");
		});
	});

	navMobileLinks.forEach((item) => {
		item.addEventListener("click", () => {
			mobileLinksAnimation();
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

	// Gallery

	galleryThumbnails.forEach((thumb) => {
		thumb.addEventListener("click", () => {
			openModal(thumb);
		});
	});

	const modal = document.getElementById("modal");
	if (modal) {
		// Close button
		const closeBtn = modal.querySelector("#close-mod");
		closeBtn.addEventListener("click", closeModal);

		// Previous / Next buttons
		const prevBtn = modal.querySelector("#left-mod");
		const nextBtn = modal.querySelector("#right-mod");

		if (prevBtn) prevBtn.addEventListener("click", () => changeImage(-1));
		if (nextBtn) nextBtn.addEventListener("click", () => changeImage(1));

		document.addEventListener("keydown", (e) => {
			if (e.key === "ArrowLeft") changeImage(-1);
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "ArrowRight") changeImage(1);
		});

		// Keep the overlay click & Esc key listeners you already have
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") closeModal();
		});
	}
};

// Navigation

const mobileLinksAnimation = () => {
	navMobileLinks.forEach((item) => {
		item.classList.remove("animate-slide-down");
	});
};

// Gallery

// Collect images (run once after DOM ready)
let galleryImages = [];
let currentIndex = 0;

// In prepareDOMElements() or at the top level after DOMContentLoaded
const galleryThumbnails = document.querySelectorAll("#gallery img"); // targets all <img> in gallery
galleryImages = Array.from(galleryThumbnails).map((img) => img.src);

// Function definitions
function openModal(imgElement) {
	currentIndex = Array.from(galleryThumbnails).indexOf(imgElement); // find position
	const modalImg = document.getElementById("modalImage");
	if (modalImg && window.matchMedia("(min-width: 768px)").matches) {
		modalImg.src = galleryImages[currentIndex];
		document.getElementById("modal")?.classList.remove("hidden");
		document.getElementById("modal")?.classList.add("flex");
	}
}

function closeModal() {
	document.getElementById("modal")?.classList.add("hidden");
	document.getElementById("modal")?.classList.remove("flex");
}

function changeImage(direction) {
	currentIndex =
		(currentIndex + direction + galleryImages.length) % galleryImages.length;
	document.getElementById("modalImage").src = galleryImages[currentIndex];
}

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
