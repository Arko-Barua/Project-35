var Balloon
var backgroundImg
const Engine = Matter.Engine;
const World = Matter.World;


function preload() {
backgroundImg = loadImage("Hot Air Ballon-01.png")
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  engine = Engine.create ();
  world = engine.world;
  var Ballon = createSprite(150,40,40,240);
  var Balloon = addAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png" )
  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  if (keyDown(LEFT_ARROW)) {
    Balloon.x = Balloon.x -10;
  }
  else if (keyDown(RIGHT_ARROW)) {
    Balloon.x = Balloon.x + 10;
  }
  else if (keyDown(UP_ARROW)) {
    Balloon.y = Balloon.y -10;
  }
  else if (keyDown(DOWN_ARROW)) {
    Balloon.y = Balloon.y +10;
  }

  drawSprites();
}