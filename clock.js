$(function() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
});