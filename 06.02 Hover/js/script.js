$(function() {
    // :hover in CSS
    $("#btn-hover").hover(function() {
        alert("Button was hovered!");
    });

    $(".green-box").hover(function() {
        $(this).text("I was hovered");
    });
});