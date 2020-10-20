const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var row1;
var row2;
var row3;
var row4;
var row5;
var ground;
var plinkos;
var count;
function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

  row1=[];
  row2=[];
  row3=[];
  row4=[];
  row5=[];
  plinkos=[];
  count=0
  for (var i = 50; i < 1200; i=i+50) 
{
  var ball = new Ball(i, 50, 20, 20);
  row1.push(ball);
}
for (var i = 50; i < 1200; i=i+50) 
{
  var ball = new Ball(i, 100, 20, 20);
  row2.push(ball);
}
for (var i = 50; i < 1200; i=i+50) 
{
  var ball = new Ball(i, 150, 20, 20);
  row3.push(ball);
}
for (var i = 50; i < 1200; i=i+50) 
{
  var ball = new Ball(i, 200, 20, 20);
  row4.push(ball);
}
for (var i = 50; i < 1200; i=i+100) 
{
  var bar = new Bar(i, 500, 20, 160);
  row5.push(bar);
  
}
ground=new Bar (650,590,1300,20)
}

function draw() {
Engine.update(engine)
  background("red");
  textSize(40)
  text(count,300,350)
  
  if (frameCount%60===0) {
    var rand=random(10,1290)
    plinkos.push( new Gangster(rand,0,20,20));
    if (rand<400) {
      count=count+1000
    }   
    if (rand>400&& rand<800) {
      count=count+5000
    }  if (rand>800) {
      count=count+10000
    } 
  }
  
  for (var i = 0; i < row1.length; i=i+1) 
{
  row1[i].display();
}
for (var i = 0; i < row1.length; i=i+1) 
{
  row2[i].display();
}
for (var i = 0; i < row1.length; i=i+1) 
{
  row3[i].display();
}
for (var i = 0; i < row1.length; i=i+1) 
{
  row4[i].display();
}
for (var i = 0; i < row5.length; i=i+1) 
{
  row5[i].display();
}
ground.display();
for (var i = 0; i < plinkos.length; i=i+1) 
{
  plinkos[i].display();
}
  drawSprites();
}