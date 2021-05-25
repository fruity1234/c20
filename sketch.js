var fixedRectangle;
var movingRectangle;



function setup() {

  createCanvas(800,400);
  fixedRectangle=createSprite(400, 200, 50, 50);
  movingRectangle=createSprite(350,100,50,50);
}

function draw() {
  background("blue");
  
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY;

if(fixedRectangle.x-movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2  &&
  movingRectangle.x-fixedRectangle.x <  fixedRectangle.width/2 + movingRectangle.width/2  && 
  fixedRectangle.y-movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2  && 
  movingRectangle.y-fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2){
  fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="green"
}
else {
  movingRectangle.shapeColor="black";
      fixedRectangle.shapeColor="black";
    }



  drawSprites();




}