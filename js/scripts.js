$(function (){
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-button").click(function() {
        if ($("#carousel-button span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carousel-button span").removeClass("fa-pause").addClass("fa-play");
        } else {
            $("#mycarousel").carousel("cycle");
            $("#carousel-button span").removeClass("fa-play").addClass("fa-pause");
        }
    });
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("toggle");
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal("toggle");
    });
});