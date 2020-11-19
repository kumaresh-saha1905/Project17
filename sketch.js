var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score
var survivalTime=0;
var score;
var scori;
var b,b1;
PLAY=1;
END=0;
var gameState=PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 b=loadImage("frt.jpg");
}



function setup() {
  createCanvas(600,400);
  b1=createSprite(0,0,600,400);
  survivalTime=0;
  score=0;
  scori=0;
  
  //creating the monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  //create the appropiate ground for walking of the monkey
   ground=createSprite(400,350,900,10);
  ground.velocityX=-4

  console.log(ground.x);
  
  FoodGroup=new Group();
  
  obstacleGroup=new Group();
  
   monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false;
  
  
  
  
  
  
  
  
  
  
}


function draw() {
  background("b1");
drawSprites();
  
 
        

  
  ground.visible=false;
          monkey.velocityY = monkey.velocityY + 0.8

  
  
  if(gameState===PLAY){
  //function of pressing "space" in this case
if(keyDown("space") && monkey.y>=280.0){
  monkey.velocityY=-12;


}
      ground.x = ground.width /2;

  //givig the gravity of the monkey so that monke can comedown after jumping and monkey can't fall

  //giving the function so that ground can attract the monkey
    monkey.collide(ground);
  
 //making the  banana with its qualification
       food();
obstacle();
  
if(monkey.isTouching(FoodGroup)){
  score=score+2;
  FoodGroup.destroyEach();
}
  
  stroke("red");
  textSize(20);
  fill("white");
  text("score:"+score,430,50);
  
  stroke("black");
  textSize(20);
  fill("blue");
  survivalTime=scori;
  text("survivalTime:"+survivalTime,100,50);
  
  if(monkey.isTouching(obstacleGroup)){
    scori=scori+1;
    obstacleGroup.destroyEach();
  }

  b1.velocityX=-3;
  b1.addImage(b);
  if(b1.x<0){
    b1.x=b1.width/2;
  }
  if(survivalTime===2){
    gameState=END;
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    
  
  }
  }
     else if (gameState === END) {
      background("black");
      
        stroke("black");
  textSize(20);
  fill("blue");
  survivalTime=2;
  text("survivalTime:"+survivalTime,100,50);
  
        stroke("red");
  textSize(20);
  fill("white");
  text("score:"+score,430,50);
  
         stroke("red");
  textSize(20);
  fill("orange");
  text("press m to restart the game ",200,200)  ;
       if(keyDown("m")){

             reset();
         
  obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
      monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
    
     
         
         
         
         
       }
       
    
       
       
       
       
       
       
       
       
       
       
       
       
       
       
    
     }
    
}
function food(){
   if(frameCount % 80===0){
                   banana=createSprite(400,Math.round(random(120,200)),20,20);
     banana.addImage(bananaImage);
     banana.scale=0.16;
     banana.velocityX=-5;
     banana.lifetime=80;
     FoodGroup.add(banana);
      }
  
}
function obstacle(){
  if(frameCount%300===0){
    var obstacle=createSprite(400,330,50,20)
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-5;
    obstacle.lifetime=70;
    obstacleGroup.add(obstacle);
    
  }
}
function reset(){
  gameState=PLAY;
  
  monkey.collide(ground);
  score=0;
  scori=0;
}


  

