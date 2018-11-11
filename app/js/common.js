$(function() {


		$('#my-menu').mmenu({
			extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-left'],
			navbar: {
			title: '<img src="img/svg/logo.svg" alt="logo comfort">'
			}
		});

	//
	// var api = $("#my-menu").data( "mmenu" );

	


  var $windWidth = $(window).width();



  		var $menuItem = $('.nav_cnt > .menu_item');
  		$('.nav_cnt').append('<div class="hide_menu"></div>');
  		$('.nav_cnt').append('<div class="hide_menu1"></div>');
  		// $('.nav_cnt').append('<div class="hide_menu2"></div>');

  if ($windWidth >= 1920) {
     $('.blue_sect_dec').css('background-size', 'cover')
  } 

  if ($windWidth <= 1280) {
      $menuItem.slice(3).appendTo('.hide_menu');
  } 

  if ($windWidth <= 768) {
  		$menuItem.slice(0, 1).appendTo('.hide_menu');
  }

  if ($windWidth <= 570) {
  		$menuItem.slice(0).appendTo('.hide_menu');
  }

	var $main = $('.main-slider');

  $main.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      rows: 0,
      dots: true,
      customPaging: function(slider, i) {
          $(slider.$slides[i]).data();
          return '<button>' + '0' + (i + 1) + '</button>';
      },
      prevArrow: false,
      nextArrow: '<button type="button" class="slick-next"></button>',
      fade: true,
      cssEase: 'linear',
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000
  });

  $('.slider_detals').owlCarousel({
 		items: 1, 
 		nav: false
  });

  var owl = $('.owl-carousel');

	$('.slide_next').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.slide_prev').click(function() {
	    owl.trigger('prev.owl.carousel', [300]);
	})
	

});

$(window).on('load', function() {
		$('.loader-wrap').fadeOut();
});

