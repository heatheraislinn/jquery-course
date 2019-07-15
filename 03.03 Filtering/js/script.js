$(function() {
    // $("#list").find("li").filter(":even").css("background-color", "pink");
    // $("p").filter(function(index) {
    //     return index % 2 === 0;
    // }).css("background-color", "yellow");
    // $("li").first().css("background-color", "yellow");
    $("li").last().css("background-color", "pink");

    $("li").eq(2).css("background-color", "purple");

    $("li").not(":last").css("background-color", "lightgray");
});