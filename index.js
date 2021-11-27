var readlineSync = require("readline-sync")
var username = readlineSync.question("whats ur name")
var score = 0

console.log("welcome "+username," to Sampath`s game`")

function play(question,answer) {
  var useranswer = readlineSync.question(question)
  if (useranswer === answer){
    score ++
    console.log("RIGHT",score)
  
  } else {
    score = score - 1;
    console.log("Dumb ass u r WRONG ur score ",score)
  }
}

play("How many minutes are there in a year?","5,25,600")
play("Which is the hardest substance on earth?","diamond")
play("Name the animal which can hold its breath for 6 days?","scorpion")
play("Which shopkeeper takes both goods as well as the price?","barber")
play("Which animal's milk is pink in colour?","hippopotamus")
play("Who are the founders of Google?","Larry Page and Sergey Brin")
play("what is faster than wvwn light?","darkness")
play("if god created every thing in universe then who created devil?","man")
play("what is oldest city in India ?","varanasi")
play("what is first programming language ?","fortran")
play("what is the name of first-ever computer game?","space war")
play("what is the name of world’s first computer programmer ?","Ada Lovelace")