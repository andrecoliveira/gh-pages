(function ($) {

    "use strict";

        var date = new Date();
        var hour = date.getHours();
        var year = date.getFullYear();
        //var hour = 13;
        var greetings = document.getElementById('greetings');
        var credits = document.getElementById('credits');


        if (hour >= 18 && hour <= 23 ) {
          greetings.innerHTML = 'It was a pleasure, have a good night.';
          credits.innerHTML = '<a href="https://unsplash.com/photos/VPCCcddR1DY" target="_blank">Photo by Ethan Ou on Unsplash</a>';
          $("#home").addClass("night");

        } else if (hour >= 0 && hour <= 4) {
          greetings.innerHTML = 'It was a pleasure, have a good night.';
          credits.innerHTML = '<a href="https://unsplash.com/photos/VPCCcddR1DY" target="_blank">Photo by Ethan Ou on Unsplash</a>';
          $("#home").addClass("night");

        } else if (hour >= 5 && hour <= 12) {
          greetings.innerHTML = 'It was a pleasure, have a good morning.';
          credits.innerHTML = '<a href="https://unsplash.com/photos/4rIM6TkmOpQ" target="_blank">Photo by Josh Withers on Unsplash</a>';
          $("#home").addClass("morning");
          
        } else if (hour >= 13 && hour <= 17) {
          greetings.innerHTML = 'It was a pleasure, have a good afternoon.';
          credits.innerHTML = '<a href="https://unsplash.com/photos/iOn0T8HpsfU" target="_blank">Photo by Asif Aman on Unsplash</a>';
          $("#home").addClass("afternoon");
        }

        $('#copyright').append('© ' + year + ' - André Oliveira');

        //Navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        // Parallax Js
        function initParallax() {
          $('#home').parallax("50%", 20);
          $('#about').parallax("50%", 50);
          $('#skills').parallax("50%", 10);
          $('#experience').parallax("50%", 40);
          $('#education').parallax("50%", 50);
          }
        initParallax();


        // Counter
        jQuery('.counter-item').appear(function() {
        jQuery('.counter-number').countTo();
        jQuery(this).addClass('funcionando');
          console.log('funcionando');
        });


        // Smoothscroll js
        $(function() {
          $('#home a, .custom-navbar a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });  


        // WOW Animation js
        new WOW({ mobile: false }).init();

})(jQuery);
