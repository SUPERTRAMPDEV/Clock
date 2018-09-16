'use strict'

window.addEventListener('load',()=>{

var clock = document.querySelector("#clock");

setHour(clock);

setInterval(()=>{
setHour(clock);
},1000);


function setHour(t_clock) {
	var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    
    if(hours < 10)
    	hours = "0" + hours.toString();
    else if(mins < 10)
    	mins = "0" + mins.toString();
    else if(secs < 10)
    secs = "0" + secs.toString();


    var actual_time = `${hours}:${mins}:${secs}`;

    t_clock.innerHTML = actual_time;
    
    document.title = actual_time;
   }


});



