var car;
var crashWall;
var State = 0;
var speed, weight;
var deformation;

function setup() {

  speed = random(55, 90);
  weight = random(400, 1500);

  createCanvas(1600,400);
  car = createSprite(50, 200, 10, 10);
  car.shapeColor = color('white');

  crashWall = createSprite(750, 200, 20, 200);
  crashWall.shapeColor = color('white');
}

function draw() {
  background('black');  
  drawSprites();

if(State == 0){
    car.velocityX = speed;
  }
  if(crashWall.x - car.x < (car.width + crashWall.width)/2){
    car.velocityX = 0;
    State = 1;
  }
  if(State == 1){
    deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation <= 80){
      car.shapeColor = color('green');
      crashWall.shapeColor = color('green');
    }
    if(deformation > 80 && deformation < 180){
      car.shapeColor = color('yellow');
      crashWall.shapeColor = color('yellow');
    }
    if(deformation >= 180){
      car.shapeColor = color('red');
      crashWall.shapeColor = color('red');
    }
  }
}