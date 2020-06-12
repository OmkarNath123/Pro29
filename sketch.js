const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  var options={
    restitution:0.8
  }
ground=new Ground(400,790,800,20)
World.add(world,ground)
base=new Ground(600,600,400,20)
World.add(world,base)

block1=new Block(440,580,80,80)
World.add(world,block1)

block2=new Block(520,580,80,80)
World.add(world,block2)

block3=new Block(600,580,80,80)
World.add(world,block3)

block4=new Block(680,580,80,80)
World.add(world,block4)

block5=new Block(760,580,80,80)
World.add(world,block5)

block6=new Block(480,500,80,80)
World.add(world,block)

block7=new Block(560,500,80,80)
World.add(world,block)

block8=new Block(640,500,80,80)
World.add(world,block)

block9=new Block(720,500,80,80)
World.add(world,block)

block10=new Block(520,420,80,80)
World.add(world,block)

block11=new Block(600,420,20,20)
World.add(world,block)

block12=new Block(680,420,20,20)
World.add(world,block)

block13=new Block(560,340,20,20)
World.add(world,block)

block14=new Block(640,340,20,20)
World.add(world,block)

block15=new Block(600,260,20,20)
World.add(world,block)

ball= Bodies.circle(200,200,10,options);
World.add(world,ball);

slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw() {
  Engine.update(engine);  
  background("blue");
ellipseMode(RADIUS);
 fill("green");
 ellipse(ball.position.x,ball.position.y,10,10);
 ground.display();
 base.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}