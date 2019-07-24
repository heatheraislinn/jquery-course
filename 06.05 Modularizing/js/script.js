$(function() {

    function logEvent() {
        console.log("Mouse was clicked or key was pressed");
    }

    $("html").on("click keydown", logEvent);

    // Challenge
    var images = [
        "images/laptop-mobile_small.jpg",
        "images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg",
    ];
    var i = 0;

    function changeImage() {
        i = (i + 1) % images.length;
        $(this).fadeOut(function () {
            $(this).attr("src", images[i]).fadeIn();
        });
    }

    $(".gallery").find("img").on("click", changeImage);
});