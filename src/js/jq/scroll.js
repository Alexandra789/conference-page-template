$(function () {
	$('.scroll-down').click(function () {
		$('html, body').animate({scrollTop: $('section.speakers').offset().top}, 500, 'linear');
		return false;
	});
});

$('.nav__menu__item-link').click(function () {
	let id = '' + $(this).attr('href');
	$('html, body').animate({scrollTop: $(id).offset()?.top}, 500, 'linear');
	return false;
})