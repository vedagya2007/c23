const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world=engine.world;

 var o_option =
 {
   isStatic: true
 }

 ground  = Bodies.rectangle(200,390,20,10,o_option);
 World.add(world,ground);

ball = Bodies.circle(200,200,50);
World.add(world,ball);

 console.log(ground.position.x);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  fill("cyan");
  ellipse(ball.position.x,ball.position.y,50,50);
  
}