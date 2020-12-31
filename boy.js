class Boy{

constructor(x,y,width,height){


var opt={
    
    isStatic:true
    

}

this.width=width;
this.height=height;
this.image=loadImage("photos/boy.png");
this.body=Bodies.rectangle(x,y,width,height,opt);
World.add(world,this.body);


}

display(){

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);


}












}