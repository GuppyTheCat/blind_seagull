$(document).ready(function() {
    var width = $(window).width();
    var height = $(window).height();
    $("iframe").each(function(index) {
        if (width >= 768) {
            $(this).attr({ width: 720, height: 405 });
        } else if (width >= 576 && width < 768) {
            $(this).attr({ width: 560, height: 315 });
        } else {
            $(this).attr({ width: 360, height: 205 });
        }
    });

    $(window).on('resize', function() {
        var width = $(window).width();
        var height = $(window).height();
        $("iframe").each(function(index) {
            if (width >= 768) {
                $(this).attr({ width: 720, height: 405 });
            } else if (width >= 576 && width < 768) {
                $(this).attr({ width: 540, height: 324 });
            } else if (width >= 512 && width < 576) {
                $(this).attr({ width: 450, height: 254 });
            } else {
                $(this).attr({ width: 360, height: 203 });
            }
        });
    });



    $(".discography-thumb").hover(
        function() {
            var item = $(this).children(".discography-popup");
            item.css("display", "flex");
            item.animate({ opacity: 0.85 }, { duration: 200 });
        },
        function() {
            var item = $(this).children(".discography-popup");
            item.animate({ opacity: 0 }, { duration: 200 }, function() { item.css("display", "none") });
        }
    );
    $("i").click(function() {
        var parent = $(this).parent().parent();
        if (parent.hasClass("discography-popup")) {
            if (parent.css("display") == "flex") {
                window.open($(this).attr("data-link"));
            }
        } else {
            window.open($(this).attr("data-link"));
        }
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };


    /*$(window).scroll(function() {
        if ($("#top-header").isInViewport()) {
            $("#main-header").css("top","75px");
        } else {
            $("#main-header").css("top","0");
        }
    });*/

    $(window).scroll(function() {
        if ($("#top-header").isInViewport()) {
            $("#main-header").removeClass('scrolled');
        } else {
            $("#main-header").addClass('scrolled');
        }
    });

    $(".nav-link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

});