console.log("hello!");
$(".btn1").click(function(){
    card()
})


var cardA = $(".A");
var cardB = $(".B");
var cardC = $(".C"); 

var box = $(".card-box");
function card () {
    // $('.C').hide();
    // $('.B').hide();
    // $('.A').hide();
var cards = [cardA, cardB, cardC];

console.log(cards[0]);
var randomCard = Math.floor(Math.random()* cards.length);
if (randomCard === 0) {
    $('.A').show();
    $('.B').hide();
    $('.C').hide();
    console.log(cards[0])
} else if (randomCard === 1) {
    $('.A').hide();
    $('.B').show();
    $('.C').hide();
    console.log(cards[1])
} else {
    $('.A').hide();
    $('.B').hide();
    $('.C').show();
    console.log(cards[2])
}
var randomSelection = cards[randomCard];


// if (randomSelection.show("A")){
    
//     randomSelection.hide(" B C")
// }  else if (randomSelection.show("B")) {
//     randomSelection.hide("A C")
// } else {
//     randomSelection.hide("A B")
// }
$(randomSelection).show();
}

