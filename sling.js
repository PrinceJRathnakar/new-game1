class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:5
        }
        this.sling=Constraint.create(options)
        this.sling1=loadImage("sling1.png")
        this.sling2=loadImage("sling2.png")
        this.sling3=loadImage("sling3.png")

        World.add(world,this.sling)
    }
    attach(body)
        {
            this.sling.bodyA=body
        }
    
    fly(){
        this.sling.bodyA = null;
    }
    display()
    
    {
        image(this.sling1,50,300)
        image(this.sling2,80,300)
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.pointB;
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
      
    }
}