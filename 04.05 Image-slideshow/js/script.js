$(function() {
    var galleryImage = $(".gallery").find("img").first();
    var images = [
        "images/laptop-mobile_small.jpg",
        "images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg",
    ];
     
    var i = 0;
    setInterval(() => {
       i = (i + 1) % images.length; // 0, 1, 2, 0, 1, 2...
       galleryImage.fadeOut(function() {
            $(this).attr("src", images[i]);
            $(this).fadeIn();
       });
    }, 2000);
});