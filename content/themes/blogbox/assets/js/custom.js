/**
 * Main JS file for Scriptor behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $('.entry-content').fitVids();

        $('#menu-toggle').click(function(){
            var menuToggle = $(this),
                menu = $('.nav-menu');
            if ( menuToggle.hasClass('icon-close') ) {
                menu.slideUp();
                menuToggle.removeClass('icon-close').addClass('icon-list');
            } else {
                menu.slideDown();
                menuToggle.addClass('icon-close').removeClass('icon-list');
            }
        });
        $(window).bind('resize orientationchange', function() {
            if ( $('#menu-toggle').is(':hidden') ) {
                $('#menu-toggle').removeClass('icon-close').addClass('icon-list');
                $('.nav-menu').removeAttr('style');
            }
        });

        $('#jump-top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({'scrollTop': 0});
        });

    });
}(jQuery));
