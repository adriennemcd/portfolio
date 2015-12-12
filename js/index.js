'use strict'

// Toggle menu in mobile site
$('.menu-icon').click(function(){
	$('.trigger').toggle();
	$('.menu-icon').css('width', '100%');
});

// Add masonry
$('.catbloc').masonry({
  'itemSelector': '.posted',
  'transitionDuration': '1.0s'
});
