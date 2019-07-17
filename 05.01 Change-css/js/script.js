$(function() {
    $(".gallery").css("display", "none"); // .hide()

    var redBox = $(".red-box");
    console.log(redBox.css("width")); // 80px
    console.log(redBox.width()); // 80

    redBox.css("background-color", "#AA7700");
    $("p:first").css("font-size", "18px");
    redBox.css("width", "+=20px");

    var properties = $("p:last").css(["font-size", "line-height", "color"]);
    console.log(properties);
    console.log(properties["font-size"]);
});