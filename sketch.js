var database, gamestate=0, playercount 
var form, player, game
var canvas, backgroundImage
var  allPlayers
var car1,car2,car3,car4,cars
function preload(){

}

function setup(){
canvas=createCanvas(displayWidth-20,displayHeight-30);
database=firebase.database();
game=new Game()
game.getState()
game.start()

}

function draw(){
if(playercount===4){
game.update(1)
}
if(gamestate===1){
clear()
game.play()
}
}

