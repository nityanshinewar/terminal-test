class Chain{
constructor(bodyA,pointB){
 var options={
     bodyA:bodyA,
     pointB:pointB,
     stiffness:0.02,
     length:10
}
this.image1=loadImage("sprites/slingshot.jpeg");
this.image2=loadImage("sprites/slingshot2.jpeg");
this.image3=loadImage("sprites/sling3.png");
this.chain=Constraint.create(options)
this.pointB=pointB;
World.add(world,this.chain);
}
display(){
    image (this.image1,200,30,40,180);
    image(this.image2,175,30,40,100);
    if (this.chain.bodyA){
    push()
    var pa=this.chain.bodyA.position;
    var pb=this.pointB;
    if (pa.x<220){
        stroke(48,22,8);
        strokeWeight(7);
        line(pa.x-15,pa.y,pb.x-15,pb.y+10);
        line(pa.x-15,pa.y,pb.x+20,pb.y+10);
        image(this.image3,pa.x-30,pa.y-10,15,30);
    }
    else{
        stroke(48,22,8);
        strokeWeight(3);
        line(pa.x+20,pa.y,pb.x-15,pb.y+10);
        line(pa.x+20,pa.y,pb.x+20,pb.y+10);
        image(this.image3,pa.x+20,pa.y-10,15,30);
    }
    pop();
}
}

fly(){
    this.chain.bodyA=null;

}
}

