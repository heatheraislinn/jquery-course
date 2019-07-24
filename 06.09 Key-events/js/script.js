$(function() {
    $("html").keydown(function(event) {
        console.log(event.which);
    });

    var arrowRight = 39;
    var arrowLeft = 37;
    $("html").keydown(function(event) {
        if (event.which === arrowRight) {
            $(".blue-box").stop().animate({
                marginLeft: "+=10px"
            }, 50);
        } else if (event.which === arrowLeft) {
            $(".blue-box").stop().animate({
                marginLeft: "-=10px"
            }, 50);
        }
    });
});