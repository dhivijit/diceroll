var diceNum = Math.floor(Math.random() * 6) + 1;
console.log("The Dice is showing " + diceNum);
var diceSourceFile = "images/dice" + diceNum + ".png";
document.getElementById("dice").setAttribute("src", diceSourceFile);
document.getElementById("num").innerHTML = "The Dice shows " + diceNum;
