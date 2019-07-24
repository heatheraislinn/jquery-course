$(function() {
    // $("p").click(function() {
    //     $(this).slideUp(); // makes paragraphs slide up and out of sight
    // });
    // $("#content").append("<p>This wasn't here before!</p>"); // this p will not slide up

    // Solve this with delegated events
    $("#content").on("click", "p", function() {
        $(this).slideUp();
    });
    $("#content").append("<p>This wasn't here before!</p>");

    // Challenge
    $("body").on("mouseenter", "li", function() {
        $(this).css("color", "blue");
    });
});