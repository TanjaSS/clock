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
    $("#seconds").html(seconds);    
}

function setTime() {
    var time = new Date();
    setHours(time);
    setMinutes(time);
    setSeconds(time);
}

$(function() {
    setTime();
});