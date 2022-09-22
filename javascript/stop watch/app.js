// button variables

let start = document.querySelector('#startStopbtn');
let restart = document.querySelector('#resetbtn');

// variables for time

let secs = 0;
let mins = 0;
let hrs = 0;

// variables for leading zeroes
let leadsecs = 0;
let leadmins = 0;
let leadhrs = 0;

// variables for timer status
let timerinterval = null;
let timerstatus = 'stopped';

function stopwatch(){
    secs++;

    if(secs===60){
        secs = 0;
        mins++;

        if(mins === 60){
            mins=0;
            hrs++;
        }
    }

    if(secs < 10){
        leadsecs = '0' + secs.toString();
    }
    else{
        leadsecs = secs
    }
    if(mins < 10){
        leadmins = '0' + mins.toString();
    }
    else{
        leadmins = mins
    }
    if(hrs < 10){
        leadhrs = '0' + hrs.toString();
    }
    else{
        leadhrs = hrs
    }


    let display = document.getElementById('timer').innerText = leadhrs + ':' + leadmins + ':' + leadsecs;
}



// window.setInterval(stopwatch, 1000);

start.addEventListener('click', function(){
    
    if(timerstatus ==='stopped'){
        timerinterval =window.setInterval(stopwatch, 1000);
        start.innerHTML = '<i class="bi bi-pause-fill" id="pause"></i>';
        timerstatus = 'started';
    } else {
        clearInterval(timerinterval);
        start.innerHTML = '<i class="bi bi-play" id="play"></i>';
        timerstatus = 'stopped';
    }
});

restart.addEventListener('click', function(){
    clearInterval(timerinterval);

    secs = 0;
    mins = 0;
    hrs = 0;

    document.getElementById('timer').innerText = '00:00:00';
    start.innerHTML = '<i class="bi bi-play" id="play"></i>';


});