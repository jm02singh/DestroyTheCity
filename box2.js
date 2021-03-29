class Box2 { 
    
    constructor(x,y,width,height){
        this.image = loadImage("building2.png");
    var options = {
        
    'restitution': 0.8, 
    'friction':1.0, 
    'density':0.1 
} 
this.body = Bodies.rectangle(x,y,width,height,options) 
this.width = width 
this.height = height
 World.add(myWorld,this.body)
 
} 

display() { 
    var pos = this.body.position; 
    var angle = this.body.angle; 
    push(); 
    translate(pos.x,pos.y); 
    rotate(angle) 
    rectMode(CENTER) 
    fill (255) 
    stroke("black")
    strokeWeight(4)
    image(this.image, 0, 0,this.width,this.height)
     pop ();

}
};


