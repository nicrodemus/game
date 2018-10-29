var canvas = document.querySelector(".my-canvas")

var myImg = document.querySelector(".google")
var gooseImg = new Image();
gooseImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png";
var ctx = canvas.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(15,15,1500,600);


//--------------------- background style -----------//


function drawBackground() {
    ctx.fillRect(0,0,1400, 800);
    ctx.fillStyle = "deepPink";


    ctx.beginPath();
ctx.arc(710, 310, 1, 0, 2 * Math.PI )
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.arc(710, 360 , 1,  0, 2 * Math.PI )
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.closePath();


// ctx.strokeStyle= "gold";
// ctx.fillRect(400, 20, 100, 50);
// ctx.fillRect(400, 75, 100, 50);



// ctx.fillRect(530, 20, 100, 50);
// ctx.fillRect(530, 75, 100, 50);

// ctx.fillRect(660, 20, 100, 50);
// ctx.fillRect(660, 75, 100, 50);

// ctx.fillRect(790, 20, 100, 50);
// ctx.fillRect(790, 75, 100, 50);

// ctx.fillRect(920, 20, 100, 50);
// ctx.fillRect(920, 75, 100, 50);
// //    first line //
// ctx.fillRect(400, 150, 100, 50);
// ctx.fillRect(400, 205, 100, 50);

// ctx.fillRect(530, 150, 100, 50);
// ctx.fillRect(530, 205, 100, 50);

// ctx.fillRect(660, 150, 100, 50);
// ctx.fillRect(660, 205, 100, 50);

// ctx.fillRect(920, 150, 100, 50);
// ctx.fillRect(920, 205, 100, 50);

// //--------- second line //

// ctx.fillRect(400, 275 , 100, 50);
// ctx.fillRect(400, 325 , 100, 50);

// ctx.fillRect(400, 285 , 100, 50);
// ctx.fillRect(400, 335 , 100, 50);

// ctx.fillRect(660, 285 , 100, 50);
// ctx.fillRect(660, 335 , 100, 50);

// ctx.fillRect(920, 285 , 100, 50);
// ctx.fillRect(920, 335 , 100, 50);
// //----------- third line//

// ctx.fillRect(400, 415 , 100, 50);
// ctx.fillRect(400, 470 , 100, 50);

// ctx.fillRect(920, 415 , 100, 50);
// ctx.fillRect(920, 470 , 100, 50);
// //------ fourth line -----

// ctx.fillRect(400, 545, 100, 50);
// ctx.fillRect(400, 598, 100, 50);

// ctx.fillRect(530, 545, 100, 50);
// ctx.fillRect(530, 598, 100, 50);

// ctx.fillRect(660, 545, 100, 50);
// ctx.fillRect(660, 598, 100, 50);

// ctx.fillRect(790, 545, 100, 50);
// ctx.fillRect(790, 598, 100, 50);

// ctx.fillRect(920, 545, 100, 50);
// ctx.fillRect(920, 598, 100, 50);
// //--------------- end ----------

ctx.drawImage("../images/goose.jpg", 200, 200);

}

drawBackground();

// ctx.strokeStyle= "gold";
// ctx.fillRect(400, 20, 100, 50);
// ctx.fillRect(400, 75, 100, 50);



// ctx.fillRect(530, 20, 100, 50);
// ctx.fillRect(530, 75, 100, 50);

// ctx.fillRect(660, 20, 100, 50);
// ctx.fillRect(660, 75, 100, 50);

// ctx.fillRect(790, 20, 100, 50);
// ctx.fillRect(790, 75, 100, 50);

// ctx.fillRect(920, 20, 100, 50);
// ctx.fillRect(920, 75, 100, 50);
// //    first line //
// ctx.fillRect(400, 150, 100, 50);
// ctx.fillRect(400, 205, 100, 50);

// ctx.fillRect(530, 150, 100, 50);
// ctx.fillRect(530, 205, 100, 50);

// ctx.fillRect(660, 150, 100, 50);
// ctx.fillRect(660, 205, 100, 50);

// ctx.fillRect(920, 150, 100, 50);
// ctx.fillRect(920, 205, 100, 50);

// //--------- second line //

// ctx.fillRect(400, 275 , 100, 50);
// ctx.fillRect(400, 325 , 100, 50);

// ctx.fillRect(400, 285 , 100, 50);
// ctx.fillRect(400, 335 , 100, 50);

// ctx.fillRect(660, 285 , 100, 50);
// ctx.fillRect(660, 335 , 100, 50);

// ctx.fillRect(920, 285 , 100, 50);
// ctx.fillRect(920, 335 , 100, 50);
// //----------- third line//

// ctx.fillRect(400, 415 , 100, 50);
// ctx.fillRect(400, 470 , 100, 50);

