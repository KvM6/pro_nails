// Import CSS
// import "./style.css";

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
};

// Load all events

const prepareDOMEvents = () => {
	// Navigation

	brandBtn.addEventListener("click", () => {});

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("is-active");
		navMobile.classList.toggle("translate-y-full");
		navMobile.classList.toggle("translate-none");
	});

	navMobileLinks.forEach((item) => {
		item.addEventListener("click", () => {
			setTimeout(() => {
				hamburger.classList.remove("is-active");
				navMobile.classList.toggle("translate-y-full");
				navMobile.classList.toggle("translate-none");
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
};

// Load main function on Web load

document.addEventListener("DOMContentLoaded", () => {
	main();
});
