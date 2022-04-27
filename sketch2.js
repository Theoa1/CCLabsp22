var speed = 1;
var fr = 60;
var sprite_sheet;
var badger_animation;
var avatar_sprite_sheet;
var avatar_animation;
var playSong = 0;
var spriteSpeedLimit = 5;
var bigSpriteSpeedLimit = 3;
var pandaSpriteSpeedLimit = 5;
var dancerNumber = 0;
var lightColor = 'rgba(255, 255, 0, 0.5)';
var lightSwitch = 0;
var lightMove = 0;
var blackOut = 0;
var blackOut2 = 0;
var blackOut3= 0;
var blackOut4 = 0;
var col1 = 50;
var row1 = 250;
var tile = [];



function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('media/bonetrousle.mp3');
  sound2 = loadSound('media/Badger.mp3');
  sound3 = loadSound('media/spooky.mp3');
  sprite_sheet = loadSpriteSheet('media/badger_sprite.png', 200, 180, 4);
  badger_animation = loadAnimation(sprite_sheet);
  badger_animation.frameDelay = spriteSpeedLimit;
  avatar_sprite_sheet = loadSpriteSheet('media/dancerthree.gif', 146, 346, 8);
  avatar_animation = loadAnimation(avatar_sprite_sheet);
  avatar_animation.frameDelay = spriteSpeedLimit;
  hotdog_sprite_sheet = loadSpriteSheet('media/neckdance.gif', 640, 480, 22);
  hotdog_animation = loadAnimation(hotdog_sprite_sheet);
  hotdog_animation.frameDelay = bigSpriteSpeedLimit;
  panda_sprite_sheet = loadSpriteSheet('media/spongebob.gif', 260, 260, 22);
  panda_animation = loadAnimation(panda_sprite_sheet);
  panda_animation.frameDelay = pandaSpriteSpeedLimit;
}


/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowHeight/2, 400);
  canvas.parent("my-container2");

  dancer = new theoDancer(width/2, height/2);
  playsong()
}

function playsong(){
   for (var i=0; i<20;i++){
    tile.push(new floorTile(random(255), random(255), random(255)));
  } 
  
  if (playSong == 0){
  mySound.setVolume(1);
  mySound.rate(speed);
  mySound.loop();  
  }
  else if (playSong == 1){
  sound2.setVolume(1);
  sound2.rate(speed);
  sound2.loop();
  }
  else if (playSong == 2){
  sound3.setVolume(1);
  sound3.rate(speed);
  sound3.loop();
  }
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  place();
}


function dancertheo(){
  dancer.update();
  dancer.display(); 
}
// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class theoDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
 
    
  }  
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.x += sin(frameCount * 0.3) * 4;

    
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    translate(this.x, this.y);
    push();
    scale(0.5);
    
    
    // ******** //
    // ⬇️ draw your dancer here ⬇️
    fill(25, 202, 230);
    push();
    ellipse(10,30,250)
    fill(250);
    translate(-65, -50);
    strokeWeight(10);
    arc(0, 0, 90, 90, 0, PI + PI, CLOSE);
    arc(150, 10, 90, 90, 0, PI + PI, CLOSE);
    strokeWeight(20);
    stroke(171, 80, 112)
    arc(75, 120, 80, 10, 2 * PI, PI);
    beginShape();
    line(120,200,120,350);
    line(50,200,50,350)
    pop();

    
    
    // ⬆️ draw your dancer here ⬆️
    
    
    
    
    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()
   
    
    
    pop();
  }  
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
  
  
}

function place(){
 background(49, 60, 74);
  frameRate(fr);
  changeLight();
  
  push();
  
  var step = 4;
  var angle = map(step, 0, 20, -PI / 4, PI / 4);
  var shear_factor = 1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);
  
  for (var i=0; i<tile.length; i++){
    tile[i].display();
    tile[i].rave();
  }
  
  pop();
  
  if (dancerNumber == 0){
    dancertheo() ; 
    lightMove = 0;
  }
  else if (dancerNumber == 1){
  animation(avatar_animation, width/2, height/2);
    lightMove = 100;
  }
  else if (dancerNumber == 2){
  animation(hotdog_animation, width/2, height/2);
    lightMove = 100;
  }
  else{
  animation(panda_animation, width/2, height/2);
    lightMove = 20;
  }
  
  
  fill(lightColor);
  
  
  stroke(0,0);
  arc(width/2, height/2+70+lightMove, 200, 90, 0, PI, OPEN);
  triangle(width/2-100,height/2+70+lightMove, width/2+100, height/2+70+lightMove, width/2, -50)
  
  
  stroke(0,0);
  arc(width/2, height/2+70+lightMove, 200, 90, 0, PI, CLOSE);
  triangle(width/2-100,height/2+70+lightMove, width/2+100, height/2+70+lightMove, width, -50)
  
}

