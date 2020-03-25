let canvas;
let hives = [];
let hive1;
let hive2;
//let randomY = 800*Math.random();
let randomHive;  

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


function setup(){
  canvas = createCanvas(windowWidth+3000,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  randomHive = floor(random(hives.length));

  for (let i = 0; i < 30;i++){
    let x = 200 + 180 * i;
    let y = random(100,800)
    let rotatePos = 0;
    
    
    hives[i] = new Hive(x,y,80,6,rotatePos)
  }
 
  hive1 = new Hive(400,400,100,6,0)
    
    hive2 = {
      
      x: 200,
      y: random(100,800),
      radius: 80,
      npoints: 6,
      rotationAngle:0,
      
    }
    let yposarr = [];
  yposarr.length = 8;
  
}

function draw(){
  background(0);
  

  // translate(200,200)
  //hive1.show();
  
  //// vvv goes in for loop for hive.show
     
 
  for(let i = 0; i < hives.length; i ++){
    // let x = 200 + 180 * i;
    // let y = random(100,800);
   // translate(x,200);
   
   
   
    hives[i].show();
    let element = hives[i];
   // TweenLite.to(element,1,{delay:1,rotatePos: PI/6});
    
  }


  // for(let j = 0; j < 30; j++){
  //   for(let k = 0; k < 8; k++){
  //   let x = 200 + 180 * j;
  //  // let y = 200+ 180*k;
  //  // let y = 100*floor(random(1,8));
  //   //let y = randomY;
  //   let rotAng = 0;
  //   stroke(255);
  //   noFill();
  //   push()
  //   translate(x,randomY)
  //  // rotate(radians(frameCount/2));
  //    polygon(0,0,80,6,rotAng);
  //    pop()
  
  //   }
  
    
  // }

  //generate();
  //getRandomY();
  

  //polygon(hive2.x,hive2.y,hive2.radius,hive2.npoints,hive2.rotationAnlge);

 //noLoop();

 drawText();
}

function drawText(){
  fill(255)
  textSize(25);
  textFont('Georgia')
  text('scroll ->',windowWidth/2,windowHeight-50,100,100);
  
}
function getRandomY(){
//  let randomY = 800*Math.random();
  console.log(randomY)
}


class Hive{
  constructor(x,y,radius,npoints,rotationAngle){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.npoints = npoints;
    this.brightness = 0;
    this.rotationAngle = rotationAngle;

  } 

  clicked(px, py){
    let d = dist(px,py,this.x,this.y)
    if(d < this.radius && this.brightness === 0){
      this.brightness = 255;
    console.log("clicked!");
    }else if(d < this.radius && this.brightness === 255) {
      this.brightness = 0;
    }

  }

  show(){
    stroke(255);
    
    push();
    
    fill(this.brightness);
    
      polygon(this.x,this.y,this.radius,this.npoints,this.rotationAngle);
      pop();
  }
    

  
}
  


function mousePressed(){
  hive1.clicked(mouseX,mouseY);
  for(let i = 0; i < hives.length; i ++){
    hives[i].clicked(mouseX,mouseY);
  }

}




//taken from p5 polygon example
function polygon(x, y, radius, npoints,rotationAngle) {
  let angle = TWO_PI / npoints;
  beginShape();
  rotate(rotationAngle);
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a+PI/6) * radius;
    let sy = y + sin(a+PI/6) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}




/////////////////////////////

const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    {x:100, y: -20},
    {x:300,y:10},
    {x:500,y:100},
    {x:750, y:-100},
    {x: 550, y: -50},
    {x:700, y: 0},
    {x:window.innerWidth, y:-250},
  ]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".bee",1,{
    bezier: flightPath,
    ease: Power1.easeInOut,

  })
);

const controller = new ScrollMagic.Controller({vertical: false}); // add {vertical: false} for horizontal scroll

const scene = new ScrollMagic.Scene({
  triggerElement:'.animation',
  duration: 4000,
  triggerHook: 0,
}) //takes perameter of object
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);
