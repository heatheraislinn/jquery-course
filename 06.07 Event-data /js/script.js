$(function() {
    $("#btn-click").click({
        user: "Heather"
    }, function(event) {
        greetUser(event.data);
    });

    function greetUser(userdata) {
        username = userdata.user || "Anonymous";
        alert("Welcome back " + username + "!");
    }
});