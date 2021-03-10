//alert("working")

//Takes selected die as input and rolls a new number
function diceRoller(die){ 
    var randomNumber = Math.floor(Math.random() * 6) + 1; // returns a random integer from 1 to 6
    var randomDiceImage = "images/dice" + randomNumber + ".png"; //
    document.querySelectorAll("img")[die].setAttribute("src", randomDiceImage); //replace image of the die with new one
    return randomNumber; //returns the random nmber generated
}

var randomNumber1 = diceRoller(0); //rolls player 1's die
var randomNumber2 = diceRoller(1); //rolls player 2's die

//Set Title text to show who won
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}