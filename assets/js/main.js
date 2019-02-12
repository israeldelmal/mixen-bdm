// Navegación
$('.item-menu').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');
	if ($(window).width() > 1370) {
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top - 119
		}, 1000);
	} else if ($(window).width() < 440) {
		$('body > nav').removeClass('nav-active');
		$('body > button').removeClass('button-active');
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top - 59
		}, 1000);
	} else if ($(window).width() < 1370) {
		$('body > nav').removeClass('nav-active');
		$('body > button').removeClass('button-active');
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top
		}, 1000);
	}
});

$(window).scroll(function() {
	if ($(window).width() > 1370) {
		if ($(this).scrollTop() > 0) {
			$('body > nav').addClass('nav-white');
		} else {
			$('body > nav').removeClass('nav-white');
		}
	}
});

// Botón de navegación
$('body > button').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('button-active');
	$('body > nav').toggleClass('nav-active');
});