'use strict'

// make sure the grid items have equal height
$('.posts__item').matchHeight();

// trigger grid item hover styles if tabbing through site
$('.posts__link').on('focus focusout', function(e){
  $('.posts__link').each(function(i, item) {
      var parent = $(item).parents('.posts__item');
      document.activeElement === item ? $(parent).addClass('hover') : $(parent).removeClass('hover');
  });
})




