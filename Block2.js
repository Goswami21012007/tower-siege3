class Block2{
    constructor(x,y,width,height) {
      var options = {
        friction:1.0,
        density:0.04,
        restitution:0.8,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(107,17,76);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

