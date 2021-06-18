class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:50,
        }
        this.pointB=pointB;
        this.SlingShot=Constraint.create(options)
        World.add(world,this.SlingShot)
    
    }
    display(){
        if(this.SlingShot.bodyA){
            var pointA=this.SlingShot.bodyA.position
            var pointB=this.pointB
            push()
            stroke(48,22,8)
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop()
        }
    }
    fly(){
        this.SlingShot.bodyA=null
    }
    attach(bodyA){
    this.SlingShot.bodyA=bodyA
    }
    }