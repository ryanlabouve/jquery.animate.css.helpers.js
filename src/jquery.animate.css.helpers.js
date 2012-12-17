/*
 * jquery.animate.css.helpers.js
 * https://github.com/ryanlabouve/jquery.animate.css.helpers.js
 *
 * Copyright (c) 2012 Ryan LaBouve
 * Licensed under the MIT license.
 */

;(function($, window, document, undefined) {

  var defaults = {
    animation_show_class : "animated bounceIn",
    animation_show_duration: 1000,
    animation_hide_class : "animated bounceOut",
    animation_hide_duration: 1000,
    animation_wait_duration: 1500,
    hide_css_class: "hide",
    between_animation_duration: 100

  };

  // I know I know... I don't care... I'm tacking on 4 jquery functions
  
  // Can I abstract this to $.fn.css_transition()?
  $.fn.css_show = function(options) {
    var options = $.extend( {}, defaults, options );

    var counter = 0;

    return this.each(function() {
      var el = this;

      // Call next animation in selection chain (after specified wait)
      window.setTimeout( function() {
        // Add Animation CSS and Remove any Visibility Hiding CSS
        $(el).removeClass(options['hide_css_class']);
        $(el).addClass(options['animation_show_class']);

        // After animation is done, remove class
        window.setTimeout( function() {
          $(el).removeClass(options['animation_show_class']);
        }, options['animation_show_duration']);

      }, options['between_animation_duration'] * counter);

      // Increase counter to determine wait period of next animation
      counter += 1;
    });
  };


  $.fn.css_hide = function(options) {
    // var options = $.extend( {}, defaults, options );
    // return this.each(function() {
    //   $(this).html('CSS Hide');
    //   $(this).addClass(options['hide_css_class']);
    // });
    var options = $.extend( {}, defaults, options );

    var counter = 0;

    return this.each(function() {
      var el = this;

      // Call next animation in selection chain (after specified wait)
      window.setTimeout( function() {
        // Add Animation CSS and Remove any Visibility Hiding CSS
        $(el).addClass(options['animation_hide_class']);

        // After animation is done, remove class
        window.setTimeout( function() {
          $(el).addClass(options['hide_css_class']);
          $(el).removeClass(options['animation_hide_class']);
        }, options['animation_hide_duration']);

      }, options['between_animation_duration'] * counter);

      // Increase counter to determine wait period of next animation
      counter += 1;
    });
  };

  $.fn.css_show_and_hide = function(options) {
    return this.each(function() {
      $(this).html('Css Show and Hide');
    });

  }

  $.fn.css_hide_and_show = function(options) {
    return this.each(function() {
      $(this).html('Showing CSS');
    });
  }

}(jQuery, window, document, undefined));
