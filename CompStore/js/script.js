const days_page = document.querySelector(".timer .days-left"),
      hours_page = document.querySelector(".timer .hours-left"),
      minutes_page = document.querySelector(".timer .minutes-left"),
      seconds_page = document.querySelector(".timer .seconds-left");

function timer () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days_page.innerHTML = days;
    hours_page.innerHTML = hours;
    minutes_page.innerHTML = minutes;
    seconds_page.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        days_page.innerHTML = 0;
        hours_page.innerHTML = 0;
        minutes_page.innerHTML = 0;
        seconds_page.innerHTML = 0;

    }
}

var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
timer();
var x = setInterval(timer, 1000);