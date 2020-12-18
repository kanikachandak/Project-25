
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,dust;


function setup() 
{
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here
	ball=new Paper();
	ground=new Ground();
	dust=new Dustbin();

}
function draw() 
{
  background(255);
  Engine.update(engine);
  ball.display();
  dust.display();
  ground.display();
}
function keyPressed()
{
	if(keyCode ===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70});
	}
}
