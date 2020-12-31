class SLINGSHOT{

constructor(bodyA,pointB){

var opt={
stiffness:0.005,
length:8,
bodyA:bodyA,
pointB:pointB
}

this.sling=Constraint.create(opt);
this.pointB=pointB;
World.add(world,this.sling);

}

fly(){

    this.sling.bodyA=null;

}

attach(body){
this.sling.bodyA=body;


}

display(){


if(this.sling.bodyA){

    var A=this.sling.bodyA.position;
    var B=this.pointB;
    strokeWeight(4);
    line(A.x,A.y,B.x,B.y);

}
}






}


















