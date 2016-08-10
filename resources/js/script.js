$(document).ready(function(){
    
    /* Navigation scroll */
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
        /* Mobile Navigation */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');

        nav.slideToggle(300);
    });
    
    $(window).resize(function(){

        var nav = $('.js--main-nav');

        var icon = $('.js--nav-icon i');

        if ($(window).width() > 699){

        nav.css("display", "block");

        } else {

        nav.css("display", "none");

        icon.addClass('ion-navicon-round');
            
        }

    });
});

