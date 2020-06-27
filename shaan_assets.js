 let x = 0;
 let x1 = 30;
 let y = 20;
 let a
 let b

 let shaan_cloudx = 100
 let shaan_cloudy = 100



 function setup() {
   createCanvas(800, 400);


 }

 function draw() {
   background(220);

   a = random(-1, 20)
   b = random(-1, 20)
   fill("green")
   circle(10+20, 100, 10 + 6)
   circle(10-8, 100, 15 + 6)
   circle(10 + 10, 100, 20 + 6)
   circle(15, 90, 10 + 6)
   circle(15, 90 + 3, 10 + 6)
   circle(15, 90 + 6, 10 + 6)
   circle(15, 99, 12 + 6)
   fill("brown")
   rect(15, 90 + 17, 10, 100)


   stroke(255)
   fill("white")
   circle(shaan_cloudx, 100, 10 + 6)
   circle(shaan_cloudx+10, 100, 15 + 6)
   circle(shaan_cloudx + 30, 100, 20 + 6)
   circle(shaan_cloudx+15, 90, 10 + 6)
   circle(shaan_cloudx+15, 90 + 3, 10 + 6)
   circle(shaan_cloudx+15, 90 + 6, 10 + 6)
   circle(shaan_cloudx+15, 99, 12 + 6)

   //bird();


   line(x1, y, a, b);
   line(x, y, a, b);

   fill("yellow")
   rect(a, b, 10, 10)
   fill("black")
   rect(a + 3, b + 3, 6, 6)

 }
