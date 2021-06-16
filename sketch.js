    var ship_sailing,sea,invisible_ground,seaImg,ship
    function preload(){
    ship_sailing = loadAnimation("ship-1.png","ship-3.png" , "ship-4.png")
   seaImg=loadImage("sea.png") }

    function setup(){
      createCanvas(600,400);
      sea = createSprite(400,200)
      sea.addImage(seaImg);
  sea.velocityX = -5
   sea.scale = 0.3
  ship = createSprite(130,300)
  ship.addAnimation("moving_ship",ship_sailing)
ship.scale=0.2
}

    function draw() {
      background(0)
     
sea.velocityX = -3

    if(sea.x<0){
    sea.x=sea.width/8
  }
  drawSprites();
  
}