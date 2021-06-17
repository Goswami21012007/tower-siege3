class Polygon {
    constructor(x,y,width,height) {
      var options = {
          friction:1.0,
          density:0.04,
          restitution:0.8,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("bird1.jpg")
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

    }
  };
  
  