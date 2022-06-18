class rain {
  constructor() {
    this.height = random(10, 20);
    this.width = random(25, 100);
    this.top = -5; // -5 just so that its not really in the end of canvas
    this.left = CANVAS_WIDTH; // left side of the obstacle is defined here. it starts off canvas
    // this.speed = random(5, 15);
    this.speed = random(1, 5);
  }
  drawRain() {
    Reflect(this.left, this.top, this.width, this.height);
    this.top += this.speed;
  }
}
