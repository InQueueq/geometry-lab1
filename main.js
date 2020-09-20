const circles = [];
function setup() {
  createCanvas(500,500);
  background(50);
  setTimeout(createCircle, 3000);
}


class Circle{
  constructor(x, y, dm, cl){
    this.x = x;
    this.y = y;
    this.diameter = dm;
    this.colour = cl;
   }
   show(){
     ellipse(this.x, this.y, this.diameter, this.diameter);
     fill(this.colour);
      strokeWeight(0);
   }
   grow(){
     this.show();
     if(this.diameter < 250){
       this.diameter += 0.3;
     }
     
   }
   changeColour(){
     this.show();
     if(this.colour > 50){
       this.colour -= 0.3;
     }
     this.show();
   }
}

function createCircle(){
  circle = new Circle(250,250, 30, 255);
  circles.push(circle);
  setTimeout(createCircle, 3000);
}

function draw() {
  for(let i = 0; i < circles.length;i++){
    circles[i].grow();
    circles[i].changeColour();
  }
}
