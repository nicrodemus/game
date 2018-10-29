console.log("hello!")
var dadiera = $(".dadiera");
function launchingdice () {

// var dice1 = $(".dice1");
// var dice2 = $(".dice");
// var dice3 = $(".dice3");
// var dice4 = $(".dice4");
// var dice5 = $(".dice5");
// var dice6 = $(".dice6");



var classes = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6" ]

var randomDice = Math.floor(Math.random()* classes.length)
console.log(randomDice)
if(randomDice === 0){
  
  $(dadiera).removeClass( "dice2 dice3 dice4 dice5 dice6")
} 
if (randomDice === 1){
  console.log(classes[1])
  dadiera.addClass("dice1")
  $(dadiera).removeClass( "dice1 dice3 dice4 dice5 dice6")
} 

if (randomDice === 2){
  console.log(classes[2])
  $(dadiera).removeClass( "dice1 dice2 dice4 dice5 dice6")
} 

if (randomDice === 3){
  console.log(classes[3])
  $(dadiera).removeClass( "dice1 dice2 dice3 dice5 dice6")
} 

if (randomDice === 4){
  console.log(classes[4])
  $(dadiera).removeClass( "dice1 dice2 dice3 dice4 dice6")
}

if (randomDice === 5) {
  console.log(classes[5])
  $(dadiera).removeClass( "dice1 dice2 dice3 dice4 dice5")
}

var randomSelection = classes[randomDice];

dadiera.addClass(randomSelection);
}

$(".btn1").click(function(){
    launchingdice()
});