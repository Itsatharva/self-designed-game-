var police ;
var terrorist;
var police_image;
var terrorist_image;
var bg;
var bullet;
var bullet_image;
var terroristgroup;
var bulletgroup;

function preload(){
  police_image = loadImage("police.png");
  terrorist_image = loadImage("terrorist.png");
  bg= loadImage("Flag-India.jpg");
  bullet_image = loadImage("bullet image.png");
}

function setup(){
   createCanvas(900,600);
   police=createSprite(60,180,10,40);
   police.addImage("police",police_image);
   police.scale=0.4;
   terrorist=createSprite(900,180,10,40);
   terrorist.addImage("terrorist",terrorist_image);
   terrorist.scale=0.6;
   terroristgroup = new Group();
   bulletgroup = new Group();
}
function draw(){
  background(bg);
  police.y=mouseY;
  if(bullet.isTouching(terrorist)){
    terrorist.destroy(Each);
  }
     
     
  spawnterrorist();
  spawnbullet();
  drawSprites();
  
  
}

function spawnterrorist(){
  if(frameCount%50===0){
    terrorist=createSprite(700,180,10,40);
    terrorist.addImage("terrorist",terrorist_image);
    terrorist.y=Math.round(random(100,700));
    terrorist.scale=1;
    terrorist.velocityX=-5;
    terroristgroup.add(terrorist);
    
  }
}

function spawnbullet(){
  if(frameCount%50===0){
    bullet=createSprite(140,police.y-40,20,10);
    bullet.addImage("bullet",bullet_image);
    bullet.velocityX=+5;
    bullet.scale=0.1
    bulletgroup.add(bullet);
  }
  
}

