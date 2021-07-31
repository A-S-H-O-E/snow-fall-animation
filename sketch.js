const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myWorld, myEngine, snow;
var bg
function preload() {
bg = loadImage("snow1.jpg")
}



function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  snow = new Snow (50,100,20,20)
  makeSnow()
}

function draw() {
  background(bg); 
  Engine.update(myEngine) 
  
  
  
  }
function makeSnow() {
      var snow = new Snow(random(10,800),random(50,150),20,20);
    snow.displayBody();
    }
  