const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".hamburger-menu .nav__menu__item-link");

hamburger.addEventListener("click", toggleMobileMenu);

menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", toggleMobileMenu)
})

function toggleMobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	hamburger.classList.contains("active") ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';
}