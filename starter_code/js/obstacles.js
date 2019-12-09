class Obstacles {
    constructor(ctx, displacement, gap, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.canvasHeight = canvasHeight;
        this.displacement = displacement
        this.x = canvasWidth;
        this.gap = gap;

        this.width = 138;
        this.height = 793;
        this.vx = 4;

        this.image = new Image();
        this.image.src = "images/obstacle_top.png";

        this.y = ((this.canvasHeight / 2) - this.displacement) - (this.height + this.gap);

        this.image2 = new Image();
        this.image2.src = "images/obstacle_bottom.png";

        this.y2 = ((this.canvasHeight / 2) - this.displacement) + this.gap

    }
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image2, this.x, this.y2, this.width, this.height)

    }
    move() {
        this.x -= this.vx;
    }
}
