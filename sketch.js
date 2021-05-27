
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinOb, paperOb, groundOb
var world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinOb = new dustbin(650, 650);
	paperOb = new paper(250, 400, 70);
	groundOb = new ground(width/2,670, width, 20);

	var render = Render.create({
		element: document.body,
		engine: document.body,
		engine: engine,
		options : {
			width: 1200,
			height: 700,
			wireFrames: false
		}
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

dustbinOb.display()
 paperOb.display()
 groundOb.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperOb.body, paperOb.body.position, {x:65, y:-65});
	}
}



