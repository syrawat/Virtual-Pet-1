//Create variables here

function preload()
{

  dogImg = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
 
  database = firebase.database();

  dog = createSprite(250,400,20,40);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }

  drawSprites();
  
  textSize(20);
  fill("blue");
  text("HI! I'm Tommy and I am bery humgry ",100,50)
  text("Press Up arrow to feed me",120,100)

  // fill("yellow")
  // text("Bottles left: " + ,200,150)

}

function readStock(data){
  foodS= data.val();
}

function writeStock(x){
  if(x<=0){
    x=10;
  }else{
  x=x-1;
 
}
  database.ref('/').update({
    Food:x
  })
}



