$(function() {
    $("#btn-click").click(function(event) {
        console.log(event);
        alert("Button was clicked!");
    });

    $(".red-box").click(function() {
        $(this).fadeTo(500, 0.5);
    });
});