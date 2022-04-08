let potatoes = 0 ;
let addPotato = document.getElementById('potato')
let increment = 1
let score = document.querySelector("#score")

function addPotatoes(base, adder){
    return base + adder
}

function sellPotatoes(base, adder){
    return base - adder
}


function clickedPotato(){
    potatoes = addPotatoes(potatoes, increment)
    score.innerHTML = potatoes
    console.debug(potatoes)
}

function soldPotato(){
    potatoes = sellPotatoes(potatoes, increment)
    score.innerHTML = potatoes
    console.debug(potatoes)
}

addPotato.onmousedown = function(){
    addPotato.style.transform = "scale(0.8)"
}

addPotato.onmouseup = function(){
    addPotato.style.transform = "scale(1)"
}