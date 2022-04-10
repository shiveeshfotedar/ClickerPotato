let potatoes = 0 ;
let addPotato = document.getElementById('potato')
let increment = 1
let score = document.querySelector("#score")
let moneyValue = document.querySelector('#money')

let money = 0

addPotato.onmousedown = function(){
    addPotato.style.transform = "scale(0.9)"
}

addPotato.onmouseup = function(){
    addPotato.style.transform = "scale(1)"
}
function addPotatoes(base, adder){
    return base + adder
}

function sellPotatoes(base, adder){
    money = money + adder
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
    moneyValue.innerHTML = money
    console.debug(potatoes)
}

// Show the double clicker after some money. 


function buyDoubleClicker(){
    money = money - 100
    moneyValue.innerHTML = money
    increment = increment*2
}


