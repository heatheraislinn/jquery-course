$(function() {
    $("li").remove();
    $("form").children().not("input:text, textarea, br").remove();

    var detachedParagraph = $("p:first").detach();
    $("#content").append(detachedParagraph);

    $(".red-box, .green-box").empty();
});