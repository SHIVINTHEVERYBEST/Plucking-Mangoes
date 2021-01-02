class Stone{
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.image = loadImage("Images/stone.png");

        this.body = Bodies.circle(x, y, r);
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