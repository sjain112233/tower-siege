const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, slingshot;



function setup() {
  createCanvas(1600,700);
  ground=new Ground(width/2,670,width,20);
}
function draw() {
  background(230)
   Engine.update(engine)
   ground.display() ;
}