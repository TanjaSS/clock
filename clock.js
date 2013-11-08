function setHours(time) {
    var hours = time.getHours();
    $("#hours").html(hours);
}

function setMinutes(time) {
    var minutes = time.getMinutes();
    $("#minutes").html(minutes);
}

function setSeconds(time) {
    var seconds = time.getSeconds();
    var angle = 360 / 60 * seconds;
    var rotate = "rotate(" + angle + "deg)";
    $("#seconds").html(seconds);
    $(".spinner").css({
        "-moz-transform": rotate,
        "-webkit-transform": rotate,
        "transform": rotate
    });
    
    if(angle < 180) {
        $(".filler").css("opacity", "0");
        $(".mask").css("opacity", "1");
    } else {
        $(".filler").css("opacity", "1");
        $(".mask").css("opacity", "0");
    }    
}

function setTime() {
    var time = new Date();
    setHours(time);
    setMinutes(time);
    setSeconds(time);
}

$(function() {
    window.setInterval(setTime, 1000);
});