var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200, 200, 10, 10);
  ball.shapeColor = "blue";
}

function draw() 
{
  background("red");
  drawSprites();
  if(keyWentDown("right")){
    ball.x = ball.x + 3;
  }
  else if(keyWentDown("left")){
    ball.x = ball.x - 3;
  }
  else if(keyWentDown("up")){
    ball.y = ball.y -3;
  }
  else if(keyWentDown("down")){
    ball.y = ball.y + 3;
  }
}




