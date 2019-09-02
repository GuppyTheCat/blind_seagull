$(document).ready(function() {

    //Changing youtube iframe size
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

    //Discography carousel
    $('.slick-discography').slick({
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //Resizing album-popup icons and labels
    $.fn.sizeChanged = function(handleFunction) {
        var element = this;
        var lastWidth = element.width();
        var lastHeight = element.height();

        setInterval(function() {
            if (lastWidth === element.width() && lastHeight === element.height())
                return;
            if (typeof(handleFunction) == 'function') {
                handleFunction({ width: lastWidth, height: lastHeight }, { width: element.width(), height: element.height() });
                lastWidth = element.width();
                lastHeight = element.height();
            }
        }, 100);
        return element;
    };

    var popup_width = $(".discography-popup").width();
    $(".discography-popup-label").css('font-size', popup_width / 10);
    $(".discography-popup-icons").css('font-size', popup_width / 7.5);

    $(window).on('resize', function() {
        if ($(".discography-popup").sizeChanged()) {
            var popup_width = $(".discography-popup").width();
            $(".discography-popup-label").css('font-size', popup_width / 10);
            $(".discography-popup-icons").css('font-size', popup_width / 7.5);
        }
    });

    //Hover on album thumb function
    $(".slick-discography-item").hover(
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

    //Header animation
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).scroll(function() {
        if ($("#top-header").isInViewport()) {
            $("#main-header").removeClass('scrolled');
        } else {
            $("#main-header").addClass('scrolled');
        }
    });

    //Navigation events
    $(".nav-link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });


});