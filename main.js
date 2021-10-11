
let topos = document.querySelectorAll("#topo");


let contador = 0;








function generate(){

    let random = topos[Math.floor(Math.random() * topos.length)];
    random.style.visibility='visible';
}
let aleatorio = setInterval(generate, 500);

function byeTopo(){
    let random = topos[Math.floor(Math.random() * topos.length)];
    random.style.visibility='hidden';
}

setInterval(byeTopo, 100);

function press(){
       increment(++contador)
}

function increment(val){
    document.getElementById("points").innerHTML = val;
}


