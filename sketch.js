var spacecraft1img, spacecraft2img, spacecraft3img, spacecraft4img
var backgroundImage, issImage
var iss, spacecraft
var hasDocked = false



function preload(){
  spacecraft1img = loadImage("spacecraft1.png")
  spacecraft2img = loadImage("spacecraft2.png")
  spacecraft3img = loadImage("spacecraft3.png")
  spacecraft4img = loadImage("spacecraft4.png")
  backgroundImage = loadImage("spacebg.jpg")
  issImage = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  iss = createSprite(400, 200, 50, 50)
  iss.addImage(issImage)
  iss.scale = 0.9
  spacecraft = createSprite(360, 320, 50, 50)
  spacecraft.addImage(spacecraft1img)
  spacecraft.scale = 0.2
}

function draw() {
  background(backgroundImage);  
  if(!hasDocked){
   
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x += 25
      spacecraft.addImage(spacecraft4img)
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x -=25
      spacecraft.addImage(spacecraft3img)
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y -= 9

    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y += 9
      spacecraft.addImage(spacecraft2img)
    }
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-20)){
    hasDocked = true
    console.log(hasDocked)
    textSize(20);
    fill("white")
    text("Docking Successful!",300,350)
  }

  drawSprites();
}