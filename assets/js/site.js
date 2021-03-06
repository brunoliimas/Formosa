$(function() {
	"use strict";
	var stickOnScroll;
	var header_top = $('.header-three-margin').height() - 96;
	//Header Option
	$('#header').addClass('normal');//Choose Here Class Name (normal or fixed or intelligent);

	$(window).scroll(function() {
		if ($('#header').length) {
			var scroll_t = $(window).scrollTop();
			if (header_top < scroll_t) {
				$('#header').addClass('bg_color');
			} else {
				$('#header').removeClass('bg_color');
			}
		}
		
		if(scroll_t == 0){
			$('#header').removeClass('bg_color');
		}
	})
	if ($('#owl-slider').length) {

		$("#owl-slider").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 3,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 2],
			itemsMobile : [600, 1]

		});
	}
	if ($('#owl-slider-clients').length) {

		$("#owl-slider-clients").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 6,
			itemsDesktop : [1199, 6],
			itemsDesktopSmall : [979, 6],
			itemsTablet : [768, 3]

		});
	}

	if ($('#owl-slider1').length) {

		$("#owl-slider1").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 3,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3]

		});
	}

	if ($('#owl-slider2').length) {

		$("#owl-slider2").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 6,
			itemsDesktop : [1199, 6],
			itemsDesktopSmall : [979, 6],
			itemsTablet : [768, 3]

		});
	}

	$('.nav ,.blog-paging-list,.blog-sidebar-paging-list').find('li').on('click', function() {
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
	});

	if ($(window).width() < 768) {
		$('.navbar-nav li').on('click', function() {
			$('.dropdown').slideUp();
			$(this).children('.dropdown').slideDown();

		});
	};

	// Svg implement
	jQuery('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if ( typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if ( typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

	//==============Map Function
	if (jQuery('#custom_map').length) {
		var initialize = function() {
			//function initialize() {
			var pos = new google.maps.LatLng(-37.813926, 145.023835);
			var mapProp = {
				center : pos,
				zoom : 16,
				scrollwheel : false,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			var marker = new google.maps.Marker({
				position : pos,
				map : map,
				draggable : false,

			});

			var map = new google.maps.Map(document.getElementById("custom_map"), mapProp);
			marker.setMap(map);
			

		}

		google.maps.event.addDomListener(window, 'load', initialize);

	};

	
	$(window).load(function() {
		$('.loader').delay(50).fadeOut();
		//=================Header Style function================
		if ($('#header').hasClass('fixed')) {
			$('#header').next().addClass('top-m');
		}
		if ($('#header').hasClass('intelligent')) {
			$('#header').next().addClass('top-m');
		};
	});

	var class_pr = $('body').attr('class');
	var headerHeight = $('#header').outerHeight();
	var st = $(window).scrollTop();
	stickOnScroll = function() {

		if ($('#header').hasClass("intelligent")) {

			$('#header').removeClass('normal');
			$('#header').next().addClass('top-m');
			var pos = $(window).scrollTop();

			if (pos > headerHeight) {
				if (pos > st) {
					$('#header').addClass('simple')
					$('#header.simple').removeClass('down');
					$('#header.simple').addClass('fixed up');

				} else {
					$('#header.simple').removeClass('up');
					$('#header.simple').addClass('fixed down');

				}
				st = pos;

			} else {
				$('#header.simple').removeClass('fixed down up simple');
			}
			if (pos == $(document).height() - $(window).height()) {
				$('#header.simple').removeClass('up');
				$('#header.simple').addClass('fixed down');
			}

		} else if ($('body').hasClass("fix")) {

			$('#header').next().addClass('top-m');
			$('#header').addClass('simple fixed');
			$('#header').removeClass('down up');
			$('#wrapper').css({
				paddingTop : 0
			});
		} else {

			$('#header.simple').removeClass('fixed down up simple');
			$('#header').addClass('normal');
			//$('.spacetop').removeClass('top-m');
			$('#wrapper').css({
				paddingTop : 0
			});
		}
	};
	stickOnScroll();
	$(window).scroll(function() {
		stickOnScroll();
	});

	// end for sticky header

});

