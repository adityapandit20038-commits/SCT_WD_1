let hr=0;
let min=0;
let sec=0;
let ms=0;

let timer=null;

let lapCount=1;

const display=document.getElementById("display");

function stopwatch(){

ms++;

if(ms==100){

sec++;
ms=0;

}

if(sec==60){

min++;
sec=0;

}

if(min==60){

hr++;
min=0;

}

let h=String(hr).padStart(2,'0');

let m=String(min).padStart(2,'0');

let s=String(sec).padStart(2,'0');

let milli=String(ms).padStart(3,'0');

display.innerHTML=`${h}:${m}:${s}:${milli}`;

}

document.getElementById("start").onclick=function(){

if(timer!=null)return;

timer=setInterval(stopwatch,10);

}

document.getElementById("pause").onclick=function(){

clearInterval(timer);

timer=null;

}

document.getElementById("reset").onclick=function(){

clearInterval(timer);

timer=null;

hr=0;

min=0;

sec=0;

ms=0;

lapCount=1;

display.innerHTML="00:00:00:000";

document.getElementById("laps").innerHTML="";

}

document.getElementById("lap").onclick=function(){

if(timer==null)return;

let lap=document.createElement("div");

lap.className="lap";

lap.innerHTML=`🏁 Lap ${lapCount} : ${display.innerHTML}`;

document.getElementById("laps").prepend(lap);

lapCount++;

}