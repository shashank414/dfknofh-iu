class Gangster {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.color=rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      push();
     fill(this.color)
      ellipse(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };