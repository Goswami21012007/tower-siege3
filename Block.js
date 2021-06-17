class Block {
    constructor(x,y,width,height) {
      
    
  
      var options = {
        friction:1.0,
        density:0.04,
        restitution:0.8,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
  
  
      World.add(world, this.body);
    }
    display(){
      




      push()
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  };
