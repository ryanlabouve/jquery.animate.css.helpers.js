/*
 * jquery.animate.css.helpers.js
 * https://github.com/ryanlabouve/jquery.animate.css.helpers.js
 *
 * Copyright (c) 2012 Ryan LaBouve
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
