const clock = document.getElementById('clock')

// controls art based on defined intervals

// written as function and it's body , time in ms
setInterval(function (){
    let date = new Date();
clock.innerHTML= (date.toLocaleTimeString());
} , 1000);