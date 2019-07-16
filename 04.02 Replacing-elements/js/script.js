$(function() {
    $("li").replaceWith("<li>Replaced</li>");

    $("p:first").replaceWith(function() {
        return "<p>What happened?!</p>"
    });

    var mainHeader = $("h1");
    $("h2").replaceWith(mainHeader);

    $(".red-box, .blue-box").replaceWith("<div class='green-box'>Oh No!</div>");

    $("input").replaceAll("<div><p>Haha!</p></div>");
});