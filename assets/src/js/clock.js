$(function() {    

    const svgClock = document.querySelector("#clock55");
    if (svgClock !== null) {
        setInterval(function() {        
            tick();
        }, 1000);
    } 
    
    tickNew();
});

const tickNew = function() {
    const svgHours = document.querySelector("#hours"),
        svgMinutes = document.querySelector("#minutes"),
        svgSeconds = document.querySelector("#seconds");

    let dt = new Date(),
    hours      = dt.getHours(),
    minutes    = dt.getMinutes(),
    seconds    = dt.getSeconds(),
    degSeconds = 180 + 360/60 * seconds,
    degMinutes = 180 + 360/60 * minutes,
    degHours   = 180 + 360/12 * ( hours % 12 ) + degMinutes/60;    
    
    const degStart = 50;
    const maxValue = 50;

    seconds = 50;
    degSeconds = degStart + (360 - degStart*2)/maxValue * seconds;

    svgHours.setAttribute('transform',`translate(50,50) rotate(${degHours} 0 0)`);
    svgMinutes.setAttribute('transform',`translate(50,50) rotate(${degMinutes} 0 0)`);
    svgSeconds.setAttribute('transform',`translate(50,50) rotate(${degSeconds} 0 0)`);    

    console.log(degSeconds);
}

const tick = function() {
    const svgHours = document.querySelector("#hours"),
        svgMinutes = document.querySelector("#minutes"),
        svgSeconds = document.querySelector("#seconds");

    let dt = new Date(),
    hours      = dt.getHours(),
    minutes    = dt.getMinutes(),
    seconds    = dt.getSeconds(),
    degSeconds = 180 + 360/60 * seconds,
    degMinutes = 180 + 360/60 * minutes,
    degHours   = 180 + 360/12 * ( hours % 12 ) + degMinutes/60;
    

    svgHours.setAttribute('transform',`translate(50,50) rotate(${degHours} 0 0)`);
    svgMinutes.setAttribute('transform',`translate(50,50) rotate(${degMinutes} 0 0)`);
    svgSeconds.setAttribute('transform',`translate(50,50) rotate(${degSeconds} 0 0)`);

    //svgHours.setAttribute('transform',`translate(18,18) rotate(${degHours} 0 0)`);
    //svgMinutes.setAttribute('transform',`translate(18,18) rotate(${degMinutes} 0 0)`);
    //svgSeconds.setAttribute('transform',`translate(18,18) rotate(${degSeconds} 0 0)`);

    //console.clear();
    console.log(dt.toLocaleTimeString());
}