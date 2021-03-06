
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, roofObject;
var rope1, rope2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 40
	bobObject1 = new bob(150,500,100,100);
	bobObject2 = new bob(250,500,100,100);
	bobObject3 = new bob(350,500,100,100);
	bobObject4 = new bob(450,500,100,100);
	bobObject5 = new bob(550,500,100,100);

	roofObject = new roof(350,100,500,50);

	rope1 = new Rope(bobObject1.body, roofObject.body, bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body, roofObject.body, bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body, roofObject.body, bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  keyPressed();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === 32){

    bobObject1.VelocityY=-0.8;
	 //GRAVITY
	 bobObject1.VelocityY = bobObject1.VelocityY+0.8;
}
}

