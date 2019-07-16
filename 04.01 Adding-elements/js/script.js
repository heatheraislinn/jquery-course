$(function() {
    // Add child elements
    $("ul ul:first").append("<li>I'm going to be the last sub-item</li>");
    $("<li>I'm gonna be the last item</li>").appendTo("ul ul:last");

    $("ul ul:first").prepend("<li>I'm going to be the FIRST sub-item</li>");
    $("<li>HEY there!</li>").prependTo("ul ul:last");
    $("<h2>Heather Shar</h2>").prependTo("#content");

    // Add sibling elements
    $(".red-box").after("<div class='red-box'>Another RED</div>");
    $(".blue-box").before("<div class='blue-box'>Another BLUE</div>");

    $(".green-box").before(function() {
        return "<div class='green-box'>Another GREEN</div>"
    });
});