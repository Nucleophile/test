(function($) {
	$(function() {
		// var mainNav = $('#main-nav'),
		//     mainNavTimer;
		// mainNav.on({
		// 	mouseenter: function() {
		// 		mainNavTimer = setTimeout(function() {
		// 			mainNav.addClass('active');
		// 		}, 200);
		// 	},
		// 	mouseleave: function() {
		// 		mainNav.removeClass('active');
		// 		clearTimeout(mainNavTimer);
		// 	}
		// });

		//Sliders
		$(".main-slider").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn'
			// animateOut: 'fadeOutRight',
			// animateIn: 'fadeInRight',
		});
		$('.trading-ideas-slider').owlCarousel({
			items: 1
		});
		var sliderBlocks = $('.trading-ideas, .mr-products, .dc-tv'),
		    NextBtns = sliderBlocks.find('.owl-next'),
		    PrevBtns = sliderBlocks.find('.owl-prev');
		NextBtns.on('click', function() {
			$(this).parents('.owl-carousel-group').find('.owl-carousel').trigger('next.owl.carousel');
		});
		PrevBtns.on('click', function() {
			$(this).parents('.owl-carousel-group').find('.owl-carousel').trigger('prev.owl.carousel');
		});
		$('.mr-product-slider').owlCarousel({
			margin: 30,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 3
				},
				992 : {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		$('.dc-tv-slider').owlCarousel({
			margin: 30,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 3
				},
				992 : {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});

		//Custom scrollbars
		$(".custom-scroll").mCustomScrollbar({
			axis: 'y',
			scrollbarPosition: 'outside',
			autoHideScrollbar: true
		});

		//Mob menu
		var menuItems = $('.mob-menu-item');
		menuItems.on('click', function(e) {
			e.preventDefault();
			$(this).next().slideDown();
		});
	});

	$(window).on('load', function() {
		var navBlock = $('.main-nav-block'),
		    navBlockTop = navBlock.offset().top,
		    prevNavBlock = $('.main-nav-block').prev();
		$(window).scroll(function() {
	        if ($(window).scrollTop() > navBlockTop) {
	            if (!navBlock.hasClass('fixed')) {
	                navBlock.addClass('fixed');
	                prevNavBlock.css('padding-bottom',navBlock.outerHeight(true));
	            }
	        } else {
	            navBlock.removeClass('fixed');
	            prevNavBlock.css('padding-bottom','0');
	        }
	    });
	});
})(jQuery)