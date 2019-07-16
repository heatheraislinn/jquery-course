$(function() {
    // attr(), prop(), val()
    var specialLink = $("#link");
    console.log(specialLink.attr("href")); // /url
    console.log(specialLink.attr("title")); // An amazing link
    specialLink.attr("href", "http://something.com");

    var checkbox = $("input:checkbox");
    console.log(checkbox.prop("checked")); // true
    console.log(checkbox.attr("checked")); // checked

    var textInput = $("input:text");
    console.log(textInput.val()); // Foo

    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val()); // 3
});