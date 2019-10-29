$(document).ready(function(){

      var $burger = $(".burger");
      $burger.on("click", function() {
          $burger.toggleClass("active");
          $('.nav-mobile').toggleClass('active');
          $('body').toggleClass('__noscroll');
      });
})
