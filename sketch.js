
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
function preload()
{
	tree= loadImage("photos/tree.png");
	boy=loadImage("photos/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,650,1200,15);
	mango1=new Mango(900,350,50);
	mango2=new Mango(950,320,50);
	mango3=new Mango(900,300,50);
	mango4=new Mango(850,250,50);
	mango5=new Mango(820,320,50);
	mango6=new Mango(1000,290,50);
	stone1=new Stone(600,350,45);
	
	
	sling1=new SLINGSHOT(stone1.body,{x:180,y:540});

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  ground.display();

  //tree and boy
  image(tree, 900,390,320,550)
image(boy,250,590,200,200)
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  sling1.display();



  detectCollision(stone1,mango1);

  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);

  
 
}


function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

sling1.fly();

}


function detectCollision(object1,object2){

	object1BodyPosition=object1.body.position;
	object2BodyPosition=object2.body.position;

	var distance=dist(object1BodyPosition.x,object1BodyPosition.y,object2BodyPosition.x,object2BodyPosition.y)

	if(distance <= object1.r +object2.r ){

		Matter.Body.setStatic(object2.body,false);
	}
}

function keyPressed(){


	if(keyCode===32){
	
	sling1.attach(stone1.body);
	
	}
	
	
	
	}






