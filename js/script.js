$(document).ready(function() {
    $(".discography-thumb").hover(
        function() {
            var item = $(this).children(".discography-popup");
            //$(this).children(".discography-popup").css("display","flex");
            item.css("display", "flex");
            item.animate({ opacity: 0.75 }, {
                duration: 0.1
            });
        },
        function() {
            var item = $(this).children(".discography-popup");
            //$(this).children(".discography-popup").css("display","none");
            item.animate({ opacity: 0, display: "none" }, {
                duration: 0.1
            });
        }
    );
    $(".fa-bandcamp").click(function() {
        console.log("bandcamp");
    });
});