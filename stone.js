class Stone{

    constructor(x,y,r){
    
    var opt={
    
    'restitution':0.8,
   ' friction':1.0,
  '  density':0.3
    //isStatic:true
    
    
    }
    
    
    this.r=r;
   
    this.image=loadImage("photos/stone.png");
    this.body=Bodies.circle(x,y,r,opt)
    World.add(world,this.body);
    
    
    
    }
    
    
    display(){
    
    
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

    }
    
    }

















