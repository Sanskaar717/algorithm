var obj1,obj2;

function setup(){
  createCanvas(600,600);
  obj1 = createSprite(300,300,100,50);
  obj2 = createSprite(100,100,50,50);

  obj1.shapeColor = "black";
  obj2.shapeColor = "white";

  obj1.debug = true;
  obj2.debug = true;

}

function draw(){
  background("red");

  obj2.x = mouseX;
  obj2.y = mouseY;

  console.log("left side :" +(obj1.x - obj2.x));
  console.log("rightside side :" +(obj2.x - obj1.x));

  if(obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 &&
    obj2.x - obj1.x <= obj1.width/2 + obj2.width/2 &&
    obj1.y - obj2.y <= obj1.height/2 + obj2.height/2 &&
    obj2.y - obj1.y <= obj1.height/2 + obj2.height/2){
      
    obj1.shapeColor = "blue";
    obj2.shapeColor = "blue";
  }
  else{
    obj1.shapeColor = "black";
    obj2.shapeColor = "white";
  }

  drawSprites();
}