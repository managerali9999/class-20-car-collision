var car,wall;
var speed,weight;

var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
 weight = random(400,1500);

  wall = createSprite(1300, 200, 60, height/2);
  wall.shapecolor = color(80,80,80);

  car = createSprite(15,200,40,20);
  car.shapecolor=color("white");
  car.velocityX=speed;


 
}


function draw() {
  background(0);
  drawSprites();
  

  

  if(wall.x-car.x < (car.width+wall.width)/2) {

car.velocityX = 0;
var deformation = 0.5 * weight * speed* speed/22509;
  
  
  if(deformation>180) {
    car.shapeColor = color("red");

  }
  if(deformation<180 && deformation>100) {
car.shapeColor = color("yellow");
  } 

  if(deformation<100) {
car.shapeColor = color("green");
  }
  }
  

}
