// setInterval(clock, 1000);

// const hourHand = document.querySelector('.hour');
// const minuteHand = document.querySelector('.minute');
// const secondHand = document.querySelector('.second');
 
// function clock() {
//     const currentDate = new Date();
//     const secondsRatio =currentDate.getSeconds() / 60;
//     const minutesRatio =currentDate.getMinutes() / 60;
//     const hoursRatio = currentDate.getHours() / 12;


// }

// function setRotation(element, rotationRatio) {
//     element.style.transform = 'rotate(rota';
// }



const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#mn');
const sec = document.querySelector('#sc');

let day =new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;


hr.style.transform = 'rotateZ(${(hh) + (mm/12)}deg)';
mn.style.transform = 'rotateZ(${mm}deg)';
sc.style.transform = 'rotateZ(${ss}deg)';
