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
    	//console.log($(this).attr("data-link"));
    	window.open($(this).attr("data-link"));
    	return false;
    });
});