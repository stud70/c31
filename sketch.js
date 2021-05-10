
var string="this is a string";
console.log(string);

var num=10;
console.log(num);

var bool=true;
console.log(bool);

var object;
console.log(object);

var object=null;
console.log(object);

 var arr1=[1,2,3,4,5];
 console.log(arr1);

// var arr2 =["dog",15,true];
// console.log(arr2);

var arr3=[[1,2],[2,3],[3,4],[4,5],69];
console.log(arr3);
console.log(arr3[0]);
console.log(arr3[2][1]);

arr3.push("icecream");
console.log(arr3);
console.log(arr3.length);
console.log(arr3);

arr3.pop();
console.log(arr3[3]);
 console.log(arr3.length);

 arr3.pop();
console.log(arr3[2]);
 console.log(arr3.length);




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render=Matter.Render;

var engine,world;
//var ground,ball;
var box1,box2,box3,box4,box5;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird;
var backgroundImg;
var constrainedlog,platform;
var chain;

var gamestate = "onsling";

function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
 
//we can load the image in setup function also instead of preload
 // backgroundImg = loadImage("sprites/bg.png");

  
  
  ground = new Ground(600,height,1200,20);
  platform=new Ground(150,305,300,170);

  box1 = new Box(700,355,70,70);
  box2 = new Box(920,355,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,300,300,PI/2);
 
  box3 = new Box(700,285,70,70);
  box4 = new Box(920,285,70,70);
  pig2 = new Pig(810,280);
  log2= new Log(810,220,300,PI/2);

  box5 = new Box(810,175,70,70);

  log3= new Log(760,120,150,PI/7);
  log4= new Log(870,120,150,-PI/2);

  bird = new Bird(210,40);

  constrainedlog= new Log(230,180,80,PI/2); 
 rubber= new SlingShot(bird.body,{x:190,y:50});
 var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 400,
    wireframes: false
  }
});
Render.run(render);
 
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
  platform.display();
 
  //constrainedlog.display();
  rubber.display();
  
}

function mouseDragged(){

  if(gamestate === "onsling"){
 
// if(gamestate !== "launched"){
      Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  }
 
}

function mouseReleased(){
  rubber.fly();
  gamestate = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    //line 156 and 158 is extra
  // Matter.Body.setPosition(bird.body,{x:200,y:50});
   // rubber.attach(bird.body);
   // gamestate="onsling";
  }
}