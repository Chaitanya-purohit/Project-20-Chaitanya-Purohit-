var wall,deformation;
var speed,weight;


function setup() {
  createCanvas(1600, 400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);  
}

function draw() {
  calculate_deform()
  background(255,255,255);  
  drawSprites();
  car.velocityX=speed;

  

}

function calculate_deform(){
 
  deformation=(weight*speed*speed)/22500
  Text("deformation =",deformation , 1400, 20 );

  if(car.x-wall.x===wall.width/2+car.width/2
    &&wall.x-car.x===car.height/2+wall.height/2){
      car.velocityX=0;
      car.velocityY=0;
      
    if (deformation<100) {
    car.shapeColor="green";    
    } else if (deformation>100  &&  deformation<180){
    car.shapeColor="yellow";    
    } else if (deformation>180){
    car.shapeColor="red";    
  }

  }
}
