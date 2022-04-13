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
        if(base > 0){
            money = money + adder
            return base - adder
        }else{
            return 0
        }
    }
    
    function clickedPotato(){
        potatoes = addPotatoes(potatoes, increment)
        score.innerHTML = potatoes
        console.debug(potatoes)
        if(potatoes > 10000){
            alert(" No more potatoes to get")
            potatoes = 0 
            moneyValue = 0
            score.innerHTML = potatoes
        }
    }
    
    function soldPotato(){
        potatoes = sellPotatoes(potatoes, increment)
        score.innerHTML = potatoes
        moneyValue.innerHTML = money
        console.debug(potatoes)
    }
    
    // Show the double clicker after some money. 
    
    
    function buyDoubleClicker(){
        if(money > 99) {
            money = money - 100
            moneyValue.innerHTML = money
            increment = increment*2
            document.querySelector("#BuyDoubleClicker").style.display = "none"
        }
    }
    
    function buyTripleClicker(){
        if(money > 999){
            money = money - 1000
            moneyValue.innerHTML = money
            increment = increment*3
            document.querySelector("#BuyTripleClicker").style.display = "none"
        }
    }
    
    function buyTenClicker(){
        if(money > 9999){
            money = money - 100000
            moneyValue.innerHTML = money
            increment = increment*10
            document.querySelector("#BuyTenClicker").style.display = "none"
        }
    }




