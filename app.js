const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");
let timePage = document.querySelector(".time");

let time = 0;
var timerId = null;

function updateTime(){
    time++;
    //sets values for each part of stopwatch
    let minutes = Math.floor(time/6000);
    let seconds = Math.floor((time - (minutes*6000))/100);
    let ms = (time - (seconds * 100) - (minutes * 6000));

    //Creating two digit numbers
    if(ms < 10){
        ms = "0" + ms;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    //Updating html with timer
    timePage.innerHTML = `${minutes}:${seconds}:${ms}`;
}

//sets all buttons to "clickable" color
function resetButtons(){
    start.style.backgroundColor = "rgb(45, 117, 96)";
    pause.style.backgroundColor = "rgb(45, 117, 96)";
}

//Starts timer, as long as timer is inactive
start.addEventListener("click", function(){
    if(timerId == null){
        resetButtons();
        start.style.backgroundColor = "gray";
        timerId = setInterval(updateTime, 10);
    }
})

//pauses timer and sets timerId = null
pause.addEventListener("click", function(){
    resetButtons();
    pause.style.backgroundColor = "gray";
    timerId = clearInterval(timerId);
})

//resets all parts of the stopwatch
restart.addEventListener("click", function(){
    resetButtons();
    timerId = clearInterval(timerId);
    time = 0;
    timePage.innerHTML = "00:00:00";
})
