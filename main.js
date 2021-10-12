
let topos = document.querySelectorAll("#topo");
let agujeros = document.querySelector(".container");
let endTitle = document.getElementById("container-endTitle");
let textEnd = document.getElementById("endTitle");
let timeText = "GAME OVER - Time is up"

let contador = 0;


function timeOut(){
setTimeout(function(){
    agujeros.style.display = 'none';
    document.getElementById("endTitle").innerHTML = timeText;
    },30000);
}
timeOut();

;

// COPIADO COMPLETAMENTE
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var segundos = 60 * 0.49,
        display = document.querySelector('#crono');
    startTimer(segundos, display);
};

// HASTA AQUI



function generate(){

    let random = topos[Math.floor(Math.random() * topos.length)];
    random.style.visibility='visible';
}
let aleatorio = setInterval(generate, 1000);

function byeTopo(){
    let random = topos[Math.floor(Math.random() * topos.length)];
    random.style.visibility='hidden';
}

setInterval(byeTopo, 500);

function press(){
       increment(++contador)
}

function reset(){
    contador = 0;
    agujeros.style.display = 'flex';
    endTitle.style.display = 'none';
    textEnd.style.display = 'none';
    timeOut();
    increment(contador);
}

function increment(val){
    document.getElementById("points").innerHTML = val;
}



