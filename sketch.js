var database;
var playerCount=0
 var gameState=0
 var game,player,form
 var allPlayers
function setup(){
    createCanvas(500,500);

    
   database=firebase.database()

   game=new Game()
   game.readState()
   game.start()
}

function draw(){
    background("white");
    
}


