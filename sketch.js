let ball;
let ball2;

function setup() {
  createCanvas(600, 500); 
  ball = new Walker();
  ball2 = int(10);
}

function draw() {
  background(100, 100);
  ball.update();
  ball.display();
}

class Walker {
  
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(-10,10);
  	this.w = 60;
    this.a = 0.7;
  }
  
  update() {
 
    if (ball2 > 0) {
      this.acc = createVector(random(-this.a, this.a), random(-this.a, this.a));
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      
      if (this.pos.x <= 0) {
        this.vel.x = -this.vel.x;
        this.acc.x = -this.acc.x;
        ball2;
      }
      if (this.pos.x >= width) {
        this.vel.x = -this.vel.x;
        this.acc.x = -this.acc.x;
        ball2;
      }
      if (this.pos.y <= 0) {
        this.vel.y = -this.vel.y;
        this.acc.y = -this.acc.y;
         ball2;
      }
      if (this.pos.y >= height) {
        this.vel.y = -this.vel.y;
        this.acc.y = -this.acc.y;
         ball2;
      }
      
    } else {
      if (this.pos.x < width) {
        this.pos.x += 2;
      }
      if (this.pos.x > width) {
        this.pos.x -= 2;
      }
      if (this.pos.y < height) {
        this.pos.y += 2;
      }
      if (this.pos.y > height) {
        this.pos.y -= 2;
      }
    }
      

  }
  
  display() {
    //display walker
  
	ellipse(this.pos.x, this.pos.y, this.w);
  }
}

