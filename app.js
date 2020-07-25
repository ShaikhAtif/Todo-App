var min = 0;
var sec = 0;
var miliSec = 0;
var timer;

function Timer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60)  {
                sec = 0;
                min++;
            }
        }
    }
    else{
        miliSec = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}


function begin() {
    document.getElementById("begin").disabled = true;
    timer = setInterval(Timer, 10);
}

function stop() {
    document.getElementById("begin").disabled = false;
    clearInterval(timer);
}

function reset() {
    stop();
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}