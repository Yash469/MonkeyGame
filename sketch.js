var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;


function preload(){
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png",
 "Monkey_03.png","Monkey_04.png","Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png",
"Monkey_09.png","Monkey_10.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");
 
}


function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(50,350,10,10);
  monkey.addAnimation("Moving",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(100,400,900,10)
  ground.velocityX = -5;
  ground.x=ground.width/2;
  
  invisibleGround = createSprite(200,405,400,10);
  invisibleGround.visible = false;
  
  bananaGroup = createGroup();
  
  obstacleGroup = createGroup();
  
  score = 0;
}

function draw() {
  background(220);
  
  text("Survival Time:" + score,300,100);
  

  if(ground.x > 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 345) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(invisibleGround);
  
  score = score + Math.round(getFrameRate()/60);
    
  
  
  spawnBananas();
  
  spawnObstacles();
  
drawSprites()
}

function spawnBananas(){
  
  if (frameCount % 80 === 0) {
  var banana = createSprite(600,150,10,40);
  banana.addImage(bananaImage);
  banana.velocityX = -5;
  
  banana.y = Math.round(random(230,270));
  banana.scale = 0.06;
  banana.lifetime = 160;
 
  bananaGroup.add(banana);
  }
}

function spawnObstacles(){
    
if (frameCount % 300 === 0) {
    obstacle = createSprite(600,375,10,40);
    obstacle.velocityX = -7;
    obstacle.addImage(obstacleImage);
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
}
  
}