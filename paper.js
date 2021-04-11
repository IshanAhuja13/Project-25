class paper{
    constructor(x, y, width, height){
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

    this.body = Bodies.circle(x, y, 15, [options]);   // radius = 15
    this.image = loadImage("paper1.png");
    World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}