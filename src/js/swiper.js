const breakpoint = window.matchMedia('(min-width:576px)');
let swiper;

const breakpointChecker = function () {
	if (breakpoint.matches === true) {
		if (breakpoint.matches) {
			swiper?.destroy(true, true);
			return desktopSwiper();
		}
	} else if (!breakpoint.matches) {
		swiper?.destroy(true, true);
		return mobileSwiper();
	}
};

const settings = {
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	mousewheel: true,
	keyboard: true,
};

const desktopSettings = {
	...settings,
	slidesPerView: 2,
	spaceBetween: 42,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
}

const mobileSettings = {
	...settings,
	slidesPerView: 1,
	spaceBetween: 42,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
};

const mobileSwiper = function () {
	swiper = new Swiper(".mySwiper", mobileSettings);
}

const desktopSwiper = function () {
	swiper = new Swiper(".mySwiper", desktopSettings);
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();