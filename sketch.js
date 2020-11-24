
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1, dustbin2, dustbin3;
var paper;

function preload()
{
}

function setup() {
	createCanvas(1200, 200);


	engine = Engine.create();
  world = engine.world;
  
  paper = new Paper(200,170,30);

	ground = new Ground(600,180,1200,10);

	dustbin1 = new Dustbin(1000,165,200,15);
	dustbin2 = new Dustbin(900,120,20,100);
	dustbin3 = new Dustbin(1100,120,20,100);


	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW)
    Matter.Body.applyForce(paper.body,paper.body.position,{x:205,y:-125});
}



