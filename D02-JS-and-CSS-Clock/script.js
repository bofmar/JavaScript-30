console.log("This works");

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    console.log(minutes);
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    console.log(hours);
    const hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //prevent jeetering when the hand reaches 0 degrees
    (seconds === 0)? secondHand.style.transitionDuration = "0s": transitionDuration = "0.05s";

    (minutes === 0)? minuteHand.style.transitionDuration = "0s": transitionDuration = "0.05s";

    (hours === 0)? hourHand.style.transitionDuration = "0s": transitionDuration = "0.05s";
    
}

setInterval(setDate, 1000);