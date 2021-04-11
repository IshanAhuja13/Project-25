
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObject;	
var world, greenDustbin, dustbinImage;

function preload(){
	dustbinImage = loadImage("trashcangreen.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new paper(400, 550, 1, 1);

	greenDustbin = createSprite(900, 650, 50, 50);
	greenDustbin = loadImage(dustbinImage, "hi");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}


function keyPressed(){

	if(keyCode === UP_ARROW){
		//Matter.Body.applyForce(paperObject.body, paperObject.body.postion, {x:20 , y: -15});
	}

}

