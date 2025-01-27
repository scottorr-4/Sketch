let ShipX = 0;

function setup() {
  //creates a canvas 600 pixels wide
  //and 600 pixels high
  createCanvas(600,600);
}
function draw() {
  //ocean background
  background("#03A9F4");
  //sun in top-right corner
  fill("yellow");
  circle(550, 50, 100);
 
  //land background
  stroke('black')
  strokeWeight(1);
  fill("green");
  rect(180, 0, 450, 600);
   //beach background
    stroke('black')
  strokeWeight(1);
  fill("#E0D470");
  rect(180, 0, 50, 482);
  //street grid
  stroke('rgb(71,67,67)')
  strokeWeight(4);
  line(250, 0, 250, 600);
  line(280, 0, 280, 600);
  line(310, 0, 310, 600);
  line(340, 0, 340, 600);
  //HWY 101
  strokeWeight(8);
  line(370, 0, 370, 600);
  strokeWeight(4);
  line(400, 0, 400, 600);
  line(430, 0, 430, 600);
  line(460, 0, 460, 600);
  line(490, 0, 490, 600);
  line(520, 0, 520, 600);
  line(550, 0, 550, 600);
  line(580, 0, 580, 600);
  line(430, 0, 430, 600);
  line(430, 0, 430, 600);
  line(600, 30, 250, 30);
  line(600, 60, 250, 60);
  line(600, 90, 250, 90);
  line(600, 120, 250, 120);
  line(600, 150, 250, 150);
  line(600, 180, 250, 180);
  line(600, 210, 250, 210);
  line(600, 240, 250, 240);
  line(600, 270, 250, 270);
  line(600, 300, 250, 300);
  line(600, 330, 250, 330);
  line(600, 360, 250, 360);
  line(600, 390, 250, 390);
  line(600, 420, 250, 420);
  line(600, 450, 250, 450);
  line(600, 480, 250, 480);
  line(600, 510, 250, 510);
  line(600, 540, 250, 540);
  line(600, 570, 250, 570);
  //City name
  textSize(20)
  fill("#EDDA31")
  text("Newport, Oregon", 15, 580)
//Yaquina Bay
  fill("#03A9F4");
  stroke('#03A9F4')
  triangle(180, 483, 180, 600, 1000, 483);
  triangle(460, 480, 600, 390, 600, 480);
  //Sailboat moving into bay
  text('⛵', ShipX, 530)
  ShipX = frameCount % width
    stroke('#798171')
  strokeWeight(12);
  line(370, 475, 370, 580);

  
  
}