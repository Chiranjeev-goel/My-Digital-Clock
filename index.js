
function digitalClock(){

var date = new Date();
var hour =  date.getHours();
var min =  date.getMinutes();
var sec =  date.getSeconds();
//when time is 00:00:00
if(hour == 0){
    h = 12;
}
//when in 24 hour format time is more than 12 ex: 13:12:09
// if(hour > 12){
//     hour = hour - 12;
// }
// if time is less than 10 then we are adding "0" to make it look good ex: 8 == 08
// if(hour < 10){
//     hour = "0"+hour;
// }

// if(min < 10){
//     min = "0" + min;
// }
// if(sec < 10){
//     sec = "0" + sec;
// }

//ternary operator
//     condition    True    false
hour  = hour>12 ? 12 : hour;
hour = hour<10 ? "0"+hour : hour;
min = min<10 ? "0"+min : min;
sec = sec<10 ? "0"+sec : sec;



document.getElementById("mydigitalclock").innerHTML = hour+":"+min + ":" + sec;
//reload the page in every sec or 1000ms
// 1sec = 1000ms
    setTimeout(digitalClock , 1000);
}

digitalClock();