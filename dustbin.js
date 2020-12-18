class Dustbin
{
    constructor()
    {
        var options= {isStatic:true};
        this.dust1=Bodies.rectangle(715,420,20,140,options);
        this.width=20;
        this.height=100;
        World.add(world,this.dust1);
        this.dust2=Bodies.rectangle(760,460,100,20,options);
        this.width2=100;
        this.height2=20;
        this.img=loadImage("sprites/dustbin.png");
        World.add(world,this.dust2);
        this.dust3=Bodies.rectangle(805,420,20,140,options);
        this.width3=20;
        this.height3=100;
        World.add(world,this.dust3);
    }
    display()
    {
        rectMode(CENTER);
        fill("yellow");
        rect(this.dust1.position.x,this.dust1.position.y,this.width,this.height);
        rect(this.dust3.position.x,this.dust3.position.y,this.width3,this.height3);
        imageMode(CENTER);
        image(this.img,760,400,140,140);
    }
}