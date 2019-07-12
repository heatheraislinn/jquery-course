$(function() {
    // fadeOut, fadeIn, fadeTo, fadeToggle
    $(".red-box").fadeOut("slow");
    $(".red-box").fadeIn("slow");

    $(".red-box").fadeTo(2000, 0.2);
    $(".green-box").fadeTo(2000, 0.5);
    $(".blue-box").fadeTo(2000, 0.8);

    $(".green-box").fadeToggle();
    $(".green-box").fadeToggle();
});