// ctx.fillRect(920, 415 , 100, 50);
// ctx.fillRect(920, 470 , 100, 50);
// //------ fourth line -----

// ctx.fillRect(400, 545, 100, 50);
// ctx.fillRect(400, 598, 100, 50);

// ctx.fillRect(530, 545, 100, 50);
// ctx.fillRect(530, 598, 100, 50);

// ctx.fillRect(660, 545, 100, 50);
// ctx.fillRect(660, 598, 100, 50);

// ctx.fillRect(790, 545, 100, 50);
// ctx.fillRect(790, 598, 100, 50);

// ctx.fillRect(920, 545, 100, 50);
// ctx.fillRect(920, 598, 100, 50);
// //--------------- end ----------

// ctx.drawImage(myImg, 200, 200);

// //--------------------------------
// ctx.beginPath();
// ctx.arc(400, 100, 75, 0, 2 * Math.PI )
// ctx.strokeStyle = "blue";
// ctx.stroke();
// ctx.closePath();

var blue1 = $(".blue1");
var blue2 = $(".blue2");
var blue3 = $(".blue3");
var blue4 = $(".blue4");
var blue5 = $(".blue5");
var blue6 = $(".blue6");
var blue7 = $(".blue7");
var blue8 = $(".blue8");
var blue9 = $(".blue9");
var blue10 = $(".blue10");
var blue11 = $(".blue11");
var blue12 = $(".blue12");
var blue13 = $(".blue13");
var blue14 = $(".blue14");
var blue15 = $(".blue15");
var blue16 = $(".blue16");
var blue17 = $(".blue17");
var blue18 = $(".blue18");
var blue19 = $(".blue19");

//       variables blue //

var red1 = $(".red1");
var red2 = $(".red2");
var red3 = $(".red3");
var red4 = $(".red4");
var red5 = $(".red5");
var red6 = $(".red6");
var red7 = $(".red7");
var red8 = $(".red8");
var red9 = $(".red9");
var red10 = $(".red10");
var red11 = $(".red11");
var red12 = $(".red12");
var red13 = $(".red13");
var red14 = $(".red14");
var red15 = $(".red15");
var red16 = $(".red16");
var red17 = $(".red17");
var red18 = $(".red18");
var red19 = $(".red19");
//            variables red//




var position1 = {
    x1 = 450,
    y1 = 50,
    x2 = 450,
    y2 = 100
};

var position2 = {x1 = 580,
    y1 = 50,
    x2 = 580,
    y2 = 100};

var position3 = {x1 = 710,
    y1 = 50,
    x2 = 710,
    y2 = 100};


var position4 = {x1 = 840,
    y1 = 50,
    x2 = 840,
    y2 = 100};

var position5 = {x1 = 975,
    y1 = 50,
    x2 = 975,
    y2 = 100};

var position6 = {x1 = 975,
    y1 = 180,
    x2 = 975,
    y2 = 230};

var position7 = {x1 = 975,
    y1 = 310,
    x2 = 975,
    y2 = 360};

var position8 = {x1 = 975,
    y1 = 440,
    x2 = 975,
    y2 = 490};

var position9 = {x1 = 975,
    y1 = 570,
    x2 = 975,
    y2 = 620};

var position10 = {
    x1 = 840,
    y1 = 570,
    x2 = 840,
    y2 = 620};

var position11 = {
    x1 = 710,
    y1 = 560,
    x2 = 710,
    y2 = 620};

var position12 = {
    x1 = 580,
    y1 = 570,
    x2 = 580,
    y2 = 620};

var position13 = {
    x1 = 450,
    y1 = 570,
    x2 = 450,
    y2 = 620};

var position14 = {
    x1 = 450,
    y1 = 440,
    x2 = 450,
    y2 = 490};

var position15 = {x1 = 450,
    y1 = 310,
    x2 = 450,
    y2 = 360};

var position16 = {
    x1 = 450,
    y1 = 180,
    x2 = 450,
    y2 = 230};

var position17 = {
    x1 = 580,
    y1 = 180,
    x2 = 580,
    y2 = 230};

var position18 = {
    x1 = 710,
    y1 = 180,
    x2 = 710,
    y2 = 230};

var position19 = {
    x1 = 710,
    y1 = 310,
    x2 = 710,
    y2 = 360};

var mixPosition =[position1,
     position2,
      position3,
       position4,
        position5, 
        position6,
         position7,
          position8,
           position9,
            position10,
             position11,
              position12,
               position13,
                position14,
                 position15,
                  position16,
                   position17,
                    position18,
                     position19 ]

var player = {
    name: "pinco",
    positionCell: 0,
    x: 0,
    y: 0,
}

player.y = mixPosition[player.positionCell].y1;
player.x = mixPosition[player.positionCell].x1;

player.positionCell += 3;

player.y = mixPosition[player.positionCell].y1;
player.x = mixPosition[player.positionCell].x1;
