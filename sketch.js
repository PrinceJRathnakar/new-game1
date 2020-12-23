
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
  car1=loadImage("car1.png")
  car2=loadImage("car2.png")
  car3=loadImage("car3.png")
  car4=loadImage("car4.png")
  car5=loadImage("car5.png")
  bluebird=loadImage("bluebird.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(50,height,2000,20);
   box1=new Box(100,300,50,50)
   box2=new Box(700,300,50,50)
   bird=new Bird (70,200)
   bird.image=loadImage("bird.png")
   bird1=new Bird (700,200)
   bird1.image=loadImage("bluebird.png")
   sling1= new Sling(bird.body,{x:70,y:200})
   sling2= new Sling(bird1.body,{x:700,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

    ground.display();
    box1.display();
    box2.display();
    bird.display();
    bird1.display();
    sling1.display();
   sling2.display();
    
   spawncars()
  drawSprites();
 
}
function spawncars(){
  if(frameCount%100==0){
    var car=createSprite(50,height-30,30,30)
    var rand=Math.round(random(1,5))
    switch(rand){
      case 1:
        car.addImage(car1)
        car.scale=0.5
        break;
        case 2:
        car.addImage(car2)
        car.scale=0.05
        break;
        case 3:
        car.addImage(car3)
        car.scale=0.05
        break;
        case 4:
        car.addImage(car4)
        car.scale=0.05
        break;
        case 5:
        car.addImage(car5)
        car.scale=0.5
        break;
    }
    car.velocityX=4
    car.lifetime=800
   
  }
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    sling1.fly();
}
function keyPressed()
{
if (keyCode==32){
    sling1.attach(bird.body)
}
if(keyCode==77){
  Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
}
}


