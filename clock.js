function setHours(time) {
    var hours = time.getHours();
    var angle = 360 / 12 * hours;
    $("#hours .time").html(hours);
    setClockAngle("#hours", angle);
}

function setMinutes(time) {
    var minutes = time.getMinutes();
    var angle = 360 / 60 * minutes;
    $("#minutes .time").html(minutes);
    setClockAngle("#minutes", angle);
}

function setSeconds(time) {
    var seconds = time.getSeconds();
    var angle = 360 / 60 * seconds;
    $("#seconds .time").html(seconds);
    setClockAngle("#seconds", angle);
}

function setClockAngle(selector, angle) {
    var rotate = "rotate(" + angle + "deg)";
    var circle = $(selector);
    
    circle.find(".spinner").css({
        "-moz-transform": rotate,
        "-webkit-transform": rotate,
        "transform": rotate
    });
    
    if(angle < 180) {
        circle.find(".filler").css("opacity", "0");
        circle.find(".mask").css("opacity", "1");
    } else {
        circle.find(".filler").css("opacity", "1");
        circle.find(".mask").css("opacity", "0");
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