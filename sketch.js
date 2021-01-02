
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

var tree;
var ground;
var stone;
var boy, boyImg;
var mango1, mango2, mango3, mango4, mango5;
var mango6, mango7;
var slingshot;
var mango;

function preload()
{
	boyImg = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1000, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(800, 410, 400, 600);
	ground = new Ground(width/2, 700, width, 20);
	stone = new Stone(200, 440, 20);
	mango1 = new Mango(700, 400, 20);
	mango2 = new Mango(850, 300, 20);
	mango3 = new Mango(900, 250, 20);
	mango4 = new Mango(750, 170, 20);
	mango5 = new Mango(880, 200, 20);
	mango6 = new Mango(750, 300, 20);
	mango7 = new Mango(730, 230, 20);
	slingshot = new Slingshot(stone.body, {x : 200, y : 200});

	mango1.body.position = mango.body.position;
	mango2.body.position = mango.body.position;
	mango3.body.position = mango.body.position;
	mango4.body.position = mango.body.position;
	mango5.body.position = mango.body.position;
	mango6.body.position = mango.body.position;
	mango7.body.position = mango.body.position;
	
	Engine.run(engine);
  
}


function draw() {
	
	background(255);
   
	image(boyImg, 150, 440, 300, 350);
  

	console.log(stone.y);


	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);

  Engine.update(engine);
  
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  slingshot.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x : 235, y : 240});
		slingshot.attach(stone.body);
	}
}

function detectCollision(lstone, lmango){
	
	mango.body.position = lmango.body.position;
	stone.body.position = lstone.body.position;

	var distance = dist(stone.body.position.x, stone.body.position.y, lmango.body.position.x, lmango.body.position.y);

	if(distance <= lmango.r + lstone.r){

		Matter.Body.setStatic(lmango.body, false);
	}
}
