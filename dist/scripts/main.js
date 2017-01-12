;(function($){
	'use strict';

	$(window).on('load', function() {
		var slidesCount = $('#banner-slider .ba-slide').length;
		$('#banner-slider .ba-amount').text(slidesCount);

		$('#banner-slider').slick({
			slide: '.ba-slide',
			prevArrow: '#banner-slider .ba-slider__arrow--left',
			nextArrow: '#banner-slider .ba-slider__arrow--right',
			dots: true
		});

		updateCurrentSlide();
		
		$('#banner-slider').on('afterChange', function(e) {
			updateCurrentSlide();
		});

		$('#banner-slider .slick-dots li').each(function() {
			$(this).find('button').text( '0' + $(this).find('button').text() );
		});

		// shop sliders
		$('#ba-shop-big .ba-slider').slick({
			slide: '.ba-slide',
			arrows: false,
			asNavFor: '#ba-shop .ba-slider',
		});
		$('#ba-shop .ba-slider').slick({
			slide: '.ba-slide',
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '#ba-shop-big .ba-slider',
			centerMode: true 
		});	

		// smooth scroll
		$('a[href*="#"]').on('click', function(event) {
			event.preventDefault();
			var where = $(this).attr('href');
			$('body, html').animate({
				scrollTop: $(where).offset().top, 
			}, 600); 
		});
	});

	function updateCurrentSlide() {
		var currentSlideIndex = $('#banner-slider .slick-current').data('slick-index') + 1;
		$('#banner-slider .ba-current-position').text(currentSlideIndex);
	}

})(jQuery);