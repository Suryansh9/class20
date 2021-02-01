var m,f;
function setup() {
  createCanvas(1200,800);
 m= createSprite(400, 200, 80, 30);
 f= createSprite(600, 400, 50, 80);
 m.shapeColor="green";
 f.shapeColor="green";
 //m.debug=true;
 //f.debug=true;


}

function draw() {
  background("black");  
  m.x=mouseX;
  m.y=mouseY;
  if(m.x-f.x<f.width/2+m.width/2 && f.x-m.x<f.width/2+m.width/2 && m.y-f.y<f.height/2+m.height/2 && f.y-m.y<f.height/2+m.height/2 ){
    m.shapeColor="red";
    f.shapeColor="red";
  }
  else{
    m.shapeColor="green";
    f.shapeColor="green";

  }
  

  drawSprites();
}