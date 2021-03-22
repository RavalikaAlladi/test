class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'restitution' : 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        Matter.Body.scale(this.body, 10,10);
        this.image = loadImage("paper.png");        
        World.add(world,this.body);
        
}

    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill(255,0,255); 
        imageMode(CENTER);            
        image(this.image,56,46,this.radius);
        pop();     
    }
}