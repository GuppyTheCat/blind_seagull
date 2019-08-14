$(document).ready(function() {
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
        if (parent.attr("id") == "discography-popup") {
            if (parent.css("display") == "flex") {
                window.open($(this).attr("data-link"));
            }
        } else {
            window.open($(this).attr("data-link"));
        }
    });
});