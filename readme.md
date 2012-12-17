# Animate.css jQuery Helpers

## IN DEVELOPMENT 

  Bugs: 

  - Susceptible atomic click (May need to prevent via doTimeOut)

  - show_and_hidd and hide_and_show not implemented

  - No testing


Orchestrate Animate.css and jQuery togetherness.

- Reusable Transitions

- Apply animations in sequence!

Just go look [at some demos](#)

## Quickstart Guide

1. Add CSS Dependencies

```html
<head>
...
<!-- Animate.css: https://github.com/daneden/animate.css -->
<link rel="stylesheet" href="animate.css">

<!-- make sure you have a hide class defined -->
<style>
 .hide { opacity: 0; }
 
  /* The definition of this may depend on your use. Ex: */
  /* .hide { display: none; } */
</style>
```

2. Add Javascript Dependencies

```html
<!-- jQuery - ~> 1.8.3 | http://jquery.com/download/ -->
<script src="jquery.js"></script>

<!-- jQuery - doTimeout : https://github.com/cowboy/jquery-dotimeout -->

<!-- Plugin -->
<script src="dist/jquery.animate.css.helpers.js.min.js"></script>

```

3. Start Using

```html
<script>
jQuery(function($) {
  $(".el").css_show(); // show all .el's when page loads

  // Hide them all when button is clicked
  $("button").on("click", function() {
    $(".el").css_hide();
  });
});
</script>
```

## Documentation

### css_show()

_(Coming soon)_

### css_hide()

_(Coming soon)_

### css_show_and_hide()

_(Coming soon)_

### css_hide_and_show()

_(Coming soon)_

## Examples

_(Coming soon)_

## Release History

_(Nothing yet)_
