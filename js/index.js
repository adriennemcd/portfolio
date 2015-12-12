'use strict'

$(document).ready(function() {
    // run test on page load and window resize
    checkSize();
    $(window).resize(checkSize);
});

//Check whether the window is tablet or mobile based on nav icon visibility
//Allows nav to be visible when window is resized large, even with toggling on smaller screens
function checkSize(){
    if ($(".menu-icon").css('display') == 'none'){
    	$('.trigger').css('display', 'block');
    } else {
    	$('.trigger').css('display', 'none');
    }
}

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
