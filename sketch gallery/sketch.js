let x;
let y;
function setup() {
  let canvas = createCanvas(500, 400);
  x=0;
  y=0;
  canvas.parent("canvasContainer");
  // background(220);
}

function draw() {
  background(20,20,100);
  
  for(let a=0;a<width; a+=50){
  
    for(let b=0; b<height; b+=50){
      let d=dist(mouseX,mouseY,a,b);
      let f=map(d,0,sqrt(width**2+height**2),0.1,3); 
      fill(a,20,20) ;
  
    push();
    rectMode(CENTER);
    translate(a,b);
    rotate(x);
    
    rect(0,0,60*f,6*f,20);
    pop();
  
      }
  
    x+=PI/1400;
}
}
