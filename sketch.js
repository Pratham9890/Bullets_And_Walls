var Wall,bullet,bullet_speed,thickness,bullet_damage,bullet_weight



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  Wall = createSprite(1200,200,thickness,thickness*2);
  bullet = createSprite(400,200,5,5)
  bullet.velocityX=15
  bullet_speed=random(223,321);
  bullet_weight=random(30,52);
  bullet_damage=(0.5*bullet_weight*bullet_speed*bullet_speed)/(thickness*thickness*thickness)
}

function draw() {
  background('black');  
  drawSprites();
  if(isTouching(bullet,Wall)){
    bullet.velocityX = 0
    
  }
  if(bullet_damage<10) {
    Wall.shapeColor = "green"
  }
  else{
    Wall.shapeColor = "red"
  }
}

