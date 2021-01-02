class Mango{
    constructor(x, y, r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.image = loadImage("Images/mango.png");

        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER)
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}