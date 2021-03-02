var secCount=0;
var minCount=0;
var hourCount=0;
var interval;
var time=0;

document.getElementById("timerDisplay").innerHTML=`${hourCount.toString().padStart(2,"0")}:${minCount.toString().padStart(2,"0")}:${secCount.toString().padStart(2,"0")}`;
document.getElementById("stop").disabled=true;
document.getElementById("pause").disabled=true;
function start(){
interval=setInterval(startCount,100);
document.getElementById("stop").disabled=false;
document.getElementById("pause").disabled=false;
document.getElementById("start").disabled=true;
}
function startCount(){
    time +=100;
    if(time===1000){
        secCount++;
        time=0;
    }
    if(secCount==60){
        minCount++;
        secCount=0;
    }if(minCount==60){
        hourCount++;
        minCount=0;
    }

    document.getElementById("timerDisplay").innerHTML=`${hourCount.toString().padStart(2,"0")}:${minCount.toString().padStart(2,"0")}:${secCount.toString().padStart(2,"0")}`;
  
}

function pause(){
    if(document.getElementById("pause").innerHTML=="pause"){
        clearInterval(window.interval);
        document.getElementById("pause").innerHTML="continue";
    }else{
        interval=setInterval(startCount,100);
        document.getElementById("start").disabled=true;
        document.getElementById("pause").innerHTML="pause";
    }
    
}
function stop(){
    clearInterval(window.interval);
    secCount=0;
    minCount=0;
    hourCount=0;
    
    document.getElementById("timerDisplay").innerHTML=`${hourCount.toString().padStart(2,"0")}:${minCount.toString().padStart(2,"0")}:${secCount.toString().padStart(2,"0")}`;
    document.getElementById("pause").innerHTML="pause"
    document.getElementById("stop").disabled=true;
    document.getElementById("pause").disabled=true;
    document.getElementById("start").disabled=false;   
}