const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper, dustbin, ground;
var engine, world;

function setup() {
createCanvas(1600, 700);

engine = Engine.create();
world = engine.world;

//Create a box
dustbin = new Box(1200, 610);

//Create the ball
paper = new Paper(200, 450);

//Create a ground
ground = new Ground(width/2, 650, width, 10);
ground.shapeColor = color(255);

var render = Render.create({
    element: document.body,
    engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
})

Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ground.display();
  paper.display();

  drawSprites();
}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85});
 }
}