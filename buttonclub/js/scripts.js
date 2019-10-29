$(document).ready(function(){

// Custom drop down

$(".toggle").click(function() {
  $(".submenu-desktop").toggleClass("__show");
});




      var defaultBorderColor = '#292929'
      var defaultTextColor = '#292929'
      var defaultBackgroundColor = '#292929'
      var ghostBg = 'none'
      var defaultAnimColor = '#F1C40F'


      $("#ghostBg").click(function() {
        $(".button").toggleClass("__ghost");
      });




     var html = document.getElementsByClassName("copyHtml");

     for (var i = 0; i < html.length; i++) {
         console.log('hello world')
         html[i].addEventListener('click', copyText, false);
     }

     function copyText(){
       console.log(this.nextSibling.nextSibling.innerHTML)
       this.nextSibling.nextSibling.select();
       document.execCommand("Copy");
       alert("Copied to clipboard!");
     };

     var css = document.getElementsByClassName("copyCss");

     for (var i = 0; i < css.length; i++) {
         console.log('hello world')
         css[i].addEventListener('click', copyText, false);
     }

     function copyText2(){
       console.log(this.nextSibling.nextSibling.innerHTML)
       this.nextSibling.nextSibling.select();
       document.execCommand("Copy");
       alert("Copied to clipboard!");
     };









      var $burger = $(".burger");
      $burger.on("click", function() {
          $burger.toggleClass("active");
          $('.nav-mobile').toggleClass('active');
          $('body').toggleClass('__noscroll');
      });




      var borderColor = $('#borderPicker')
      $("#borderPicker").val(defaultBorderColor);
      $(".button").css("border-color", borderColor.val());
      borderColor.change(function(){
          console.log(borderColor.val());
          $(".button").css("border-color", borderColor.val());
      });

      var textColor = $('#textPicker')
      $("#textPicker").val(defaultTextColor);
      $(".button").css("color", textColor.val());
      textColor.change(function(){
          console.log(textColor.val());
          $(".button").css("color", textColor.val());
      });

      var backgroundColor = $('#backgroundPicker')
      $("#backgroundPicker").val(defaultBackgroundColor);
      $(".button").css("background-color", backgroundColor.val());
      backgroundColor.change(function(){
          console.log(backgroundColor.val());
          $(".button").css("background-color", backgroundColor.val());
      });

      // var animColor = $('#animPicker')
      // $(".btnBg").css("background-color", animColor.val());
      // animColor.change(function(){
      //     console.log(animColor.val());
      //     $(".btnBg").css("background-color", animColor.val());
      // });

      var animColor = $('#animPicker')
      $("#animPicker").val(defaultAnimColor);
      getComputedStyle(document.documentElement).getPropertyValue('--bg');
            document.documentElement.style.setProperty('--bg', defaultAnimColor);
      $('#animPicker').change(function(){
          document.documentElement.style.setProperty('--bg', $('#animPicker').val());
      });




})
