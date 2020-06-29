//mama_bee variables
mama_beeposX = 140;
mama_beeposY = 200;
mama_Beesize = 5;

//mama_cloud variables
mama_cloudX = 400;
mama_cloudY = 100;

let x = 0;
let x1 = 30;
let y = 20;
let a
let b

let shaan_cloudx = 300
let shaan_cloudy = 100



//mama_flower variables
mama_flowerX = 100;
mama_flowerY = 100;

//mama_grass variables
mama_grassX = 400;
mama_grassY = 400;

//mama_bird variable
mama_birdX = 300;
mama_birdY = 300;

let shayaancloudy = 100
let shayaancloudd = 50
let shayaancloudx = 100;

let shayaantreex = 590
let shayaantreey = 212.5
let shayaantreed = 45

let shayaanflowerx = 400
let shayaanflowery = 335
let shayaanflowerd = 25



function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0, 128, 255);
  noFill();
  stroke("black");
  arc(mama_birdX, mama_birdY, 5, 5, -2.5, 0);
  arc(mama_birdX + 5, mama_birdY, 5, 10, 3, -1.5);



  //cloud
  fill("white")
  noStroke();
  fill(224, 224, 224)
  ellipse(mama_cloudX, mama_cloudY, 20, 10)
  fill("white")
  ellipse(mama_cloudX + 5, mama_cloudY + 5, 20, 10)
  fill("white")
  ellipse(mama_cloudX + 20, mama_cloudY + 10, 20, 10)
  fill(224, 224, 224)
  ellipse(mama_cloudX + 20, mama_cloudY + 5, 20, 10)
  fill("white")
  ellipse(mama_cloudX + 20, mama_cloudY, 20, 10)
  ellipse(mama_cloudX + 10, mama_cloudY - 5, 20, 10)
  ellipse(mama_cloudX + 25, mama_cloudY, 20, 10)


  //bee
  stroke(0);
  line(mama_beeposX, mama_beeposY, mama_beeposX - 5, mama_beeposY - 5);
  line(mama_beeposX, mama_beeposY, mama_beeposX - 5, mama_beeposY + 5);
  fill("yellow")
  noStroke();
  ellipse(mama_beeposX, mama_beeposY, mama_Beesize, mama_Beesize + 1.5)
  fill("black")
  noStroke();
  ellipse(mama_beeposX + 3, mama_beeposY, mama_Beesize, mama_Beesize + 1.5)

  //flower dimensions

  fill("green")
  rect(mama_flowerX, mama_flowerY, 2, 30)
  fill("pink")
  circle(mama_flowerX + 1, mama_flowerY + 3, 10)
  fill("red")
  circle(mama_flowerX + 1, mama_flowerY - 3, 10)
  fill("yellow")
  circle(mama_flowerX + 1, mama_flowerY, 8)
  fill("black")
  circle(mama_flowerX + 2, mama_flowerY, 1)
  circle(mama_flowerX, mama_flowerY, 1)
  circle(mama_flowerX, mama_flowerY + 2, 1)
  circle(mama_flowerX + 2, mama_flowerY + 2, 1)

  //grass
  noFill();
  stroke("green");
  arc(mama_grassX, mama_grassY, 30, 30, -1.5, 0);
  arc(mama_grassX + 30, mama_grassY, 30, 30, 3, -1.5);
  line(mama_grassX + 15, mama_grassY, mama_grassX + 15, mama_grassY - 20)

  noStroke()

  fill(76, 103, 0);
  rect(0, 350, 800, 50);

  fill(255, 255, 255)
  rect(shayaancloudx + 3, shayaancloudy - 10, 147, 35) //cloud
  circle(shayaancloudx, shayaancloudy, shayaancloudd)
  circle(shayaancloudx + 25, shayaancloudy - 10, shayaancloudd)
  circle(shayaancloudx + 60, shayaancloudy, shayaancloudd)
  circle(shayaancloudx + 60, shayaancloudy - 16, shayaancloudd)
  circle(shayaancloudx + 105, shayaancloudy - 10, shayaancloudd)
  circle(shayaancloudx + 145, shayaancloudy, shayaancloudd) //cloud end 


  fill(51, 25, 0)
  rect(shayaantreex, shayaantreey, 20, 180) //tree
  fill(0, 102, 0)
  circle(shayaantreex + 10, shayaantreey + 100, shayaantreed)
  circle(shayaantreex + 10, shayaantreey + 75, shayaantreed + 5)
  circle(shayaantreex + 10, shayaantreey + 50, shayaantreed + 10)
  circle(shayaantreex + 10, shayaantreey + 25, shayaantreed + 5)
  circle(shayaantreex + 10, shayaantreey + 0, shayaantreed)
  fill('red')
  circle(shayaantreex + 13, shayaantreey + 70, shayaantreed - 30)
  circle(shayaantreex + 9, shayaantreey + 15, shayaantreed - 30) //tree end

  fill(0, 255, 0) //flower
  rect(shayaanflowerx, shayaanflowery, 15, 40)
  fill(204, 0, 204)
  circle(shayaanflowerx + 15, shayaanflowery, shayaanflowerd)
  circle(shayaanflowerx, shayaanflowery - 15, shayaanflowerd)
  circle(shayaanflowerx + 15, shayaanflowery - 15, shayaanflowerd)
  circle(shayaanflowerx, shayaanflowery, shayaanflowerd)
  fill(255, 255, 0)
  circle(shayaanflowerx + 8, shayaanflowery - 5, shayaanflowerd - 5)

  a = random(-1, 20)
  b = random(-1, 20)
  fill("green")
  circle(10 + 20, 250+10, 10 + 6)
  circle(10 - 8,250+10, 15 + 6)
  circle(10 + 10, 250+10, 20 + 6)
  circle(15, 250, 10 + 6)
  circle(15, 250 + 3, 10 + 6)
  circle(15, 250 + 6, 10 + 6)
  circle(15, 250+9, 12 + 6)
  fill(51, 25, 0)
  rect(15, 250 + 17, 10, 100)


  stroke(255)
  fill("white")
  circle(shaan_cloudx, 100, 10 + 6)
  circle(shaan_cloudx + 10, 100, 15 + 6)
  circle(shaan_cloudx + 30, 100, 20 + 6)
  circle(shaan_cloudx + 15, 90, 10 + 6)
  circle(shaan_cloudx + 15, 90 + 3, 10 + 6)
  circle(shaan_cloudx + 15, 90 + 6, 10 + 6)
  circle(shaan_cloudx + 15, 99, 12 + 6)
  
  shaan_cloudx = shaan_cloudx += 2;
  
  if(shaan_cloudx > width){
   shaan_cloudx = 0; 
    
  }

  //bird();


}
