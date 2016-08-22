$(document).ready(function() {

    "use strict"

    /* Navigation scroll while ignoring bootstrap carousel buttons */

    $(function() {
        $('a[href*=\\#]:not([href=\\#myCarousel])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // gif play on hover and pause on stopping the hover

    $('video').get(0).pause();
    $('video').get(1).pause();
    $('video').get(2).pause();
    $('video').get(3).pause();
    $('video').get(4).pause();
    var figure = $(".video").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
});
