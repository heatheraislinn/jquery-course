$(function() {
    var blueBox = $(".blue-box");
    blueBox.mouseenter(function() {
        $(this).stop().fadeTo(500, 0.7);
    });
    blueBox.mouseleave(function() {
        $(this).stop().fadeTo(500, 1);
    });

    // hover(handlerIn, handlerOut)
    var redBox = $(".red-box");
    redBox.hover(function() {
        $(this).stop().fadeTo(500, 0.5);
    }, function() {
        $(this).stop().fadeTo(500, 1);
    });
});