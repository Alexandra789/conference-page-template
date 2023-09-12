const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("active");
	hamburger.classList.contains('active') ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';
	navMenu.classList.toggle("active");
});