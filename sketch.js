
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var paper;
var ground;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,300,40);
	ground = new Ground(600,690,1200,10);
	d1 = new Dustbin(900,675,200,20);
	d2 = new Dustbin(790,635,20,100);
	d3 = new Dustbin(1010,635,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
 
	keyPressed();
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-4});
	}
}