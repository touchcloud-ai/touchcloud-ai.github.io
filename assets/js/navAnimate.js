/* ===================================================================
 * Kreative 2.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    const cfg = {
                scrollDuration : 800, // smoothscroll duration
                mailChimpURL   : ''   // mailchimp url
                };

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    // const doc = document.documentElement;
    // doc.setAttribute('data-useragent', navigator.userAgent);



   /* Highlight the current section in the navigation bar
    * ------------------------------------------------------ */
    const ssWaypoints = function() {

        const $sections = $(".target-section");
        const $navigationLinks = $(".s-header__nav li a");

        $sections.waypoint( {

            handler: function(direction) {

                let $activeSection;

                $activeSection = $('section#' + this.element.id);

                if (direction === "up") $activeSection = $activeSection.prevAll(".target-section").first();

                let $activeLink = $('.s-header__nav li a[href="#' + $activeSection.attr("id") + '"]');

                $navigationLinks.parent().removeClass("current");
                $activeLink.parent().addClass("current");

            },

            offset: '25%'

        });
    };




   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssWaypoints();

    })();

})(jQuery);