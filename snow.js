class Snow {
    constructor(x, y, w, h) {
      var snow_features = {
        isStatic: false,
      };
  
      this.snow= Bodies.rectangle(x, y, w, h, snow_features);
      World.add(myWorld, this.snow);
      this.w = w;
      this.h = h;
      this.snowimg = loadImage("snow1.jpg");
    }
    displayBody() {
      push();
      translate(this.snow.position.x, this.snow.position.y);
      rotate(this.snow.angle);
      imageMode(CENTER);
      image(this.snowimg, 0, 0, this.w, this.h);
      pop();
    }
  }
  