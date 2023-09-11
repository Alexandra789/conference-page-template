const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});