function nextDancer(){
  if(dancerNumber == 3){
    dancerNumber = 0; 
  }
  else{
  dancerNumber++;
  }
}

function prevDancer(){
  if (dancerNumber == 0){
    dancerNumber = 3;
  }
  else{
  dancerNumber--;
  }
}

function speedUp(){
  speed += 0.1;
  mySound.rate(speed);
  sound2.rate(speed);
  sound3.rate(speed);
  fr += floor(speed*4);
  spriteSpeedLimit -= 2;
  bigSpriteSpeedLimit -=2;
  pandaSpriteSpeedLimit -=2;
  
  hotdog_animation.frameDelay = bigSpriteSpeedLimit;
  badger_animation.frameDelay = spriteSpeedLimit;
  avatar_animation.frameDelay = spriteSpeedLimit;
  panda_animation.frameDelay = pandaSpriteSpeedLimit;
}

function slowDown(){
  speed -= 0.1;
  mySound.rate(speed);
  sound2.rate(speed);
  sound3.rate(speed);
  fr -= floor(speed*10);
  spriteSpeedLimit +=2;
  bigSpriteSpeedLimit +=2;
  pandaSpriteSpeedLimit +=2;
  
  hotdog_animation.frameDelay = bigSpriteSpeedLimit;
  badger_animation.frameDelay = spriteSpeedLimit;
  avatar_animation.frameDelay = spriteSpeedLimit;
  panda_animation.frameDelay = pandaSpriteSpeedLimit;
  
  //console.log('the framerate is: ' + fr);
}

function resetSongs(){
  
  clear();
  
  speed = 1;
	fr = 60;
  
  mySound.rate(speed);
  sound2.rate(speed);
  sound3.rate(speed);
  
	spriteSpeedLimit = 5;
	bigSpriteSpeedLimit = 2;
	pandaSpriteSpeedLimit = 4;
  
  hotdog_animation.frameDelay = bigSpriteSpeedLimit;
  badger_animation.frameDelay = spriteSpeedLimit;
  avatar_animation.frameDelay = spriteSpeedLimit;
  panda_animation.frameDelay = pandaSpriteSpeedLimit;
}

function songSwitch(){
  if (playSong == 0){
    playSong = 1;
    mySound.pause();
    sound2.loop();
  }
  else if (playSong == 1){
    playSong = 2;
    sound2.pause();
    sound3.loop();
  }
  else {
   playSong = 0;
    sound3.pause();
    mySound.loop();
  }
  
  console.log(playSong);  
}

function changeLight(){
  if (frameCount % 24 == 0){
    lightSwitch +=1;
    
  }
  if(lightSwitch == 0){
    lightColor = 'rgba(252, 186, 3, 0.5)'
  }
  
  if (lightSwitch == 1){
    lightColor = 'rgba(255, 0, 0, 0.3)'
  }
  
  if (lightSwitch == 2){
    lightColor = 'rgba(5, 242, 88, 0.3)'
  }
  
  if (lightSwitch == 3){
    lightColor = 'rgba(235, 5, 215, 0.4)'
    lightSwitch = -1;
  }
}

function floorTile(r, g, b){
  
  this.rave = function() {
    if(frameCount*2 % 100 == 0){
    r=random(150);
    g=random(250);
    b=random(50);
      
      blackOut = floor(random(0, 10));
      blackOut2 = floor(random(0, 2));
      blackOut3 = floor(random(0, 7));
      blackOut4 = floor(random(0, 10));
    }
    
    strokeWeight(8);
    stroke(0);
    fill(r,g,b);
  }
  
  this.display = function() {  
    
    col1 = 20;
    row1 = 500;
       
    for(j=0; j<10; j++){
      col1+=120;
      if(j == blackOut){
      	fill(7, 239, 247);
      }
      else{
        fill(r,g,b);
        rect(0 + col1, row1, 100, 80);
      }
      rect(0 + col1, row1, 100, 80);
    }
    
    col1=20;
    row1+=100;
    
    for(k=0; k<11; k++){
      col1+=120;
      if(k == blackOut2){
      	fill(240, 62, 68);}
      else{
        fill(r,g,b);
      }
      rect(0 + col1, row1, 100, 80);
    }
    
    col1=20;
    row1+=100;
    
    for(k=0; k<12; k++){
      col1+=120;
      if(k == blackOut3){
      	fill(186, 178, 15);}
      else{
        fill(r,g,b);
      }
      rect(0 + col1, row1, 100, 80);
    }
    col1=20;
    row1+=100;
    
    for(k=0; k<13; k++){
      col1+=120;
      if(k == blackOut4){
      	fill(186, 178, 15);}
      else{
        fill(r,g,b);
      }
      rect(0 + col1, row1, 100, 80);
    }
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/