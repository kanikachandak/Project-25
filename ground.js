class Ground
{
    constructor()
    {
        this.body=Bodies.rectangle(500,480,1000,20, {isStatic:true});
        this.width=1000;
        this.height=20;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("pink");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}