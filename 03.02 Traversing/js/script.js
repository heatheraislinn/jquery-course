$(function() {
    // $("#list").find("li").css("background-color", "yellow");
    // $("#list").children("li").css("background-color", "yellow");
    // $("#list").parents("body").css("background-color", "yellow");
    // $("#list").parent().css("background-color", "yellow");
    $("#list").siblings(":header").css("background-color", "yellow");
    $("#list").prev().css("background-color", "blue");
    $("#list").next().css("background-color", "pink");
});