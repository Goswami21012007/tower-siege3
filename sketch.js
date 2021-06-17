
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ground,ground2,ground3,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var block26,block27,block28,block29,polygon,polygon_Image;
var bgImg
var bg="bgImg1.jpg"
function preload()
{
  
  getBackgroundImg();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground
ground=new Ground(354,421,160,15)
ground2=new Ground(608,267,180,10)
ground3=new Ground(274,636,1890,20)
//1st level

block1=new Block2(297,388,20,40)
block2=new Block(320,388,20,40)
block3=new Block2(342,388,20,40)
block4=new Block(365,388,20,40)
block5=new Block2(387,388,20,40)
block6=new Block(410,388,20,40)

//2nd level
block7=new Block2(320,343,20,40)
block8=new Block(343,343,20,40)
block9=new Block2(365,343,20,40)
block10=new Block(387,343,20,40)


//3rd level
block11=new Block2(342,299,20,40)
block12=new Block(365,299,20,40)
//4th
block13=new Block(352,255,20,40)

//block2 1st level
block14=new Block(540,240,20,40)
block15=new Block2(562,240,20,40)
block16=new Block(583,240,20,40)
block17=new Block2(605,240,20,40)
block18=new Block(627,240,20,40)
block19=new Block2(647,240,20,40)
block20=new Block(667,240,20,40)

//2nd level block2
block21=new Block(562,195,20,40)
block22=new Block2(583,195,20,40)
block23=new Block(605,195,20,40)
block24=new Block2(627,195,20,40)
block25=new Block(647,195,20,40)

//3rd level
block26=new Block(583,150,20,40)
block27=new Block2(605,150,20,40)
block28=new Block(627,150,20,40)

//4th level
block29=new Block(605,105,20,40)
//polygon
polygon=new Polygon (56,140,60,50)
slingShot=new SlingShot(polygon.body,{x:58,y:159})
//polygon=Bodies.circle(50,200,20)
//World.add(world,polygon)

//slingShot=new SlingShot(this.polygon,{x:100,y:200})
	Engine.run(engine);
  
}


function draw() {
  background(backgroundImg)

  rectMode(CENTER);
  text("x:"+mouseX+",y:"+mouseY,21,10)
  
  ground.display()
  block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()
block26.display()
block27.display()
block28.display()
block29.display()
  ground3.display()
  ground2.display()
  polygon.display()
slingShot.display()



  drawSprites();
 
}


function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }

  function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}


function keyPressed(){
  if(keyCode === 32 ){

      
      Matter.Body.setPosition(polygon.body,{x:56,y:140})
     slingShot.attach(polygon.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=12){
      bg = "morning.jpg";
  }
 else if (hour>=17&&hour<=24){
      bg = "bgImg1.jpg";  
  }
else if(hour>12 && hour<=17){
bg="afternoon.jpg"
}
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}