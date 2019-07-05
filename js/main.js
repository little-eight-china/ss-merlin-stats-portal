/* ===================================================================
 * Count - Main JS
 *
 * ------------------------------------------------------------------- */

(function ($) {

    "use strict";

    var $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    // svg fallback
    if (!Modernizr.svg) {
        $(".home-logo img").attr("src", "images/logo.png");
    }


    /* Preloader
     * -------------------------------------------------- */
    var ssPreloader = function () {

        $("html").addClass('ss-preload');

        $WIN.on('load', function () {

            // will first fade out the loading animation
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');

        });
    };

    /* load data
     * -------------------------------------------------- */
    var ssLoadData = function () {
        $.get("https://ss-merlin.iloli.li/stats", function (stats) {
            let totalUser = stats.reduce((a, b) => a + b.count, 0)
            let statsHtml = '<h3>ss-merlin statistics</h3>'
            for (let i = 0; i < stats.length; i++) {
                let version = stats[i].version
                let count = stats[i].count
                statsHtml += version + ': ' + count + (count > 1 ? 'users' : 'user')
            }
            $("#ss-merlin-statistics").html(statsHtml)
            $("#total-user").html(totalUser + ' <span>' + (totalUser > 1 ? 'users' : 'user') + '</span>')
        });
    };

    /* slick slider
     * ------------------------------------------------------ */
    var ssSlickSlider = function () {

        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });

    };


    /* placeholder plugin settings
     * ------------------------------------------------------ */
    var ssPlaceholder = function () {
        $('input, textarea, select').placeholder();
    };

    /* initialize
     * ------------------------------------------------------ */
    (function ssInit() {
        ssPreloader();
        ssSlickSlider();
        ssPlaceholder();
        ssLoadData();
    })();


})(jQuery);
