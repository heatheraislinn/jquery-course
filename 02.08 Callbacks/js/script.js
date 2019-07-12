// callback functions are called once the animation has finished

$(function() {
    $(".red-box").fadeTo(1000, 0, function() {
        alert("This is the callback: Animation finished.");
    });
    $(".green-box").fadeTo(1000, .5, function() {
        $(".green-box").animate({
            height: "50px",
            width: "50px"
        });
    });
});