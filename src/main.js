// DOME elements

// Navigation

let hamburger;
let navMobile;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

// Load DOME content

const prepareDOMElements = () => {
	hamburger = document.querySelector(".hamburger");
	navMobile = document.querySelector(".nav-mobile");
};

// Load all events

const prepareDOMEvents = () => {
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("is-active");
		navMobile.classList.toggle('translate-x-full')
		navMobile.classList.toggle('translate-none')
	});
};

// Load main function on Web load

document.addEventListener("DOMContentLoaded", () => {
	main();
});
