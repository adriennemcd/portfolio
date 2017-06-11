'use strict'


$(function() {
    $('.posts__item').matchHeight();
});

//Check whether the window is tablet or mobile based on nav icon visibility
//Allows nav to be visible when window is resized large, even with toggling on smaller screens
// function checkSize(){
//     if ($(".menu-icon").css('display') == 'none'){
//     	$('.trigger').css('display', 'block');
//     } else {
//     	$('.trigger').css('display', 'none');
//     }
// }

// // Toggle menu in mobile site
// $('.nav__icon').click(function(){
// 	$('.trigger').slideToggle();
// 	$('.menu-icon').css('width', '100%');
// });

// // Add masonry
// // var $grid = $('.catbloc').masonry({
// //   'itemSelector': '.posted',
// //   'transitionDuration': '1.0s'
// // });

// // // Refresh masonry when images are loaded
// // $('.catbloc').imagesLoaded( function() {
// //   $grid.masonry('layout');
// // });

