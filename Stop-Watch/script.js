let [seconds,minutes,hours] =[0,0,0];
let lap = document.getElementById("lap");
let displayTime =document.getElementById("displayTime");
let timer =null;
function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
   let h = hours<10 ?"0"+hours:hours;
   let s = seconds<10 ?"0"+seconds:seconds;
   let m = minutes<10 ?"0"+minutes:minutes;
    displayTime.innerHTML = h+":"+m+":"+s;
}

function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,1000);
}
function watchStop(){
    clearInterval(timer);
    timer =null;
}
function watchRest(){
    clearInterval(timer);
    [seconds,minutes,hours] =[0,0,0];
    displayTime.innerHTML="00:00:00";
    lap.innerHTML="";
}
