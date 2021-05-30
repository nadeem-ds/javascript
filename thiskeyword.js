//this keyword
//
console.log(this);      //empthy scope

var game = "Cricket";

function myGame(){
    var player = "Nadeem";
    console.log(this);
}

myGame()