const clock = document.querySelector("h2#clock")

function getClock(){
    console.dare = new Date();
    clock.innertext = '${date.getHours()} :${date.getMinutes()}:${date.getSeconds()}';

}

getClock();
setInterval(getClock, 1000)
