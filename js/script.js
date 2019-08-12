$(document).ready(function() {
    $(".discography-thumb").hover(
        function() {
            var item = $(this).children(".discography-popup");
            //$(this).children(".discography-popup").css("display","flex");
            item.css("display", "flex");
            item.animate({ opacity: 0.85 });
        },
        function() {
            var item = $(this).children(".discography-popup");
            //$(this).children(".discography-popup").css("display","none");
            item.animate({ opacity: 0 }, { duration: 100 }, function() { item.css("display", "none") });
        }
    );
    $(".fa-vk").click(function() {
        console.log("vk");
    });
    $(".fa-bandcamp").click(function() {
        console.log("bandcamp");
    });
    $(".fa-soundcloud").click(function() {
        console.log("soundcloud");
    });
});