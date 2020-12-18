class Paper
{
    constructor()
    {
        var options = { 'restitution':0.3,
                        'friction':0.5,
                        'density':1.2,
        };
        this.body=Bodies.circle(100,430,20,options);
        this.radius=20;
        this.img=loadImage("sprites/paper.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0, 60,60);
        pop();
    }
}